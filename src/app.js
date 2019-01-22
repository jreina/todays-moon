const moon = require('ridiculous-moon-event');
const randYear = () => Math.ceil(Math.random() * 5000);

document.body.innerHTML = `<div class="jumbo" id="render-container">
  Tonight's moon is called a <em>${moon()}</em>, which will not occur for another <em>${randYear()}</em> years!
</div>`;
