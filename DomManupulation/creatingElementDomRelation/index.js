const heading = document.querySelector('#header')
const subHeading = document.createElement('h3')
subHeading.textContent = 'Buy high quality organic fruits online'
subHeading.style.fontStyle = 'italic'

const ul = document.querySelector('.fruits')
const div2 = document.getElementsByTagName('div');
const secDiv= div2[1];
const para = document.createElement('p')
para.textContent = 'Total fruits: 4';
para.id = 'fruits-total';
secDiv.insertBefore(para , ul);


heading.append(subHeading)
console.log(div2);

