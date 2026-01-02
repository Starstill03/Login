const mode= document.getElementById('icon_mode');

mode.addEventListener('click', () =>{
    const form = document.getElementById('login_form')
    if(mode.classList.contains('bi-moon-fill')){
        mode.classList.replace('bi-moon-fill', 'bi-sun')
        form.classList.add('dark')
    }else{
        mode.classList.replace('bi-sun','bi-moon-fill')
        form.classList.remove('dark')
    }
    
});

const form = document.getElementById('login_form')

    form.addEventListener('submit', (e) =>{
    e.preventDefault();

   /* const nome = document.getElementById ('nome').Value
    const email = document.getElementById('email').Value
    const senha = document.getElementById('senha').value

    console.log(nome, email, senha)*/

   const dados = new FormData();

    dados.append('nome', document.getElementById('nome').value);
    dados.append('email', document.getElementById('email').value);
    dados.append('senha', document.getElementById('senha').value);

    fetch('db.php', {
        method : 'POST', 
        body : dados
    })
    .then(res => res.text())
    .then(res => {
        alert(res)

        const confirma = confirm("confirma para ver a surpresa!")
    
        if (confirma){
            window.location.href="ano_novo.html"
        }else{
            console.log("O usuário decidiu não avançar")
        }
    })
    .catch(err=> console.error(err))

})