import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState('2023-2-60-126');
  const [password, setPassword] = useState('Popy2023@');
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    setCaptcha({ num1, num2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-digits
    let val = e.target.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    val = val.substring(0, 10);
    
    // Format as xxxx-x-xx-xxx
    let formatted = val;
    if (val.length > 4) {
      formatted = val.substring(0, 4) + '-' + val.substring(4);
    }
    if (val.length > 5) {
      formatted = formatted.substring(0, 6) + '-' + formatted.substring(6);
    }
    if (val.length > 7) {
      formatted = formatted.substring(0, 9) + '-' + formatted.substring(9);
    }
    
    setStudentId(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userCaptcha) !== captcha.num1 + captcha.num2) {
      alert("Invalid Captcha! Please try again.");
      generateCaptcha();
      setUserCaptcha('');
      return;
    }
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="portal-container">
      <div className="left-section"></div>
      
      <div className="right-section">
        <div className="login-card">
          
          <div className="logo-container">
            <div className="logo-circle">
              <img src="/Logo_of_EWU.png" alt="East West University Logo" style={{ height: '90px' }} />
            </div>
          </div>

          <div className="instructions">
            1. If your login ID is activated sign in to your account<br />
            2. If your login ID is not activated please activate your<br />
            login ID first
          </div>

          <h2 className="form-title">SIGN IN TO YOUR ACCOUNT</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Student ID"
                value={studentId}
                onChange={handleStudentIdChange}
              />
            </div>

            <div className="form-group password-group">
              <input 
                type={showPassword ? "text" : "password"} 
                className="form-input" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div 
                className="eye-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  )}
                </svg>
              </div>
            </div>

            <div className="captcha-group">
              <span>{captcha.num1}</span>
              <span>+</span>
              <span>{captcha.num2}</span>
              <span>= ?</span>
              <input 
                type="text" 
                className="captcha-input" 
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
              />
            </div>

            <div className="actions-row">
              <div className="remember-group" style={{ marginBottom: 0 }}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" style={{ marginBottom: 0, marginTop: '2px', cursor: 'pointer' }}>Remember me</label>
              </div>
              
              <button type="submit" className="btn btn-signin">
                SIGN IN
              </button>
            </div>
          </form>

          <button type="button" className="btn btn-forgot">
            Forgot your password? Reset it Now
          </button>
          
          <button type="button" className="btn btn-activate">
            Activate Your ID First
          </button>
          
          <button type="button" className="btn btn-admin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Admin & Faculty Panel
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
