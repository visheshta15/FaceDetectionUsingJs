const video = document.getElementById('video');


const startVideo =()=>{
    //to use the webcam
    navigator.getUserMedia(
         //video is the key and enpty object as a parameter
        { video: {} }, 
        // defining a function stream is what comming from webcam and assigning it to source of vedio 
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}


// lets load all the different models, this is all done asynchronously so will use promise.all which going to run all async call parallely which help quicker to excute
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo)


video.addEventListener('play', ()=>{
    // console.log('faceapi: ', faceapi)
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = {
        width: video.width,
        height: video.height
    }
    faceapi.matchDimensions(canvas, displaySize)

    // setInterval to run the code multiple times inside this function, will use async function bacause it is a aysnc library
    setInterval(async ()=>{
        //detect all the faces inside webcam every single times when it is called. detectSingleFace: will detect single face
        // in the argument will pass vedio element and what kind of library to detect the face
        const detection = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()

        console.log(detection)

        const resizedDetections = faceapi.resizeResults(detection, displaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    },10)
})



