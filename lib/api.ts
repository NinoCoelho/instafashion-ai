import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface OnboardingData {
  name: string;
  email: string;
  phone?: string;
  style: string;
  contentTypes?: string[];
  frequency: number;
  targetAudience?: string;
  socialMedia?: string;
}

export interface ProfileResponse {
  profile: string;
  bio: string;
  firstContentIdeas: string[];
  schedule: string[];
  userId: string;
}

export interface CalendarRequest {
  style: string;
  contentTypes?: string[];
  frequency: number;
  targetAudience?: string;
  season?: string;
  region?: string;
}

export interface CalendarPost {
  date: string;
  type: string;
  theme: string;
  caption: string;
  visual: string;
  cta: string;
  hashtags: string[];
  isSeasonal?: boolean;
}

export interface CalendarResponse {
  calendar: CalendarPost[];
  metadata: {
    bestPostTimes: string[];
    weeklyTips: string[];
    seasonalEvents: any[];
    totalPosts: number;
    generatedAt: string;
  };
}

export interface ImageGenerationRequest {
  style: string;
  theme: string;
  composition?: string;
  clothes?: string | string[];
  modelDiversity?: string;
  background?: string;
  mood?: string;
  brandColors?: string[];
}

export interface ImageGenerationResponse {
  imageUrl: string;
  revisedPrompt: string;
  metadata: {
    style: string;
    theme: string;
    composition: string;
    model: string;
    size: string;
    generatedAt: string;
  };
}

export interface ImageComposeRequest {
  clothes: string | string[];
  compositionType?: string;
  background?: string;
  brandColors?: string[];
  addText?: string;
}

export interface ImageComposeResponse {
  postImage: {
    url: string;
    size: string;
    format: string;
  };
  storyImage: {
    url: string;
    size: string;
    format: string;
  };
  metadata: {
    compositionType: string;
    clothesCount: number;
    model: string;
    generatedAt: string;
  };
}

export interface ScheduleRequest {
  userId: string;
  postId?: string;
  scheduledDate: string;
  imageUrl: string;
  caption: string;
  hashtags?: string[];
  type?: 'post' | 'story';
}

export interface ScheduleResponse {
  scheduledPost: {
    id: string;
    scheduledDate: string;
    status: string;
    type: string;
  };
  message: string;
}

export interface AnalyticsResponse {
  period: string;
  overview: {
    followers: {
      current: number;
      gained: number;
      lost: number;
      net: number;
      growthRate: number;
    };
    engagement: {
      rate: number;
      likes: number;
      comments: number;
      saves: number;
      shares: number;
    };
    reach: {
      total: number;
      unique: number;
    };
    impressions: {
      total: number;
    };
  };
  topPosts: any[];
  audience: any;
  generatedAt: string;
}

// API Functions
export const apiClient = {
  // Health check
  healthCheck: async () => {
    const response = await api.get('/health');
    return response.data;
  },

  // Onboarding
  submitOnboarding: async (data: OnboardingData): Promise<ProfileResponse> => {
    const response = await api.post('/api/onboarding', data);
    return response.data.data;
  },

  // Calendar
  generateCalendar: async (data: CalendarRequest): Promise<CalendarResponse> => {
    const response = await api.post('/api/calendar/generate', data);
    return response.data.data;
  },

  getSeasonalEvents: async (month?: number, year?: number) => {
    const params = month || year ? { month, year } : {};
    const response = await api.get('/api/calendar/seasonal', { params });
    return response.data.data;
  },

  // Images
  generateImage: async (data: ImageGenerationRequest): Promise<ImageGenerationResponse> => {
    const response = await api.post('/api/images/generate', data);
    return response.data.data;
  },

  composeImage: async (data: ImageComposeRequest): Promise<ImageComposeResponse> => {
    const response = await api.post('/api/images/compose', data);
    return response.data.data;
  },

  getImageTemplates: async () => {
    const response = await api.get('/api/images/templates');
    return response.data.data;
  },

  // Scheduling
  schedulePost: async (data: ScheduleRequest): Promise<ScheduleResponse> => {
    const response = await api.post('/api/schedule', data);
    return response.data.data;
  },

  getScheduledPosts: async (userId: string, params?: any) => {
    const response = await api.get(`/api/schedule/user/${userId}`, { params });
    return response.data.data;
  },

  updateScheduledPost: async (scheduleId: string, data: any) => {
    const response = await api.put(`/api/schedule/${scheduleId}`, data);
    return response.data.data;
  },

  cancelScheduledPost: async (scheduleId: string) => {
    const response = await api.delete(`/api/schedule/${scheduleId}`);
    return response.data.data;
  },

  publishNow: async (data: any) => {
    const response = await api.post('/api/schedule/publish-now', data);
    return response.data.data;
  },

  batchSchedule: async (userId: string, posts: any[]) => {
    const response = await api.post('/api/schedule/batch', { userId, posts });
    return response.data.data;
  },

  // Analytics
  getAnalytics: async (userId: string, period?: string): Promise<AnalyticsResponse> => {
    const params = period ? { period } : {};
    const response = await api.get(`/api/analytics/${userId}`, { params });
    return response.data.data;
  },

  getBestTimes: async (userId: string, dayOfWeek?: string) => {
    const params = dayOfWeek ? { dayOfWeek } : {};
    const response = await api.get(`/api/analytics/${userId}/best-times`, { params });
    return response.data.data;
  },

  getContentPerformance: async (userId: string, period?: string) => {
    const params = period ? { period } : {};
    const response = await api.get(`/api/analytics/${userId}/content-performance`, { params });
    return response.data.data;
  },

  getGrowth: async (userId: string, period?: string) => {
    const params = period ? { period } : {};
    const response = await api.get(`/api/analytics/${userId}/growth`, { params });
    return response.data.data;
  },

  generateReport: async (userId: string, month: string, year: string) => {
    const response = await api.post(`/api/analytics/${userId}/report`, { month, year });
    return response.data.data;
  },
};

export default api;
