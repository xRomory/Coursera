(function() {
    var helloSpeaker = {};
    helloSpeaker.speakWord = "Hello";
    helloSpeaker.speak = function () {
        console.log(speakWord + " " + helloSpeaker.name);
    }
})();