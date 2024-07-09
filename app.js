document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let emergencyBtn = document.getElementById('emergencyBtn');
let hiddenBox = document.getElementById('emergency-hidden');

emergencyBtn.addEventListener('click', function(){
    hiddenBox.style.display = 'block';
});

console.log(emergencyBtn);

let exitBtn = document.getElementById('exitBtn');

exitBtn.addEventListener('click', function(){
    hiddenBox.style.display = 'none';
});