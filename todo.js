let inputadd = document.getElementById("inputbox");
let inputbtn = document.getElementById("Add");
let list = document.getElementById("ItemsToDo");
let input = "";

function removelistitem(eventobject) {
    let listitem = eventobject.target.parentElement;
    let items = document.querySelectorAll("li")
    for (let i=0; i < items.length; i ++) {
        if (items[i] === listitem) {
            listitem.parentElement.removeChild(listitem);
            break;
        }
    }
}

function addtolist() {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(input));
    input = "";
    inputadd.value = "";
    let newbutton = document.createElement("button");
    newbutton.innerHTML = "Remove Item";
    newbutton.style.marginLeft = "20px";
    
    item.appendChild(newbutton);
    list.appendChild(item);
    newbutton.addEventListener("click", (eventobject) => removelistitem(eventobject))
    }


inputadd.addEventListener("input", (eventobject) => {input = eventobject.target.value});
inputbtn.addEventListener("click", () => {!input ? alert("You must enter a task!"): addtolist()})
