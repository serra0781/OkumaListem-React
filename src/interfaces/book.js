// Kitap nesnesinin yapısı
// {
//   id: string,
//   title: string,      -> kitap adı
//   author: string,     -> yazar
//   status: string,     -> 'okunacak' | 'okunuyor' | 'okundu'
//   createdAt: string
// }

export const STATUSES = {
  okunacak: { label: 'Okunacak', color: 'bg-slate-200 text-slate-700' },
  okunuyor: { label: 'Okunuyor', color: 'bg-amber-100 text-amber-800' },
  okundu: { label: 'Okundu', color: 'bg-green-100 text-green-800' },
}

export function createBook(title, author, status = 'okunacak') {
  return {
    id: Date.now().toString(),
    title: title.trim(),
    author: author.trim(),
    status,
    createdAt: new Date().toISOString(),
  }
}
