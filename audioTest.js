// var ad = navigator.mediaDevices.getDisplayMedia({audio: true})
var audio = document.getElementById("audi")

function playCustom() {
    var s = parseFloat(document.getElementById("startV").value)
    var e = parseFloat(document.getElementById("endV").value)
    playAB(s, e)
}

function playAB(a, b) {
    audio.currentTime = a
    console.log("Starting at " + a)
    audio.play()
    var duration = (b - a) * 1000
    console.log(duration)
    killWhenOverB(b)
}

function killWhenOverB(b) {
    setTimeout(
        function () {
            if (audio.currentTime > b) {
                audio.pause()
            } else {
                killWhenOverB(b)
            }
        }, 200)
}

function stopAudio() {
    audio.pause()
}

function resumeAudio() {
    audio.play()
}

function whatTime() {
    console.log(audio.currentTime)
}

function loadMusic() {
    var link = document.getElementById("music").value
    audio.src = link
}