import { useState, useEffect } from 'react';
import { User, Building2, Trash2 } from 'lucide-react';

interface Pessoa {
  id: string;
  tipo: 'fisica' | 'juridica';
  nome: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  telefone: string;
  endereco: string;
}

export function CadastroPessoa() {
  const [tipoPessoa, setTipoPessoa] = useState<'fisica' | 'juridica'>('fisica');
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    cnpj: '',
    email: '',
    telefone: '',
    endereco: '',
  });

  useEffect(() => {
    const savedPessoas = JSON.parse(localStorage.getItem('pessoas') || '[]');
    setPessoas(savedPessoas);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novaPessoa: Pessoa = {
      id: Date.now().toString(),
      tipo: tipoPessoa,
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      endereco: formData.endereco,
      ...(tipoPessoa === 'fisica' ? { cpf: formData.cpf } : { cnpj: formData.cnpj }),
    };

    const novaLista = [...pessoas, novaPessoa];
    setPessoas(novaLista);
    localStorage.setItem('pessoas', JSON.stringify(novaLista));

    setFormData({
      nome: '',
      cpf: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
    });
  };

  const handleDelete = (id: string) => {
    const novaLista = pessoas.filter((p) => p.id !== id);
    setPessoas(novaLista);
    localStorage.setItem('pessoas', JSON.stringify(novaLista));
  };

  return (
    <div>
      <h1 className="text-gray-800 mb-8">Cadastro de Pessoas</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-gray-800 mb-6">Nova Pessoa</h2>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setTipoPessoa('fisica')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                tipoPessoa === 'fisica'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <User className="w-5 h-5 inline mr-2" />
              Pessoa Física
            </button>
            <button
              onClick={() => setTipoPessoa('juridica')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                tipoPessoa === 'juridica'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              <Building2 className="w-5 h-5 inline mr-2" />
              Pessoa Jurídica
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                {tipoPessoa === 'fisica' ? 'Nome completo' : 'Razão social'}
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {tipoPessoa === 'fisica' ? (
              <div>
                <label className="block text-gray-700 mb-2">CPF</label>
                <input
                  type="text"
                  value={formData.cpf}
                  onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 mb-2">CNPJ</label>
                <input
                  type="text"
                  value={formData.cnpj}
                  onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="00.000.000/0000-00"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Telefone</label>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Endereço</label>
              <textarea
                value={formData.endereco}
                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                rows={3}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-gray-800 mb-6">Pessoas Cadastradas</h2>

          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {pessoas.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Nenhuma pessoa cadastrada</p>
            ) : (
              pessoas.map((pessoa) => (
                <div key={pessoa.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {pessoa.tipo === 'fisica' ? (
                          <User className="w-4 h-4 text-blue-600" />
                        ) : (
                          <Building2 className="w-4 h-4 text-purple-600" />
                        )}
                        <span className="text-gray-900">{pessoa.nome}</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {pessoa.tipo === 'fisica' ? `CPF: ${pessoa.cpf}` : `CNPJ: ${pessoa.cnpj}`}
                      </p>
                      <p className="text-gray-600 text-sm">{pessoa.email}</p>
                      <p className="text-gray-600 text-sm">{pessoa.telefone}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(pessoa.id)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
