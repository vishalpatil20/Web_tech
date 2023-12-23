// frontend side of the login side check js once
document.getElementById('loginForm').addEventListener('submit',async(Event) => {
    Event.preventDefault()
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
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
        document.getElementById('message').textContent = `Error: ${result}`;
    }
});