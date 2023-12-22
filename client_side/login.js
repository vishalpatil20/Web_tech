// frontend side of the login side check js once
document.getElementById('loginForm').addEventListener('submit',async(Event) => {
    Event.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/users/login', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name:username,password: password})
    });
    const result = await response.text();
    if(response.ok){
        document.getElementById('message').textContent =result;
    }
    else{
        document.getElementById('meassage').textContent = `Error: ${result}`;
    }
});