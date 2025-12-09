import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
}

export function Login({ onLogin, onGoToRegister }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      onLogin(email);
    } else {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-[#a8c5bc] flex flex-col items-center justify-center p-8">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-[#5a8377]">
          <div className="w-20 h-20 text-[#5a8377]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M50 30 Q45 35 45 40 L45 50 Q45 55 40 60 M50 30 Q55 35 55 40 L55 50 Q55 55 60 60 M35 65 Q50 55 65 65" strokeWidth="3" stroke="currentColor" fill="none"/>
            </svg>
          </div>
        </div>
        <h2 className="text-[#5a8377] mb-12">AtlaSystem</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#5a8377] text-white placeholder-white/70 rounded border-none focus:outline-none focus:ring-2 focus:ring-[#4a7367]"
              placeholder="CNPJ ou EMAIL"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#5a8377] text-white placeholder-white/70 rounded border-none focus:outline-none focus:ring-2 focus:ring-[#4a7367]"
              placeholder="Senha"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-white/80 py-2 px-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-32 mx-auto block bg-[#4a7367] hover:bg-[#3a6357] text-white py-2 px-6 rounded transition-colors mt-6"
          >
            Login
          </button>
        </form>
      </div>

      <div className="w-1/2 bg-[#6b9587] flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-4xl mb-2">Bem-vindo</h1>
        <h2 className="text-4xl mb-8">de volta!</h2>
        <div className="w-48 h-0.5 bg-white mb-12"></div>
        
        <p className="mb-4">Não tenha tem um cadastro?</p>
        <p className="mb-6 underline cursor-pointer" onClick={onGoToRegister}>
          clique aqui!
        </p>

        <button
          onClick={onGoToRegister}
          className="border-2 border-white text-white py-3 px-12 rounded-full hover:bg-white/10 transition-colors mt-4"
        >
          cadastre-se
        </button>

        <p className="mt-12 text-sm">Esqueceu seus dados de login? Obtenha ajuda para entrar.</p>
      </div>
    </div>
  );
}
