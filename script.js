
const showSection = (sectionId) => {
    document.querySelectorAll('.hidden-section').forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId + '-section').style.display = 'block';
}

const hideSection = (sectionId) => {
    document.getElementById(sectionId + '-section').style.display = 'none';
}

const showSectionInSection = (sectionId) => {
    document.querySelectorAll('.hidden-section-section').forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId + '-section-section').style.display = 'block';
}

const hideSectionInSection = (sectionId) => {
    document.getElementById(sectionId + '-section-section').style.display = 'none';
}

document.querySelector('.hidden-section').addEventListener('mouseleave', () => {
    document.querySelectorAll('.hidden-section, .hidden-section-section').forEach(section => {
        section.style.display = "none";
    });
});


document.querySelector('.hidden-section').addEventListener('mouseleave', () => {
    document.querySelectorAll('.hidden-section').forEach(section => {
        section.style.display = "none";
    });
});

// MODAL WINDOW

const admissionBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
console.log(admissionBtn);

const openModal = function(){
    modal.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
}

admissionBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
//esc key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape')
    closeModal();
});