const cityName = document.getElementById('cityName');
const subButton = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const tempDyn = document.getElementById('tempDyn');
const temp_status = document.getElementById('tempStatus');
const dataHide = document.querySelector('.data_hide');
const getInfo = async (event) =>{
    event.preventDefault();
    let cityValue = cityName.value;
    
    if(cityValue === ""){
        city_name.innerHTML = `Please enter the name before you search`;
        dataHide.classList.add('data_hide');
        
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=ad5186498e9fe2dc9bc2a5f9ee9c7890`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempDyn.innerHTML = arrData[0].main.temp;
            
            // condition check for weather either suuny, cloudy or clear
            const tempMood = arrData[0].weather[0].main;
            {
                if(tempMood == "Clear"){
                    temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>" 
                }
                else if(tempMood == "Clouds"){
                    temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>" 
                }
                else if(tempMood == "Rain"){
                    temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>" 
                }
                else if(tempMood == "Rain"){
                    temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>" 
                }
                else{
                    temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
                }
                dataHide.classList.remove('data_hide');
            }
             
        } catch {
            city_name.innerHTML = 'Please Enter the city name properly';
            dataHide.classList.add('data_hide');
        }
       
    }
}
subButton.addEventListener('click', getInfo);