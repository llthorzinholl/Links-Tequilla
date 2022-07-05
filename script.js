const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')
buttonOpenModal.onclick =  function(){
  modalWrapper
  .classList
  .remove('invisible')
}

document.addEventListener('keydown', function(event){
  const isEsckey = event.key === 'Escape'

  if(isEsckey) {
    modalWrapper.classList.add('invisible' )
  }
})

var button = document.querySelector("#refresh");
button.addEventListener("click", function() {
    
    location.reload();
});
