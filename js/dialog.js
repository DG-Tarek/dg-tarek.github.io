const openProject01 = document.getElementById('openProject01');
const closeProject01 = document.getElementById('closeProject01');
const project01 = document.getElementById('project01');

openProject01.addEventListener('click', (event) => {
    event.preventDefault();
    project01.showModal();
});

closeProject01.addEventListener('click', () => {
    project01.close();
});

// Optional: Add an event listener to close the dialog when clicking outside of it
project01.addEventListener('click', (event) => {
    if (event.target === project01) {
        project01.close();
    }
});


// project02

const openProject02 = document.getElementById('openProject02');
const closeProject02 = document.getElementById('closeProject02');
const project02 = document.getElementById('project02');

openProject02.addEventListener('click', (event) => {
    event.preventDefault();
    project02.showModal();
});

closeProject02.addEventListener('click', () => {
    project02.close();
});

// Optional: Add an event listener to close the dialog when clicking outside of it
project01.addEventListener('click', (event) => {
    if (event.target === project02) {
        project02.close();
    }
});


// project03

const openProject03 = document.getElementById('openProject03');
const closeProject03 = document.getElementById('closeProject03');
const project03 = document.getElementById('project03');

openProject03.addEventListener('click', (event) => {
    event.preventDefault();
    project03.showModal();
});

closeProject03.addEventListener('click', () => {
    project03.close();
});

// Optional: Add an event listener to close the dialog when clicking outside of it
project01.addEventListener('click', (event) => {
    if (event.target === project03) {
        project03.close();
    }
});



// project04

const openProject04 = document.getElementById('openProject04');
const closeProject04 = document.getElementById('closeProject04');
const project04 = document.getElementById('project04');

openProject04.addEventListener('click', (event) => {
    event.preventDefault();
    project04.showModal();
});

closeProject04.addEventListener('click', () => {
    project04.close();
});

// Optional: Add an event listener to close the dialog when clicking outside of it
project04.addEventListener('click', (event) => {
    if (event.target === project04) {
        project04.close();
    }
});



// project05

const openProject05 = document.getElementById('openProject05');
const closeProject05 = document.getElementById('closeProject05');
const project05 = document.getElementById('project05');

openProject05.addEventListener('click', (event) => {
    event.preventDefault();
    project05.showModal();
});

closeProject05.addEventListener('click', () => {
    project05.close();
});

// Optional: Add an event listener to close the dialog when clicking outside of it
project05.addEventListener('click', (event) => {
    if (event.target === project05) {
        project05.close();
    }
});