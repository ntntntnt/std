var App = App || {}; // namespace

App.Items = Backbone.Collection.extend({
  model:        App.Item,
  localStorage: new Backbone.LocalStorage( "scrum-to-do" )
});
