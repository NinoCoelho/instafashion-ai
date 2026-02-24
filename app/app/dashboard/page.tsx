'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  date: Date;
  type: 'look' | 'tip' | 'promotion' | 'trend';
  status: 'scheduled' | 'posted' | 'draft';
  image?: string;
  caption?: string;
}

export default function DashboardPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Generate mock calendar data
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const hasPost = Math.random() > 0.7; // 30% chance of having a post
      days.push({
        date,
        hasPost,
        postType: hasPost ? ['look', 'tip', 'promotion', 'trend'][Math.floor(Math.random() * 4)] as Post['type'] : undefined,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getPostIcon = (type?: Post['type']) => {
    if (!type) return null;
    const icons = {
      look: '👗',
      tip: '💡',
      promotion: '🏷️',
      trend: '✨',
    };
    return icons[type];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-orange-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <span className="text-xl font-bold text-gray-900">InstaFashion</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                M
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Posts este mês', value: '24', change: '+12%', icon: '📝' },
            { label: 'Engajamento', value: '4.8%', change: '+0.8%', icon: '❤️' },
            { label: 'Seguidores', value: '2.4K', change: '+156', icon: '👥' },
            { label: 'Próximo post', value: 'Em 2h', change: 'Hoje', icon: '⏰' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentMonth(new Date())}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Hoje
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, idx) => {
              if (!day) {
                return <div key={idx} className="aspect-square" />;
              }

              const isToday = day.date.toDateString() === new Date().toDateString();
              
              return (
                <div
                  key={idx}
                  onClick={() => day.hasPost && setShowModal(true)}
                  className={`aspect-square rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                    isToday
                      ? 'border-pink-500 bg-pink-50'
                      : day.hasPost
                      ? 'border-orange-200 bg-orange-50 hover:border-orange-300'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="p-2 h-full flex flex-col items-center justify-center">
                    <span className={`text-sm font-medium ${
                      isToday ? 'text-pink-600' : 'text-gray-700'
                    }`}>
                      {day.date.getDate()}
                    </span>
                    {day.hasPost && (
                      <span className="text-2xl mt-1">{getPostIcon(day.postType)}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
            <span>➕</span>
            <span>Novo Post</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition">
            <span>🤖</span>
            <span>Gerar com IA</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition">
            <span>📊</span>
            <span>Ver Analytics</span>
          </button>
        </div>
      </div>

      {/* Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Post Agendado</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl flex items-center justify-center text-4xl">
                👗
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Data</span>
                  <span className="font-medium text-gray-900">24 de Fevereiro</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Horário</span>
                  <span className="font-medium text-gray-900">14:00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Agendado
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Editar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 via-orange-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
