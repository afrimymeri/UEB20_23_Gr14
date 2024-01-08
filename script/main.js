// drag n drop
function allowDrop(ev) {
	ev.preventDefault();
	return false;	
}


function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	return false;
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var draggedElement = document.getElementById(data);
	ev.target.appendChild(draggedElement);
}



//feedback
document.addEventListener('DOMContentLoaded', function () {
  // Feedback Button
  const feedbackButton = document.getElementById('feedbackButton');
  feedbackButton.addEventListener('click', displayFeedbackForm);

  // Next Button
  const nextButton = document.querySelector('.modal-content form button');
  nextButton.addEventListener('click', closeFeedbackForm);

  // Function to display the feedback form
  function displayFeedbackForm() {
      const feedbackModal = document.getElementById('feedbackModal');
      feedbackModal.style.display = 'block';
  }

  // Function to close the feedback form
  function closeFeedbackForm() {
      const feedbackModal = document.getElementById('feedbackModal');
      feedbackModal.style.display = 'none';

      // All questions have been answered, submit the form
      const feedbackForm = document.getElementById('feedbackForm');

      // You can handle the form data as needed or submit it to the server
      // For demonstration, let's log the form data to the console
      const formData = new FormData(feedbackForm);
      for (const pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
      }

      // If you want to submit the form to the server, uncomment the line below
      // feedbackForm.submit();
  }
});



// Function to close the welcome modal
function closeWelcomeModal() {
  const welcomeModal = document.getElementById('welcomeModal');
  welcomeModal.style.display = 'none';
}


//modali alfredit

const myButton = document.getElementById('myButton');
        const myButton2 = document.getElementById('myButton2');
        const myButton3 = document.getElementById('myButton3');
        const myButton4 = document.getElementById('myButton4');
        const myButton5 = document.getElementById('myButton5');
        const myButton6 = document.getElementById('myButton6');
        const myButton7 = document.getElementById('myButton7');

        let modalBody = document.getElementById('modalBody');
        let modalTitle = document.querySelector('.modal-title');

        let content1 = document.getElementById('content1');
        let content2 = document.getElementById('content2');
        let content3 = document.getElementById('content3');
        let content4 = document.getElementById('content4');
        let content5 = document.getElementById('content5');
        let content6 = document.getElementById('content6');
        let content7 = document.getElementById('content7');

        
        myButton.addEventListener('click', function() {
          
          modalTitle.textContent = 'Fizioterapia';
          
          
          modalBody.innerHTML = '';
          
          
          modalBody.appendChild(content1.cloneNode(true));
        });

        
        myButton2.addEventListener('click', function() {
          
          modalTitle.textContent = 'Terapia Oksigjenore';
          modalBody.innerHTML = '';
          modalBody.appendChild(content2.cloneNode(true));
        });

        myButton3.addEventListener('click', function() {
          
          modalTitle.textContent = 'Terapia Magnetike';

            
            modalBody.innerHTML = '';
          
          
          modalBody.appendChild(content3.cloneNode(true));
        });

         
         myButton4.addEventListener('click', function() {
          
          modalTitle.textContent = 'Terapia e Ngrohtësisë dhe e Ftohtësisë';
          
          
          modalBody.innerHTML = '';
          
          
          modalBody.appendChild(content4.cloneNode(true));
        });

         
         myButton5.addEventListener('click', function() {
          
          modalTitle.textContent = 'Masazhi';
          
          
          modalBody.innerHTML = '';
          
          
          modalBody.appendChild(content5.cloneNode(true));
        });

        myButton6.addEventListener('click', function() {
         
          modalTitle.textContent = 'Terapia e Ulët e Niveleve të Energjisë Elektrike';
          
          
          modalBody.innerHTML = '';
          
          
          modalBody.appendChild(content6.cloneNode(true));
        });
         
         myButton7.addEventListener('click', function() {
          
          modalTitle.textContent = 'Terapia e Ujërave (Hidroterapia)';
          modalBody.innerHTML = '';
          modalBody.appendChild(content7.cloneNode(true));
        });

        /* KQYR MA VON APO GJEN DIQKA
        const dataSot = document.getElementById("dataSot");
        const sot = new Date().toLocaleDateString();
        dataSot.textContent = sot;
        */

       function curdate(date) {
        const muajt = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const dita = date.getDate();
        const muaji = date.getMonth();
        const viti = date.getFullYear();

        return dita + " " + muajt[muaji] + " " + viti;
       }
       window.onload = function() {
        const datasot = document.getElementById("dataSot");
        const datasot2 = document.getElementById("dataSot2");
        const datasot3 = document.getElementById("dataSot3");
        const datasot4 = document.getElementById("dataSot4");
        const datasot5 = document.getElementById("dataSot5");
        const datasot6 = document.getElementById("dataSot6");
        const datasot7 = document.getElementById("dataSot7");

        const sot = new Date();
        datasot.textContent = curdate(sot);
        datasot2.textContent = curdate(sot);
        datasot3.textContent = curdate(sot);
        datasot4.textContent = curdate(sot);
        datasot5.textContent = curdate(sot);
        datasot6.textContent = curdate(sot);
        datasot7.textContent = curdate(sot);
       };



       function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
        }
        function validatePassword(password) {
        return password.length >= 8;
        }


        //event perdoret qe mos me ja leju formes me e reload pagein edhe me ja prish lokacionin hrefit 
        function validimi2(event) {
          event.preventDefault();
          const email = document.querySelector('input[name="email"]').value;
          const password = document.querySelector('input[name="password"]').value;
      
          if (!validateEmail(email)) {
              alert('Please enter a valid email address.');
              return false;
          }
      
          if (!validatePassword(password)) {
              alert('Password must be at least 8 characters long.');
              return false;
          }else{
          window.location.href = "/src/index.html";
          alert("Login Successful");
          }
          
          return true; 
          
      }
     


    
    
    
    
    
    