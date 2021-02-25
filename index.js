// Add your code here


function submitData(name, email) {
  const url = 'http://localhost:3000/users'
  const formData = {
    name: name,
    email: email
  }
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  return fetch(url, configObj)
    .then(function(response) {
      return response.json()
    })
    .then(function(object) {
      appendObject(object)
    })
    .catch(function(error) {
      const div = document.createElement('div')
      div.innerHTML = error.message
      document.body.appendChild(div)
    })
}


function appendObject(object) {
  const id = object.id
  const div = document.createElement('div')
  div.innerHTML = id
  document.body.appendChild(div)
  console.log(object)
}