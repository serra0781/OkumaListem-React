// Kitap nesnesinin yapısı
// {
//   id: string,
//   title: string,      -> kitap adı
//   author: string,     -> yazar
//   status: string,     -> 'okunacak' | 'okunuyor' | 'okundu'
//   createdAt: string
// }

export const STATUSES = {
  okunacak: { label: 'Okunacak', color: 'bg-[#efe9f7] text-[#7a6597]' },
  okunuyor: { label: 'Okunuyor', color: 'bg-[#fdebd9] text-[#b7774a]' },
  okundu: { label: 'Okundu', color: 'bg-[#e4f1e6] text-[#5f8b67]' },
}

// her kitaba sırt rengi olarak kullanılan pastel renkler
const SPINE_COLORS = ['#f4b6c2', '#c9b6e4', '#f7cfa9', '#b5d8c0', '#a9cbe8', '#f2d48f']

export function spineColor(text) {
  let n = 0
  for (const ch of String(text)) n = (n * 31 + ch.charCodeAt(0)) % 997
  return SPINE_COLORS[n % SPINE_COLORS.length]
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
