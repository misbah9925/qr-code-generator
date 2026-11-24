# QR Code Generator

A command-line app that turns a URL into a QR code image. Built with Node.js, Inquirer and qr-image.

## Features

- Asks for a URL in the terminal and checks that it is valid
- Generates a QR code as a PNG image
- Saves the URL in `Url.txt`

## How to run

1. Clone this repository
2. Install the packages:
   ```
   npm install
   ```
3. Start the app:
   ```
   node index.js
   ```
4. Type a URL, for example `https://google.com`

The QR code is saved in the project folder as `qr_<timestamp>.png`.

## Built with

- Node.js
- inquirer
- qr-image
