// var ad = navigator.mediaDevices.getDisplayMedia({audio: true})
var audio = document.getElementById("audi")
var jsonArray

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.onload = function() {
        var status = xhr.status
        if (status === 200) {
            callback(null, xhr.response)
        } else {
            callback(status, xhr.response)
        }
    }
    xhr.send()
}

function responseHandler(status, data) {
    if (status !== null) {
        console.log("Something went wrong")
    } else {
        console.log(data)
    }
}

function loadJSONArray() {
    getJSON("https://marigostra.ru/persist/proj-player/fragments.json", responseHandler)
}


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