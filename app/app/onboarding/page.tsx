'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  { value: 3, label: '3x/semana', description: 'Ideal para começar' },
  { value: 5, label: '5x/semana', description: 'Recomendado' },
  { value: 7, label: 'Todos os dias', description: 'Máximo engajamento' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    style: '',
    contentTypes: [] as string[],
    frequency: 5,
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simula API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    localStorage.setItem('onboarding', JSON.stringify(formData));
    router.push('/app/dashboard');
  };

  const toggleContentType = (id: string) => {
    setFormData(prev => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(id)
        ? prev.contentTypes.filter(t => t !== id)
        : [...prev.contentTypes, id]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seu nome
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="Maria Silva"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seu email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="maria@exemplo.com"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Qual seu estilo de personal shopper?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {styles.map(style => (
                <button
                  key={style}
                  onClick={() => setFormData({ ...formData, style })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.style === style
                      ? 'border-pink-500 bg-pink-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-sm font-medium">{style}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Que tipo de conteúdo você posta? (Selecione múltiplos)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {contentTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => toggleContentType(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.contentTypes.includes(type.id)
                      ? 'border-pink-500 bg-pink-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl mr-2">{type.emoji}</span>
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Com que frequência você quer postar?
            </label>
            <div className="space-y-3">
              {frequencies.map(freq => (
                <button
                  key={freq.value}
                  onClick={() => setFormData({ ...formData, frequency: freq.value })}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    formData.frequency === freq.value
                      ? 'border-pink-500 bg-pink-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{freq.label}</div>
                      <div className="text-sm text-gray-500">{freq.description}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.frequency === freq.value ? 'border-pink-500' : 'border-gray-300'
                    }`}>
                      {formData.frequency === freq.value && (
                        <div className="w-3 h-3 rounded-full bg-pink-500" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.style;
      case 3:
        return formData.contentTypes.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-orange-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm">✨</span>
            </div>
            <span className="font-bold text-gray-900">InstaFashion</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Passo {step} de {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {step === 1 && 'Vamos começar!'}
            {step === 2 && 'Seu estilo'}
            {step === 3 && 'Seu conteúdo'}
            {step === 4 && 'Sua frequência'}
          </h1>
          <p className="text-gray-600 mb-8">
            {step === 1 && 'Primeiro, precisamos saber quem é você.'}
            {step === 2 && 'Qual é o seu estilo como personal shopper?'}
            {step === 3 && 'Que tipo de conteúdo você cria?'}
            {step === 4 && 'Com que frequência você quer postar no Instagram?'}
          </p>

          {renderStep()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                step === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ← Voltar
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed() || loading}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                !canProceed() || loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25'
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </span>
              ) : step === totalSteps ? (
                'Concluir →'
              ) : (
                'Continuar →'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
