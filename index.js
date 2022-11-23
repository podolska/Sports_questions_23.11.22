const cities = [
    {
    "city": "київ",
    "country": "України"
    },
    {
    "city": "вашингтон",
    "country": "США"
    },
    {
    "city": "лондон",
    "country": "Великобританії"
    }
];

const sport = [
    {
        "type": "футбол",
        "champion": "Ліонелем Мессі"
    },
    {
        "type": "бокс",
        "champion": "Віталієм Кличко"
    },
    {
        "type": "карате",
        "champion": "Джекі Чаном"
    }
];

function getUser () {
    // Follow the form submit
    const form = document.querySelector('form');
    form.addEventListener('submit', getInfo);
    //Follow the cancel-button
    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', cancelSession);

    function getInfo (e) {
        e.preventDefault();
        // Name
        const name = document.querySelector('[name=name]').value;
        // Age
        const year = document.querySelector('[name="year"]').value;
        const age = Math.abs(Number((new Date().getFullYear())) - Number(year));
        let seriously = false;
        if(age > Number(100) || age < 3) {
            seriously = true;
        };
        //City
        const inputCity = document.querySelector('[name="city"]').value;
        let countryToShow = null;
        cities.find(({city, country}) => {
            if(city === inputCity.toLowerCase()) {
                countryToShow = country;
            };
        });
        //Sport
        const inputSport = document.querySelector('[name="sport"]').value;
        let champToShow = null;
        sport.find(({type, champion}) => {
            if(type === inputSport.toLowerCase()) {
                champToShow = champion;
            };
        });
        //Show info
        const info = document.querySelector('.info');
        const a = document.querySelector('.name-age');
        const b = document.querySelector('.country');
        const c = document.querySelector('.champion');

        form.style.display = 'none';
        info.style.display = 'flex';
        a.textContent = seriously ? `${name[0].toUpperCase()}${name.slice(1)}, ${age} р. (cерйозно ${age}?)` : `${name[0].toUpperCase()}${name.slice(1)}, ${age} р.`;
        b.textContent = countryToShow ? `Ти живеш у столиці  ${countryToShow}` : `Ти живеш у місті  ${inputCity}`;
        c.textContent = champToShow ? `Круто! Хочеш стати  ${champToShow}?` : `${inputSport[0].toUpperCase()}${inputSport.slice(1)} - це круто!` 
    };

    function cancelSession (e) {
       const arr = document.querySelectorAll('input');
       let customerInfo = [];
       let description = null;
        for(a of arr) {
            if(a.value === '') {
                switch (a.name) {
                    case "name": 
                        description = "ім'я";
                        break;
                    case "year": 
                        description = "рік народження";
                        break;
                    case "city": 
                        description = "місто проживання";
                        break;
                    case "sport": 
                        description = "улюблений вид спорту";
                        break;
                    default: break;
                }
                customerInfo.push(description);
            };
        };
        
        alert(customerInfo.length !== 0 ? `Шкода, що Ви не захотіли ввести свій(оє) ${customerInfo.join(', ')}. До побачення!` : 'До побачення!');
        form.reset();
    }
};

getUser();
