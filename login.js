document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'jeanneskiii' && password === 'ILoveYou') {
        showPopup();
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

function showPopup() {
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'popupOverlay';
    popupOverlay.style.position = 'fixed';
    popupOverlay.style.top = '0';
    popupOverlay.style.left = '0';
    popupOverlay.style.width = '100%';
    popupOverlay.style.height = '100%';
    popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
    popupOverlay.style.zIndex = '1000';

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = '#fff';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '10px';
    popupContent.style.textAlign = 'center';
    popupContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    popupContent.innerHTML = `
        <h2>Happy 5 Months!</h2>
        <p>❤️❤️❤️❤️❤️</p>
        <button id="popupButton">Okay</button>
    `;

    // Add content to overlay
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    // Handle button click
    document.getElementById('popupButton').addEventListener('click', function() {
        document.body.removeChild(popupOverlay);
        window.location.href = 'index.html';  // Redirect to the main anniversary page
    });
}
