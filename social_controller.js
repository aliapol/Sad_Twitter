"use strict";
//don't include the second parameter in the getter syntax (this is the getter syntax)

//sets social equal to this template
const social = {
    //displays the post form. on submit we execute the function newPost. not sure if this should be here or in the other file
    //displays the list of posts. this works
    template: `
    <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
    <post post-list="$ctrl.postList"></post>
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
                vm.postList.push({
                    postSubject: newPost.subject,
                    postBody: newPost.body
                    
                });
            };
                

       
    }
};


angular
    .module("socialModule")
    //controller/component method takes 2 parameters every time. First is name of controller, Second is reference to a function or object with the same name as the controller (we are about to build this function)
    //that will contain any data or methods our controller will need on start up
    .component("social", social);

