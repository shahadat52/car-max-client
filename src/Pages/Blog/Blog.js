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

    </div>
  );
};

export default Blog;
