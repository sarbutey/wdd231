// Function to display the current date
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
  }
  
  // Call the function when the page loads
  window.onload = displayCurrentDate;