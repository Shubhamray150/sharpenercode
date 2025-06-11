const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
mainHeading.style.marginRight = '30px';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruitsItem = document.querySelectorAll('.fruit');
for(let i = 0;i<fruitsItem.length;i++){
    fruitsItem[i].style.backgroundColor = 'lightgrey';
    fruitsItem[i].style.color = 'darkbrown';
    fruitsItem[i].style.padding = '30px';
    fruitsItem[i].style.margin = '30px';
    fruitsItem[i].style.width = '50%';
    fruitsItem[i].style.borderRadius = '5px';
}

for(let i = 0;i<fruitsItem.length;i++){
    if(i%2!=0){
        fruitsItem[i].style.backgroundColor = 'brown';
        fruitsItem[i].style.color = 'white';
    }
}