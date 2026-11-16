import { useState } from 'react'

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) {
      setError('Kitap adı boş olamaz')
      return
    }
    onAdd(title, author || 'Bilinmiyor')
    setTitle('')
    setAuthor('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-slate-700 mb-3">Yeni Kitap Ekle</h2>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Kitap adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          placeholder="Yazar"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="flex-1 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded px-5 py-2"
        >
          Ekle
        </button>
      </div>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </form>
  )
}

export default BookForm
