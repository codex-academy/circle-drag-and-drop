
const sources = document.querySelector(".sources");

sources.addEventListener("dragstart", function(evt){
    const target = evt.target;
    console.log(target.id);
    evt.dataTransfer.setData("id", target.id);
});

function dragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";

}

function drop(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains("dropzone")) {
        const id = evt.dataTransfer.getData("id");
        evt.target.appendChild(document.getElementById(id));
    }

}