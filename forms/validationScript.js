    // JavaScript code for form validation
	// Prevent form from submitting
	  
	  // Add an Event Listener to the form that submits an event
	  let mySubmit = document.getElementsByTagName("button")[0];
	  mySubmit.addEventListener("click", validation);

      // Regular expression pattern for alphanumeric input
	  function validation(){
		  
			
			// Retrieve the input field value
			let inputField = document.getElementById("inputField").value;
			
			// Check if the input value matches the pattern
			if(/^[a-zA-Z0-9]+$/.test(inputField)){
				
				// Valid input: display confirmation and submit the form
				//document.querySelector("form").submit();
				
				const form = document.getElementById('myForm');
				
				form.addEventListener('submit', function(event) {
					event.preventDefault(); 
					
					const formData = new FormData(form);

					for (const [key, value] of formData.entries()) {
						console.log(`${key}: ${value}`);
					}

					fetch('wcet.waketech.edu', {
						method: 'POST',
						body: formData, 
					})
					.then(response => response.json())
					.then(data => {
						console.log('Success:', data);
					})
					.catch(error => {
						console.error('Error:', error);
					});
				});
				
				document.getElementById("inputField").value = "";
				
				if(!document.getElementById("success_message")){
					if(document.getElementById("error_message")){
						let errMsg = document.getElementById('error_message');
						errMsg.remove();
					}
					successMessage = document.createElement("p");
					successMessage.textContent = "Congratulations, form successful submitted!"
					successMessage.style.color = "green";
					successMessage.setAttribute("id", "success_message");
					document.getElementsByTagName("body")[0].appendChild(successMessage);
				}
				
				
			}else{
				// Invalid input: display error message
				if (event) event.preventDefault();
				
				if(!document.getElementById("error_message")){
					
					if(document.getElementById("success_message")){
						let succMsg = document.getElementById('success_message');
						succMsg.remove();
					}
					
					errorMessage = document.createElement("p");
					errorMessage.textContent = "Please, input value should be alphanumeric."
					errorMessage.style.color = "red";
					errorMessage.setAttribute("id", "error_message");
					document.getElementsByTagName("body")[0].appendChild(errorMessage);
				}

			}
	  }

        