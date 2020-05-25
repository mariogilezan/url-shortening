import { elements } from './elements';
const { menuToggler, navbar } = elements;

const toggle = () => {
  menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle('change');
    navbar.classList.toggle('active');
  });
};

export { toggle };
