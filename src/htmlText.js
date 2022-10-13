module.exports = function htmlText(employees) {
  let interns = [];
  let engineers = [];
  for (i=1; i<employees.length; i++) {
    if (employees[i].role === "Engineer") {
      engineers.push(employees[i])
    } else {
      interns.push(employees[i])
    }
  }
  let text = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Database</title>
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="jumbotron ml-2">
      <h1 class="display-4">${employees[0].projectName}</h1>
      <p class="lead" id="headerText">A project developed by ${employees[0].name} and team!</p>
      <ul id="managerInfo">
        <li>${employees[0].name} </li>
        <li>Office Number: ${employees[0].officeNo}</li>
        <li>Employee ID: ${employees[0].id}</li>
        <li>Email: <a href="mailto${employees[0].email}" target="_blank">${employees[0].email}</a></li>
      </ul>
    </div>`
  
  if (engineers.length > 0) {
    text += `\n
  <h1 class="d-flex align-self-center">Engineers</h1>
  <ul class="list-group employeeInfo" >`;
    for (i = 0; i < engineers.length; i++) {
      text += `
    <li class="list-group-item">
      <ul>
        <li><h3>${i+1}. Name: ${engineers[i].name} </h3></li>
        <li> ID: ${engineers[i].id} </li>
        <li> Email: <a href="mailto${engineers[i].email}" target="_blank">${engineers[i].email} </a></li>
        <li> Github: <a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a></li>
      </ul>
    </li>\n`;
    }
    text += `
  </ul>`
  }

  if (interns.length > 0) {
    text += `\n
  <h1 class="d-flex align-self-center">Interns</h1>
  <ul class="list-group employeeInfo">`;
    for (i = 0; i < interns.length; i++) {
      text += `
    <li class="list-group-item">
      <ul>
        <li><h3>${i+1}. Name: ${interns[i].name} </h3></li>
        <li> ID: ${interns[i].id} </li>
        <li> Email: <a href="mailto${interns[i].email}" target="_blank">${interns[i].email} </a></li>
        <li> School: ${interns[i].school}</li>
      </ul>
    </li>`;
    }
    text += `
  </ul>`;
  }
  
  text += `
  <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  </body>
  </html>`
  return text;
}