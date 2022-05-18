Webcam.set({
    width: 366,
    height: 320,
    image_format: "png",
    png_quality: 100
    });
    
    camera = document.getElementById("cam");
    Webcam.attach( '#camera' );
    function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("res").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3IouIbM6I/",modelLoaded)
    
    function modelLoaded(){
    console.log("Delta")
    }
    
    function cr(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotresult)
    }
    function gotresult(error, results){
    if(error){
    console.error(error);
    }
    else{
      console.log(results); 
    document.getElementById("ron").innerHTML=results[0].label;
    document.getElementById("roa").innerHTML=results[0].confidence.toFixed(3)*100;
    }
    
    }