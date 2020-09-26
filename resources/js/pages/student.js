let students = [];
let selectedStudent;
let elTBody;
let filtered;

let elModalCoverageAdd;
let elModalCoverageRemove;
let elModalCoverageEdit;

let elOpenModalAdd;

let elCloseModalAdd;
let elCloseModalRemove;
let elCloseModalEdit;

let elNameAdd;
let elLevelAdd;
let elNameRemove;
let elLevelRemove;
let elNameEdit;
let elLevelEdit;

let elSaveEdit;

let elSearch;

window.onload = (event) => {
  console.log('windows is loaded');
  elTBody = document.getElementById('tbody');
  elModalCoverageAdd = document.getElementById('modal-coverage-add');
  elOpenModalAdd = document.getElementById('open-modal-add');
  elCloseModalAdd = document.getElementById('close-modal-add');

  elModalCoverageRemove = document.getElementById('modal-coverage-remove');
  elCloseModalRemove = document.getElementById('close-modal-remove');

  elModalCoverageEdit = document.getElementById('modal-coverage-edit');
  elCloseModalEdit = document.getElementById('close-modal-edit');

  elNameAdd = document.getElementById('name-add');
  elLevelAdd = document.getElementById('level-add');

  elNameRemove = document.getElementById('name-remove');
  elLevelRemove = document.getElementById('level-remove');

  elNameEdit = document.getElementById('name-edit');
  elLevelEdit = document.getElementById('level-edit');

  elSearch = document.getElementById('search');

  elSaveEdit = document.getElementById('save-edit');

  defineEventsOpenModal();
  defineEventsCloseModal();
  defineEventsSearch();
  defineEventsSaveEdit();

  fetchStudents();
}

function defineEventsCloseModal() {
  elCloseModalAdd.addEventListener("click", (ev) => closeModal('add'));
  elCloseModalRemove.addEventListener("click", (ev) => closeModal('remove'));
  elCloseModalEdit.addEventListener("click", (ev) => closeModal('edit'));
}

function defineEventsOpenModal() {
  elOpenModalAdd.addEventListener("click", (ev) => openModal('add'));
}

function defineEventsSearch() {
  elSearch.addEventListener("keyup", filterStudents);
}

function defineEventsSaveEdit() {
  elSaveEdit.addEventListener("click", updateStudent);
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

function addStudent() {

}

function filterStudents() {
  if (!students.length) { return; }

  // clear table
  clearStudents();
  const searchString = elSearch.value;
  filtered = students.filter(s => s.name.toLowerCase().includes(searchString));

  // regenerate table
  displayStudents(filtered, elTBody);
}

function clearStudents() {
  while (elTBody.hasChildNodes()) {
    elTBody.removeChild(elTBody.firstChild);
  }
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
      buttonEdit.addEventListener("click", (ev) => openModal('edit', { student_id: students[i].id }));

    cellFour.appendChild(buttonEdit);

    cellFive.className = "text-center";

    let buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove";
    buttonRemove.className = "button danger";
    buttonRemove.addEventListener("click", (ev) => openModal('remove', { student_id: students[i].id }));

    cellFive.appendChild(buttonRemove);
  }
}

function closeModal(type) {
  selectedStudent = null;

  switch (type) {
    case 'add': elModalCoverageAdd.classList.add('hidden'); break;
    case 'remove': elModalCoverageRemove.classList.add('hidden'); break;
    case 'edit': elModalCoverageEdit.classList.add('hidden'); break;
  }
}

function openModal(type, obj = {}) {
  let student;
  switch (type) {
    case 'add': elModalCoverageAdd.classList.remove('hidden'); break;
    case 'remove': 
      student = students.find(s => s.id == obj.student_id);

      if (!student) { return; }
      selectedStudent = student;
      elModalCoverageRemove.classList.remove('hidden'); 

      elNameRemove.innerHTML = student.name;
      elLevelRemove.innerHTML = student.level;
      break;
    case 'edit': 
      student = students.find(s => s.id == obj.student_id);

      if (!student) { return; }
      selectedStudent = student;
      elModalCoverageEdit.classList.remove('hidden'); 

      elNameEdit.value = student.name;
      elLevelEdit.value = student.level;
      break;
  }
}

function updateStudent() {
  selectedStudent.name = elNameEdit.value;
  selectedStudent.level = elLevelEdit.value;

  filterStudents();
  closeModal('edit');
}