const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.send("service_5j722jb", "template_xptv81p", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }, "mpqMAHuahSCJdX4wm")    // ✅ তোমার User ID এখানে
    .then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
        },
        function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        }
    );
});
