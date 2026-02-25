import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl gradient-pink-orange-purple flex items-center justify-center">
              <span className="text-white text-xl">✨</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              InstaFashion
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Recursos
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition font-medium">
              Preços
            </Link>
            <Link
              href="/app/onboarding"
              className="gradient-pink-orange-purple text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-pink-50 via-white to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-8">
            <span className="text-2xl mr-2">🎨</span>
            <span className="text-pink-700 font-medium text-sm">Para Personal Shoppers Brasileiras</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Seu Instagram
            <br />
            <span className="gradient-pink-orange-purple bg-clip-text text-transparent">
              no Autopilot
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Economize 10+ horas por semana criando conteúdo. IA gera posts, calendário inteligente agenda tudo, e você cresce enquanto dorme.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/app/onboarding"
              className="group gradient-pink-orange-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/25 transition-all flex items-center justify-center"
            >
              Começar Agora
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#demo"
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
            >
              Ver Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">Usado por personal shoppers em</p>
            <div className="flex items-center space-x-8 text-gray-400">
              <span className="text-2xl font-bold">São Paulo</span>
              <span className="text-2xl">•</span>
              <span className="text-2xl font-bold">Rio de Janeiro</span>
              <span className="text-2xl">•</span>
              <span className="text-2xl font-bold">Belo Horizonte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O Problema Real
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personal shoppers perdem tempo precioso criando conteúdo manualmente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "10h+ Semanais",
                description: "Tempo gasto criando posts que poderia ser usado atendendo clientes"
              },
              {
                icon: "😓",
                title: "Inconsistência",
                description: "Algoritmo pune contas sem post regular → perde seguidores"
              },
              {
                icon: "💸",
                title: "R$ 800+/mês",
                description: "Custo com fotógrafo + designer para conteúdo básico"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Solução
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo automático, tudo profissional, tudo em português
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🤖",
                title: "IA que Entende Fashion",
                features: [
                  "Gera captions em português brasileiro",
                  "Sugere hashtags relevantes",
                  "Adapta ao seu estilo pessoal"
                ]
              },
              {
                icon: "📅",
                title: "Calendário Inteligente",
                features: [
                  "Sugere melhores horários",
                  "Lembra datas importantes (Dia das Mães, Black Friday)",
                  "Preview do feed antes de postar"
                ]
              },
              {
                icon: "🎨",
                title: "Imagens Profissionais",
                features: [
                  "Upload das suas peças reais",
                  "IA cria composições fashion",
                  "Modelos diversos e backgrounds"
                ]
              },
              {
                icon: "⚡",
                title: "Auto-Publicação",
                features: [
                  "Conexão direta com Instagram",
                  "Posts saem sozinhos nos horários certos",
                  "Você só aprova o conteúdo"
                ]
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preço Justo
            </h2>
            <p className="text-xl text-gray-600">
              Específico para mercado brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 49</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>30 posts agendados</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>50 imagens IA</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>3 templates</span>
                </li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full text-center py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition"
              >
                Começar
              </Link>
            </div>

            {/* Pro - Featured */}
            <div className="gradient-pink-orange-purple p-8 rounded-2xl shadow-xl transform md:-translate-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">R$ 99</span>
                <span className="text-white/80">/mês</span>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Posts ilimitados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>200 imagens IA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Todos os templates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>3 contas Instagram</span>
                </li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full text-center py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-gray-50 transition"
              >
                Começar Agora
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">R$ 199</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Tudo do Pro +</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Imagens IA ilimitadas</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span>Suporte WhatsApp</span>
                </li>
              </ul>
              <Link
                href="/app/onboarding"
                className="block w-full text-center py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 transition"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-pink-600 mb-2">141M</div>
              <p className="text-gray-600">Usuários Instagram no Brasil</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">E-commerces usam Instagram</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">10h</div>
              <p className="text-gray-600">Economizadas por semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 gradient-pink-orange-purple">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronta para Automatizar?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Junte-se às personal shoppers que já estão economizando 10h+ por semana
          </p>
          <Link
            href="/app/onboarding"
            className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition"
          >
            Começar Teste Grátis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-pink-orange-purple flex items-center justify-center">
              <span className="text-white text-xl">✨</span>
            </div>
            <span className="text-xl font-bold text-white">InstaFashion</span>
          </div>
          <p className="mb-4">Feito com ❤️ para Personal Shoppers Brasileiras</p>
          <p className="text-sm">© 2026 InstaFashion. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
