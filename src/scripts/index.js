
function modalCadastro(){
    const modalContainer = document.querySelector("dialog");
    const buttonCadastrarHeader = document.querySelector("#button__cadastrarHeader")
    const buttonCadastrarMain = document.querySelector("#button__cadastrar");
    const buttonRemoverModal = document.querySelector("#remover__modal")

    buttonCadastrarHeader.addEventListener("click", function(){
        modalContainer.showModal();
    })
    
    buttonCadastrarMain.addEventListener("click", function(){
        modalContainer.showModal();
    })

    buttonRemoverModal.addEventListener("click", function(){
        modalContainer.close();
    })

}
modalCadastro()