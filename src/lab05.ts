async function pobierzAutorow() {
    return fetch('./dane.json')
    .then(x => x.json())
    .then(dane => console.log(dane));
}

window.onload = function () {
    pobierzAutorow();
}