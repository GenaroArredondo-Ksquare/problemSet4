"use strict";
const fetchData = fetch("https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json");
fetchData.then((response) => {
    return response.json();
}).then((response) => {
    for (let i = 0; i < response.length; i++) {
        let node = document.querySelector(`.side-tag-side-tag-${i + 1}`);
        console.log(node);
        console.log(response[i].timeframes.daily.current);
    }
}).catch((err) => console.log(err));
