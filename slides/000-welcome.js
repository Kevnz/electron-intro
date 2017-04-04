const React = require('react');
const { ContentSlide, Step } = require('react-presents');

module.exports = () => (
  <ContentSlide>
    <h1>AKjs</h1>
    <ul>
      <Step index={1}><li>WIFI: eda</li></Step>
      <Step index={2}><li>password: 3nspiral</li></Step>
    </ul>
  </ContentSlide>
);
