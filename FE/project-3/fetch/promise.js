const getTodos = (source, callBackFn) => {
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = request.response
      callBackFn(undefined, data)
    } else if (request.readyState === 4) {
      callBackFn("ERRRROOOOOOOOOOOERRRRRR", undefined)
    }
  })

  request.open(
    "GET",
    source
    //   "https://jsonplaceholder.typicode.com/todos/1"
  )
  request.send()
}

getTodos("./todos/nadhif.json", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }

  getTodos("./todos/harry.json", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })

  getTodos("./todos/gonzalezz.json", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
})
