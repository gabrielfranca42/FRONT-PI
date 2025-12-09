import { Search, Bell, ChevronDown } from 'lucide-react';
import { Header } from './Header';

interface EstoqueProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Estoque({ onUserClick, onLogout }: EstoqueProps) {
  const estoque = [
    { id: '24/05/2025', produto: 'Feijão Carioca', entrada: 'Sementeira Flora Verde', armazen: 'Central SP', kg: '800 g', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '30/07/2025', produto: 'Semente Capim', entrada: 'Biocultura do Sul', armazen: 'Central SP', kg: '800 g', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '10/07/2025', produto: 'Nescarul Chinês', entrada: 'Compras & fertilidades', armazen: 'Central SP', kg: '900 g', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '30/09/2025', produto: 'Soja', entrada: 'Sementeira Flora Verde', armazen: 'Central SP', kg: '800 g', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '04/10/2025', produto: 'Trigo', entrada: 'Agronegócio Brasil', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '30/09/2024', produto: 'Trigo', entrada: 'Agronegócio Brasil', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Baixo' },
    { id: '26/05/2024', produto: 'Feijão 808', entrada: 'Agronegócio Brasil', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '26/02/2024', produto: 'Feijão Azukis', entrada: 'Ascendel Agropsitologico', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '26/02/2024', produto: 'Arroz', entrada: 'Agronegócio Brasil', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Estável' },
    { id: '23/01/2023', produto: 'Arroz', entrada: 'Sementeira do Vale Verde', armazen: 'Central SP', kg: 'LV001', 'lv/nt': 'LV001', status: 'Esgotado' },
    { id: '27/12/2023', produto: 'Arroz', entrada: 'Sementes Rio Verde limitada', armazen: '-', kg: '-', 'lv/nt': '-', status: 'Estável' },
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
      <Header title="Estoque de Sementes" onProfileClick={onUserClick} onLogout={onLogout} />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center gap-4">
            <button className="px-4 py-2 bg-[#3a5a51] text-white rounded hover:bg-[#2a4a41] transition-colors">
              Entrada
            </button>
            <button className="px-4 py-2 bg-[#3a5a51] text-white rounded hover:bg-[#2a4a41] transition-colors">
              Saída
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#3a5a51] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">PRODUTO</th>
                  <th className="px-4 py-3 text-left">ENTRADA</th>
                  <th className="px-4 py-3 text-left">ARMAZEN</th>
                  <th className="px-4 py-3 text-left">KG</th>
                  <th className="px-4 py-3 text-left">LV/NT</th>
                  <th className="px-4 py-3 text-left">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {estoque.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{item.id}</td>
                    <td className="px-4 py-3 text-sm">{item.produto}</td>
                    <td className="px-4 py-3 text-sm">{item.entrada}</td>
                    <td className="px-4 py-3 text-sm">{item.armazen}</td>
                    <td className="px-4 py-3 text-sm">{item.kg}</td>
                    <td className="px-4 py-3 text-sm">{item['lv/nt']}</td>
                    <td className="px-4 py-3">
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