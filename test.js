document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("unordered-list");

  ul.addEventListener("click", event => {
    console.log("CURRENT TARGET 2", event.currentTarget);
    // debugger;
  });

  let ol = document.getElementById("ordered-list");

  ol.addEventListener("click", event => {
    console.log("CURRENT TARGET 1", event.currentTarget);
    console.log("TARGET", event.target);
    // debugger;
  });

  // let orderedFirst = document.getElementById("ordered-first");
  //
  // orderedFirst.addEventListener("click", event => {
  //   console.log("TARGET", event.target);
  //   // debugger;
  // });
//
  let body = document.querySelector("body");
  body.addEventListener("click", event => {
    console.log("CURRENT TARGET 3", event.currentTarget);
    console.log("TARGET", event.target);
    event.currentTarget.style = "background-color:green";
    event.target.style = "color:red";
    // debugger;
  });
});
//

// #########################################################################################

// document.addEventListener("DOMContentLoaded", () => {
//   let ul = document.getElementById("unordered-list");
//
//   ul.addEventListener("click", event => {
//     console.log("CURRENT TARGET 2", event.currentTarget);
//     // debugger;
//   });
//
//   let ol = document.getElementById("ordered-list");
//
//   ol.addEventListener("click", event => {
//     console.log("CURRENT TARGET 1", event.currentTarget);
//     console.log("TARGET", event.target);
//   });

  //   let body = document.querySelector("body");
  //   body.addEventListener("click", event => {
  //     // console.log("CURRENT TARGET 3", event.currentTarget);
  //     // console.log("TARGET", event.target);
  //     let newNode = document.createElement("h1");
  //     newNode.innerText ="whoa this is so kruuuazzzzyyy!!!"
  //     event.currentTarget.appendChild(newNode)
  //   });
  // });
  //
  // let body = document.querySelector("body");
  // body.addEventListener("click", event => {
  //   let newNode = document.createElement("li");
  //   newNode.innerText ="whoa this is so kruuuazzzzyyy!!!"
  //   event.target.appendChild(newNode)
  // });
  // });

  // let body = document.querySelector("body");
  // body.addEventListener("click", event => {
  //   console.log("CURRENT TARGET", event.currentTarget);
  //      console.log("TARGET", event.target);
  //   let newNode = document.createElement("li");
  //   newNode.innerText ="whoa this is so kruuuazzzzyyy!!!"
  //   // event.currentTarget.insertBefore(newNode,null)
  //   event.target.parentNode.insertBefore(newNode,event.target)
  //   // thing that im clicking on, is the thing above the thing im clicking on, is a method where i call on the parentnode but one of the arguments
  //
  // });
  // });

  // ON THE DIRECT PARENT OF THE CHILD NODE.
  // OL.REMOVECHILD(LI)
  //   let body = document.querySelector("body");
  //   body.addEventListener("click", event => {
  //     console.log("CURRENT TARGET", event.currentTarget);
  //     console.log("TARGET", event.target);
  //     event.target.parentNode.removeChild(event.target)
  //   });
  // });

  //    ########REPLACE CHILD #############
  // let body = document.querySelector("body");
  // body.addEventListener("click", event => {
  //   console.log("CURRENT TARGET", event.currentTarget);
  //      console.log("TARGET", event.target);
  //   let newNode = document.createElement("li");
  //   newNode.innerText ="whoa this is so kruuuazzzzyyy!!!"
  //   event.target.parentNode.replaceChild(newNode,event.target)
  //     });
  //   });

  // ########Clone Node#############

//   let body = document.querySelector("body");
//   body.addEventListener("click", event => {
//     console.log("CURRENT TARGET", event.currentTarget);
//     console.log("TARGET", event.target);
//     let newNode = document.createElement("li");
//     newNode.innerText = "whoa this is so kruuuazzzzyyy!!!";
//     event.target.parentNode.replaceChild(newNode, event.target);
//   });
// });
