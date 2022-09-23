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
  await navigator.clipboard.writeText(content);
  const copied = await navigator.clipboard.readText();
  console.log(copied);
  
});
