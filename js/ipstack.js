document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'e5df7343122ed9fa2f8244381608554c';
    const apiUrl = `https://api.ipstack.com/check?access_key=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const locationInfo = document.getElementById('location-info');
        if (locationInfo) {
          locationInfo.innerHTML = `
            <p>IP: ${data.ip}</p>
            <p>Land: ${data.country_name}</p>
            <p>Stad: ${data.city}</p>
            <p>Provider: ${data.connection.isp}</p>
          `;
        } else {
          console.error('Element with id "location-info" not found.');
        }
      })
      .catch(error => console.error('Error fetching the IPStack API:', error));
  });