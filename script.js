document.getElementById("login").addEventListener("Login", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch username and password values
    var ID = document.getElementById("ID").value;
    var password = document.getElementById("password").value;
    
    // Perform validation (replace with your own validation logic)
    if (ID === "admin" && password === "password") {
      // Successful login, redirect to student portal
      window.location.href = "student_portal.html";
    } else {
      // Invalid credentials, display error message
      alert("Invalid username or password. Please try again.");
    }
  });