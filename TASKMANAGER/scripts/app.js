let isImportant = false;
let isVisible = true;

function toggleImportant() {
  const nonImportantIcon = "fa-regular fa-heart";
  const importantIcon = "fa-solid fa-heart active";
  if (!isImportant) {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
  } else {
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  }
}

function toggleInfo() {
  if (isVisible) {
    $(".info").hide();
    isVisible = false;
  } else {
    $(".info").show();
    isVisible = true;
  }
}

function saveTask() {
  console.log("Saving Task...");
}
function init() {
  console.log("Task manager");

  // load data

  //catch event
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnInfo").click(toggleInfo);
}

window.onload = init;
