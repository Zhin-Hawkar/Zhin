
function closeNav() {
    document.getElementById("myNav").style.width = "0px";
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

let Scroll_Toggle=document.getElementById("scroll-top");

function ToggleScroll(){
let Screen=window.scrollY;
if(Screen>=500){
    Scroll_Toggle.className="arrow-up show";
}else{
    Scroll_Toggle.className="arrow-up hide";
}
}
window.addEventListener("scroll",ToggleScroll);

function MoveTop(){
    window.scrollTo(0,0);
}