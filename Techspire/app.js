function navigateTo(page) {
    window.location.href = page;
}

// Simulate dynamic username greeting
document.addEventListener('DOMContentLoaded', () => {
    const username = "Techspire";  // In a real app, this would come from user data
    document.getElementById('username').innerText = username;
});
