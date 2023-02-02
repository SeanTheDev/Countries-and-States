function loadCountries(){

    const request = new XMLHttpRequest();
    request.open("GET", "https://xc-countries-api.fly.dev/api/countries/");

    request.onload = () => {

        let dropdown = document.getElementById("countries");
        const countryData = JSON.parse(request.responseText);    

        for (let i = 0; i < countryData.length; i++){

            const option = document.createElement('option');
            option.value = countryData[i]['name'];
            option.textContent = countryData[i]['name'];
            dropdown.appendChild(option);

        }
    }
    
    request.send();
}

