document.addEventListener("DOMContentLoaded", function () {
  // Select the collapse button (hamburger icon) and the navbar menu
  const collapseButton = document.querySelector(
    '[data-collapse-toggle="navbar-sticky"]'
  );
  const navbarMenu = document.getElementById("navbar-sticky");

  // Add click event listener to toggle the navbar visibility
  collapseButton.addEventListener("click", function () {
    const isExpanded = navbarMenu.classList.contains("hidden");
    // Toggle the 'hidden' class to show/hide the menu
    if (isExpanded) {
      navbarMenu.classList.remove("hidden");
    } else {
      navbarMenu.classList.add("hidden");
    }
  });
});

// Initialize Swiper for the carousel
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper
  const swiper = new Swiper(".carousel-container", {
    loop: true, // Enable looping
    spaceBetween: 20, // Space between slides
    slidesPerView: "auto", // Automatically adjust number of slides per view
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
    breakpoints: {
      // For smaller screens (e.g., mobile)
      640: {
        slidesPerView: 1, // Show one slide per view
        spaceBetween: 10, // Reduced space
      },
      768: {
        slidesPerView: 2, // Show two slides per view
        spaceBetween: 20, // Normal space
      },
      1024: {
        slidesPerView: 3, // Show three slides per view on larger screens
        spaceBetween: 30, // More space between items
      },
    },
  });

  // Optional: Manually add event listeners for custom buttons (if you prefer manual control)
  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");

  // Add event listeners to custom navigation buttons
  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });

  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".who-we-are-carousel", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});