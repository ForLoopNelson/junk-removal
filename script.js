function openNav() {
  document.getElementById("mySidebar").style.width = "250px"
  document.getElementById("main").style.marginLeft = "250px"

  document.addEventListener("click", closeNavOnClickOutside)
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0"
  document.getElementById("main").style.marginLeft = "0"
}
function closeNavOnClickOutside(event) {
  const sidebar = document.getElementById("mySidebar")

  // Check if the click is outside the sidebar
  if (!sidebar.contains(event.target) && event.target.className !== "openbtn") {
    closeNav()
  }
}
