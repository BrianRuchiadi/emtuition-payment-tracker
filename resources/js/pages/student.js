let students = [];
let elTBody;
let elModalCoverage;
let elOpenModal;
let elCloseModal;

window.onload = (event) => {
  console.log('windows is loaded');
  elTBody = document.getElementById('tbody');
  elModalCoverage = document.getElementById('modal-coverage');
  elOpenModal = document.getElementById('open-modal');
  elCloseModal = document.getElementById('close-modal');

  defineEventsOpenModal();
  defineEventsCloseModal();
  fetchStudents();
}

function defineEventsCloseModal() {
  elModalCoverage.addEventListener("click", closeModal);
  elCloseModal.addEventListener("click", closeModal);
}

function defineEventsOpenModal() {
  elOpenModal.addEventListener("click", openModal);
}

function fetchStudents() {
  fetch('/api/students', {   
      headers: {     
        "Content-Type": "application/json",     
        "Accept": "application/json, text-plain, */*",     
        "X-Requested-With": "XMLHttpRequest",     
        "X-CSRF-TOKEN": "{{ csrf_token() }}"  
      },   
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      students = data.students;
      if (!students || !students.length) { return; }
      
      displayStudents(students, elTBody);
    })  
    .catch(function(error) {      
      console.log('error here', error);    
    });  
}

function displayStudents(students, tbody) {
  for (let i = 0; i < students.length; i++) {
    let row = tbody.insertRow(i);
    row.className = `read row_${i}`;

    let cellOne = row.insertCell(0);
    let cellTwo = row.insertCell(1);
    let cellThree = row.insertCell(2);
    let cellFour = row.insertCell(3);
    let cellFive = row.insertCell(4);

    cellOne.innerHTML = i + 1;
    cellOne.className = "text-center";

    cellTwo.innerHTML = students[i].name;

    cellThree.innerHTML = students[i].level;
    cellThree.className = "text-center";

    cellFour.className = "text-center";
    
      let buttonEdit = document.createElement("button");
      buttonEdit.className = "button edit";

        let iconPencil = document.createElement("i");
        iconPencil.className = "fas fa-pencil-alt";

      buttonEdit.appendChild(iconPencil);
      buttonEdit.innerHTML = "Edit";

    cellFour.appendChild(buttonEdit);

    cellFive.className = "text-center";

    let buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove";
    buttonRemove.className = "button danger";

    cellFive.appendChild(buttonRemove);
  }

  // console.log('tbody', tbody);
}

function closeModal() {
  console.log('close modal');
  elModalCoverage.classList.add('hidden');
}

function openModal() {
  console.log('open modal');
  elModalCoverage.classList.remove('hidden');
}