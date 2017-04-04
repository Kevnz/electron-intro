const React = require('react');
const { ContentSlide, Step } = require('react-presents');

module.exports = () => (
  <ContentSlide>
    <h1>Design Considerations</h1>
    <ul>
      <Step index={1}><li>It's like a web app, but no guarantee it is online</li></Step>
      <Step index={2}><li>Filesystems are different between Operating Systems</li></Step>
      <Step index={3}><li>Apps look different on different Operating Systems </li></Step>
    </ul>
  </ContentSlide>
);
