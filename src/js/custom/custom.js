window.onload = function (){
    var btnlogin = document.querySelector('#js_login');
    var modalForm = document.querySelector('#js_modal');
    var btnClose = document.querySelector('#js_btn-close');


    btnlogin.addEventListener('click', openModalForm);
    btnClose.addEventListener('click', closeModalForm);

    function openModalForm(event) {
        event.preventDefault();
       modalForm.classList.add('modal__show');
    };
    function closeModalForm(event) {
        event.preventDefault();
       modalForm.classList.remove('modal__show');
    };
};