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