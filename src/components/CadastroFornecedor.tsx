import { Search, Bell, ChevronDown } from 'lucide-react';
import { Header } from './Header';
import { useState } from 'react';

interface CadastroFornecedorProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function CadastroFornecedor({ onUserClick, onLogout }: CadastroFornecedorProps) {
  const [formData, setFormData] = useState({
    cnpj: '',
    cep: '',
    razao: '',
    inscricao: '',
    nomeFantasia: '',
    endLogradouro: '',
    numero: '',
    email: '',
    endereco: '',
    bairro: '',
    uf: '',
    cidadeIbge: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <header className="bg-[#6b9587] p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <span className="text-white">Cadastro fornecedor</span>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Home"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-white" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-white">Name User</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">CNPJ</label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">CEP</label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Razão</label>
              <input
                type="text"
                name="razao"
                value={formData.razao}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Insc. Municipal</label>
              <input
                type="text"
                name="inscricao"
                value={formData.inscricao}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-sm">Nome Fantasia</label>
            <input
              type="text"
              name="nomeFantasia"
              value={formData.nomeFantasia}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
            />
          </div>

          <h3 className="text-gray-800 mb-4">Contato</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Número</label>
              <input
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
          </div>

          <h3 className="text-gray-800 mb-4">Endereço</h3>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Bairro</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm">UF</label>
              <input
                type="text"
                name="uf"
                value={formData.uf}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 text-sm">Cidade Ibge</label>
            <input
              type="text"
              name="cidadeIbge"
              value={formData.cidadeIbge}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
            />
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors">
              Salvar
            </button>
            <button className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors">
              Adicionar
            </button>
            <button className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors">
              Pesquisar
            </button>
            <button className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors">
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}