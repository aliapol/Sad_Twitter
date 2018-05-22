"use strict";
//don't include the second parameter in the getter syntax (this is the getter syntax)

const social = {
    template: `
    <section>
    <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
    <post post-list="$ctrl.postList"></post>
  </section>
      </section>
    
    `,
    controller: function($element) {
    //when this function gets passed into our class constructor its going to build us an object. vm is a shortcut/reference to "this"
        const vm = this;
    // my array of tweets
        vm.postList = [
            {
                postSubject: "This is a Post Subject0",
                postBody: "Here's the body of my post0"
            },
            {
                postSubject: "This is a Post Subject1",
                postBody: "Here's the body of my post1"
            },
            {
                postSubject: "This is a Post Subject2",
                postBody: "Here's the body of my post2"
            },
            {
                postSubject: "This is a Post Subject3",
                postBody: "Here's the body of my post3" 
            }];
            console.log(vm.postList);

        vm.onSubmit = (newPost) => {
            vm.newPost = {
                postSubject: newPost.subject,
                postBody: newPost.body
            }
            console.log(vm.newPost);
            vm.postList.push(vm.newPost); 
            vm.entry = {};
         };
        vm.clearForm = () => {
            vm.entry = {};
        }
    }
};



angular
    .module("socialModule")
    //controller method takes 2 parameters every time. First is name of controller, Second is reference to a function or object with the same name as the controller (we are about to build this function)
    .component("social", social);

