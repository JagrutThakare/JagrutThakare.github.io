// Quote Generator Script

const quoteEl = document.getElementById("quote");

async function fetchQuote() {
    try {
        const resp = await fetch("https://dummyjson.com/quotes/random");
        if (!resp.ok) throw new Error("Failed to fetch");
        const data = await resp.json();  // { content, author, ... }
        quoteEl.textContent = `"${data.quote}" — ${data.author}`;
    } catch (err) {
        console.error(err);
        // fallback to static quotes or message
        quoteEl.textContent = "“Stay curious.”";
    }
}

// initial
fetchQuote();
// every 10s
setInterval(fetchQuote, 10000);
// click to refresh
quoteEl.addEventListener("click", fetchQuote);


// Select all nav links inside the collapsible menu
const navLinks = document.querySelectorAll('#navbarNav .nav-link');
// Select the toggler button
const navbarToggler = document.querySelector('.navbar-toggler');
// Select the collapsible element by its ID
const collapseElement = document.getElementById('navbarNav');

// Create a Bootstrap Collapse instance to control it with JS
const bsCollapse = new bootstrap.Collapse(collapseElement, {
    toggle: false // Do not toggle on initialization
});

// Add a click event listener to each nav link
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // Check if the navbar toggler is visible (i.e., we are on a mobile screen)
        // and if the collapsible menu is currently open ('show' class is present)
        if (navbarToggler.offsetParent !== null && collapseElement.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});


// Hide the preloader after a short delay

window.addEventListener('load', function () {
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';
    }, 1500);
});

