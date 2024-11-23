function generateRandomUserStories() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var userStoryRange = sheet.getRange("B21:B31"); // 11 rows
  var developerRange = sheet.getRange("F21:F31"); // 11 rows
  
  var userStories = [
    "User  can register an account",
    "User  can log in to their account",
    "User  can reset their password",
    "User  can update their profile",
    "User  can view transaction history",
    "User  can initiate a payment",
    "User  can receive payment notifications",
    "User  can request a refund",
    "User  can filter transactions by date",
    "User  can export transaction history",
    "User  can manage payment methods"
  ];

  // Ensure we only use as many user stories as there are rows in the range
  var randomizedStories = [];
  
  // Randomly select user stories (up to 11)
  for (var i = 0; i < userStoryRange.getNumRows(); i++) {
    var randomIndex = Math.floor(Math.random() * userStories.length);
    randomizedStories.push([userStories[randomIndex]]);
  }

  // Set user stories in B21:B31
  userStoryRange.setValues(randomizedStories);
  
  // List of common American developer names
  var developerNames = [
    "John Smith",
    "Emily Johnson",
    "Michael Brown",
    "Jessica Davis",
    "James Wilson",
    "Sarah Miller",
    "David Garcia",
    "Laura Rodriguez",
    "Daniel Martinez",
    "Linda Hernandez",
    "Matthew Lee"
  ];

  // Shuffle the developer names to assign randomly
  var shuffledDevelopers = developerNames.sort(() => Math.random() - 0.5);
  
  // Set the developer names in F21:F31
  developerRange.setValues(shuffledDevelopers.map(name => [name]));
}