var App = App || {}; // namespace

$(function() {
  App.items = new App.Items();

  App.items.add([
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      backlog:      "product-backlog",
      state:        "not-started",
      title:        "Lorem ipsum",
      description:  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]);

  $( "#confirm-clear-btn" ).click( function() {
    App.items.reset();
  });

  // $( "#confirm-add-btn" ).click( function() {
  //   App.items.create({
  //     title: $( "#title" ).val(),
  //     description: $( "#description" ).val()
  //   });
  // });

  App.itemsView = new App.ItemsView({
    collection: App.items,
    el:         $( "#items" )
  }).render();
});
