const quotes = document.getElementById("quotes")
const answer = document.getElementById("answer")
const loaders = document.getElementById("loaders")
const spinner = document.getElementsByClassName("container")


let init = 0
const botSay = (data) => {
    return [
    "halo, perkenalkan saya RamBot, siapa namamu?",
    `Hai ${data?.nama}, Berapa Usiamu?`,
    `Ohhh ${data?.usia}, btw Cita-Citamu apa?`,
    `Wow, Semoga Tercapai Ya. Kalo Hobimu apa? `,
    `Anjay hobimu keren, Kalo gitu aku pamit ya?`
]
}

quotes.innerHTML = botSay()[0]
let usersData = []

function botStart() {
    if (answer.value.length < 1) return alert("Silahkan Isi Jawaban Terlebih")
    init++
    if (init == 1) {
        botDelay({nama: answer.value})
    } else if (init == 2) {
        botDelay({usia: answer.value})
    } else if (init == 3) {
        botDelay({citaCita: answer.value})
    } else if (init == 4) {
        botDelay({hobi: answer.value})
    } else if (init == 5) {
        finishing()
    }
     else {
        botEnd()
    }

    function botDelay(jawabanUser) {
        loaders.style.display = "block"
        setTimeout(() => {
            quotes.innerHTML = botSay(jawabanUser)[init]
            loaders.style.display = "none"
        }, [1100]) 
        usersData.push(answer.value)
        answer.value = ""
    }

    function finishing() {
        quotes.innerHTML = `Okay Thanks ${usersData[0]} udah main ke RamBot`
        answer.value = "Iya Makasih Juga udah nemenin aku!"
    }

    function botEnd() {
       window.location.reload()
    }
    
}