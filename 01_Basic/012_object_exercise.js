function noDefault(){
    let $form = document.querySelector("#form");
    let listPeople = [];

    $form.addEventListener("submit", eventForm);

    function eventForm(evt){
        evt.preventDefault();

        let $name = this.querySelector("#txtName");
        let $age = this.querySelector("#txtAge");
        let $height = this.querySelector("#txtHeight");
        let $weight = this.querySelector("#txtWeight");
        let $divResult = this.querySelector("#divResult");

        let person = createPerson($name.value, $age.value, $height.value, $weight.value);

        $divResult.innerHTML += `<p>${person.name}, ${person.age}, ${person.height}, ${person.weight}</p>`; 
        
        listPeople.push(person);
        console.log(listPeople);

        $name.value = "";
        $age.value = "";
        $height.value = "";
        $weight.value = "";

    }

    function createPerson(name, age, height, weight){
        return {name, age, height, weight}
    }

}

noDefault();