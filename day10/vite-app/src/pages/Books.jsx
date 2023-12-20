import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fecthBooks = async () => {
      try {
        const response = await import("../books.json")
        setBooks(response?.books)
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
      <div className="text-center text-4xl mt-8">Book List</div>
      <div className="grid grid-cols-2 gap-4 mt-12">
        {books?.map((book) => (
          <div
            key={book.id}
            className="border-2 border-sky-500 p-4 rounded-md shadow-lg"
          >
            <Link to={`/books/${book.id}`}>
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-96 object-fill mb-2"
              />
            </Link>
            <div className="font-bold text-3xl text-center">{book.title}</div>
            <div className="text-lg  mt-2s">Author: {book.author}</div>
            <div className="text-lg">Genre: {book.genre}</div>
            <div className="text-lg mt-2">Publish: {book.publishedYear}</div>
            <div className="text-sm mt-4">{book.description}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
