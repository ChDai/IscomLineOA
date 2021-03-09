function bindAction() {
    console.log("bind");
    postData("https://2414.api.gosu.bar/customize/postEndBind",null)
}

function postData(url, data) {
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json()) // 輸出成 json
  }