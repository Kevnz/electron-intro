const React = require('react');
const { Code, ContentSlide, Step } = require('react-presents');

const code = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <!-- All of the Node.js APIs are available in this renderer process. -->
    We are using Node.js <script>document.write(process.versions.node)</script>,
    Chromium <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
  <script>
    require('./renderer.js')
  </script>
</html>
`;

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}>
      <Code
        codeMirrorOptions={{
          mode: 'html',
          readOnly: 'nocursor'
        }}
        value={code}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'index.html';

module.exports = slide;
