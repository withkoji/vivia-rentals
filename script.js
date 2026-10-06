const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

document.querySelectorAll('.button, .card a').forEach((node) => {
  node.addEventListener('click', () => {
    node.animate(
      [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-1px)' },
        { transform: 'translateY(0px)' }
      ],
      { duration: 180, easing: 'ease-out' }
    );
  });
});

console.log('VIVIA Rentals public preview loaded.');
