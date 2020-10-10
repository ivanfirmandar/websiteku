const loginForm = document.getElementById('login')
const adminButton = document.getElementById('tool')
adminButton.addEventListener("click",()=>{
    loginForm.classList.toggle('hide-height')
})