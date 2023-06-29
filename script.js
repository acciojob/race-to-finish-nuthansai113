// Generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Create an array of five promises
const promises = Array.from({ length: 5 }, (_, index) =>
  new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${index + 1} resolved after ${time / 1000} seconds`);
    }, time);
  })
);

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });
