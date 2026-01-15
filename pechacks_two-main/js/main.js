// get preloader
const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
	// load

	console.log("preloader removed");
	preloader.style.transition = "1s ease";
	setTimeout(() => {
		preloader.style.opacity = 0;
		preloader.style.display = "none";
	}, 1000);
});

// Accordion Functionality with Single Open Question and Smooth Transition
document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll("#faq .accordion-item");
	const accordionButtons = document.querySelectorAll("#faq .accordion-button");

	accordionButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const content = button.nextElementSibling;
			const parentItem = button.parentElement;
			const isActive = parentItem.classList.contains("active");

			// Close all accordion items
			accordionItems.forEach((item) => {
				item.classList.remove("active");
				const btn = item.querySelector(".accordion-button");
				btn.classList.remove("active"); // Remove active class from button as well
				const content = item.querySelector(".accordion-content");
				content.style.maxHeight = null; // Close content
				content.style.padding = "0 0px"; // Ensure padding is reset when collapsed
			});

			// If clicked button's parent wasn't active, open it
			if (!isActive) {
				parentItem.classList.add("active");
				button.classList.add("active"); // Add active class to the button for icon rotation
				content.style.maxHeight = content.scrollHeight + "px"; // Set max-height dynamically
				content.style.padding = "0px 0px"; // Add padding inside the accordion when opened
			}
		});
	});
});

// Time line script

document.addEventListener("DOMContentLoaded", function () {
	const timelineLine = document.querySelector(".timeline-line");
	const timelineSection = document.querySelector("#hackathon-timeline");
	let isLineRevealed = false; // Flag to ensure reveal happens only once

	// Initialize AOS for animating event boxes
	AOS.init({
		duration: 1000, // Animation duration in milliseconds
		once: true, // Trigger animation only once
	});

	// Reveal timeline line on scroll
	// const revealTimelineLine = () => {
	// 	if (isLineRevealed) return; // Stop if already revealed

	// 	const sectionRect = timelineSection.getBoundingClientRect();
	// 	const windowHeight = window.innerHeight;

	// 	// Check if timeline section is in the viewport
	// 	if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
	// 		const visibleHeight = Math.min(windowHeight - sectionRect.top, sectionRect.height);
	// 		const totalHeight = sectionRect.height;

	// 		// Calculate the percentage of the section scrolled and adjust the height of the line
	// 		const scrollPercentage = Math.min(visibleHeight / totalHeight, 1);
	// 		timelineLine.style.height = `${scrollPercentage * 100}%`;

	// 		// If the line has fully revealed, set the flag to true
	// 		if (scrollPercentage === 1) {
	// 			isLineRevealed = true;
	// 		}
	// 	}
	// };

	// Listen for scroll event
	// window.addEventListener("scroll", revealTimelineLine);

	// // Initial check in case the section is already in view
	// revealTimelineLine();
});

// Event-directors

function updateLayout() {
	const element = document.querySelector('.event-directors');
	if (window.innerWidth < 768) {
		element.classList.remove('layout'); // Remove the layout class below 630px
	} else {
		element.classList.add('layout'); // Add it back above 630px
	}
}

// Check on load
updateLayout();

// Check on window resize
window.addEventListener('resize', updateLayout);



// Function to show events for a specific day
function showEvents(day) {
	// Hide all event cards by removing the 'show' class
	const allEvents = document.querySelectorAll('.days-event');
	allEvents.forEach(event => event.classList.remove('show'));

	// Show the selected day's events by adding the 'show' class
	const selectedDayEvents = document.querySelector(`.day-${day}-events`);
	if (selectedDayEvents) {
		selectedDayEvents.classList.add('show');
	}
}

// Ensure Day-1 events are shown by default on page load
document.addEventListener("DOMContentLoaded", () => {
	showEvents(1); // Show Day-1 events when the page loads
});

function redirectToUrl(element) {
	const url = element.getAttribute('data-url');
	if (url) {
		window.open(url, '_blank'); // Opens in a new tab
	}
}

document.querySelectorAll('.link-button').forEach(button => {
	button.addEventListener('click', function () {
	  const url = this.getAttribute('data-url');
	  if (url) {
		window.open(url, '_blank'); // Opens in a new tab
	  }
	});
  });
  
