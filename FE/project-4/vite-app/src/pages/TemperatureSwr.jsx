import useSWR from "swr"

const TemperatureSwr = () => {
  const port = "https://jor-test-api.vercel.app/api/get-temperature"

  const fetchData = async () => {
    const response = await fetch(port)

    const data = await response.json()

    console.log(data)
    return data
  }

  const { data, error, isLoading } = useSWR(port, fetchData)
  if (isLoading) return <div>loading...</div>
  if (error) return <div>PUTAAA....</div>

  console.log(data)

  return (
    <div>
      <div>INI TEMPERATUR BETEWE</div>
      <div>Temper:{data.temperature}</div>
    </div>
  )
}

export default TemperatureSwr
