function openNav() {
  document.getElementById("mySidebar").style.width = "250px"
  document.getElementById("main").style.marginLeft = "250px"
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0"
  document.getElementById("main").style.marginLeft = "0"
}
let sidebar = document.querySelector(".sidebar")

sidebar.onclick = function () {
  sidebar.classList.toggle("active")
}

document.onclick = function (e) {
  if (!sidebar.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove("active")
    sidebar.classList.remove("active_box")
  }
}
