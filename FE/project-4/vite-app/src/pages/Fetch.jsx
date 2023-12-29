import { useEffect, useState, useId } from "react"

const Fetch = () => {
  const [user, setUser] = useState("")
  const [image, setImage] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("idle")

  const id = useId()
  const emailId = `${id} -email`
  const messageId = `${id} -message`

  const path = "https://jor-test-api.vercel.app/api/contact"

  const fetchUser = async () => {
    const response = await fetch("https://api.randomuser.me/")

    const data = await response.json()
    const firstName = data.results[0].name.first
    const userImage = data.results[0].picture.medium

    setUser(firstName)
    setImage(userImage)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const formHandler = async (e) => {
    e.preventDefault()
    try {
      setStatus("loading")
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify({ email, message }),
      })

      const data = await response.json()

      if (data.error) {
        setStatus("error")
      }

      if (data.ok === true) {
        setStatus("success")
      }
      setEmail("")
      setMessage("")

      return data
    } catch (err) {
      console.log(err)
      window.alert("ERROR")
    }
  }

  if (status === "idle") {
    return (
      <>
        <div>
          <h1>Nama User: {user}</h1>
          <img src={image} alt="" />
          <button
            onClick={() => {
              fetchUser()
            }}
          >
            Ubah user
          </button>

          <form onSubmit={formHandler}>
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              key={emailId}
            />

            <br />
            <h3>Message</h3>
            <textarea
              name=""
              id={messageId}
              cols="30"
              rows="10"
              value={message}
              key={messageId}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    )
  }
  if (status === "error") {
    return (
      <>
        <div>
          <div>
            <h1>ERROR!!!!!!!!!!!!!!!!!!!!</h1>
          </div>
        </div>
      </>
    )
  }

  if (status === "success") {
    return (
      <>
        <div>
          <h1>HOREEE</h1>
        </div>
      </>
    )
  }
}

export default Fetch
