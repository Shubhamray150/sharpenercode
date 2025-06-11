const l =  document.getElementsByTagName('li');
for(let i = 0;i<l.length;i++){
    if(i==4){
        l[i].style.color = 'blue';
    }
    l[i].style.fontStyle = 'italic';
}