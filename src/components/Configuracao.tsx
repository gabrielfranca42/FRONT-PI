import { Search, Bell, ChevronDown } from 'lucide-react';
import { Header } from './Header';

interface ConfiguracaoProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Configuracao({ onUserClick, onLogout }: ConfiguracaoProps) {
  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <Header title="Configuração" onProfileClick={onUserClick} onLogout={onLogout} />
      <div className="p-8">
        <h1 className="text-gray-800 mb-4">Configuração</h1>
        <p className="text-gray-600">Configurações do sistema</p>
      </div>
    </div>
  );
}