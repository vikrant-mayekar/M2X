import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }) => api.post("/auth/register", data),
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
  getMe: () => api.get("/auth/me"),
  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put("/auth/password", data),
};

// User API
export const userAPI = {
  getUsers: () => api.get("/users"),
  getUser: (id: string) => api.get(`/users/${id}`),
  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
};

// Listing API
export const listingAPI = {
  getListings: (params?: any) => api.get("/listings", { params }),
  getListing: (id: string) => api.get(`/listings/${id}`),
  createListing: (data: any) => api.post("/listings", data),
  updateListing: (id: string, data: any) => api.put(`/listings/${id}`, data),
  deleteListing: (id: string) => api.delete(`/listings/${id}`),
  getUserListings: (userId: string) => api.get(`/listings/user/${userId}`),
  toggleFavorite: (id: string) => api.post(`/listings/${id}/favorite`),
  getFavorites: () => api.get("/listings/favorites"),
};

// Category API
export const categoryAPI = {
  getCategories: () => api.get("/categories"),
  getCategory: (id: string) => api.get(`/categories/${id}`),
  createCategory: (data: any) => api.post("/categories", data),
  updateCategory: (id: string, data: any) => api.put(`/categories/${id}`, data),
  deleteCategory: (id: string) => api.delete(`/categories/${id}`),
};

// Chat API
export const chatAPI = {
  getChats: () => api.get("/chat"),
  getChat: (id: string) => api.get(`/chat/${id}`),
  sendMessage: (id: string, content: string) =>
    api.post(`/chat/${id}/message`, { content }),
  markAsRead: (id: string) => api.put(`/chat/${id}/read`),
};

// Payment API
export const paymentAPI = {
  createPayment: (data: any) => api.post("/payments", data),
  getPayments: () => api.get("/payments"),
  getPayment: (id: string) => api.get(`/payments/${id}`),
  updatePaymentStatus: (id: string, status: string) =>
    api.put(`/payments/${id}/status`, { status }),
};

export default api;


