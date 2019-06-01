const httpGet = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      callback(request.responseText);
    } else {
      // We reached our target server, but it returned an error
      console.log('server error');
    }
  };

  request.onerror = () => {
    // There was a connection error of some sort
    console.log('connection error');
  };

  request.send();
}

setInterval(() => {
  httpGet('/msgs', (res) => {
    const divMsgs = document.querySelector('#msgs');
    divMsgs.innerHTML = '';
    const msgs = JSON.parse(res);

    Object.keys(msgs).reverse().forEach((key) => {
      divMsgs.innerHTML += `
        <div>
          <h3>${msgs[key].autor}</h3>
          <p>${msgs[key].msg}</p>
        </div>
        <hr>
      `;
    });
  });
}, 100);