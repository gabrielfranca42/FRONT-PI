import { Search, Bell, ChevronDown, User, Mail, Phone, MapPin, Calendar, X, Camera } from 'lucide-react';
import { Header } from './Header';
import { useState } from 'react';

interface PerfilUsuarioProps {
  onUserClick: () => void;
  onLogout: () => void;
}

export function PerfilUsuario({ onUserClick, onLogout }: PerfilUsuarioProps) {
  const profileData = {
    name: "Name User",
    role: "Administrador do Sistema",
    email: "usuario@atlasystem.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP - Brasil",
    memberSince: "Janeiro 2024",
    totalRegistrations: 147,
    managedSeeds: "1,950 kg",
    activeSuppliers: 23,
    lastAccess: "Hoje, 14:30",
    recentActivities: [
      { type: "green", description: "Cadastrou nova semente: Feijão Carioca", time: "Há 2 horas" },
      { type: "blue", description: "Atualizou fornecedor: Biocultura do Sul", time: "Há 5 horas" },
      { type: "purple", description: "Registrou entrada de estoque: 800kg", time: "Ontem" }
    ]
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    name: profileData.name,
    role: profileData.role,
    email: profileData.email,
    phone: profileData.phone,
    location: profileData.location,
    memberSince: profileData.memberSince
  });

  const handleEditChange = (field: string, value: string) => {
    setEditData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
    setEditData({
      name: profileData.name,
      role: profileData.role,
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      memberSince: profileData.memberSince
    });
  };

  const handleSaveProfile = () => {
    // Aqui você pode adicionar a lógica para salvar as alterações no perfil do usuário
    setShowEditModal(false);
    // Atualize o profileData com os dados editados
    setEditData({
      name: profileData.name,
      role: profileData.role,
      email: profileData.email,
      phone: profileData.phone,
      location: profileData.location,
      memberSince: profileData.memberSince
    });
  };

  return (
    <div className="bg-[#e8ebe8] min-h-screen">
      <Header title="Perfil do Usuário" onProfileClick={onUserClick} onLogout={onLogout} />
      
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#5a8377] h-32"></div>
          
          <div className="relative px-8 pb-8">
            <div className="flex items-end gap-6 -mt-16">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <User className="w-16 h-16 text-[#5a8377]" />
              </div>
              
              <div className="pb-4 flex-1">
                <h1 className="text-gray-800 text-2xl">{profileData.name}</h1>
                <p className="text-gray-600">{profileData.role}</p>
              </div>

              <button 
                onClick={() => setShowEditModal(true)}
                className="px-6 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors mb-4"
              >
                Editar Perfil
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-gray-800 mb-4">Informações Pessoais</h2>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-[#5a8377]" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-800">{profileData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-[#5a8377]" />
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="text-gray-800">{profileData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#5a8377]" />
                  <div>
                    <p className="text-sm text-gray-600">Localização</p>
                    <p className="text-gray-800">{profileData.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#5a8377]" />
                  <div>
                    <p className="text-sm text-gray-600">Membro desde</p>
                    <p className="text-gray-800">{profileData.memberSince}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-gray-800 mb-4">Estatísticas</h2>
                
                <div className="p-4 bg-gradient-to-r from-[#7fb069] to-[#5a8377] rounded-lg text-white">
                  <p className="text-sm opacity-90">Total de Cadastros</p>
                  <p className="text-3xl">{profileData.totalRegistrations}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-[#9fc074] to-[#7fb069] rounded-lg text-white">
                  <p className="text-sm opacity-90">Sementes Gerenciadas</p>
                  <p className="text-3xl">{profileData.managedSeeds}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-[#d9a95d] to-[#c89850] rounded-lg text-white">
                  <p className="text-sm opacity-90">Fornecedores Ativos</p>
                  <p className="text-3xl">{profileData.activeSuppliers}</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-[#6b9587] to-[#5a8377] rounded-lg text-white">
                  <p className="text-sm opacity-90">Último Acesso</p>
                  <p className="text-xl">{profileData.lastAccess}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-gray-800 mb-4">Atividades Recentes</h2>
              <div className="space-y-3">
                {profileData.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 bg-${activity.type}-500 rounded-full`}></div>
                    <div className="flex-1">
                      <p className="text-gray-800">{activity.description}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Edição de Perfil */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#5a8377] text-white p-4 flex items-center justify-between rounded-t-lg">
              <h2>Editar Perfil</h2>
              <button onClick={handleCancelEdit} className="hover:bg-[#4a7367] p-1 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                    <User className="w-16 h-16 text-[#5a8377]" />
                  </div>
                  <button className="absolute bottom-3 right-0 bg-[#5a8377] p-2 rounded-full text-white hover:bg-[#4a7367] transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">Clique para alterar a foto</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Nome Completo</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => handleEditChange('name', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Cargo/Função</label>
                    <input
                      type="text"
                      value={editData.role}
                      onChange={(e) => handleEditChange('role', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleEditChange('email', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => handleEditChange('phone', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Localização
                  </label>
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) => handleEditChange('location', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Membro desde
                  </label>
                  <input
                    type="text"
                    value={editData.memberSince}
                    onChange={(e) => handleEditChange('memberSince', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                  />
                </div>

                <div className="border-t border-gray-200 pt-4 mt-6">
                  <h3 className="text-gray-800 mb-4">Alterar Senha</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">Senha Atual</label>
                      <input
                        type="password"
                        placeholder="Digite sua senha atual"
                        className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Nova Senha</label>
                        <input
                          type="password"
                          placeholder="Digite a nova senha"
                          className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 text-sm">Confirmar Senha</label>
                        <input
                          type="password"
                          placeholder="Confirme a nova senha"
                          className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#5a8377]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-8 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="px-8 py-2 bg-[#5a8377] text-white rounded hover:bg-[#4a7367] transition-colors"
                  >
                    Salvar Alterações
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