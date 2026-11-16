import { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import FilterBar from '../components/FilterBar'
import { createBook } from '../interfaces/book'
import { loadBooks, saveBooks } from '../utils/storage'

function HomePage() {
  const [books, setBooks] = useState(loadBooks)
  const [filter, setFilter] = useState('hepsi')
  const [search, setSearch] = useState('')

  // kitaplar her değiştiğinde localStorage'a kaydet
  useEffect(() => {
    saveBooks(books)
  }, [books])

  // Ekle
  function addBook(title, author) {
    setBooks([createBook(title, author), ...books])
  }

  // Güncelle
  function updateBook(id, changes) {
    setBooks(books.map((b) => (b.id === id ? { ...b, ...changes } : b)))
  }

  // Sil
  function deleteBook(id) {
    if (confirm('Bu kitabı silmek istediğine emin misin?')) {
      setBooks(books.filter((b) => b.id !== id))
    }
  }

  // Listeleme (filtre + arama)
  const visibleBooks = books.filter((b) => {
    const matchesFilter = filter === 'hepsi' || b.status === filter
    const text = (b.title + ' ' + b.author).toLowerCase()
    return matchesFilter && text.includes(search.toLowerCase())
  })

  return (
    <div className="space-y-5">
      <BookForm onAdd={addBook} />
      <FilterBar
        books={books}
        filter={filter}
        onFilterChange={setFilter}
        search={search}
        onSearchChange={setSearch}
      />
      <BookList books={visibleBooks} onUpdate={updateBook} onDelete={deleteBook} />
    </div>
  )
}

export default HomePage
