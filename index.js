const fs = require('fs');

// Function to get current timestamp
function getCurrentTimestamp() {
  return Date.now();
}

// Function to format current date-time
function getCurrentDateTime() {
  const date = new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;
}

// Generate file name with current date-time
const fileName = `${getCurrentDateTime()}.txt`;

// Generate file content with current timestamp
const fileContent = getCurrentDateTime().toString();

// Write content to file
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log(`File "${fileName}" has been created with content "${fileContent}"`);
});
