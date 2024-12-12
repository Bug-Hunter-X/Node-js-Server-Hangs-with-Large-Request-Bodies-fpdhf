# Node.js Server Hanging with Large Request Bodies

This repository demonstrates a common issue in Node.js servers where they hang when processing large request bodies.  The problem stems from a lack of proper error handling, specifically for the `'error'` event emitted by the incoming request object.  The provided code samples showcase both the problematic code and its solution.

## Problem

The `bug.js` file contains a Node.js HTTP server that doesn't handle errors gracefully during large request processing. This results in the server becoming unresponsive to further requests until the current request completes or times out.

## Solution

The `bugSolution.js` file provides the corrected code.  The key change is the addition of an `'error'` event listener to the `req` object. This ensures that if any error occurs during the processing of the request body (e.g., client disconnects, malformed JSON), the server doesn't hang and will respond appropriately.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using `node bug.js`.
3. Send a large POST request to `http://localhost:3000` with a JSON payload. You will observe the server hanging.
4. Run `bugSolution.js` using `node bugSolution.js`.
5. Repeat step 3. The server will now handle the large request and respond appropriately even if there are errors.