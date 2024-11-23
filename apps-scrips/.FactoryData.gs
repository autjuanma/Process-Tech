 
function populateSpreadsheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = generateRandomData();
    
    // Assuming you want to start populating from the first row
    sheet.getRange("C2").setValue("Project Name");
    sheet.getRange("C3").setValue("Version");
    sheet.getRange("C4").setValue("Date");
    sheet.getRange("C5").setValue("Team Member");

    sheet.getRange("C2").setValue(data.projectName);
    sheet.getRange("C3").setValue(data.version);
    sheet.getRange("C4").setValue(data.date);
    sheet.getRange("C5").setValue(data.teamMember);
}

function generateRandomData() {
    const projectNames = ["PayMaster", "QuickPay", "SecureTransact", "EasyCheckout", "SwiftPayments"];
    const versions = ["1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"];
    const teamMembers = [
        "Alice Johnson",
        "Bob Smith",
        "Charlie Brown",
        "Diana Prince",
        "Ethan Hunt"
    ];

    const randomProjectName = projectNames[Math.floor(Math.random() * projectNames.length)];
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    const currentDate = new Date().toLocaleDateString();
    const randomTeamMember = teamMembers[Math.floor(Math.random() * teamMembers.length)];

    return {
        projectName: randomProjectName,
        version: randomVersion,
        date: currentDate,
        teamMember: randomTeamMember
    };
}