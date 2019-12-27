
var video = document.getElementById("myvideo");
// const rect = document.getElementById("rect");
var isReadyHand = document.getElementById("isReady");

let model = null;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 1,        // maximum number of boxes to detect
    iouThreshold: 0.8,      // ioU threshold for non-max suppression
    scoreThreshold: 0.7,    // confidence threshold for predictions.
}

function runDetection() {
    var videoDimention = {
        height: video.height,
        width: video.width
    }
    var bodyDimention = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    model.detect(video).then(predictions => {
        // console.log("Predictions: ", predictions);
        var bbox = predictions && predictions[0] && predictions[0].bbox;
        if (bbox) {
            var pointerX = ((bbox[0] + (bbox[2] / 2)) * bodyDimention.width) / videoDimention.width;
            var pointerY = ((bbox[1] + (bbox[3] / 2)) * bodyDimention.height) / videoDimention.height;
            // rect.style.left = bbox[0] + "px";
            // rect.style.top = bbox[1] + "px";
            // rect.style.height = bbox[2] + "px";
            // rect.style.width = bbox[3] + "px";
        }
        runDetection()
        placeDiv(pointerX, pointerY);
    });
}

function placeDiv(x_pos, y_pos) {
    var d = document.getElementById('pointer');
    if (x_pos && y_pos) {
        d.style.left = x_pos + 'px';
        d.style.top = y_pos + 'px';
        d.style.visibility = 'visible';
    } else {
        d.style.visibility = 'hidden';
    }
    }

// Load the model.
function loadHeadDetection() {
    handTrack.load(modelParams).then(lmodel => {
        model = lmodel
        handTrack.startVideo(video).then(function (status) {
            if (status) {
                console.log('Hand track classification ready for use')
                isReadyHand.style.visibility = 'visible';
                runDetection()
            } else {
                console.error('Hand track classification not ready for use')
            }
        });
    });
}
