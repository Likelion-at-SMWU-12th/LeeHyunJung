if (confirm("Click the heart button!! ❤️")){
    alert("Thanks 😸")
}
else{
    alert("So sad 😿")
}
const mainbox = document.getElementById("mainbox");
function darkmode(){
    mainbox.style.backgroundColor = '#262626';
    mainbox.style.color='white';
}
function lightmode(){
    mainbox.style.backgroundColor='white';
    mainbox.style.color='black';
    h2.style.backgroundColor = 'cornsilk';
}
var btn = document.getElementById("like")
btn.addEventListener('click', function(){
    btn.classList.toggle('active')
})