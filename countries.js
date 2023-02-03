function loadCountries(){

    const request = new XMLHttpRequest();
    request.open("GET", "https://xc-countries-api.fly.dev/api/countries/");


    // Add conditional for return code
    request.onload = () => {
        
        let dropdown = document.querySelector("#countries");
        const countryData = JSON.parse(request.responseText);    

        for (let i = 0; i < countryData.length; i++){
            const option = document.createElement('option');
            option.value = countryData[i]['code'];
            option.textContent = countryData[i]['name'];
            dropdown.appendChild(option);
        }

    }
    
    request.send();
}

function loadStates(){

    const request = new XMLHttpRequest();
    let countryCode = document.getElementById("countries").value;
    request.open("GET", `https://xc-countries-api.fly.dev/api/countries/${countryCode}/states/`);


    // Add conditional for return code
    request.onload = () => {
        
        const dropdown = document.querySelector('#states');
        const statesData = JSON.parse(request.responseText);

        if (dropdown.options.length > 1){
            dropdown.innerHTML = `<option value="">Select a state</option>`;
        }

        for (let i = 0; i < statesData.length; i++){
            const option = document.createElement('option');
            option.value = statesData[i]['code'];
            option.textContent = statesData[i]['name'];
            dropdown.appendChild(option);
        }
    }
    
    request.send();
}

function sendNewLocation(){

    const request = new XMLHttpRequest();
    request.open("POST", "https://xc-countries-api.fly.dev/api/countries/");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        
        
        // const id = 1;
        // const code = 'BR';
        // const name = 'Brazil';

    }
    };


    request.send('{"id":6,"code":"BR","name":"Brazil"}');

}