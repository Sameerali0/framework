const voteBtns= document.querySelectorAll(".vote-btn")
const voteCounts= document.querySelectorAll(".vote-count")
const voteBars= document.querySelectorAll(".vote-bar")


if(!localStorage.getItem("votes")){


    localStorage.setItem("votes", JSON.stringify([0, 0, 0, 0, 0]))
}


let votes= JSON.parse(localStorage.getItem("votes"))


let hasVoted= localStorage.getItem("hasVoted")



function updateVotes(){

    let maxVotes= Math.max(...votes)

    voteCounts.forEach((count, i) =>{
    
        count.textContent= votes[i]
        voteBars[i].style.width= maxVotes === 0 ? "0%" : (votes[i] / maxVotes)* 100 + "%"

    })

}

updateVotes()



voteBtns.forEach((btn, i) =>{

    btn.addEventListener("click", () =>{

        if(hasVoted){
            
            return
        }

        votes[i] += 1
        localStorage.setItem("votes", JSON.stringify(votes))

        localStorage.setItem("hasVoted", "true")
        hasVoted= true

        updateVotes()


    })

})
