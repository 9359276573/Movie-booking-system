ScreenSelection.js:

const screenSelect = document.getElementById('screen-select');
const maxCapacity = document.getElementById('max-capacity');
const remainingSeats = document.getElementById('remaining-seats');

screenSelect.addEventListener('change', (e) => {
  const selectedScreen = e.target.value;
  // Update remaining seats count based on screen capacity
  const capacity = getScreenCapacity(selectedScreen); // Implement getScreenCapacity function
  remainingSeats.textContent = capacity;
});

function getScreenCapacity(screenId) {
  // Return the maximum capacity for the selected screen
  // For example:
  const screen Capacities = {
    screen-1: 60,
    screen-2: 80,
  };
  return screenCapacities[screenId];
}