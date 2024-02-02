var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
let addpopupbutton=document.querySelector(".add-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel button

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault(event)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// select container,add-task,task1,task2,task3,add-desc-input

var container=document.querySelector(".container")
var addtask=document.getElementById("add-task")
var task1=document.getElementById("task1")
var task2=document.getElementById("task2")
var task3=document.getElementById("task3")
var adddescinput=document.getElementById("add-desc-input")

addtask.addEventListener("click",function(event){
    event.preventDefault(event)
    var div=document.createElement("div")
    div.setAttribute("class","list-container")
    div.innerHTML=`<h2>Task</h2>
    <ol>
        <li>${task1.value}</li>
        <li>${task2.value}</li>
        <li>${task3.value}</li>
    </ol>
    <h3>Notes</h3>
    <p>${adddescinput.value}</p>
    <button onclick="deletetask(event)">Delete</button>`
    container.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletetask(event){
    event.target.parentElement.remove()
}
