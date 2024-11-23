function onOpen() {
    populateSpreadsheet(); // Call the function to populate data when the sheet is opened
}

function populateSpreadsheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear(); // Clear the entire sheet for a fresh start

    // Set headers for User Story Map
    sheet.getRange("B7").setValue("USER STORY MAP");
    sheet.getRange("B8").setValue("TASK 1");
    sheet.getRange("C8").setValue("TASK 2");
    sheet.getRange("D8").setValue("TASK 3");
    sheet.getRange("E8").setValue("TASK 4");

    // Add subtasks or epics for TASK 1
    sheet.getRange("B9").setValue("Subtask / Epic 1.1");
    sheet.getRange("B10").setValue("Subtask / Epic 1.2");
    sheet.getRange("B11").setValue("Subtask / Epic 1.3");
    sheet.getRange("B12").setValue("Subtask / Epic 1.4");
    sheet.getRange("B13").setValue("Subtask / Epic 1.5");

    // Add subtasks or epics for TASK 2
    sheet.getRange("C9").setValue("Subtask / Epic 2.1");
    sheet.getRange("C10").setValue("Subtask / Epic 2.2");
    sheet.getRange("C11").setValue("Subtask / Epic 2.3");
    sheet.getRange("C12").setValue("Subtask / Epic 2.4");
    sheet.getRange("C13").setValue("Subtask / Epic 2.5");

    // Add subtasks or epics for TASK 3
    sheet.getRange("D9").setValue("Subtask / Epic 3.1");
    sheet.getRange("D10").setValue("Subtask / Epic 3.2");
    sheet.getRange("D11").setValue("Subtask / Epic 3.3");
    sheet.getRange("D12").setValue("Subtask / Epic 3.4");
    sheet.getRange("D13").setValue("Subtask / Epic 3.5");

    // Add subtasks or epics for TASK 4
    sheet.getRange("E9").setValue("Subtask / Epic 4.1");
    sheet.getRange("E10").setValue("Subtask / Epic 4.2");
    sheet.getRange("E11").setValue("Subtask / Epic 4.3");
    sheet.getRange("E12").setValue("Subtask / Epic 4.4");
    sheet.getRange("E13").setValue("Subtask / Epic 4.5");

    // Optionally, you can format the headers
    const headerRange = sheet.getRange("B7:E8");
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#f0f0f0");
    headerRange.setHorizontalAlignment("center");

    // Adjust column widths for better visibility
    sheet.setColumnWidth(2, 150);
    sheet.setColumnWidth(3, 150);
    sheet.setColumnWidth(4, 150);
    sheet.setColumnWidth(5, 150);
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