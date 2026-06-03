document.addEventListener("DOMContentLoaded", () => {

const navbar = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

// Portfolio Modal Functionality
window.addEventListener('load', function() {
const portfolioModal = new bootstrap.Modal(document.getElementById('portfolioModal'), {
backdrop: 'static',
keyboard: false
});

const viewProjectLinks = document.querySelectorAll('.view-project');

viewProjectLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();

const title = this.getAttribute('data-title');
const description = this.getAttribute('data-description');

document.getElementById('projectTitle').textContent = title;
document.getElementById('projectDescription').textContent = description;

portfolioModal.show();

return false;
});
});
});

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
counters.forEach(counter => {
const text = counter.innerText;
const target = Number(text);
let count = 0;
const speed = target / 100;

const updateCount = () => {

if (count < target) {

count += speed;
counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCount);

} else {

counter.innerText = target + "+";

}

};

updateCount();

});
};

const achievementSection = document.querySelector("#achievements");

if (achievementSection) {

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

startCounter();
observer.unobserve(entry.target);

}

});

}, {
threshold: 0.3
});

observer.observe(achievementSection);

}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

link.addEventListener("click", function () {

navLinks.forEach(item => item.classList.remove("active"));

this.classList.add("active");

});

});

const portfolioItems = document.querySelectorAll(".portfolio-box");

portfolioItems.forEach(item => {

item.addEventListener("mouseenter", () => {

item.style.transform = "translateY(-10px)";
item.style.transition = "0.4s";

});

item.addEventListener("mouseleave", () => {

item.style.transform = "translateY(0)";

});

});

const serviceBoxes = document.querySelectorAll(".service-box");

serviceBoxes.forEach(box => {

box.addEventListener("mouseenter", () => {

box.style.transform = "translateY(-10px)";

});

box.addEventListener("mouseleave", () => {

box.style.transform = "translateY(0)";

});

});

const contactForm = document.querySelector("form");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

contactForm.addEventListener("submit", function (e) {

e.preventDefault();

const inputs = contactForm.querySelectorAll("input, textarea");

let valid = true;

inputs.forEach(input => {

if (input.value.trim() === "") {
valid = false;
}

});

if (valid) {

// Show success message
formMessage.textContent = "✓ Message Sent Successfully!";
formMessage.classList.remove("error");
formMessage.classList.add("success");

contactForm.reset();

// Clear message after 5 seconds
setTimeout(() => {
formMessage.classList.remove("success");
formMessage.textContent = "";
}, 5000);

} else {

// Show error message
formMessage.textContent = "✗ Please fill all fields.";
formMessage.classList.remove("success");
formMessage.classList.add("error");

}

});

}

const revealElements = document.querySelectorAll(
".service-box, .portfolio-box, .counter-box"
);

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {
threshold: 0.2
});

revealElements.forEach(element => {
revealObserver.observe(element);
});

});