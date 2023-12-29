const getTodos = async (source) => {
  const request = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState === 4) {
        reject(new Error("Could not fetch the data"))
      }
    })

    request.open(
      "GET",
      source
      //   "https://jsonplaceholder.typicode.com/todos/1"
    )
    request.send()
  })
}

const fetchData = async () => {
  try {
    const response = await await fetch("https://api.randomuser.me/")

    const data = await response.json()

    // console.log(data.results[0].name.first)

    const firstName = data.results[0].name.first

    const h1 = document.getElementsByTagName("h1")[0]
    h1.innerHTML = firstName

    return data
  } catch (err) {
    console.log(err.message)
  }
}

// ketika ingin menggunakan data di luar block
// dapat menggunakan .then()

fetchData().then((data) => console.log(data))
