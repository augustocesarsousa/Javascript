// fetch('people.json')
//     .then(result => result.json())
//     .then(json => carryPeopleOnPage(json));

axios('people.json')
    .then(result => carryPeopleOnPage(result.data));
    
function carryPeopleOnPage(json){
    let result = document.querySelector('.result');
    let table = document.createElement('table');
    let trt = document.createElement('tr');
    
    let tht1 = document.createElement('th');
    tht1.innerHTML = 'Name';
    trt.appendChild(tht1);

    let tht2 = document.createElement('th');
    tht2.innerHTML = 'Age';
    trt.appendChild(tht2);

    let tht3 = document.createElement('th');
    tht3.innerHTML = 'Salary';
    trt.appendChild(tht3);

    table.appendChild(trt);

    for(let person of json){
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerHTML = person.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = person.idade;
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.innerHTML = person.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    result.appendChild(table);
}