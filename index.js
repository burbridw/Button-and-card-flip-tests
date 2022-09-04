let activeArr = []
let answerArr = []
let globalCount = 0

const colorArr = ["./images/colours/img1.png",
"./images/colours/img2.png", 
"./images/colours/img3.png", 
"./images/colours/img4.png", 
"./images/colours/img5.png", 
"./images/colours/img6.png", 
"./images/colours/img7.png", 
"./images/colours/img8.png"]
const sportsArr = ["./images/sports/img1.png",
"./images/sports/img2.png", 
"./images/sports/img3.png", 
"./images/sports/img4.png", 
"./images/sports/img5.png", 
"./images/sports/img6.png", 
"./images/sports/img7.png", 
"./images/sports/img8.png"]

const colorsBtn = document.getElementById("colors")
const sportsBtn = document.getElementById("sports")
const clearBtn = document.getElementById("clear")

colorsBtn.addEventListener("click",function(){
    if (colorsBtn.className === "toggleOff") {
        colorsBtn.className = "toggleOn"
        activeArr = activeArr.concat(colorArr)
        render("img-container1", activeArr)
    } else if (colorsBtn.className === "toggleOn") {
        colorsBtn.className = "toggleOff"
        activeArr = activeArr.filter( (x) => !colorArr.includes(x) )
        render("img-container1", activeArr)
    } 
})
sportsBtn.addEventListener("click",function() {
    if (sportsBtn.className === "toggleOff") {
        sportsBtn.className = "toggleOn"
        activeArr = activeArr.concat(sportsArr)
        render("img-container1", activeArr)
    } else if (sportsBtn.className === "toggleOn") {
        sportsBtn.className = "toggleOff"
        activeArr = activeArr.filter( (x) => !sportsArr.includes(x) )
        render("img-container1", activeArr)
    } 
})
function render(targetDiv, arr){
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = ""
    for ( let i = 0; i < arr.length; i++) {
    currentDiv.innerHTML += `<div class="img-box"><img src="${arr[i]}"></div>`
    }
}
clearBtn.addEventListener("click",function(){
    globalCount = 0
    let currentDiv = document.getElementById("img-container1")
    currentDiv.innerHTML = ""
    activeArr = []
    document.querySelectorAll(`.toggleOn`).forEach( (x) => {
    x.className = "toggleOff"
    })
    render("img-container1", activeArr)
})



function remove(count) {
    let modArr = activeArr
    globalCount = count
    for (let i = 0; i < count; i++) {
    let missingNum = Math.floor(Math.random()*modArr.length)
    let missingArr = modArr.slice(missingNum,missingNum + 1)
    modArr = modArr.filter( (x) => !missingArr.includes(x) )
    modArr = modArr.sort( () => { return 0.5 - Math.random() } )
    answerArr = activeArr.filter( (x) => !modArr.includes(x) )
    console.log(answerArr)
    } render("img-container1", modArr)
}

const removeBtn = document.getElementById("remove-one")

removeBtn.addEventListener("click", function(){
    remove(3)
    console.log(answerArr[0])
})


const answerBtn = document.getElementById("show-answer")

answerBtn.addEventListener("click",function(){
    let answerBox = document.createElement("div")
    answerBox.id = "answer"
    for (let i = 0; i < globalCount; i++) {
        console.log(answerArr[i])
    answerBox.innerHTML += `<img src="${answerArr[i]}">`
        console.log(answerBox)
    document.getElementById("img-container1").append(answerBox)
    /*document.body.append(answerBox)*/
    }
})

/*
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(testArr)

function remove(count) {
    let modArr = testArr
    for (let i = 0; i < count; i++) {
    let missingNum = Math.floor(Math.random()*modArr.length)
    console.log(missingNum)
    let missingArr = modArr.slice(missingNum,missingNum + 1)
    console.log(missingArr)
    console.log(modArr)
    modArr = modArr.filter( (x) => !missingArr.includes(x) )
    modArr = modArr.sort( () => { return 0.5 - Math.random() } )
    console.log (modArr)
    answerArr = modArr
    } 
}
*/

const reverser = document.querySelectorAll(".flip-card-inner")

reverser.forEach( (card) => {
    card.addEventListener("click", function(){
        if ( card.classList.contains("unflipped") ) {
          card.style.transform = "rotatey(180deg)"
          card.classList.remove("unflipped")
          card.classList.add("flipped")
        } else {
          card.style.transform = "rotatey(0deg)"
          card.classList.remove("flipped")
          card.classList.add("unflipped")
    }
    })
})