const React = require('react');
const { ContentSlide, Step } = require('react-presents');

module.exports = () => (
  <ContentSlide>
    <h1>Resources</h1>
    <ul>
      <Step index={1}><li><a href="https://github.com/sindresorhus/awesome-electron">awesome-electron</a></li></Step>
      <Step index={2}><li><a href="https://electron.atom.io/">electron.io</a></li></Step>
      <Step index={3}><li><a href="https://github.com/maxogden/menubar/">menubar</a></li></Step>
    </ul>
  </ContentSlide>
);
