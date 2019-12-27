
var isSelectedImage = false;
var isReadyImage = document.getElementById("isReady");
var optionsImage = { probabilityThreshold: 0.7 };
var modelUrlImage = 'https://storage.googleapis.com/tm-model/ZDYLTLeE/';
var classifierImage;
var videoImage;
var radioButton = document.getElementById('imageClassification');

// function loadImageClassification() {
//     classifierImage = ml5.imageClassifier(modelUrlImage + 'model.json', videoImage, imageModelReady);
// }

function setup() {
    if (radioButton.checked) {
        videoImage = createCapture(VIDEO);
        classifierImage = ml5.imageClassifier(modelUrlImage + 'model.json', videoImage, imageModelReady);
    }
}

function imageModelReady() {
    console.log('Image classification ready for use')
    isReadyImage.style.visibility = 'visible';
    classifierImage.classify(imageGotResult);
}

function imageGotResult(error, result) {
    if (error) {
        console.error('Image classification got result error', error);
        return;
    }
    if (!isSelectedImage) {
        isSelectedImage = true;
        if (result[0].label === "Right") {
            Reveal.right();
        } else if (result[0].label === "Left") {
            Reveal.left();
        } else if (result[0].label === "Down") {
            Reveal.down();
        } else if (result[0].label === "Up") {
            Reveal.up();
        } else {
            isSelectedImage = false;
        }
        setTimeout(() => {
            isSelectedImage = false;
            imageModelReady();
        }, 2000);
    }
    // console.log(result[0]);
    
}
