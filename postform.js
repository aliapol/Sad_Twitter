"use strict";
const postForm = {
  // using the function binding to bind the addContact function to into this component
  bindings: {
    onSubmit: "&"
  },
  // the template for this component. big thing to note is line 9, the function addContact takes the argument of an object literal. The property newUser has the value of whatever our ngModel contains
  template: `
  <form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.newPost});">
    <input type="text" placeholder="subject" ng-model="$ctrl.newPost.subject">
    <input type="text" placeholder="body" ng-model="$ctrl.newPost.body"><br>
    <button>Add New Post</button>
  </form>
  `
};

angular
  .module("socialModule")
  .component("postForm", postForm);