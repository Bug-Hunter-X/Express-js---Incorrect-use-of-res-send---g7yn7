# Express.js - Incorrect use of res.send()

This repository demonstrates a common error in Express.js applications where developers attempt to directly send an object using `res.send()` instead of using `res.json()`.  The `res.send()` method expects a string or buffer, and sending a plain JavaScript object will result in an error.

## Bug

The `bug.js` file contains code that attempts to send a JSON object using `res.send()`. This will result in the Express server throwing an error.

## Solution

The `bugSolution.js` file demonstrates the correct way to send JSON objects using `res.json()`. This method automatically stringifies the object and sets the correct Content-Type header.

## How to reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install express` to install the necessary dependency.
4. Run `node bug.js`.  Observe the error.
5. Run `node bugSolution.js`. Observe the successful response.