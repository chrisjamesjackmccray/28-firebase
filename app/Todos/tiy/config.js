function config($stateProvider) {
  $stateProvider
  .state('homepage', {
   controller: "todosController as todosCtrl",
   url: "/",
   template: require('./view.html')
});
}
