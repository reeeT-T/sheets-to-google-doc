function createStudentReports() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const templateId = "1PTTMCG1vE4XWkbGlfjsSLi3Fl4D2ez1dy5atY-Eom3c";

  for (let i = 1; i < data.length; i++) {

    const name = data[i][0];
    const level = data[i][1];
    const summary = data[i][2];
    const points = data[i][3];

    const copy = DriveApp.getFileById(templateId).makeCopy(`${name} Report`);

    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();

    body.replaceText("{{NAME}}", name);
    body.replaceText("{{LEVEL}}", level);
    body.replaceText("{{SUMMARY}}", summary);
    body.replaceText("{{POINTS}}", points);

    doc.saveAndClose();
  }
}