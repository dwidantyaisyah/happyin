function greet() {
    var name = document.getElementById("name").value;
    alert("Hello, " + name + "! ");
}

document.getElementById("consultationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration
    greet();
});