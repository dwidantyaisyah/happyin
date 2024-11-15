document.addEventListener("DOMContentLoaded", function () {
    // Get search elements
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    // Add event listeners for search
    searchButton.addEventListener("click", performSearch);
    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === "") {
            alert("Please enter a search term");
            return;
        }

        // Select content elements, excluding main menu and logo areas but including top contact
        const contentElements = document.querySelectorAll(
            "h1, h2, h3, p, li:not(.menu li):not(.logo li), a:not(.menu a):not(.logo a)"
        );

        // Clear previous highlights while preserving icons and structure
        contentElements.forEach(element => {
            element.innerHTML = element.innerHTML.replace(/<mark>/g, "").replace(/<\/mark>/g, "");
        });

        // Highlight matching text without removing HTML structure in `.top-contact`
        let found = false;
        contentElements.forEach(element => {
            const originalHTML = element.innerHTML;
            const regex = new RegExp(`(${query})`, "gi");

            // Replace text matches only, preserving HTML tags
            const newHTML = originalHTML.replace(regex, (match) => `<mark>${match}</mark>`);
            
            // Update element content if a match is found
            if (newHTML !== originalHTML) {
                found = true;
                element.innerHTML = newHTML;
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        if (!found) {
            alert("No results found.");
        }
    }
});
