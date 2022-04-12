const groceries = document.getElementsByClassName("groceries")[0];
const trash = document.querySelector("#trash");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

trash.addEventListener("click", () => {
    allItems.innerHTML = '';
})

userInput.addEventListener("keydown", (event)=>{
    if(event.key == "Enter")
        addItem();
})

function addItem(){
    if(!userInput.value == "")
        var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", () => {
        h2.style.textDecoration = "line-through"
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}
