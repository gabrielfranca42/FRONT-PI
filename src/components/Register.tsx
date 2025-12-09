import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface RegisterProps {
  onRegister: (email: string) => void;
  onGoToLogin: () => void;
}

export function Register({ onRegister, onGoToLogin }: RegisterProps) {
  const [tipoPessoa, setTipoPessoa] = useState<'fisica' | 'corporativo'>('fisica');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    tipoRecenseador: 'Home',
    endereco: '',
    cep: '',
    pais: '',
    uf: '',
    cidade: '',
    ddd1: '',
    telefone: '',
    ddd2: '',
    celular: '',
    email: '',
    genero: '',
    dataNascimento: '',
    comprovanteCpf: '',
    comprovanteRg: '',
    nome: '',
    confirmarNome: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    if (formData.nome !== formData.confirmarNome) {
      alert('Os nomes não coincidem');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      email: formData.email,
      password: formData.senha,
      name: formData.nome,
      tipo: tipoPessoa,
      ...formData
    });
    localStorage.setItem('users', JSON.stringify(users));
    onRegister(formData.email);
  };

  return (
    <div className="min-h-screen bg-[#e8ebe8] p-8">
      <button
        onClick={onGoToLogin}
        className="mb-6 flex items-center gap-2 text-[#5a8377] hover:text-[#4a7367]"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 border-2 border-[#5a8377]">
            <div className="w-10 h-10 text-[#5a8377]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M50 30 Q45 35 45 40 L45 50 Q45 55 40 60 M50 30 Q55 35 55 40 L55 50 Q55 55 60 60 M35 65 Q50 55 65 65" strokeWidth="3" stroke="currentColor" fill="none"/>
              </svg>
            </div>
          </div>
          <span className="text-[#5a8377]">AtlaSystem</span>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTipoPessoa('fisica')}
            className={`flex-1 py-3 rounded-lg transition-colors ${
              tipoPessoa === 'fisica'
                ? 'bg-[#5a8377] text-white'
                : 'bg-[#b8cec6] text-gray-700'
            }`}
          >
            Pessoa Física
          </button>
          <button
            onClick={() => setTipoPessoa('corporativo')}
            className={`flex-1 py-3 rounded-lg transition-colors ${
              tipoPessoa === 'corporativo'
                ? 'bg-[#5a8377] text-white'
                : 'bg-[#b8cec6] text-gray-700'
            }`}
          >
            Corporativo
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Tipo de Recenseador</label>
            <input
              type="text"
              value={formData.tipoRecenseador}
              onChange={(e) => setFormData({ ...formData, tipoRecenseador: e.target.value })}
              className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none focus:ring-2 focus:ring-[#4a7367]"
            />
          </div>

          <div>
            <h3 className="text-gray-800 mb-3">Endereço</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="CEP"
                  value={formData.cep}
                  onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="País"
                  value={formData.pais}
                  onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="UF"
                  value={formData.uf}
                  onChange={(e) => setFormData({ ...formData, uf: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 mb-3">Contato</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-[80px_1fr_80px_1fr] gap-3">
                <input
                  type="text"
                  placeholder="DDD"
                  value={formData.ddd1}
                  onChange={(e) => setFormData({ ...formData, ddd1: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="DDD"
                  value={formData.ddd2}
                  onChange={(e) => setFormData({ ...formData, ddd2: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Celular"
                  value={formData.celular}
                  onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                  className="px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 mb-3">Informações adicionais</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Gênero"
                value={formData.genero}
                onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Data de nascimento"
                value={formData.dataNascimento}
                onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Comprovante CPF"
                    value={formData.comprovanteCpf}
                    onChange={(e) => setFormData({ ...formData, comprovanteCpf: e.target.value })}
                    className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Comprovante RG"
                    value={formData.comprovanteRg}
                    onChange={(e) => setFormData({ ...formData, comprovanteRg: e.target.value })}
                    className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Confirmar nome"
                value={formData.confirmarNome}
                onChange={(e) => setFormData({ ...formData, confirmarNome: e.target.value })}
                className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                  className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirmar senha"
                  value={formData.confirmarSenha}
                  onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                  className="w-full px-4 py-2 bg-[#5a8377] text-white placeholder-white/70 rounded focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-32 mx-auto block bg-[#5a8377] hover:bg-[#4a7367] text-white py-2 px-6 rounded transition-colors"
          >
            cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
