const inputItem = document.querySelectorAll('.inputItem');
const inputSubmit = document.querySelector('#botaoDeEnviar');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio')

inputItem.forEach((item, indice) => {
    inputSubmit.addEventListener('click', (event) => {
        if (item.value !== ""){
            item.classList.remove('invalido')
            item.classList.add('valido') 
            campoObrigatorio[indice].style.visibility = "hidden";         
        } else {
            event.preventDefault();
            item.classList.add('invalido')
            item.classList.remove('valido')
            campoObrigatorio[indice].style.visibility = "visible";
        }
    })
})

