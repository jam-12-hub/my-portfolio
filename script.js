function greetUser() {
    const name = document.getElementById('username-input').value;
    if (name === "") {
        alert("Please type a name first!");
    } else {
        alert("Welcome to my site, " + name + "!");
    }
}

// Dark Mode Toggling Logic Engine
function toggleDarkMode() {
    // Find the <body> tag element node
    const bodyElement = document.body;
    
    // Toggle the 'dark-theme' class on or off
    bodyElement.classList.toggle('dark-theme');
    
    // Update the button text depending on which theme is active
    const toggleButton = document.getElementById('theme-toggle-btn');
    if (bodyElement.classList.contains('dark-theme')) {
        toggleButton.innerHTML = "☀️ Light Mode";
    } else {
        toggleButton.innerHTML = "🌙 Dark Mode";
    }
}
