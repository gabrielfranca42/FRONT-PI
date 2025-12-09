import { Search, Bell, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { CadastroLote } from './CadastroLote';
import { Header } from './Header';

export function CadastroSementes() {
  const [showCadastroModal, setShowCadastroModal] = useState(false);
  const [showLoteModal, setShowLoteModal] = useState(false);

  const sementes = [
    { produto: 'Feijão Carioca', quantidade: '800 kg', validade: '04/2025', valor: 'R$ 4.324,24', status: 'Estável' },
    { produto: 'Semente Capim', quantidade: '200 kg', validade: '04/2025', valor: 'R$ 2.500,00', status: 'Estável' },
    { produto: 'Milho BR-006', quantidade: '500 kg', validade: '06/2025', valor: 'R$ 6.800,00', status: 'Estável' },
    { produto: 'Soja Premium', quantidade: '300 kg', validade: '08/2025', valor: 'R$ 5.400,00', status: 'Baixo' },
    { produto: 'Trigo Integral', quantidade: '150 kg', validade: '03/2025', valor: 'R$ 3.200,00', status: 'Esgotado' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Estável': return 'bg-[#5a8377] text-white';
      case 'Baixo': return 'bg-yellow-500 text-white';
      case 'Esgotado': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const onUserClick = () => {
    // Implement user profile click logic here
  };

  const onLogout = () => {
    // Implement logout logic here
  };

  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <Header title="Cadastro de Sementes" onProfileClick={onUserClick} onLogout={onLogout} />
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#7fb069] rounded-lg p-6 text-white">
            <h3 className="mb-2">Sementes em Estoque</h3>
            <p className="text-3xl">1,950 kg</p>
            <p className="text-sm opacity-90 mt-2">Total disponível</p>
          </div>
          <div className="bg-[#9fc074] rounded-lg p-6 text-white">
            <h3 className="mb-2">Valor Total</h3>
            <p className="text-3xl">R$ 22.224,24</p>
            <p className="text-sm opacity-90 mt-2">Em estoque</p>
          </div>
          <div className="bg-[#d9a95d] rounded-lg p-6 text-white">
            <h3 className="mb-2">Baixo Estoque</h3>
            <p className="text-3xl">1</p>
            <p className="text-sm opacity-90 mt-2">Produtos em alerta</p>
          </div>
          <div className="bg-[#d97059] rounded-lg p-6 text-white">
            <h3 className="mb-2">Esgotado</h3>
            <p className="text-3xl">1</p>
            <p className="text-sm opacity-90 mt-2">Produtos sem estoque</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowCadastroModal(true)}
            className="px-6 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors"
          >
            Cadastrar Nova Semente
          </button>
          <button
            onClick={() => setShowLoteModal(true)}
            className="px-6 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors"
          >
            Cadastrar Lote
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-gray-800">Sementes Cadastradas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#3a5a51] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Produto</th>
                  <th className="px-6 py-3 text-left">Quantidade</th>
                  <th className="px-6 py-3 text-left">Validade</th>
                  <th className="px-6 py-3 text-left">Valor Total</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {sementes.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3">{item.produto}</td>
                    <td className="px-6 py-3">{item.quantidade}</td>
                    <td className="px-6 py-3">{item.validade}</td>
                    <td className="px-6 py-3">{item.valor}</td>
                    <td className="px-6 py-3">
                      <span className={`px-4 py-1 rounded text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <button className="text-[#5a8377] hover:text-[#4a7367]">Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro de Semente */}
      {showCadastroModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#5a8377] text-white p-4 flex items-center justify-between rounded-t-lg">
              <h2>Cadastrar Nova Semente</h2>
              <button onClick={() => setShowCadastroModal(false)} className="hover:bg-[#4a7367] p-1 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Nome da Semente</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Código</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Quantidade (kg)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Validade</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Valor Unitário</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Armazém</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Descrição</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                  />
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCadastroModal(false)}
                    className="px-8 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Cadastro de Lote */}
      {showLoteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#5a8377] text-white p-4 flex items-center justify-between rounded-t-lg">
              <h2>Cadastrar Lote</h2>
              <button onClick={() => setShowLoteModal(false)} className="hover:bg-[#4a7367] p-1 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Nota Da Fiscalidade</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Código</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Fornecedor</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Data De Criação</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Vencimento</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">Diagnóstico</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Preço PG</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Estoque Mínimo</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowLoteModal(false)}
                    className="px-8 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}