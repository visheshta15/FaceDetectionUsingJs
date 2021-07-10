# [1] html
add video tag 

# inside script
# [2] 
1. to use webcam startVideo function is created
`const startVideo =()=>{`
# const startVideo =()=>{
    navigator.getUserMedia(
        { video: {} }, 
        stream => video.srcObject = stream,
        err => console.error(err)
    )
# }

# [3] 
# clone the face api repository
weite below code in git bash inside ur folder
git clone https://github.com/justadudewhohacks/face-api.js.git

# add the models as well
https://github.com/WebDevSimplified/Face-Detection-JavaScript/tree/master/models