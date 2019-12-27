
var isSelectedSound = false;
var isReadySound = document.getElementById("isReady");
var optionsSound = { probabilityThreshold: 0.7 };
var modelUrlSound = 'https://teachablemachine.withgoogle.com/models/FXTlhKYs/';
var classifierSound;

function loadSoundClassification() {
    classifierSound = ml5.soundClassifier(modelUrlSound + 'model.json', optionsSound, modelReady);
}

function modelReady() {
    // classify sound
    console.log('Sound classification ready for use')
    isReadySound.style.visibility = 'visible';
    classifierSound.classify(gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error('Sound classification got result error', error);
        return;
    }
    if (!isSelectedSound) {
        isSelectedSound = true;
        if (result[0].label === "sağa") {
            Reveal.right();
        } else if (result[0].label === "sola") {
            Reveal.left();
        } else if (result[0].label === "aşağı") {
            Reveal.down();
        } else if (result[0].label === "yukarı") {
            Reveal.up();
        } else {
            isSelectedSound = false;
        }
        setTimeout(() => {
            isSelectedSound = false;
        }, 1000);
    }
    // console.log(result[0]);
}
