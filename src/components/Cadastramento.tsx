import { Search, Bell, ChevronDown } from 'lucide-react';
import { Header } from './Header';
import { useState } from 'react';

interface CadastramentoProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Cadastramento({ onUserClick, onLogout }: CadastramentoProps) {
  const cadastros = [
    { id: '24/05/2025', cpfCnpj: '01.343.578/00-02', nome: 'Sementeira Flora Verde', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '24/05/2025', cpfCnpj: '06.134.098/00-51', nome: 'Biocultura do Sul', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '17/07/2025', cpfCnpj: '03.454.233/00-04', nome: 'Compras & fertilidades', ramo: 'Rural', kg: '67 kg', cfop: '11547', status: 'Estável' },
    { id: '27/01/2025', cpfCnpj: '03.454.765/00-01', nome: 'Sementeira Flora Verde', ramo: 'Rural', kg: '900 g', cfop: '11547', status: 'Estável' },
    { id: '30/01/2025', cpfCnpj: '03.454.765/00-02', nome: 'Agronegócio Brasil', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '04/10/2025', cpfCnpj: '44.456.765/00-01', nome: 'Agronegócio Brasil', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '30/09/2024', cpfCnpj: '03.454.765/00-01', nome: 'Agronegócio Brasil', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Baixo' },
    { id: '26/05/2024', cpfCnpj: '03.454.765/00-01', nome: 'Agronegócio Brasil', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '26/02/2024', cpfCnpj: '39.213.645/00-01', nome: 'Ascendel Agropsitologico', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '26/02/2024', cpfCnpj: '03.454.765/00-02', nome: 'Agronegócio Brasil', ramo: 'Rural', kg: '800 g', cfop: '11547', status: 'Estável' },
    { id: '23/01/2023', cpfCnpj: '03.454.765/00-01', nome: 'Sementeira do Vale Verde', ramo: 'Rural', kg: '900 g', cfop: '11547', status: 'Esgotado' },
    { id: '27/12/2023', cpfCnpj: '-', nome: 'Sementes Rio Verde limitada', ramo: '-', kg: '-', cfop: '-', status: 'Estável' },
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
      <Header title="Cadastramento" onProfileClick={onUserClick} onLogout={onLogout} />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center gap-4">
            <button className="px-4 py-2 bg-[#3a5a51] text-white rounded hover:bg-[#2a4a41] transition-colors">
              Nome
            </button>
            <button className="px-4 py-2 bg-[#3a5a51] text-white rounded hover:bg-[#2a4a41] transition-colors">
              CPF/CNPJ
            </button>
            <button className="px-4 py-2 bg-[#3a5a51] text-white rounded hover:bg-[#2a4a41] transition-colors">
              CEP CADASTRO
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#3a5a51] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">CPF/CNPJ</th>
                  <th className="px-4 py-3 text-left">NOME</th>
                  <th className="px-4 py-3 text-left">RAMO</th>
                  <th className="px-4 py-3 text-left">KG</th>
                  <th className="px-4 py-3 text-left">CFOP</th>
                  <th className="px-4 py-3 text-left">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {cadastros.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{item.id}</td>
                    <td className="px-4 py-3 text-sm">{item.cpfCnpj}</td>
                    <td className="px-4 py-3 text-sm">{item.nome}</td>
                    <td className="px-4 py-3 text-sm">{item.ramo}</td>
                    <td className="px-4 py-3 text-sm">{item.kg}</td>
                    <td className="px-4 py-3 text-sm">{item.cfop}</td>
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