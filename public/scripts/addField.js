//procurar o botao
document.querySelector("#add-time")
    .addEventListener("click", cloneField)
//quando clicar no botao

//Primeira Função - sempre que eu clicar no  "Novo horário vai clonar o schedule-items" 
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ''
    })
  
  
  
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

//executar uma ação