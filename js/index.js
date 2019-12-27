var latestSelectedFeature = localStorage.getItem('latestSelectedFeature') || 'soundClassification'
var radios = document.getElementsByName('feature');

for (var i = 0; i < radios.length; i++) {
    if (radios[i].value === latestSelectedFeature) {
        radios[i].checked = true;
        if (latestSelectedFeature === 'handDetection') {
            loadHeadDetection();
        } else if (latestSelectedFeature === 'imageClassification') {
            // loadImageClassification();
        } else {
            loadSoundClassification();
        }
        break;
    }
}
function changedFeature(radio) {
    if (radio.checked) {
        localStorage.setItem('latestSelectedFeature', radio.value);
        location.reload();
    } 
}
