function changetext(){
    var x=document.getElementById('container');
    if(x.innerHTML==="HTML"){
        x.innerHTML="Hyper Text Markup Language";
        x.style.color='red';
    }else{
        x.innerHTML="HTML";
        x.style.color='purple'
    }
}