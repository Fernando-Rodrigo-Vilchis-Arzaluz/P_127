function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseRelased(classifyCanvas);
synth = window.SpeechSynthesis;
}


function clearCanvas() {

    background("white");
}

function preload() {
classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
strokeWeight(13);
stroke(0);
if (mouseIsPresed) {
    line(pmouseX, pmouseY, pmouseX, pmouseY,);
}
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult)
}

function gotResult(error, results) {
 if (error) {
    console.error(error);
 }
console.log(results);
document.getElementsById('label').inner.HTML =  'Etiqueta: ' + results[0].label;

document.getElementById('confidence').innerHTML = 'Precision: ' + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}