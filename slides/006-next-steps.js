const React = require('react');
const { ContentSlide, Step } = require('react-presents');

module.exports = () => (
  <ContentSlide>
    <h1>Next Steps</h1>
    <ul>
      <Step index={1}><li>git clone https://github.com/electron/electron-quick-start</li></Step>
      <Step index={2}><li>Build</li></Step>
      <Step index={3}><li>Ask Questions</li></Step>
    </ul>
  </ContentSlide>
);
