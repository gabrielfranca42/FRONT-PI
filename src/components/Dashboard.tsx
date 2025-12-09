import { useState } from 'react';
import { Search, Bell, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Header } from './Header';

interface DashboardProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Dashboard({ onUserClick, onLogout }: DashboardProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const historicoCards = [
    {
      titulo: 'Histórico de Compras',
      items: [
        'Comprador: Matheus Resende',
        'Quantidade: 95 kg',
        'Data de compra: 08/09/2024',
        'Valor da compra: R$ 550.50',
      ],
      status: 'sucesso',
      color: 'bg-[#7fb069]'
    },
    {
      titulo: 'Faturamento',
      items: [
        'Comprador: Matheus Resende',
        'Quantidade: 95 kg',
        'Data de compra: 08/09/2024',
        'Valor da compra: R$ 550.50',
      ],
      status: 'sucesso',
      color: 'bg-[#9fc074]'
    },
    {
      titulo: 'Estoque',
      items: [
        'Comprador: Matheus Resende',
        'Quantidade: 95 kg',
        'Data de compra: 08/09/2024',
        'Valor da compra: R$ 550.50',
      ],
      status: 'alerta',
      color: 'bg-[#d9a95d]'
    },
    {
      titulo: 'Vendas recentes',
      items: [
        'Comprador: Matheus Resende',
        'Quantidade: 95 kg',
        'Data de compra: 08/09/2024',
        'Valor da compra: R$ 550.50',
      ],
      status: 'erro',
      color: 'bg-[#d97059]'
    },
  ];

  const chartData04 = [
    { name: 'Seg', entrada: 35, saida: 20 },
    { name: 'Ter', entrada: 42, saida: 25 },
    { name: 'Qua', entrada: 38, saida: 22 },
    { name: 'Qui', entrada: 45, saida: 28 },
    { name: 'Sex', entrada: 40, saida: 24 },
  ];

  const chartData10 = [
    { name: 'Seg', entrada: 55, saida: 30 },
    { name: 'Ter', entrada: 62, saida: 35 },
    { name: 'Qua', entrada: 58, saida: 32 },
    { name: 'Qui', entrada: 65, saida: 38 },
    { name: 'Sex', entrada: 60, saida: 34 },
  ];

  const estoqueEntrada = [
    { id: 1, produto: 'Feijão Carioca', quantidade: '95 kg', validade: '04/2025', armazen: 'Deposito Norte', status: 'Estável' },
    { id: 2, produto: 'Feijão Carioca', quantidade: '95 kg', validade: '04/2025', armazen: 'Deposito Norte', status: 'Estável' },
    { id: 3, produto: 'Semente Capim', quantidade: '200 kg', validade: '04/2025', armazen: 'Zona Leste', status: 'Estável' },
    { id: 4, produto: 'Soja', quantidade: '300 kg', validade: '12/2025', armazen: 'Central SP', status: 'Estável' },
    { id: 5, produto: 'Feijão 808', quantidade: '100 kg', validade: '09/2025', armazen: 'Central SP', status: 'Baixo' },
    { id: 6, produto: 'Feijão 65', quantidade: '100 kg', validade: '09/2025', armazen: 'Central SP', status: 'Estável' },
    { id: 7, produto: 'Amendoim', quantidade: '95 kg', validade: '04/2025', armazen: 'Central SP', status: 'Esgotado' },
  ];

  const estoqueSaida = [
    { id: 1, produto: 'Feijão Carioca', quantidade: '95 kg', validade: '04/2025', armazen: 'R$ 4.324,24', status: 'Estável' },
    { id: 2, produto: 'Feijão Carioca', quantidade: '95 kg', validade: '04/2025', armazen: 'R$ 4.324,24', status: 'Estável' },
    { id: 3, produto: 'Semente Capim', quantidade: '200 kg', validade: '04/2025', armazen: 'R$ 5.324,24', status: 'Estável' },
    { id: 4, produto: 'Soja', quantidade: '100 kg', validade: '12/2025', armazen: 'R$ 6.324,24', status: 'Estável' },
    { id: 5, produto: 'Feijão 808', quantidade: '100 kg', validade: '09/2025', armazen: 'R$ 2.324,24', status: 'Baixo' },
    { id: 6, produto: 'Feijão 65', quantidade: '100 kg', validade: '09/2025', armazen: 'R$ 4.324,24', status: 'Estável' },
    { id: 7, produto: 'Amendoim', quantidade: '95 kg', validade: '04/2025', armazen: 'R$ 8.356,00', status: 'Esgotado' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Estável': return 'bg-[#5a8377] text-white';
      case 'Baixo': return 'bg-yellow-500 text-white';
      case 'Esgotado': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === selectedDate.getDate();
      days.push(
        <div
          key={day}
          className={`p-2 text-center text-sm ${
            isToday ? 'bg-[#5a8377] text-white rounded-full' : 'text-gray-700'
          }`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-[#5a8377] min-h-screen">
      <Header title="Dashboard" onProfileClick={onUserClick} onLogout={onLogout} />

      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {historicoCards.map((card, index) => (
            <div key={index} className={`${card.color} rounded-lg p-4 text-white`}>
              <h3 className="mb-3">{card.titulo}</h3>
              <div className="space-y-1 text-sm">
                {card.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800">Data: 04/2025</h3>
              <span className="text-sm text-gray-600">42%</span>
            </div>
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-[#7fb069] rounded"></div>
                <span className="text-sm">Entrada</span>
                <span className="ml-auto">22%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#d97059] rounded"></div>
                <span className="text-sm">Saída</span>
                <span className="ml-auto">20%</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={chartData04}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="entrada" fill="#7fb069" />
                <Bar dataKey="saida" fill="#d97059" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-800">Data: 10/2024</h3>
              <span className="text-sm text-gray-600">42%</span>
            </div>
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-[#7fb069] rounded"></div>
                <span className="text-sm">Entrada</span>
                <span className="ml-auto">55%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#d97059] rounded"></div>
                <span className="text-sm">Saída</span>
                <span className="ml-auto">31%</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={chartData10}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="entrada" fill="#7fb069" />
                <Bar dataKey="saida" fill="#d97059" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_250px] gap-4 mb-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-gray-800 mb-3">Estoque de Sementes - Entrada</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#5a8377] text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">#</th>
                      <th className="px-4 py-2 text-left">Produtos</th>
                      <th className="px-4 py-2 text-left">Quantidade</th>
                      <th className="px-4 py-2 text-left">Validade</th>
                      <th className="px-4 py-2 text-left">Armazen</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estoqueEntrada.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="px-4 py-2">{item.id}</td>
                        <td className="px-4 py-2">{item.produto}</td>
                        <td className="px-4 py-2">{item.quantidade}</td>
                        <td className="px-4 py-2">{item.validade}</td>
                        <td className="px-4 py-2">{item.armazen}</td>
                        <td className="px-4 py-2">
                          <span className={`px-3 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="text-gray-800 mb-3">Estoque de Sementes - Saída</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#5a8377] text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">#</th>
                      <th className="px-4 py-2 text-left">Produtos</th>
                      <th className="px-4 py-2 text-left">Quantidade</th>
                      <th className="px-4 py-2 text-left">Validade</th>
                      <th className="px-4 py-2 text-left">Armazen</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estoqueSaida.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="px-4 py-2">{item.id}</td>
                        <td className="px-4 py-2">{item.produto}</td>
                        <td className="px-4 py-2">{item.quantidade}</td>
                        <td className="px-4 py-2">{item.validade}</td>
                        <td className="px-4 py-2">{item.armazen}</td>
                        <td className="px-4 py-2">
                          <span className={`px-3 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
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

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-gray-800 mb-3">Detalhes dos Pets</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm">Setembro 2024</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm">Seleções nos pets</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm">Seleções nos pets</p>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm">Seleções nos pets</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <CalendarIcon className="w-5 h-5 text-gray-700" />
                <h3 className="text-gray-800 flex-1 text-center">Outubro 2024</h3>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs text-gray-600 p-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
              <button className="w-full mt-3 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors">
                Hoje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}