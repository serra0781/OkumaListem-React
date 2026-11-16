import { STATUSES } from '../interfaces/book'

function FilterBar({ books, filter, onFilterChange, search, onSearchChange }) {
  const tabs = [['hepsi', 'Hepsi'], ...Object.entries(STATUSES).map(([key, s]) => [key, s.label])]

  function count(key) {
    return key === 'hepsi' ? books.length : books.filter((b) => b.status === key).length
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
      <div className="flex flex-wrap gap-2">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={
              'px-3 py-1 rounded-full text-sm border ' +
              (filter === key
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50')
            }
          >
            {label} ({count(key)})
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ara..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-slate-300 rounded px-3 py-1.5 text-sm bg-white"
      />
    </div>
  )
}

export default FilterBar
