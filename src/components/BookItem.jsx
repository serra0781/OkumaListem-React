import { useState } from 'react'
import { STATUSES } from '../interfaces/book'

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

  if (editing) {
    return (
      <li className="bg-white rounded-lg shadow p-3 flex flex-col sm:flex-row gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-slate-300 rounded px-2 py-1"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="flex-1 border border-slate-300 rounded px-2 py-1"
        />
        <div className="flex gap-2">
          <button onClick={save} className="bg-green-600 text-white rounded px-3 py-1 text-sm">
            Kaydet
          </button>
          <button onClick={cancel} className="bg-slate-200 rounded px-3 py-1 text-sm">
            İptal
          </button>
        </div>
      </li>
    )
  }

  const status = STATUSES[book.status]

  return (
    <li className="bg-white rounded-lg shadow p-3 flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="flex-1">
        <p className={'font-medium ' + (book.status === 'okundu' ? 'line-through text-slate-400' : 'text-slate-800')}>
          {book.title}
        </p>
        <p className="text-sm text-slate-500">{book.author}</p>
      </div>

      <select
        value={book.status}
        onChange={(e) => onUpdate(book.id, { status: e.target.value })}
        className={'text-sm rounded px-2 py-1 border-0 ' + status.color}
      >
        {Object.entries(STATUSES).map(([key, s]) => (
          <option key={key} value={key}>
            {s.label}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="text-sm border border-indigo-300 text-indigo-600 rounded px-3 py-1 hover:bg-indigo-50"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="text-sm border border-red-300 text-red-600 rounded px-3 py-1 hover:bg-red-50"
        >
          Sil
        </button>
      </div>
    </li>
  )
}

export default BookItem
