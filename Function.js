function addHobby() {
    let input = document.getElementById("hobbyInput");
    let text = input.value;

    if(text === "") return;

    let li = document.createElement("li");
    li.innerHTML = text + ' <button onclick="deleteItem(this)">Delete</button>';

    document.getElementById("hobbyList").appendChild(li);

    input.value = "";
}

function deleteItem(button){
    button.parentElement.remove();
}

function submitForm(event){
    event.preventDefault();
    alert("Form submitted successfully!");
}

function showDateTime(){
    let now = new Date();
    document.getElementById("dateTime").innerText =
    "Current Date & Time: " + now.toLocaleString();
}

setInterval(showDateTime,1000);