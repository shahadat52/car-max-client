import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="text-center text-gray-800">
        <h1 className="text-5xl font-bold mb-10 pb-10 border-black border-b-2">
          Common Interview Questions
        </h1>
        <div className="q-container text-justify">
          <div className="Q1-container">
            <li className="text-2xl font-bold mb-5">
              What are the different ways to manage a state in a React application?
            </li>
            <p>
              Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.svg viewer
              The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
              <br />  Hooks
              <br />
              React Context API  <br />
              Apollo Link State
            </p>
          </div>
          <div className="Q2-container">
            <li className="text-2xl font-bold mb-5">
              How does prototypical inheritance work
            </li>
            <hr />
            <p>
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </p>
          </div>
          <div className="Q3-container">
            <li className="text-2xl font-bold mb-5">What is a unit test? Why should we write unit tests?</li>
            <p>
              <span className="font-bold text-xl">What is a unit test</span> Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
              It simplifies the debugging process.
              Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. <br />
              <span className="font-bold">
                Why should we write unit tests
              </span>
              <br /> Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            </p>
          </div>
        </div>
      </div>





      <div className="text-center text-gray-800">
        <h1 className="text-3xl font-bold mb-10 pb-10">
          Difference between React and Angular Vue
        </h1>
        <div className="q-container text-justify">
          <div className="Q1-container">
            <li className="text-2xl font-bold mb-5">
              React
            </li>
            <p>
              React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality
              Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp).
            </p>
          </div>
          <div className="Q2-container">
            <li className="text-2xl font-bold mb-5">
              Angular
            </li>
            <hr />
            <p>
              Angular developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
          </div>
          <div className="Q3-container">
            <li className="text-2xl font-bold mb-5">Vue</li>
            <p>
              Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. Vue; pronounced "view" is an open-source front end JavaScript framework for building user interfaces and single-page applications.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blog;
