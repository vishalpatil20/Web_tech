document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      });
      const result = await response.text();
      if (response.ok) {
        document.getElementById('registrationMessage').textContent = result;
      } else {
        document.getElementById('registrationMessage').textContent = `Error: ${result}`;
      }
    } catch (error) {
      console.error('Registration error:', error);
      document.getElementById('registrationMessage').textContent = 'Internal Server Error';
    }
  });
  