const KEY = 'okuma-listem-kitaplar'

export function loadBooks() {
  try {
    const data = localStorage.getItem(KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveBooks(books) {
  localStorage.setItem(KEY, JSON.stringify(books))
}
