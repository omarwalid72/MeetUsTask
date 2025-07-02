import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import LoginForm from '../../components/Auth/LoginForm';
import LoginRightSide from '../../components/Auth/LoginRightSide';

interface JwtPayload {
  exp: number;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        const now = Date.now() / 1000;
        if (decoded.exp > now) {
          navigate('/dashboard');
        } else {
          localStorage.clear();
        }
      } catch {
        localStorage.clear();
      }
    }
  }, [navigate]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>

      {/* Right Side (Visual) - Hidden on small screens */}
      <div className="hidden md:flex w-1/2 overflow-hidden translate-y-[-90px] -translate-x-10">
        <LoginRightSide />
      </div>
    </div>
  );
};

export default LoginPage;
