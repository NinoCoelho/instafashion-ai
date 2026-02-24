'use client';

import { useState, useEffect } from 'react';
import { apiClient, CalendarPost } from '@/lib/api';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [calendar, setCalendar] = useState<CalendarPost[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedPost, setSelectedPost] = useState<CalendarPost | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    setLoading(true);
    try {
      // Get user profile from localStorage
      const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      const userProfile = typeof window !== 'undefined' ? localStorage.getItem('userProfile') : null;

      if (!userId || !userProfile) {
        // Redirect to onboarding if not completed
        window.location.href = '/app/onboarding';
        return;
      }

      const profile = JSON.parse(userProfile);

      // Generate calendar
      const calendarData = await apiClient.generateCalendar({
        style: profile.style || 'Minimalista Chic',
        contentTypes: profile.contentTypes || ['looks', 'tips'],
        frequency: profile.frequency || 5,
        targetAudience: profile.targetAudience,
        season: 'verão',
        region: 'brasil',
      });

      setCalendar(calendarData.calendar);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= days; i++) {
      daysArray.push(new Date(year, month, i));
    }

    return daysArray;
  };

  const getPostForDay = (day: Date | null) => {
    if (!day) return null;
    const dateStr = day.toISOString().split('T')[0];
    return calendar.find((post) => post.date.startsWith(dateStr));
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" style={{ width: 48, height: 48 }} />
          <p className="text-gray-600">Gerando seu calendário personalizado...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📸</span>
            <span className="text-xl font-bold instagram-gradient-text">
              InstaFashion AI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-600 transition">
              Analytics
            </button>
            <button className="text-gray-600 hover:text-pink-600 transition">
              Configurações
            </button>
            <button className="instagram-gradient text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Novo Post
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Calendário de {monthNames[currentMonth.getMonth()]} de {currentMonth.getFullYear()}
            </h1>
            <p className="text-gray-600">
              {calendar.length} posts agendados • Pronto para publicar
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition"
            >
              ←
            </button>
            <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition">
              Hoje
            </button>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-2xl font-bold">{calendar.length}</div>
            <div className="text-gray-600 text-sm">Posts este mês</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-2">📸</div>
            <div className="text-2xl font-bold">{calendar.filter(p => p.type === 'look').length}</div>
            <div className="text-gray-600 text-sm">Looks</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-2">💡</div>
            <div className="text-2xl font-bold">{calendar.filter(p => p.type === 'tip').length}</div>
            <div className="text-gray-600 text-sm">Dicas</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold">{calendar.filter(p => p.isSeasonal).length}</div>
            <div className="text-gray-600 text-sm">Sazonais</div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <div key={day} className="text-center font-semibold text-gray-600 text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const post = getPostForDay(day);
              const isToday = day && day.toDateString() === new Date().toDateString();

              return (
                <div
                  key={index}
                  onClick={() => post && setSelectedPost(post)}
                  className={`min-h-[100px] p-2 rounded-lg border-2 transition-all cursor-pointer ${
                    !day
                      ? 'bg-transparent border-transparent'
                      : isToday
                      ? 'border-pink-500 bg-pink-50'
                      : post
                      ? 'border-pink-200 bg-gradient-to-br from-pink-50 to-orange-50 hover:border-pink-400'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {day && (
                    <>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        {day.getDate()}
                      </div>
                      {post && (
                        <div className="space-y-1">
                          <div className="text-xs font-semibold text-pink-600 truncate">
                            {post.theme}
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs">
                              {post.type === 'look' && '👗'}
                              {post.type === 'tip' && '💡'}
                              {post.type === 'promotion' && '🏷️'}
                              {post.type === 'story' && '📱'}
                              {post.type === 'reel' && '🎬'}
                            </span>
                            {post.isSeasonal && <span className="text-xs">🎄</span>}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Post Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedPost.theme}</h3>
                    <p className="text-gray-600">
                      {new Date(selectedPost.date).toLocaleDateString('pt-BR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                      {selectedPost.type.toUpperCase()}
                    </span>
                    {selectedPost.isSeasonal && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        🎄 Sazonal
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Caption:</h4>
                    <p className="text-gray-700 whitespace-pre-line">{selectedPost.caption}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Hashtags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Visual:</h4>
                    <p className="text-gray-600">{selectedPost.visual}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Call-to-Action:</h4>
                    <p className="text-gray-600">{selectedPost.cta}</p>
                  </div>

                  <div className="flex space-x-3 pt-4 border-t">
                    <button className="flex-1 instagram-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                      Gerar Imagem com IA
                    </button>
                    <button className="flex-1 border-2 border-pink-500 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
