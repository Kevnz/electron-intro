const React = require('react');
const { Code, ContentSlide, Step } = require('react-presents');

const code = `git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
`;

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <p>Grab the getting started repo:</p>
    <Step index={1}>
      <Code
        codeMirrorOptions={{
          mode: 'shell',
          readOnly: 'nocursor'
        }}
        value={code}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Getting Started';

module.exports = slide;
