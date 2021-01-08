function initializePicture (content) {

    content.function.getPictureFromDisk = () => {
        content.components.chooseFile.click()
    }

    content.function.showPictureSelectedFromDisk = () => {
        const fileReader = new FileReader()
        
        const srcPicture = content.components.chooseFile    

        fileReader.onload = function(){
            content.components.targetImage.hidden = false
            content.components.targetImage.src = fileReader.result
            content.image.data = fileReader.result
        }

        fileReader.readAsDataURL(srcPicture.files[0])
    }

    content.function.cancelPictureFromWebCam = () => {
        content.components.cancelPictureFromWebCam.hidden = true
        content.components.buttonChoosePicture.hidden = false 
        content.components.targetVideo.srcObject = null
        content.components.targetImage.hidden = false
        content.components.analyze.hidden = false
        content.isWebCamOnline = false
    }

    content.function.initializeWebCam = () => {
        
        if(content.isWebCamOnline){
            content.function.getPictureFromWebCam()
            return
        }

        errorWebCam = (data) => {
            console.log(data)
        }

        startWebcam = (stream) => {
            content.components.buttonChoosePicture.hidden = true
            content.components.targetImage.hidden = true
            content.components.analyze.hidden = true
            content.components.cancelPictureFromWebCam.hidden = false

            const targetVideo = content.components.targetVideo

            if(navigator.getUserMedia){// Standard
                targetVideo.srcObject = stream
            }else if(navigator.webkitGetUserMedia){// WebKit
                targetVideo.src = window.webkitURL.createObjectURL(stream)
            }else if(navigator.mozGetUserMedia){// Firefox
                targetVideo.src = window.URL.createObjectURL(stream)
            }
            content.isWebCamOnline = true
        }
        navigator.mediaDevices.getUserMedia({video: true}).then(startWebcam)
        
    }

    content.function.getPictureFromWebCam = () => {
        content.components.targetImage.hidden = false
        content.components.analyze.hidden = false

        const canvas = document.createElement('canvas')
        canvas.width = content.components.targetVideo.width
        canvas.height = content.components.targetVideo.height

        const contextCanvas = canvas.getContext('2d')
        contextCanvas.drawImage(content.components.targetVideo, 0, 0, canvas.width, canvas.height)
        
        const dataURI = canvas.toDataURL('image/jpeg')
        content.components.targetImage.src = dataURI
        content.components.chooseFile.value = ""

        content.image.data = dataURI
        content.function.cancelPictureFromWebCam()
    }

    content.function.refreshComponentsRequest  = () => {
        content.components.buttonChoosePicture.disabled = false
        content.components.takePicture.disabled = false
        content.components.analyze.disabled = false
        content.components.analyze.value = 'Analyze '
    }

    content.function.analyze = () => {
        if(!content.image.data){
            console.log('image not found')
            return
        }

        content.components.buttonChoosePicture.disabled = true
        content.components.takePicture.disabled = true
        content.components.analyze.disabled = true
        content.components.analyze.value = 'Wait...'
        showDescriptions = result => {
            content.function.generateTableResultVision(result)
            content.function.refreshComponentsRequest()
        }

        errorDescriptions = (error) => {
            console.log(error)
            content.function.refreshComponentsRequest()
        }

        const url = content.vision.url.concat('?key=',content.vision.key)
        const data = content.function.getStructureRequestVision()
        const request = {
              url: url
             ,type:'POST'
             ,contentType: "application/json; charset=utf-8"
             ,data: JSON.stringify(data)
             ,success : showDescriptions
             ,error : errorDescriptions
        }

        $.ajax(request)
    }

}