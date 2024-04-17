 // Function to send email using EmailJS
 function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Check if form is valid
    if (!event.target.checkValidity()) {
      alert("Please fill out all fields correctly.");
      return; // Exit the function if form is invalid
    }
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };


    // Send email using EmailJS
    emailjs.send("service_ka5p9er", "template_oq6629r", parms)
      .then(function(response) {
        // Handle successful email sending
        alert("Email sent successfully!");
        return;
      }, function(error) {
        // Handle error
        console.error('FAILED...', error);
      });

  }
