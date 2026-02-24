'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient, OnboardingData } from '@/lib/api';

const styles = [
  'Minimalista Chic',
  'Boho Fashion',
  'Street Style',
  'Elegante Clássico',
  'Casual Moderno',
  'Romântico',
  'Sport/Loungewear',
  'Vintage/Retro',
];

const contentTypes = [
  { id: 'looks', label: 'Looks completos', emoji: '👗' },
  { id: 'tips', label: 'Dicas de estilo', emoji: '💡' },
  { id: 'promotions', label: 'Promoções', emoji: '🏷️' },
  { id: 'trends', label: 'Tendências', emoji: '✨' },
  { id: 'behind', label: 'Bastidores', emoji: '🎬' },
  { id: 'testimonials', label: 'Depoimentos', emoji: '💬' },
];

const frequencies = [
  { value: 3, label: '3x/semana (Leve)', description: 'Ideal para começar' },
  { value: 5, label: '5x/semana (Moderado)', description: 'Recomendado' },
  { value: 7, label: 'Todos os dias (Intenso)', description: 'Máximo engajamento' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<OnboardingData>({
    name: '',
    email: '',
    phone: '',
    style: '',
    contentTypes: [],
    frequency: 5,
    targetAudience: '',
    socialMedia: '',
  });

  const handleNext = () => {
    setError('');
    if (step === 1 && (!formData.name || !formData.email)) {
      setError('Por favor, preencha nome e email');
      return;
    }
    if (step === 2 && !formData.style) {
      setError('Por favor, selecione seu estilo');
      return;
    }
    if (step === 3 && (!formData.contentTypes || formData.contentTypes.length === 0)) {
      setError('Por favor, selecione pelo menos um tipo de conteúdo');
      return;
    }
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    try {
      const result = await apiClient.submitOnboarding(formData);

      // Store user ID in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('userProfile', JSON.stringify(result));
      }

      // Redirect to app
      router.push('/app/dashboard');
    } catch (err: any) {
      console.error('Onboarding error:', err);
      setError('Erro ao processar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const toggleContentType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      contentTypes: prev.contentTypes?.includes(type)
        ? prev.contentTypes.filter((t) => t !== type)
        : [...(prev.contentTypes || []), type],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">📸</span>
            <span className="text-2xl font-bold instagram-gradient-text">
              InstaFashion AI
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Vamos Personalizar seu Instagram!
          </h1>
          <p className="text-gray-600">
            Passo {step} de 5 - {Math.round((step / 5) * 100)}% completo
          </p>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="instagram-gradient h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">👋 Olá! Qual seu nome?</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Maria Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Style */}
          {step === 2 && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">✨ Qual seu estilo de Personal Shopper?</h2>
              <div className="grid grid-cols-2 gap-3">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setFormData({ ...formData, style })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.style === style
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">👗</div>
                    <div className="font-medium text-sm">{style}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Content Types */}
          {step === 3 && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">📝 Que tipo de conteúdo você posta?</h2>
              <div className="space-y-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleContentType(type.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      formData.contentTypes?.includes(type.id)
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{type.emoji}</span>
                      <span className="font-medium">{type.label}</span>
                      {formData.contentTypes?.includes(type.id) && (
                        <span className="ml-auto text-pink-600">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Frequency */}
          {step === 4 && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">📅 Quantas vezes por semana?</h2>
              <div className="space-y-4">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setFormData({ ...formData, frequency: freq.value })}
                    className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                      formData.frequency === freq.value
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{freq.label}</span>
                      {formData.frequency === freq.value && (
                        <span className="text-pink-600 text-2xl">✓</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{freq.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Additional Info */}
          {step === 5 && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">🎯 Últimos detalhes!</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quem é seu público-alvo? (opcional)
                  </label>
                  <textarea
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    rows={3}
                    placeholder="Mulheres 25-35, classe A/B, interessadas em moda..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Instagram atual (opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="@seu.instagram"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-semibold ${
                step === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ← Voltar
            </button>

            {step < 5 ? (
              <button
                onClick={handleNext}
                className="instagram-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Continuar →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="instagram-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center"
              >
                {loading ? (
                  <>
                    <div className="spinner mr-2" />
                    Processando...
                  </>
                ) : (
                  'Gerar Meu Calendário 🎉'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
