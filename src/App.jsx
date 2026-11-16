import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold">📚 Okuma Listem</h1>
          <p className="text-indigo-100 text-sm">Okumak istediğin kitapları ekle, takip et.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <HomePage />
      </main>

      <footer className="text-center text-xs text-slate-400 pb-6">
        Veriler tarayıcının LocalStorage alanında saklanır.
      </footer>
    </div>
  )
}

export default App
