module.exports = function htmlText(employees) {
  let text = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Database</title>
  </head>
  <body>
  <div class="jumbotron">
    <h1 class="display-4">${engineers[0].projectName}</h1>
    <p class="lead">A project developed by ${engineers[0].name} and team!</p>
    <hr class="my-4">
    <p>
      ${engineers[0].name} 
      Office Number: ${engineers[0].officeNo}
      Employee ID: ${engineers[0].id}
      Email: ${engineers[0].email}
    </p>
  </div>`
  
  if (engineers.length > 1) {
    text += `<h1 class="d-flex align-self-center">Developers</h1>
    <ul class="list-group">`;
    for (i = 1; i < engineers.length; i++) {
      text += `<li class="list-group-item">
        <ul>
      <li><h3>${i}. Name: ${engineers[i].name} </h3></li>
      <li> ID: ${engineers[i].id} </li>
      <li> Email: ${engineers[i].email} </li>
      <li> Github: <a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a></li>
        </ul>
      </li>`;
    }
    text += `</ul>`
  }
  
  if (interns.length > 0) {
    text += `<h1 class="d-flex align-self-center">Interns</h1>
    <ul class="list-group">`;
    for (i = 0; i < interns.length; i++) {
      text += `<li class="list-group-item">
        <ul>
      <li><h3>${i+1}. Name: ${interns[i].name} </h3></li>
      <li> ID: ${interns[i].id} </li>
      <li> Email: ${interns[i].email} </li>
      <li> School: ${interns[i].school} </li>
        </ul>
      </li>`;
    }
    text += `</ul>`
  }
  
  text += `</ul>
  </body>
  </html>`
  }