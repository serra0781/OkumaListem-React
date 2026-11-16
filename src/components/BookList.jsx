import BookItem from './BookItem'

function BookList({ books, onUpdate, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-slate-500">
        Listede kitap yok. Yukarıdan yeni bir kitap ekleyebilirsin.
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default BookList
