/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const BooksDetail = () => {
  const [books, setBook] = useState([])
  const { id } = useParams()

  let indexBook = id - 1

  useEffect(() => {
    const fecthBooks = async () => {
      try {
        const response = await import("../books.json")
        setBook(response?.books[indexBook])
      } catch (err) {
        throw new Error("Error")
      }
    }

    return () => {
      fecthBooks()
    }
  }, [])

  return (
    <>
      <div className="max-2xl mx-auto p-8 bg-white shadow-lg rounded-md">
        <div className="flex justify-center mb-4">
          <img
            src={books.coverImage}
            alt={books.title}
            className="w-1/2 h-96 object-fill mb-2"
          />
        </div>
        <div className="text-3xl font-bold  text-center mb-10">
          {books.title}
        </div>
        <div className="text-gray-600 mb-2">{books.author}</div>
        <div className="text-gray-600 mb-2">{books.genre}</div>
        <div className="text-gray-600 mb-2">{books.publishedYear}</div>
        <div className="text-gray-700">{books.description}</div>
      </div>
    </>
  )
}

export default BooksDetail
