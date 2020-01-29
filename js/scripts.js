document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.toggle')) return;
  
    // Don't follow the link
    event.preventDefault();
  
    // Log the clicked element in the console
    toggleClicked(event.target);
  
  }, false);
});

function toggleClicked(element) {
  // Hide all the sections
  const sections = document.querySelectorAll('.target');
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  let target = element.getAttribute('data-target');
  target = document.getElementById(target);
  target.classList.remove('hidden');

  // Remove all highlights from toggles
  const toggles = document.querySelectorAll('.toggle');
  toggles.forEach(toggle => {
    toggle.classList.remove('text-dark');
  });
  element.classList.add('text-dark');
}