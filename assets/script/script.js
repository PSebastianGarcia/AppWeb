const file = document.getElementById("template-file");
const createTemplateFile = document.getElementById("create-template-file");
const cancelCreationFile = document.getElementById("cancel-file");

function turnVisible() {
    file.style.display = "block";
}

function turnInvisible() {
    file.style.display = "none";
}

createTemplateFile.onclick = turnVisible;
cancelCreationFile.onclick = turnInvisible;