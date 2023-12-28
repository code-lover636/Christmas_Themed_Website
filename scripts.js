var audio = new Audio("./assets/carol.mp3#t=00:00:05");
audio.volume = 0.2;

const music = (e, comp)=>{
    console.log("Carol of Bells")
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    console.log(comp);
    cont.forEach(child=> child.children[0].classList.toggle("active"));
    cont.forEach(child=> child.children[1].classList.toggle("active"));
}

const cont = document.querySelectorAll(".musicbtn");
cont.forEach(e=>e.addEventListener("click", music));

const gift = e=>{
    console.log("Santa Claus");
    const sky = document.querySelector(".nightsky");
    sky.children[0].classList.toggle("move");
    sky.classList.toggle("fade");
}

const giftbtn = document.querySelector(".grp");
giftbtn.addEventListener('click', gift);