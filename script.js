const home = document.getElementById('home');
const navUl=document.querySelector('.nav-ul')
function isMobileView() {
    return window.innerWidth <= 900; // Adjust the breakpoint as needed
  }
const showSection = (sectionId) => {
        document.querySelectorAll('.hidden-section').forEach(section => {
            section.style.display = "none";
        });
    document.getElementById(sectionId + '-section').style.display = 'block';
}


home.addEventListener('mouseover', () => {
    document.querySelectorAll('.hidden-section').forEach(section => {
        if (section != home) {
            section.style.display = "none";
        
    }
    });
});


// const hideSection = (sectionId) => {
//     if (sectionId != home) {
//         document.getElementById(sectionId + '-section').style.display = 'none';
        
//     }
// }

const showSectionInSection = (sectionId) => {
        document.querySelectorAll('.hidden-section-section').forEach(section => {
            section.style.display = "none";
        });
    document.getElementById(sectionId + '-section-section').style.display = 'block';
}

// const hideSectionInSection = (sectionId) => {
//     document.getElementById(sectionId + '-section-section').style.display = 'none';
// }

document.querySelectorAll('.hidden-section').forEach(section => {
    section.addEventListener('mouseleave', () => {
        document.querySelectorAll('.hidden-section,.hidden-section-section').forEach(section => {
            section.style.display = "none";
        })
    });
});

document.querySelectorAll('.nav-ul').forEach((element)=> {
    element.addEventListener('click', (event)=> {
      if (isMobileView()) {
        event.preventDefault(); 
        showSection(this.id);
      }
    });
});
  
document.getElementById('ham').addEventListener('click', function() {
    // document.querySelector('.nav-ul').style.transform = 'translateY(-0%)';
    navUl.style.display='block'
});

document.getElementById('cross').addEventListener('click', function() {
    navUl.style.display='none'
    // document.querySelector('.nav-ul').style.transform = 'translateY(100%)';
    document.querySelectorAll('.hidden-section').forEach(section => {
        section.style.display='none'
    })
    
});

if (isMobileView) {
    console.log('done')
    document.querySelectorAll('.hidden-section-section').forEach(section => {
        section.style.transform='translate(0px)'
    })
    document.querySelectorAll('.hidden-section li').forEach(section => {
        section.style.width = '30%'
    })
}

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




// 


// COUNTERRRRRRRRRRRRRRRR

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
(entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  // if (entry.isIntersecting == false)
  if (!entry.isIntersecting) return;

  // animate number counter

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach(curElem => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber / speed);
      // console.log(incrementNumber);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    };

    updateNumber();
  });

  observer.unobserve(workSection);
},
{
  root: null,
  threshold: 0 });



workObserver.observe(workSection);

// COUNTER ANIMATTTTIONNNNNNNNNNNNNNNN ENDDDDDDDD


// 




  