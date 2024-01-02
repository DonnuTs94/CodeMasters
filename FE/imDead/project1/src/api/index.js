import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://bookapi.cm.hmw.lol/api/",
})

export { axiosInstance }
