// Script to display current date and time
function updateDateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateDisplay = document.querySelector('.date-display');
    const timeDisplay = document.querySelector('.time-display');

    dateDisplay.textContent = date.toLocaleDateString('id-ID', options);
    timeDisplay.textContent = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}




const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('#sidebarToggle');
const topbar = document.querySelector('.topbar');

function adjustTopbarWidth() {
    if (sidebar.classList.contains('minimized')) {
        topbar.style.width = 'calc(380% - 60px)'; // Saat sidebar minimize, topbar lebih lebar
    } else {
        topbar.style.width = 'calc(380% - 250px)'; // Sidebar normal, lebar topbar mengikuti
    }
}

// Jalankan fungsi di awal untuk menyesuaikan lebar
adjustTopbarWidth();


// Event listener untuk tombol sidebar toggle
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('minimized'); // Toggle class 'minimized' untuk sidebar
    adjustTopbarWidth();
});


setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set the date and time immediately
