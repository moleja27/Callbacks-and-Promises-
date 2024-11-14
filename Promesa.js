// Function to fetch advice based on an ID
function fetchAdvice(id) {
    return fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => data.slip.advice)
        .catch((error) => {
            throw new Error(`Error fetching advice: ${error.message}`);
        });
}

// Function to check a random number and, if successful, fetch advice
function checkNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10);
        if (number > 5) {
            resolve(`Success: The number ${number} is greater than 5.`);
        } else {
            reject(`Failure: The number ${number} is not greater than 5.`);
        }
    });
}

// Function to check number condition and then fetch advice if successful
function getAdviceIfNumberIsHigh() {
    return checkNumber()
        .then((message) => {
            console.log(message); // Log the success of the checkNumber promise
            return fetchAdvice(1); // Proceed to fetch advice
        })
        .then((advice) => console.log(`Fetched Advice: ${advice}`))
        .catch((error) => console.error("An error occurred:", error));
}

// Call the function to execute the logic
getAdviceIfNumberIsHigh();





