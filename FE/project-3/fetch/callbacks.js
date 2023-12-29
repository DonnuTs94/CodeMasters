const getTodos = (source) => {
  const request = new XMLHttpRequest()

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = request.responseText
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

getTodos("./todos/nadhif.json")
  .then((data) => {
    console.log(data, "nadif")
    return getTodos("./todos/gonzalezz.json")
  })
  .then((data) => {
    console.log(data, "gonza")
    return getTodos("./todos/harry.json")
  })
  .then((data) => {
    console.log(data, "hary")
  })
  .catch((err) => console.log(err))

getTodos("./todos/harry.json", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    // console.log(data)
  }
})

getTodos("./todos/gonzalezz.json", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    // console.log(data)
  }
})
