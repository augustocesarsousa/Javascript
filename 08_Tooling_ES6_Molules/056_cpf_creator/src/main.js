import CreateCPF from './modules/CreateCPF';

import './assets/css/style.css';

(function(){
    let btnCreate = document.querySelector('.btn-create');
    btnCreate.addEventListener('click', () => {
        let cpf = new CreateCPF();
        let result = document.querySelector('.result');
        result.value = cpf.creteNewCPF();
    });    
})();