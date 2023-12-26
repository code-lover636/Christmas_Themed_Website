var audio = new Audio("./assets/carol.mp3#t=00:00:05");
audio.volume = 0.2;

const music = (e)=>{
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    cont.children[0].classList.toggle("active");
    cont.children[1].classList.toggle("active");
}

const cont = document.querySelector(".musicbtn")
cont.addEventListener("click", music);
