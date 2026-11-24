// import inquirer from "inquirer";
// import qr from "qr-image";
// import fs from "fs";

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "URL",
//       message: "Type in your URL:",
//     },
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//     const qr_png = qr.image(url, { type: "png" });
//     // const output = fs.createWriteStream("qr_img.png");
//     const output = fs.createWriteStream(`qr_${Date.now()}.png`);
//     qr_png.pipe(output);
//     output.on("finish", () => {
//       console.log("QR code saved as qr_img.png");
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Prompt couldn't be rendered in this environment");
//     } else {
//       console.log("Something went wrong:", error);
//     }
//   });

// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "Type in your URL:",
      validate: (input) => {
        try {
          new URL(input);
          return true;
        } catch {
          return "Please enter a valid URL, like https://google.com";
        }
      },
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url, { type: "png" });
    const output = fs.createWriteStream(`qr_${Date.now()}.png`);
    qr_png.pipe(output);
    output.on("finish", () => {
      console.log("QR code saved");
      fs.writeFile("Url.txt", url, (err) => {
        if (err) throw err;
        console.log("Saved in Url.txt");
      });
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this environment");
    } else {
      console.log("Something went wrong:", error);
    }
  });

// import inquirer from "inquirer";
// import QRCode from "qrcode";

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "URL",
//       message: "Type in your URL:",
//     },
//   ])
//   .then(async (answers) => {
//     const filename = `qr_${Date.now()}.png`;
//     await QRCode.toFile(filename, answers.URL);
//     console.log(`QR code saved as ${filename}`);

//     // Also print it in the terminal
//     const terminalQR = await QRCode.toString(answers.URL, {
//       type: "terminal",
//       small: true,
//     });
//     console.log(terminalQR);
//   })
//   .catch((error) => {
//     console.log("Something went wrong:", error);
//   });
