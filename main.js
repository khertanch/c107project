function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-6mWmWt7z/mode.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}