const progressBarElem = document.querySelector(".progress-bar");
const fillPercent = 20;

console.log(progressBarElem);

progressBarElem.style.setProperty('--fill-percent', `${fillPercent}%`);

console.log(document.querySelector("body").style.height);

