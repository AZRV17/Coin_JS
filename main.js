document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#cryptoTable tbody');

            i = 0;

            data.forEach(currency => {
                i++;
                
                const row = document.createElement('tr');
                row.innerHTML = `<td>${currency.id}</td><td>${currency.symbol}</td><td>${currency.name}</td>`;
                tableBody.appendChild(row);

                if (currency.symbol === 'usdt') {
                    row.classList.add('usdt');
                } else if (i <= 5) {
                    row.classList.add('highlighted');
                }             
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});