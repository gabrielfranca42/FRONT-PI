import { Header } from './Header';

interface HomeProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function Home({ onUserClick, onLogout }: HomeProps) {
  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <Header title="Home" onProfileClick={onUserClick} onLogout={onLogout} />
      <div className="p-8">
        <h1 className="text-gray-800 mb-4">Home</h1>
        <p className="text-gray-600">Bem-vindo à página inicial do AtlaSystem</p>
      </div>
    </div>
  );
}
