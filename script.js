//your JS code here. If required.

// Function to return initial promise with 3s delay
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to simulate delay with a Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function that chains the transformations
function processArray() {
  const outputDiv = document.getElementById("output");

  getArray()
    .then(async (data) => {
      // Filter out odd numbers (keep even)
      const evenNumbers = data.filter(num => num % 2 === 0);
      await delay(1000); // 1s delay
      outputDiv.textContent = evenNumbers.join(',');
      return evenNumbers;
    })
    .then(async (evenNumbers) => {
      // Multiply even numbers by 2
      const multiplied = evenNumbers.map(num => num * 2);
      await delay(2000); // 2s delay
      outputDiv.textContent = multiplied.join(',');
    });
}

// Run it when page loads
window.onload = processArray;
