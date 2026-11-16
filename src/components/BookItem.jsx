import { useState } from 'react'
import { STATUSES, spineColor } from '../interfaces/book'

function BookItem({ book, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(book.title)
  const [author, setAuthor] = useState(book.author)

  function save() {
    if (!title.trim()) return
    onUpdate(book.id, { title: title.trim(), author: author.trim() || 'Bilinmiyor' })
    setEditing(false)
  }

  function cancel() {
    setTitle(book.title)
    setAuthor(book.author)
    setEditing(false)
  }

  const status = STATUSES[book.status]
  const done = book.status === 'okundu'

  return (
    <li className="group flex bg-white/85 rounded-2xl border border-blush/70 overflow-hidden hover:shadow-[0_6px_24px_-10px_rgba(200,104,127,0.35)] transition">
      {/* kitap sırtı */}
      <span className="w-2.5 shrink-0" style={{ backgroundColor: spineColor(book.id + book.title) }} />

      {editing ? (
        <div className="flex-1 p-4 flex flex-col sm:flex-row gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border border-blush rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose"
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="flex-1 border border-blush rounded-lg px-3 py-1.5 focus:outline-none focus:border-rose"
          />
          <div className="flex gap-2">
            <button onClick={save} className="bg-rose hover:bg-rose-dark text-white rounded-lg px-4 py-1.5 text-sm">
              Kaydet
            </button>
            <button onClick={cancel} className="text-mauve hover:text-plum px-2 text-sm">
              Vazgeç
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className={'font-serif text-lg leading-snug ' + (done ? 'text-mauve line-through decoration-rose decoration-2' : 'text-plum')}>
              {book.title}
            </p>
            <p className="text-sm text-mauve">{book.author}</p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={book.status}
              onChange={(e) => onUpdate(book.id, { status: e.target.value })}
              className={'text-xs font-semibold rounded-full px-3 py-1.5 cursor-pointer focus:outline-none ' + status.color}
            >
              {Object.entries(STATUSES).map(([key, s]) => (
                <option key={key} value={key}>
                  {s.label}
                </option>
              ))}
            </select>

            <button onClick={() => setEditing(true)} className="text-sm text-mauve hover:text-plum underline-offset-4 hover:underline">
              düzenle
            </button>
            <button onClick={() => onDelete(book.id)} className="text-sm text-mauve hover:text-rose-dark underline-offset-4 hover:underline">
              sil
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default BookItem
