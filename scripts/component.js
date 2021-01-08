function initializeComponent (content) {
    content.function.generateComponentStructure = () => {
        content.components = {
            chooseFile: document.getElementById('chooseFile')
           ,targetImage: document.getElementById('targetImage')
           ,cancelPictureFromWebCam: document.getElementById('cancelPictureFromWebCam')
           ,buttonChoosePicture: document.getElementById('buttonChoosePicture')
           ,targetVideo: document.getElementById('targetVideo')
           ,divTable: document.getElementById('divTable')
           ,takePicture: document.getElementById('takePicture')
           ,analyze: document.getElementById('analyze')
        }   
    }

    content.function.generateTableResultVision = (response) => {
        //Build an array containing Customer records.
        var customers = new Array()
        customers.push(["Description", "Accuracy"])

        response.responses.forEach(_response => {
            const labelAnnotations = _response["labelAnnotations"]

            labelAnnotations.forEach(_labelAnnotation => {
                const accuracy = _labelAnnotation["score"] * 100
                customers.push([_labelAnnotation["description"], accuracy.toFixed(2).concat(' %')])
            })

        })
 
        //Create a HTML Table element.
        var table = document.createElement("TABLE")
        table.border = "1"
 
        //Get the count of columns.
        var columnCount = customers[0].length
 
        //Add the header row.
        var row = table.insertRow(-1)
        for (var i = 0 ; i < columnCount; i++) {
            var headerCell = document.createElement("TH")
            headerCell.innerHTML = customers[0][i]
            row.appendChild(headerCell)
        }
 
        //Add the data rows.
        for (var i = 1 ; i < customers.length ; i++) {
            row = table.insertRow(-1)
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1)
                cell.innerHTML = customers[i][j]
            }
        }
 
        var dvTable = content.components.divTable
        dvTable.innerHTML = ""
        dvTable.appendChild(table)
    
    }

    content.function.generateComponentStructure()
}