// import tehalka from './app.js';
// import {task} from './test.js'
// console.log(tehalka);
// console.log(task);

//  import app from './app.js'
//  console.log(app());
//  ;

// import testFnc from './test.js'
// console.log(testFnc());


// console.log(React);

// let h1 = document.createElement('h1')
// h1.innerHTML = 'Hello from JS'
// document.body.appendChild(h1);

// let h1 = React.createElement('h1', null, 'Hello from React');
// let h2 = React.createElement('h1', {class:'h2'} , 'Hello Form REact with h2');
// // let div= React.createElement('div',null,h1,h2);
// let div= React.createElement('div',{id:'parent'},[h1,h2]);
// let root = document.querySelector('#root');
// let home = ReactDOM.createRoot(root)

// // home.render(h1); for single rendering on index.html
// home.render(div);


import h1 from './test.js'
import h2 from './app.js'
import React from 'react'

// function h1(){
//     return React.createElement('h1',null,"Hello from the function H1");
// }
 let root = ReactDOM.createRoot(document.querySelector('#root'))

 root.render(
    React.createElement(React.Fragment,null,[h1(),h2()])
 )