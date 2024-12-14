document.addEventListener("DOMContentLoaded", function () {
    const dropdownLink = document.querySelector('.nav-item.dropdown > .nav-link');
  
    dropdownLink.addEventListener('click', function (event) {
      // Controleer de schermbreedte
      if (window.innerWidth >= 768) {
        // Navigeer direct naar de link bij desktop-view
        window.location.href = dropdownLink.href;
      }
    });
  });
  