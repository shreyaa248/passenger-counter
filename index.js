//initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let welcomeEL=document.getElementById("welcome-el")

let saveEl = document.getElementById("save-el")

let name1 ="Shreya"
let greeting1 = "Hey there! "
let greeting2 = " Welcome to our page!"
welcomeEL.innerText = greeting1+ name1 +greeting2
welcomeEL.innerText = welcomeEL.innerText + "👋" //can also use += instead

let countEl = document.getElementById("count-el") //passing in arguments
console.log(countEl)

let count = 0
function increment (){
    console.log("clicked")
    count = count + 1
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count
    console.log(count)

//Working with hthe DOM = Document object model aka how you 
//use JS to modify a website
    


}
function save(){
    console.log(count)
    let countdash = count + " - "
    //saveEl.innerText += countdash
    saveEl.textContent += countdash
    countEl.innerText =0
    count=0
}
let username = "shreya, "
let message = "You have tree new notifications"
console.log(username+message)

//innerText alternative mdn