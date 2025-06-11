const fruits = document.getElementsByClassName('fruit');
for(let i = 0;i<fruits.length;i++){
   if(i==2){
    fruits[i].style.backgroundColor = 'yellow';
   }
   fruits[i].style.fontWeight  = 'bold';
}
console.log(fruits);
