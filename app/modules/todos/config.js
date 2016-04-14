function config($stateProvider) {
  $stateProvider
    .state('todolist', {
      controller: "todosController as todosCtrl",
      url: "/",
      template: require('./view.html')
    });
}

export default config;
