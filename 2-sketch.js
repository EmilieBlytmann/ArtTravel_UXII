
getImagebyID()

function getImagebyID() {

    var request = new XMLHttpRequest()
    var collectionID = 'KMS359'

    request.open('GET', 'https://api.smk.dk/api/v1/art/?object_number=' + collectionID, true)

    request.onload = function() {

        var data = JSON.parse(this.response)
        console.log(data)

        if (request.status >= 200 && request.status < 400) {

        data.items.forEach(element => {
        console.log(element.id)
        var img = document.createElement("IMG")
        img.src = element.image_thumbnail
        document.getElementById("id-painting").appendChild(img)

    })

    } else {
      console.log('error')
    }
  }

  request.send()
}