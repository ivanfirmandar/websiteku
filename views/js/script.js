const loginForm = document.getElementById('login')
const adminButton = document.getElementById('tool')
adminButton.addEventListener("click",()=>{
    loginForm.classList.toggle('hide-height')
})

let logindataForm;

if(localStorage.getItem('userid')){
    let userIdLogin = document.getElementById('userid-login').innerHTML = localStorage.getItem('userid');
    let adminNav = document.getElementsByClassName('nav-bar')[0].innerHTML += '<a href="/admin">Admin</a> <a href="/logout" id="logout-button">Logout</a>'
}

const submitLogin = document.getElementById('submit-login')
const logoutButton = document.getElementById('logout-button')

submitLogin.addEventListener("click",async ()=>{
    const userid = document.getElementById('userid')
    const password = document.getElementById('password')
    logindataForm = {
        'userid' : userid.value,
        'password' : password.value,
    }
    let data = await fetchData('/login',logindataForm)
    data = await data.json()
    localStorage.setItem('userid',data.data.userid)
    location.reload()
})
if(logoutButton!==null){
    logoutButton.addEventListener('click',()=>{
        localStorage.removeItem('userid');
    })
}

async function fetchData(uri,data){
    let query = await fetch(uri,{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    return query
}
const portoImages = document.getElementsByClassName('portofolio-content')
console.log(portoImages)
for (let index = 0; index < portoImages.length; index++) {
    portoImages[index].addEventListener('mouseover',()=>{
        portoImages[index].classList.add('grow')
    }) 
    portoImages[index].addEventListener('mouseout',()=>{
        portoImages[index].classList.remove('grow')
    })

}