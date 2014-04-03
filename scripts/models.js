var App = App || {}; // namespace

App.Item = Backbone.Model.extend({
  defaults: {
    backlog:    "product-backlog",
    state:      "not-started",
    title:      "",
    desription: ""
  },

  moveTo: function( newBacklog ) {
    this.set({ backlog: newBacklog });
  },

  markAs: function( newState ) {
    this.set({ state: newState });
  }
});
