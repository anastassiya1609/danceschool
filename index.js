document.getElementById( 'form_contact').addEventListener("submit", sendForm)

function checkForm(event) {
    let form = document.getElementById( 'form_contact');
    
    let data ={
        username: form.name.value,
        password: form.number.value,
    };

    return data

}

 async function sendForm(event) {
    event.preventDefault();
    let data = checkForm()
    
    const res = await fetch('https://job.alidi.ru/api/auth/login', {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data)
    });

    const result = await res.json();

    console.log(result)

    // if (res.status === 200){
    //     alert('Вы зарегестрированы. Ваш токен:' + access_token )
    // }else{
    //     alert('Error')
    // }

 }


