const keyDivs = document.querySelectorAll('div.key');

function togglePlaying(event) {
    for (let i = 0; i < keyDivs.length; i++) {
        if (keyDivs[i].getAttribute('data-key') == event.keyCode) {
            keyDivs[i].classList.toggle('playing');
            break;
        }
    }
}

function play(event) {
    let sound, audio;
    for (let i = 0; i < keyDivs.length; i++) {
        if (keyDivs[i].getAttribute('data-key') == event.keyCode) {
            sound = keyDivs[i].querySelector('.sound').textContent;
            audio = new Audio('sounds/'+sound+'.wav');
            audio.play();
        }
    }
    // var audio = new Audio('sounds/')
}

document.querySelector('body').addEventListener('keydown', togglePlaying, true);
document.querySelector('body').addEventListener('keyup', togglePlaying, true);
document.querySelector('body').addEventListener('keydown', play, true);