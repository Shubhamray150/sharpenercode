const mainHeading = document.getElementById("main-heading")
mainHeading.textContent = "Fruit World";
mainHeading.style.color = 'orange';

const backgound = document.getElementById("header"); 
backgound.style.backgroundColor = "green";
backgound.style.borderBottom  = " solid orange"

const basket = document.getElementById('basket-heading')
basket.style.color = 'green';

const thanksDiv = document.getElementById('thanks')
const para = document.createElement('p');
para.textContent = "Please visit us again"
thanksDiv.appendChild(para);
console.log(thanksDiv)