document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var users = JSON.parse(xhr.responseText);
        renderUsers(users);
      }
    };
    xhr.send();
  
    // Render the users in the UI
    function renderUsers(users) {
      var container = document.getElementById("person-container");
      users.forEach(function(user) {
        var card = document.createElement("div");
        card.className = "person-card";
        card.innerHTML = "<h3>" + user.name + "</h3>" +
                         "<p>Email: " + user.email + "</p>" +
                         "<p>Phone: " + user.phone + "</p>";
        container.appendChild(card);
      });
    }
  
    // Picture form submission
    var pictureForm = document.getElementById("picture-upload-form");
    pictureForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var pictureLink = document.getElementById("picture-link").value;
      // Perform further actions with the picture link
      console.log("Picture link:", pictureLink);
      // Reset the form
      pictureForm.reset();
    });
  });
  