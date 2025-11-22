const voteBtns= document.querySelectorAll(".vote-btn")
const voteCounts= document.querySelectorAll(".vote-count")
const voteBars= document.querySelectorAll(".vote-bar")


if(!localStorage.getItem("votes")){


    localStorage.setItem("votes", JSON.stringify([0, 0, 0, 0, 0]))
}

if(!localStorage.getItem("currentVote")){

    localStorage.setItem("currentVote", "-1")

    
}


let votes= JSON.parse(localStorage.getItem("votes"))
let currentVote= Number(localStorage.getItem("currentVote"))



function updateVotes(){

    let maxVotes= Math.max(...votes)

    voteCounts.forEach((count, i) =>{
    
        count.textContent= votes[i]
        voteBars[i].style.width= maxVotes === 0 ? "0%" : (votes[i] / maxVotes)* 100 + "%"

    })


    voteBtns.forEach((btn, i) =>{

        let icon= btn.querySelector(".heart-icon")

        if(currentVote === i){

            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")


        }else{

            icon.classList.remove("fa-solid")

            icon.classList.add("fa-regular")

        }


    })
}

updateVotes()



voteBtns.forEach((btn, i) =>{

    btn.addEventListener("click", () =>{

        if(currentVote == i){
            
            votes[i]--
            currentVote= -1

            localStorage.setItem("currentVote", "-1")

        }

        else{

            if (currentVote !== -1){

                votes[currentVote]--

            }

                votes[i]++
                currentVote= i
                localStorage.setItem("currentVote", i)

                const card= btn.closest(".card-div")

                const popHeart= document.createElement("i")
                popHeart.className= "fa-sharp fa-solid fa-heart heart-pop"
                card.appendChild(popHeart)


                setTimeout(() => popHeart.remove(), 1000)
                
        }

        localStorage.setItem("votes", JSON.stringify(votes))

        updateVotes()


    })

})
