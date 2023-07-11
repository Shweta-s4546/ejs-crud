
let fName = document.getElementById('name');
let fEmail = document.getElementById('email')
let fMobile = document.getElementById('mobile');
let fAge = document.getElementById('age')
let fAddr = document.getElementById('address')


const dataHandler = async (event) => {
    event.preventDefault(); // to avoid page refresh
    const data = {
        name: fName.value,
        email: fEmail.value,
        mobile: fMobile.value,
        age: fAge.value,
        address: fAddr.value

    }
    console.log(`new user submitted `, data)
    await fetch(`http://localhost:4600/api/user/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(out => out.json())
        .then(res => {
            console.log('server response=', res)
            window.alert(res.msg)
        }).catch(err => console.log(err.message))
}