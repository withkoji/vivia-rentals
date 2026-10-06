const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-1px)' },
        { transform: 'translateY(0px)' }
      ],
      {
        duration: 180,
        easing: 'ease-out'
      }
    );
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  const yearText = document.getElementById('year');
  if (yearText) yearText.textContent = currentYear;
});

console.log('VIVIA Rentals preview loaded.');
