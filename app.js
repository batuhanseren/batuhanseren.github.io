window.onload = function () {
  document.querySelector(".loader").style.display = "none";
};

let modal = document.querySelector(".modal");
let body = document.querySelector("body");
let modalClose = document.querySelector("#modal-close");
let modalCh = document.querySelector(".modal-ch");
let popup = document.querySelector("#popup");
popup.addEventListener("click", function () {
  modal.style.display = "flex";
  body.style.overflow = "hidden";
});
modal.addEventListener(
  "click",
  function (event) {
    if (
      event.target.matches("#modal-close") ||
      !event.target.closest(".modal-ch")
    ) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  },
  false
);

const share = document.getElementById("share");
let link = document.querySelector("#sharelink");
share.addEventListener("click", async (event) => {
  const content = document.getElementById("copy-board").textContent;
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = content;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  notification("Copied!");
});

function notification(msg) {
  var old_div = document.querySelector(".alert")
  if (old_div) {
    old_div.parentNode.removeChild(old_div);
    
  }
  var div = document.createElement("div");
  div.className = "alert";
  div.innerHTML = msg;
  document.body.appendChild(div);
  setTimeout(function () {
    div.classList.add("active");
  }, 1);
  setTimeout(function () {
    div.classList.remove("active");
  }, 1000);
}
