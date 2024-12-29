let toastBox = document.querySelector(".toastBox");
let successMsg = "Successfully submitted";
let errorMsg = "Please fix the error!!";
let invalidMsg = "Invalid Input , try again";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.setAttribute("class", "toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
