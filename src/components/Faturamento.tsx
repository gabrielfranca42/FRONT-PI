import { Search, Bell, ChevronDown } from 'lucide-react';
import { Header } from './Header';

interface FaturamentoProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Faturamento({ onUserClick, onLogout }: FaturamentoProps) {
  const produtos = [
    { produto: 'Feijão Carioca', quantidade: '95 kg', validade: '04/2025', armazen: 'Central SP', status: 'Estável' },
    { produto: 'Semente Capim', quantidade: '200 kg', validade: '04/2025', armazen: 'Deposito Norte', status: 'Estável' },
    { produto: 'Milharal Chinês', quantidade: '95 kg', validade: '04/2025', armazen: 'Central SP', status: 'Estável' },
    { produto: 'Soja', quantidade: '177 kg', validade: '04/2025', armazen: 'Central SP', status: 'Estável' },
    { produto: 'Soja BR-006', quantidade: '159 kg', validade: '04/2025', armazen: 'Central SP', status: 'Estável' },
    { produto: 'Feijão 808', quantidade: '100 kg', validade: '04/2025', armazen: 'Central SP', status: 'Baixo' },
    { produto: 'Aveia Integral', quantidade: '256 kg', validade: '04/2025', armazen: 'Central SP', status: 'Esgotado' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Estável': return 'bg-[#5a8377] text-white';
      case 'Baixo': return 'bg-yellow-500 text-white';
      case 'Esgotado': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <Header onUserClick={onUserClick} onLogout={onLogout} />

      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#5a8377] rounded-lg p-6 text-white">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-3xl mb-1">365KG</p>
                <p className="text-sm opacity-90">Saída</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 10l5 5 5-5" />
                </svg>
              </div>
            </div>
            <p className="text-xs opacity-80">3000 SACOS DE CARGA</p>
            <p className="text-xs opacity-80">EM 30 DIAS</p>
          </div>

          <div className="bg-[#5a8377] rounded-lg p-6 text-white">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-3xl mb-1">R$ 10,000</p>
                <p className="text-sm opacity-90">Entrada</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
            </div>
            <p className="text-xs opacity-80">R$ 10.000,00 LIQUIDO EM</p>
            <p className="text-xs opacity-80">30 DIAS</p>
          </div>

          <div className="bg-[#5a8377] rounded-lg p-6 text-white">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-3xl mb-1">5000</p>
                <p className="text-sm opacity-90">Estoque</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
            </div>
            <p className="text-xs opacity-80">500 SACOS DE A TEUS</p>
            <p className="text-xs opacity-80">ARMAZENAMENTO</p>
          </div>

          <div className="bg-[#5a8377] rounded-lg p-6 text-white">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-3xl mb-1">...</p>
                <p className="text-sm opacity-90">...</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-gray-800">Faturamento</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#3a5a51] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Produtos</th>
                  <th className="px-6 py-3 text-left">Quantidade</th>
                  <th className="px-6 py-3 text-left">Validade</th>
                  <th className="px-6 py-3 text-left">Armazen</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3">{item.produto}</td>
                    <td className="px-6 py-3">{item.quantidade}</td>
                    <td className="px-6 py-3">{item.validade}</td>
                    <td className="px-6 py-3">{item.armazen}</td>
                    <td className="px-6 py-3">
                      <span className={`px-4 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}