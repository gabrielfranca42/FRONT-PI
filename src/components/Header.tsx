import { Search, Bell, ChevronDown, User, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  title: string;
  onProfileClick: () => void;
  onLogout: () => void;
}

export function Header({ title, onProfileClick, onLogout }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#6b9587] p-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <span className="text-white">{title}</span>
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
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 hover:bg-[#5a8377] px-3 py-1 rounded transition-colors"
          >
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-white">Name User</span>
            <ChevronDown className={`w-4 h-4 text-white transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  onProfileClick();
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Meu Perfil</span>
              </button>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  onLogout();
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
