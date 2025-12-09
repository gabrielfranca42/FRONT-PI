import { useState, useEffect } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Estoque } from "./components/Estoque";
import { Configuracao } from "./components/Configuracao";
import { Faturamento } from "./components/Faturamento";
import { Cadastramento } from "./components/Cadastramento";
import { CadastroFornecedor } from "./components/CadastroFornecedor";
import { CadastroSementes } from "./components/CadastroSementes";
import { PerfilUsuario } from "./components/PerfilUsuario";
import {
  LayoutDashboard,
  Home as HomeIcon,
  Package,
  Settings,
  TrendingUp,
  UserPlus,
  Truck,
  Sprout,
  User,
} from "lucide-react";
import logoImage from "figma:asset/146fd5b01d13f823ceb8c438303380c6d8112ac0.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      setCurrentPage("dashboard");
    }
  }, []);

  const handleLogin = (email: string) => {
    setIsAuthenticated(true);
    setCurrentUser(email);
    localStorage.setItem("currentUser", email);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setCurrentPage("login");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#a8c5bc]">
        {currentPage === "login" ? (
          <Login
            onLogin={handleLogin}
            onGoToRegister={() => setCurrentPage("register")}
          />
        ) : (
          <Register
            onRegister={handleLogin}
            onGoToLogin={() => setCurrentPage("login")}
          />
        )}
      </div>
    );
  }

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    { id: "home", label: "Home", icon: HomeIcon },
    {
      id: "faturamento",
      label: "Faturamento",
      icon: TrendingUp,
    },
    {
      id: "cadastramento",
      label: "Cadastramento",
      icon: UserPlus,
    },
    { id: "estoque", label: "Estoque", icon: Package },
    {
      id: "cadastroSementes",
      label: "Cadastro de Sementes",
      icon: Sprout,
    },
    {
      id: "cadastroFornecedor",
      label: "Cadastro Fornecedor",
      icon: Truck,
    },
    {
      id: "configuracao",
      label: "Configuração",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-[#e8ebe8] flex">
      <aside className="w-64 bg-[#5a8377] text-white flex flex-col">
        <div className="p-6 flex flex-col items-center border-b border-[#4a7367]">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3">
            <div className="w-10 h-10 text-[#5a8377]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 30 Q45 35 45 40 L45 50 Q45 55 40 60 M50 30 Q55 35 55 40 L55 50 Q55 55 60 60 M35 65 Q50 55 65 65"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm">AtlaSystem</span>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "bg-[#4a7367]"
                    : "hover:bg-[#4a7367]/50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        {currentPage === "dashboard" && (
          <Dashboard
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "home" && (
          <Home
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "faturamento" && (
          <Faturamento
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "cadastramento" && (
          <Cadastramento
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "estoque" && (
          <Estoque
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "cadastroSementes" && (
          <CadastroSementes
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "cadastroFornecedor" && (
          <CadastroFornecedor
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "configuracao" && (
          <Configuracao
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
        {currentPage === "perfil" && (
          <PerfilUsuario
            onUserClick={() => setCurrentPage("perfil")}
            onLogout={handleLogout}
          />
        )}
      </main>
    </div>
  );
}