document.addEventListener('DOMContentLoaded', function() {
    
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    
    document.querySelectorAll('.menu-item a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    
    function updateRooms(packageType, change) {
        var roomCountElement = document.getElementById(packageType + '-room-count');
        var roomCount = parseInt(roomCountElement.innerText);
        roomCount += change;
        if (roomCount < 1) roomCount = 1;
        roomCountElement.innerText = roomCount;

        var priceElement = roomCountElement.parentElement.querySelector('.price-value');
        var basePrice = packageType === 'basic' ? 199 : 249;
        priceElement.innerText = (basePrice * roomCount).toFixed(2);
    }

    
    function signUp(packageType) {
        var roomCount = document.getElementById(packageType + '-room-count').innerText;
        var messageElement = document.getElementById('thank-you-message');
        messageElement.innerText = `Thank you for choosing ${roomCount} room(s) from the ${packageType} package!`;

        setTimeout(function() {
            messageElement.innerText = '';
        }, 5000);
    }

    
    function validateForm(event) {
        event.preventDefault();
        var name = document.getElementById('fname').value;
        var email = document.getElementById('lname').value;
        var message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        } else {
            alert('Form submitted successfully.');
            return true;
        }
    }

    
    document.getElementById('contact-form').addEventListener('submit', validateForm);

    
    window.updateRooms = updateRooms;
    window.signUp = signUp;
});
