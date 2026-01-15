document.addEventListener("DOMContentLoaded", () => {
	const primaryCarousel = document.querySelector('.primary-carousel');
	const secondaryCarousel = document.querySelector('.secondary-carousel');

	// Duplicate content for seamless looping
	primaryCarousel.innerHTML += primaryCarousel.innerHTML;
	secondaryCarousel.innerHTML += secondaryCarousel.innerHTML;

	// Function to pause and resume animations on hover
	function pauseAnimations() {
		primaryCarousel.style.animationPlayState = 'paused';
		secondaryCarousel.style.animationPlayState = 'paused';
	}

	function resumeAnimations() {
		primaryCarousel.style.animationPlayState = 'running';
		secondaryCarousel.style.animationPlayState = 'running';
	}

	// Add hover event listeners
	primaryCarousel.addEventListener('mouseover', pauseAnimations);
	secondaryCarousel.addEventListener('mouseover', pauseAnimations);
	primaryCarousel.addEventListener('mouseleave', resumeAnimations);
	secondaryCarousel.addEventListener('mouseleave', resumeAnimations);
});




//   Timer

// function updateTimer() {
// 	// Set the future date (change this to Dec 28 if needed)
// 	future = Date.parse("Dec 28, 2024 8:00:00");
// 	now = new Date();
// 	diff = future - now;

// 	// If the difference is negative, the event has passed
// 	if (diff <= 0) {
// 		document.getElementById("timer").innerHTML = "<div>Event has passed</div>";
// 		return; // Stop further execution
// 	}

// 	days = Math.floor(diff / (1000 * 60 * 60 * 24));
// 	hours = Math.floor(diff / (1000 * 60 * 60));
// 	mins = Math.floor(diff / (1000 * 60));
// 	secs = Math.floor(diff / 1000);

// 	d = days;
// 	h = hours - days * 24;
// 	m = mins - hours * 60;
// 	s = secs - mins * 60;

// 	document.getElementById("timer").innerHTML =
// 		"<div>" +
// 		d +
// 		"<span> Days</span></div>" +
// 		"<div>" +
// 		h +
// 		"<span> Hours</span></div>" +
// 		"<div>" +
// 		m +
// 		"<span> Minutes</span></div>" +
// 		"<div>" +
// 		s +
// 		"<span> Seconds</span></div>";
// }

// setInterval(updateTimer, 1000);

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault();

// 		const target = document.querySelector(this.getAttribute("href"));
// 		const offset = 80; // Adjust this value based on your navbar's height

// 		const elementPosition = target.offsetTop;
// 		const offsetPosition = elementPosition - offset;

// 		window.scrollTo({
// 			top: offsetPosition,
// 			behavior: "smooth",
// 		});
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll("nav a");

	// Function to remove 'hit' class from all links
	const removeActiveClass = () => {
		navLinks.forEach((link) => {
			link.classList.remove("hit");
		});
	};

	// Function to add 'hit' class to the corresponding link
	const addActiveClass = (id) => {
		navLinks.forEach((link) => {
			if (link.getAttribute("href").substring(1) === id) {
				link.classList.add("hit");
			}
		});
	};

	// IntersectionObserver to detect when a section reaches the middle of the viewport
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const sectionId = entry.target.id;
				if (entry.isIntersecting) {
					removeActiveClass();
					addActiveClass(sectionId);
				}
			});
		},
		{
			root: null,
			threshold: 0.5, // Trigger when the section reaches 50% of the viewport height
		}
	);

	// Observe sections with IDs
	sections.forEach((section) => {
		observer.observe(section);
	});

	// Fallback: Scroll event listener for quick scrolling
	window.addEventListener("scroll", function () {
		const middleOfViewport = window.innerHeight / 2; // Middle of the viewport
		let currentSectionId = null;

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= middleOfViewport && rect.bottom >= middleOfViewport) {
				currentSectionId = section.id;
			}
		});

		if (currentSectionId) {
			removeActiveClass();
			addActiveClass(currentSectionId);
		}
	});
});

function toggleMenu() {
	const nav = document.querySelector("nav");
	nav.classList.toggle("active");
}

// Create the hamburger button dynamically
const header = document.querySelector("header");
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = "<span></span><span></span><span></span>";
hamburger.onclick = toggleMenu;
header.appendChild(hamburger);

window.addEventListener("scroll", function () {
	const header = document.querySelector("header");

	// Check if the user has scrolled down from the top
	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});

// FAQ transition js
// Select all accordion buttons
const accordionButtons = document.querySelectorAll(".accordion-button");

// Loop through all accordion buttons
accordionButtons.forEach((button) => {
	button.addEventListener("click", function () {
		// Get the currently opened accordion item (if any)
		const openAccordion = document.querySelector(".accordion-collapse.show");

		// If there's an open accordion and it's not the one that was clicked, close it
		if (openAccordion && openAccordion !== this.nextElementSibling) {
			// Remove the 'show' class and apply smooth transition
			openAccordion.style.height = openAccordion.scrollHeight + "px";
			window.getComputedStyle(openAccordion).height; // Force reflow
			openAccordion.style.height = "0";

			openAccordion.addEventListener(
				"transitionend",
				() => {
					openAccordion.classList.remove("show");
					openAccordion.style.height = null;
				},
				{ once: true }
			);

			// Collapse the previous button
			openAccordion.previousElementSibling.querySelector(".accordion-button").classList.add("collapsed");
		}

		// Toggle the clicked accordion item
		const collapse = this.nextElementSibling;

		if (!collapse.classList.contains("show")) {
			// Expand the new accordion panel
			collapse.classList.add("show");
			collapse.style.height = "0";
			window.getComputedStyle(collapse).height; // Force reflow
			collapse.style.height = collapse.scrollHeight + "px";

			// Remove inline height after transition ends
			collapse.addEventListener(
				"transitionend",
				() => {
					collapse.style.height = null;
				},
				{ once: true }
			);

			// Toggle the collapsed state of the button
			this.classList.remove("collapsed");
		}
	});
});

// Script for Timeline

// Function to update AOS attributes based on screen size
function updateTimelineAOS() {
	const timelineItems = document.querySelectorAll(".timeline-item");

	// For smaller screens, set all to 'fade-left'
	if (window.innerWidth < 768) {
		timelineItems.forEach((item) => {
			item.setAttribute("data-aos", "fade-left");
		});
	} else {
		// For larger screens, restore original data-aos values
		timelineItems.forEach((item, index) => {
			if (index % 2 === 0) {
				item.setAttribute("data-aos", "fade-right");
			} else {
				item.setAttribute("data-aos", "fade-left");
			}
		});
	}
}

// Initialize AOS
AOS.init();

// Initial update on page load
updateTimelineAOS();

// Update AOS on window resize
window.addEventListener("resize", updateTimelineAOS);

// Winners Project Re-direction
// Select all buttons with the class "win_button"
const buttons = document.querySelectorAll(".win_button");

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the URL from the data-url attribute
    const url = button.getAttribute("data-url");
    
    // Open the URL in a new tab
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("No URL specified for this button!");
    }
  });
});


