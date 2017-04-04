require('babel-register');
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const React = require('react');
const ReactDOM = require('react-dom');
const slides = require('./slides');

const  { DropDownNav, Presentation, PresenterModePlugin, Slide } = require('react-presents');


const options = slides
  .map((slide, index) => ({
    label: slide.title,
    value: index
  }))
  .filter((option) => option.label)


ReactDOM.render(
<Presentation>
    <PresenterModePlugin />

    {slides.map((Component, index) => (
      <Slide
        component={Component}
        key={index}
      />
    ))}

    <DropDownNav
      key='DropDownNav'
      options={options}
    />
  </Presentation>,
  document.getElementById('app')
);

