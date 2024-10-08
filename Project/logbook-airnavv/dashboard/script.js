let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  document.querySelector(".header").classList.toggle("close"); // Toggle header class as well
});

function updateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(); // Format date
  const time = now.toLocaleTimeString(); // Format time

  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}

// Call updateTime initially and then every second
updateTime();
setInterval(updateTime, 1000);

let userIcon = document.getElementById("user-icon");
let userMenu = document.getElementById("user-menu");

userIcon.addEventListener("click", () => {
  userMenu.classList.toggle("show");
});

// Close the menu if clicking outside of it
document.addEventListener("click", (e) => {
  if (!userIcon.contains(e.target) && !userMenu.contains(e.target)) {
    userMenu.classList.remove("show");
  }
});

function handleClick(title) {
  alert(title + " diklik!"); // Ganti dengan logika sesuai kebutuhan
}
