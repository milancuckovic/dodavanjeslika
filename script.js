var link=document.getElementById("link");
var text=document.getElementById("text");
var textvesti=document.getElementById("text-vesti");
var srcslike=document.getElementById("slika");
function Posalji(){
    textvesti.innerHTML=text.value;
    srcslike.src = link.value;
}
function PromenaFonta(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    textvesti.style.fontSize = listValue;
}
