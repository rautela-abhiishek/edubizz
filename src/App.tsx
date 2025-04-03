import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import TeacherList from './components/TeacherList';
import AddTeacher from './components/AddTeacher';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import SignUpForm from './components/auth/SignUpForm';
import LoginForm from './components/auth/LoginForm';
import VerifyOTP from './components/auth/VerifyOTP';
import { TeacherProvider } from './context/TeacherContext';
import { ChatProvider } from './context/ChatContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth/signup" element={<SignUpForm />} />
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/verify" element={<VerifyOTP />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TeacherList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddTeacher />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <TeacherProvider>
          <ChatProvider>
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <AppRoutes />
              </main>
            </div>
            <Toaster position="top-right" />
          </ChatProvider>
        </TeacherProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;