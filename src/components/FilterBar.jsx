import { STATUSES } from '../interfaces/book'

function FilterBar({ books, filter, onFilterChange, search, onSearchChange }) {
  const tabs = [['hepsi', 'Hepsi'], ...Object.entries(STATUSES).map(([key, s]) => [key, s.label])]

  function count(key) {
    return key === 'hepsi' ? books.length : books.filter((b) => b.status === key).length
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
      <div className="flex flex-wrap gap-1.5">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={
              'px-3.5 py-1 rounded-full text-sm transition ' +
              (filter === key
                ? 'bg-plum text-white'
                : 'text-mauve hover:bg-blush/60')
            }
          >
            {label} <span className="opacity-60">{count(key)}</span>
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ara..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-transparent border-b border-blush focus:border-rose px-1 py-1 text-sm focus:outline-none sm:w-44"
      />
    </div>
  )
}

export default FilterBar
