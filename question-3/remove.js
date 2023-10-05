const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');


const removeLogFiles = () => {
  if (fs.existsSync(logsDirectory)) {
    const filesToDelete = fs.readdirSync(logsDirectory);
    
    filesToDelete.forEach((file) => {
      const filePath = path.join(logsDirectory, file);
      fs.unlinkSync(filePath);
      console.log(`delete files......${file}`);
    });

   
    fs.rmdirSync(logsDirectory);
  } else {
    console.log('Logs directory does not exist.');
  }
};

removeLogFiles();
