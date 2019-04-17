const PubSub = require('../helpers/pub_sub.js');

class ResultView {

  bindEvents() {
    PubSub.subscribe('WordCounter:result-calculated', (event) => {
      const numberOfWords = event.detail;
      this.displayResult(numberOfWords);
    })
  };

  displayResult(result) {
    const resultPara = document.querySelector('#result');
    resultPara.textContent = `You entered ${result} words.`
  };

};

module.exports = ResultView;
