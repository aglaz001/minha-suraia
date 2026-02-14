import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
            💖
          </h1>
          <h2 className="text-4xl font-bold text-rose-900">
            Valentine Interactive Experience
          </h2>
          <p className="text-xl text-rose-700 max-w-md mx-auto">
            Uma experiência interativa especial criada com amor
          </p>
        </div>
        
        <Link 
          href="/valentine/index.html"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Abrir Experiência
          <span className="text-2xl">💕</span>
        </Link>

        <div className="pt-8 text-sm text-rose-600">
          <p>Criado com HTML, CSS e JavaScript puro</p>
          <p className="mt-2">Todas as funcionalidades implementadas ✨</p>
        </div>
      </div>
    </div>
  )
}
