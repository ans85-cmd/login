document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Beispiel für statische Benutzerdaten (diese sollten in einer echten Anwendung sicher gespeichert werden)
    const validUsername = 'admin';
    const validPassword = 'passwort123';

    if (username === validUsername && password === validPassword) {
        alert('Erfolgreich eingeloggt!');
        window.location.href = 'dashboard.html'; // Weiterleitung zur nächsten Seite
    } else {
        document.getElementById('error-message').textContent = 'Ungültiger Benutzername oder Passwort!';
    }
});
