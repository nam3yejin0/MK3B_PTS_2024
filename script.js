const verticalNav = document.getElementById('verticalNav');

// Function to toggle vertical navbar visibility
function toggleVerticalNav() {
    verticalNav.classList.toggle('active');
}

// Add an event listener to toggle the vertical nav on a button click
document.addEventListener('DOMContentLoaded', () => {
    const navToggleBtn = document.createElement('button');
    navToggleBtn.innerText = '☰';
    navToggleBtn.style.position = 'fixed'; // Optional: Position the button
    navToggleBtn.style.top = '45px'; // Adjust as needed
    navToggleBtn.style.right = '50px'; // Adjust as needed
    navToggleBtn.style.zIndex = '1000'; // Ensure it is above other elements
    navToggleBtn.addEventListener('click', toggleVerticalNav);
    document.body.appendChild(navToggleBtn); // Append button to body
});
