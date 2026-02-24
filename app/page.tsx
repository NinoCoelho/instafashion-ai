import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #fdf2f8, #fff7ed)'}}>
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📸</span>
            <span className="text-xl font-bold" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              InstaFashion AI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              Preços
            </Link>
            <Link
              href="/app"
              className="text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Seu Instagram Automaticamente,
            <span className="block mt-2" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Com IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Economize 10h/semana criando conteúdo. Personal shoppers: gerencie posts,
            agende automaticamente, e cresça seus seguidores com calendário inteligente + IA.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/app/onboarding"
              className="text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg"
              style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}
            >
              Começar Agora - Teste Grátis
            </Link>
            <Link
              href="#demo"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-pink-500 hover:bg-pink-50 transition"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O Problema das Personal Shoppers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-2">Tempo Extensivo</h3>
              <p className="text-gray-600">
                5-10h/semana criando conteúdo = tempo que poderia atender clientes
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-semibold mb-2">Inconsistência</h3>
              <p className="text-gray-600">
                Algoritmo pune contas irregulares → perde seguidores e clientes
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Custo Alto</h3>
              <p className="text-gray-600">
                Fotógrafo: R$ 500/mês + Designer: R$ 300/mês = R$ 800/mês
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            A Solução: InstaFashion AI
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-4">Calendário Inteligente</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Drag-and-drop visual</li>
                <li>✅ Templates para personal shoppers</li>
                <li>✅ Calendário sazonal (12/jun, etc.)</li>
                <li>✅ Preview do feed grid</li>
                <li>✅ IA sugere conteúdo automaticamente</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Gerador de Imagens IA</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Upload de roupas suas reais</li>
                <li>✅ IA gera composições profissionais</li>
                <li>✅ Modelos diversas (etnias, tipos)</li>
                <li>✅ Backgrounds profissionais</li>
                <li>✅ Gera post + story do mesmo look</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4">Agendamento Automático</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Conexão Instagram Business API</li>
                <li>✅ Auto-publicação</li>
                <li>✅ Zoneamento Brasil</li>
                <li>✅ Melhores horários automáticos</li>
                <li>✅ Posts saem sozinhos</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Engajamento (likes, comments, saves)</li>
                <li>✅ Melhores horários da SUA audiência</li>
                <li>✅ Performance por tipo de conteúdo</li>
                <li>✅ Growth tracking</li>
                <li>✅ Relatórios mensais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Preços Simples e Transparentes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Especificamente para personal shoppers brasileiras
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-4">
                R$ 49<small className="text-lg text-gray-500">/mês</small>
              </div>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li>✓ 30 posts agendados</li>
                <li>✓ 50 imagens IA</li>
                <li>✓ 3 templates</li>
                <li>✓ Analytics básico</li>
                <li>✓ 1 conta Instagram</li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full py-3 text-center rounded-lg border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-50 transition"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl text-white shadow-lg transform md:scale-105" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Pro</h3>
                <span className="bg-white text-pink-600 text-xs px-2 py-1 rounded">
                  POPULAR
                </span>
              </div>
              <div className="text-4xl font-bold mb-4">
                R$ 99<small className="text-lg opacity-80">/mês</small>
              </div>
              <ul className="space-y-3 mb-6">
                <li>✓ Posts ilimitados</li>
                <li>✓ 200 imagens IA</li>
                <li>✓ Todos os templates</li>
                <li>✓ Analytics avançado</li>
                <li>✓ 3 contas Instagram</li>
                <li>✓ Brand kit customizável</li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full py-3 text-center rounded-lg bg-white text-pink-600 font-semibold hover:bg-gray-100 transition"
              >
                Começar Agora
              </Link>
            </div>

            {/* Premium */}
            <div className="p-8 rounded-2xl bg-white shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-4">
                R$ 199<small className="text-lg text-gray-500">/mês</small>
              </div>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li>✓ Tudo do Pro +</li>
                <li>✓ Imagens IA ilimitadas</li>
                <li>✓ 10 contas Instagram</li>
                <li>✓ IA personalizada</li>
                <li>✓ Suporte VIP (WhatsApp)</li>
                <li>✓ Whitelabel</li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full py-3 text-center rounded-lg border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-50 transition"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mercado Enorme, Zero Concorrência
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">141M</div>
              <p className="text-gray-600">Usuários Instagram Brasil</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">95%</div>
              <p className="text-gray-600">E-commerces usam Instagram</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">R$ 99</div>
              <p className="text-gray-600">Preço médio (vs R$ 500+ concorrentes)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-white" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Pronta para Economizar 10h/Semana?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à waitlist e seja das primeiras a testar
          </p>
          <Link
            href="/app/onboarding"
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Quero Testar Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 border-t bg-white">
        <p>© 2026 InstaFashion AI - Feito com ❤️ para Personal Shoppers Brasileiras</p>
        <p className="text-sm mt-2">São Paulo, Brasil - R$ 49-199/mês - Trial Grátis 14 Dias</p>
      </footer>
    </main>
  )
}
