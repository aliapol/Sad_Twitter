"use strict";
// binding the contactList array into this component
const post = {
  bindings: {
    postList: "<"
  },
  // our template for the component. We are ngRepeating the div on line 11 for each element in the contactList array
  // the paragraph on line 12 will be hidden until the contactList has 1 element(or more)
  template: `
  <section>
    <div expand ng-repeat="entry in $ctrl.postList"> {{ entry.postSubject }} {{ entry.postBody }}</div>
   
  </section>
  `,
  
};

angular
  .module("socialModule")
  .component("post", post);