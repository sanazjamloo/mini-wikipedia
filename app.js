var dropFileForm = document.getElementById("dropFileForm");
var droppedFiles;
var fileLabelText = document.getElementById("fileLabelText");
// function to override the file drop on the entire page
function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function fileHover() {
  dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
  dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
  droppedFiles=event.dataTransfer.files;
  showFiles(droppedFiles);

}

function showFiles(files) {

}
