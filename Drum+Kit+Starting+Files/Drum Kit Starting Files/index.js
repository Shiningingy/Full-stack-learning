var drums = document.querySelectorAll(".drum")
var audios = []



for (var i=0; i<drums.length;i++){
    switch (drums[i].innerHTML){
        case "w":
            audios.push(new Audio("./sounds/tom-1.mp3"));
            break;
        case "a":
            audios.push(new Audio("./sounds/tom-2.mp3"));
            break;
        case "s":
            audios.push(new Audio("./sounds/tom-3.mp3"));
            break;
        case "d":
            audios.push(new Audio("./sounds/tom-4.mp3"));
            break;
        case "j":
            audios.push(new Audio("./sounds/snare.mp3"));
            break;
        case "k":
            audios.push(new Audio("./sounds/crash.mp3"));
            break;
        case "l":
            audios.push(new Audio("./sounds/kick-bass.mp3"));
            break;
        default:
            alert("exception")
    }
    drums[i].addEventListener("click",function(){
        playsound(this.innerHTML);
        changeOpacity(this.innerHTML)
    })
}



function playsound(key){
    switch (key){
        case "w":
            audios[0].play();
            break;
        case "a":
            audios[1].play();
            break;
        case "s":
            audios[2].play();
            break;
        case "d":
            audios[3].play();
            break;
        case "j":
            audios[4].play();
            break;
        case "k":
            audios[5].play();
            break;
        case "l":
            audios[6].play();
            break;
    }
}



function changeOpacity(key){
    var current = document.querySelector("." + key);
    console.log(current);
    current.classList.add("pressed");
    setTimeout(function(){
        current.classList.remove("pressed");
    },200)
}

document.addEventListener("keydown",function(event){
    playsound(event.key);
    changeOpacity(event.key);
})