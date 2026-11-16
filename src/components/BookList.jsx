import BookItem from './BookItem'

function BookList({ books, onUpdate, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="text-center py-14">
        <p className="font-hand text-3xl text-rose">raf şimdilik boş</p>
        <p className="text-sm text-mauve mt-1">Yukarıdan ilk kitabını ekleyebilirsin.</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default BookList
