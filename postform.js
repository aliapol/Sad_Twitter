"use strict";
const postForm = {
  // using the function binding to bind the addContact function to into this component
  bindings: {
    onSubmit: "&"
  },
  // the template for this component. big thing to note is line 9, the function addContact takes the argument of an object literal. The property newUser has the value of whatever our ngModel contains
  template: `
  <button ng-click="$ctrl.showForm();">New Thought</button>
  <form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.newPost}); $ctrl.closeForm();" ng-show="$ctrl.show" >
  <p ng-click="$ctrl.closeForm();">X</p>
    <h4>new post</h4>
    <input expand type="text" placeholder="subject" ng-model="$ctrl.newPost.subject">
    <input expand type="text" placeholder="body" ng-model="$ctrl.newPost.body"><br>
    <button>Add New Post</button>
  </form>
  `,

  controller: function() {
    //when this function gets passed into our class constructor its going to build us an object. vm is a shortcut/reference to "this"
        const vm = this;
        vm.showForm = () => {
            vm.show = true;
            console.log("button clicked");
        };
        vm.closeForm = () => {
            vm.show = false;
            vm.newPost = {};
        };


        
        
    }
    
    

}


angular
  .module("socialModule")
  .component("postForm", postForm);