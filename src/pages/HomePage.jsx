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
    const text = (b.title + ' ' + b.author).toLocaleLowerCase('tr')
    return matchesFilter && text.includes(search.toLocaleLowerCase('tr'))
  })

  const finished = books.filter((b) => b.status === 'okundu').length

  return (
    <>
      <header className="text-center mb-10">
        <p className="font-hand text-2xl text-rose -mb-1">kitaplarım</p>
        <h1 className="font-serif text-5xl font-semibold text-plum tracking-tight">Okuma Listem</h1>
        <p className="mt-3 text-sm text-mauve">
          {books.length === 0
            ? 'Henüz kitap eklemedin'
            : `${books.length} kitap · ${finished} tanesi bitti`}
        </p>
      </header>

      <div className="space-y-6">
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
    </>
  )
}

export default HomePage
