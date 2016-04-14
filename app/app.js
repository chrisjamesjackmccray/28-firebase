import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import todos from './Todos/tiy';

let App = angular.module('todos', [
  'ui.router',
  'firebase',
  'tiy.todos'
]);
