const btnSobre = document.querySelector('.btnSobre')
const btnProjetos = document.querySelector('.btnProjetos')
const btnContato = document.querySelector('.btnContato')

btnContato.addEventListener('click', (e) => {
    var heightPage = document.body.scrollHeight;
    window.scrollTo(0,heightPage )
})
btnSobre.addEventListener('click', (e) => {
    window.scrollTo(0,0)
})
btnProjetos.addEventListener('click', (e) => {
    window.scrollTo(0,700)
})