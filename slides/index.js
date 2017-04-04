const requireDirectory = require('require-directory');

const sliders = requireDirectory(module);
const slides = [];

for (let prop in sliders) {
  if (sliders.hasOwnProperty(prop)) {
    slides.push(sliders[prop]);
  } 
}

module.exports = slides;;