for(let title of document.querySelectorAll(".topic")) {
  title.onclick = () => { title.parentNode.querySelector(".info").classList.toggle("hide");
  }
}