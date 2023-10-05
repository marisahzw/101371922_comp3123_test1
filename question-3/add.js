const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');


const createLogFiles = () => {
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }


  process.chdir(logsDirectory);


  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`${fileName}`);
  }
};

createLogFiles();
