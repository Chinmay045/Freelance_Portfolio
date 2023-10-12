document.addEventListener('DOMContentLoaded', function () {
    loadPortfolio();
});

function loadPortfolio() {
    const url = 'data.json';

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
}