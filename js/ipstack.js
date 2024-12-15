document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '0e6a47282f275a335bd55c175b4b8fc8';
    const apiUrl = `https://api.ipstack.com/check?access_key=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const locationInfo = document.getElementById('location-info');
        if (locationInfo) {
          locationInfo.innerHTML = `
            <p>IP: ${data.ip}</p>
            <p>Land: ${data.country_name}</p>
            <p>Regio: ${data.region_name}</p>
            <p>Stad: ${data.city}</p>
            
          `;
        } else {
          console.error('Element with id "location-info" not found.');
        }
      })
      .catch(error => console.error('Error fetching the IPStack API:', error));
  });