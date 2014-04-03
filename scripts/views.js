var App = App || {}; // namespace

var Marionette = Marionette || Backbone.Marionette; // cleaner reference

App.ItemView = Marionette.ItemView.extend({
  className: function() {
    var base = "col-md-4 item";
    var newClassName = base.concat( " ", this.model.get( "backlog" ), " ", this.model.get( "state" ) );
    console.log( newClassName );
    return newClassName;
  },

  initialize: function() {
    this.listenTo( this.model, "change", function() {
      var base = "col-md-4 item";
      var newClassName = base.concat( " ", this.model.get( "backlog" ), " ", this.model.get( "state" ) );
      this.className = newClassName;
      this.$el.attr( "class", newClassName );
      console.log( newClassName );
      this.render();
    });
  },

  ui: {
    remove:         ".remove-btn",
    productBacklog: ".product-backlog-btn",
    sprintBacklog:  ".sprint-backlog-btn",
    notStarted:     ".not-started-btn",
    started:        ".started-btn",
    done:           ".done-btn"
  },

  events: {
    "click @ui.remove": function() {
      App.items.remove( this.model );
      App.itemsView.render();
    },

    "click @ui.productBacklog": function() {
      this.model.moveTo( "product-backlog" );
    },

    "click @ui.sprintBacklog": function() {
      this.model.moveTo( "sprint-backlog" );
    },

    "click @ui.notStarted": function() {
      this.model.markAs( "not-started" );
    },

    "click @ui.started": function() {
      this.model.markAs( "started" );
    },

    "click @ui.done": function() {
      this.model.markAs( "done" );
    }
  },

  template: Marionette.TemplateCache.get( "#item-template" )
});

App.ItemsView = Marionette.CollectionView.extend({
  itemView: App.ItemView,

  initialize: function() {
    this.listenTo( this.collection, "change", function() {
      console.log( "changed" );
      this.$el.isotope({
        itemSelector: ".item",
        layoutMode:   "masonry"
      });
    });
  },

  onRender: function() {
    console.log( "rendered" );

    // $( "button" )
    // .tooltip({
    //   delay:      400,
    //   container:  "body"
    // });

    this.$el.isotope({
      itemSelector: ".item",
      layoutMode:   "masonry"
    });

    var that = this;

    var filters = {};

    $( "#filters" ).on( "click", ".filter", function() {
      var $this = $( this );

      var $btnGroup = $this.parents( ".btn-group" );
      var filterGroup = $btnGroup.attr( "data-filter-group" );

      console.log(filterGroup);

      filters[ filterGroup ] = $this.attr( "data-filter" );

      var combinedFilter = "";
      _.each( filters, function( filter ) {
        combinedFilter += filter;
      });

      console.log(combinedFilter);

      App.itemsView.$el.isotope({ filter: combinedFilter });
    });
  }
});
