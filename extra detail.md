#  Build Real Time Face Detection With JavaScript

https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07

In this video we will be setting up real time face detection through a webcam using AI. This AI is so quick that we are able to draw in real time the various faces and expressions of every person in the video without much performance overhead. We will be using the Face API JS library built on Tensor Flow to setup the face detection.

🧠 Concepts Covered:

https://www.innovect.com/face-recognition-api

- Streaming a webcam through HTML
- Using Face API to detect faces in real time
- Drawing facial landmarks in real time
- Determining emotion through facial expressions in real time 


-------------------------------->start

# clone the face api repository
weite below code in git bash inside ur folder
git clone https://github.com/justadudewhohacks/face-api.js.git

# add the models as well
https://dev.to/karkranikhil/face-recognition-using-javascript-33n5

`faceapi.detectSingleFace` method - detectSingleFace utilize the SSD Mobilenet V1 Face Detector. You can specify the face detector by passing the corresponding options object. To detect the multiple faces replace the detectSingleFace with detectAllFaces

`withFaceLandmarks` method - It is used for Detecting 68 Face Landmark Points

`withFaceExpressions` method - This method Detect all faces in an image + recognize facial expressions of each face and return the array

`withAgeAndGender method` - This method Detect all faces in an image + estimate age and recognize gender of each face and return the array

# LoadFromUri
https://www.docuvieware.com/guides/aspnet/LoadFromUri.html

This asynchronous function allows you to load a document into the DocuVieware™ viewer from remote URI address (note that the document address has to be publicly available).

`LoadFromUri: function (docuViewareID, uri, success, error)`
Parameters
`docuViewareID` : The identifier for the DocuVieware™ instance you want to load the document in.
`uri` : The document URI you want to load from.
`success` : A function that will be executed upon success.
`error` : A function that will be executed upon error.
`Return Value` :1 if error, 0 if success.