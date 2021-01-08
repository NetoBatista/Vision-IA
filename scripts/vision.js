function initializeVision(content) {
    content.vision = {}
    content.vision.url = 'https://vision.googleapis.com/v1/images:annotate'
    content.vision.key = 'API_KEY'
    
    content.function.getStructureRequestVision = () => {
      const indexBreak = content.image.data.indexOf(',') + 1
        return {
            'requests':[
                {
                  'image':{
                    'content': content.image.data.substring(indexBreak)
                  },
                  'features':[
                    {
                      'type':'LABEL_DETECTION',
                      'maxResults':10
                    }
                  ]
                }
              ]
        }
    }
}