//navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav");

    hamburgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        console.log("Menu toggled. Show class:", navMenu.classList.contains("show"));
    });
});




//page1
document.getElementById('downloadCvBtn').addEventListener('click', function(event) {
    alert(' Votre CV a été téléchargé !');
    
    const link = document.createElement('a');
    
    link.href = 'images/resume.pdf'; 
    link.download = 'resume.pdf'; 
    
    link.click();
});


//page3
const boxes = document.querySelectorAll(".projet-box"); 
const newBox = document.getElementById("newBox"); 
const overlay = document.getElementById("overlay"); 
const newBoxContent = document.getElementById("newBoxContent"); 
const closeBox = document.getElementById("closeBox"); 

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const content = box.getAttribute("data-content");
        
        const [technologies, date, description, sourceUrl] = content.split("; ");
        newBoxContent.innerHTML = `
            <p><strong>Technologies utilisées :</strong> ${technologies}</p>
            <p><strong>Date du projet :</strong> ${date}</p>
            <p><strong>Description :</strong> ${description}</p>
            <a href="${sourceUrl}" target="_blank" class="btn btn-success">Voir le code source</a>
        `;

        newBox.style.display = "block";
        overlay.style.display = "block";
    });
});


closeBox.addEventListener("click", () => {
    newBox.style.display = "none";
    overlay.style.display = "none";
});




//page4
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {

        alert('Message envoyé.');
        form.reset();
    });


