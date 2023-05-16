function loadHTML(file, elementId) {
    fetch(file)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else {
          throw new Error("Error loading file: " + file);
        }
      })
      .then((htmlContent) => {
        document.getElementById(elementId).innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Load header and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header.html", "header-placeholder");
    loadHTML("footer.html", "footer-placeholder");
  
    // Added code to handle smooth scrolling
    const links = document.querySelectorAll(".nav-link");
  
    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
  });
  
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  