import fs from "fs";
import inquirer from "inquirer";
import qr  from "qr-image";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "enter your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('the file has been saved');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
