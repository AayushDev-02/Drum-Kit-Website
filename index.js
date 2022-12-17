function handleClick() {

    var btn = this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn);

}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/SUIII.mp3");
            tom4.play();
            break; 
        case "j":
            var snare = new Audio("sounds/yb.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/goat.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/rr.mp3");
            kick.play();
            break;

    }
}

var drum_btns = document.querySelectorAll(".drum").length;

for (var i = 0; i < drum_btns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});



function buttonAnimation(currKey){

    var activeBtn = document.querySelector("."+ currKey);    

    activeBtn.classList.add("pressed");
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);

}