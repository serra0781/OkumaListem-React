import { useState } from 'react'

const inputClass =
  'w-full bg-cream/70 border border-blush rounded-xl px-4 py-2.5 text-plum focus:outline-none focus:border-rose focus:bg-white transition'

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) {
      setError('Kitap adını yazmayı unuttun')
      return
    }
    onAdd(title, author || 'Bilinmiyor')
    setTitle('')
    setAuthor('')
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur rounded-3xl border border-blush p-5 shadow-[0_8px_30px_-12px_rgba(200,104,127,0.25)]"
    >
      <h2 className="font-serif italic text-lg text-plum mb-3">Yeni bir kitap ekle</h2>
      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-2.5">
        <input
          type="text"
          placeholder="Kitap adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Yazar"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={inputClass}
        />
        <button
          type="submit"
          className="bg-rose hover:bg-rose-dark text-white font-semibold rounded-xl px-6 py-2.5 transition"
        >
          Ekle
        </button>
      </div>
      {error && <p className="font-hand text-xl text-rose-dark mt-2">{error}</p>}
    </form>
  )
}

export default BookForm
