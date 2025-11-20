function frameworks(file){

    fetch(file)    
    .then(res => res.text())

    .then(data =>{

        const homeDiv= document.getElementById("home")
        homeDiv.style.display= "none"

        const contentDiv= document.getElementById("content")
        contentDiv.innerHTML= data

    })
}