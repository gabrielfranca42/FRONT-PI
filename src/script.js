// Estado da aplicação
let state = {
    currentPage: 'login',
    isAuthenticated: false,
    currentUser: null,
    showUserDropdown: false,
    showModal: false,
    modalType: null,
    formData: {},
    seeds: [],
    suppliers: [],
    persons: [],
    invoices: []
};

// Ícones SVG
const icons = {
    search: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
    bell: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',
    chevronDown: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>',
    user: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
    mail: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    phone: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    mapPin: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    calendar: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    x: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    camera: '<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    dashboard: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    home: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    package: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    settings: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    trendingUp: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    userPlus: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>',
    truck: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>',
    sprout: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    edit: '<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
    trash: '<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
    logOut: '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>'
};

// Menu items
const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'faturamento', label: 'Faturamento', icon: 'trendingUp' },
    { id: 'cadastramento', label: 'Cadastramento', icon: 'userPlus' },
    { id: 'estoque', label: 'Estoque', icon: 'package' },
    { id: 'cadastroSementes', label: 'Cadastro de Sementes', icon: 'sprout' },
    { id: 'cadastroFornecedor', label: 'Cadastro Fornecedor', icon: 'truck' },
    { id: 'configuracao', label: 'Configuração', icon: 'settings' },
];

// Inicialização
function init() {
    loadFromLocalStorage();
    checkAuth();
    render();
}

// Carregar dados do localStorage
function loadFromLocalStorage() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        state.isAuthenticated = true;
        state.currentUser = currentUser;
        state.currentPage = 'dashboard';
    }
    
    state.seeds = JSON.parse(localStorage.getItem('seeds') || '[]');
    state.suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    state.persons = JSON.parse(localStorage.getItem('persons') || '[]');
    state.invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
}

// Verificar autenticação
function checkAuth() {
    if (!state.isAuthenticated) {
        state.currentPage = 'login';
    }
}

// Salvar no localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        state.isAuthenticated = true;
        state.currentUser = email;
        state.currentPage = 'dashboard';
        localStorage.setItem('currentUser', email);
        render();
    }
}

// Register
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (name && email && password) {
        state.isAuthenticated = true;
        state.currentUser = email;
        state.currentPage = 'dashboard';
        localStorage.setItem('currentUser', email);
        render();
    }
}

// Logout
function handleLogout() {
    state.isAuthenticated = false;
    state.currentUser = null;
    state.currentPage = 'login';
    localStorage.removeItem('currentUser');
    state.showUserDropdown = false;
    render();
}

// Navegação
function navigateTo(page) {
    state.currentPage = page;
    state.showUserDropdown = false;
    render();
}

// Toggle user dropdown
function toggleUserDropdown() {
    state.showUserDropdown = !state.showUserDropdown;
    render();
}

// Modal
function openModal(type) {
    state.showModal = true;
    state.modalType = type;
    state.formData = {};
    render();
}

function closeModal() {
    state.showModal = false;
    state.modalType = null;
    state.formData = {};
    render();
}

// Formulários
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    switch(state.modalType) {
        case 'seed':
            state.seeds.push({ id: Date.now(), ...data });
            saveToLocalStorage('seeds', state.seeds);
            break;
        case 'supplier':
            state.suppliers.push({ id: Date.now(), ...data });
            saveToLocalStorage('suppliers', state.suppliers);
            break;
        case 'person':
            state.persons.push({ id: Date.now(), ...data });
            saveToLocalStorage('persons', state.persons);
            break;
    }
    
    closeModal();
}

// Deletar item
function deleteItem(type, id) {
    if (confirm('Deseja realmente excluir este item?')) {
        switch(type) {
            case 'seed':
                state.seeds = state.seeds.filter(item => item.id !== id);
                saveToLocalStorage('seeds', state.seeds);
                break;
            case 'supplier':
                state.suppliers = state.suppliers.filter(item => item.id !== id);
                saveToLocalStorage('suppliers', state.suppliers);
                break;
            case 'person':
                state.persons = state.persons.filter(item => item.id !== id);
                saveToLocalStorage('persons', state.persons);
                break;
        }
        render();
    }
}

// Componentes de renderização
function renderLogin() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <h1>Bem-vindo ao AtlaSystem</h1>
                    <p>Faça login para continuar</p>
                </div>
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="email" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" id="password" required placeholder="••••••••">
                    </div>
                    <button type="submit" class="btn-primary">Entrar</button>
                </form>
                <div class="auth-footer">
                    Não tem uma conta? 
                    <button onclick="navigateTo('register')">Cadastre-se</button>
                </div>
            </div>
        </div>
    `;
}

function renderRegister() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <h1>Criar Conta</h1>
                    <p>Cadastre-se no AtlaSystem</p>
                </div>
                <form onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" id="name" required placeholder="Seu nome completo">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="email" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Senha</label>
                        <input type="password" id="password" required placeholder="••••••••">
                    </div>
                    <button type="submit" class="btn-primary">Cadastrar</button>
                </form>
                <div class="auth-footer">
                    Já tem uma conta? 
                    <button onclick="navigateTo('login')">Fazer login</button>
                </div>
            </div>
        </div>
    `;
}

function renderHeader() {
    return `
        <header class="header">
            <div class="header-search">
                <span class="search-icon">${icons.search}</span>
                <input type="text" placeholder="Pesquisar...">
            </div>
            <div class="header-actions">
                <button class="icon-button">
                    ${icons.bell}
                </button>
                <div class="user-menu">
                    <button class="user-button" onclick="toggleUserDropdown()">
                        <span>Name User</span>
                        ${icons.chevronDown}
                    </button>
                    <div class="user-dropdown ${state.showUserDropdown ? 'show' : ''}">
                        <button class="dropdown-item" onclick="navigateTo('perfil')">
                            ${icons.user}
                            <span>Meu Perfil</span>
                        </button>
                        <button class="dropdown-item" onclick="handleLogout()">
                            ${icons.logOut}
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `;
}

function renderSidebar() {
    return `
        <aside class="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="3" fill="none"/>
                        <path d="M50 30 Q45 35 45 40 L45 50 Q45 55 40 60 M50 30 Q55 35 55 40 L55 50 Q55 55 60 60 M35 65 Q50 55 65 65" stroke-width="3" stroke="currentColor" fill="none"/>
                    </svg>
                </div>
                <span>AtlaSystem</span>
            </div>
            <nav class="sidebar-nav">
                ${menuItems.map(item => `
                    <button 
                        class="menu-item ${state.currentPage === item.id ? 'active' : ''}" 
                        onclick="navigateTo('${item.id}')"
                    >
                        ${icons[item.icon]}
                        <span>${item.label}</span>
                    </button>
                `).join('')}
            </nav>
        </aside>
    `;
}

function renderDashboard() {
    return `
        ${renderHeader()}
        <div class="dashboard-content">
            <h1 class="page-title">Dashboard</h1>
            <div class="cards-grid">
                <div class="stat-card primary">
                    <div class="stat-label">Total de Sementes</div>
                    <div class="stat-value">${state.seeds.length}</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-label">Fornecedores</div>
                    <div class="stat-value">${state.suppliers.length}</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-label">Cadastros</div>
                    <div class="stat-value">${state.persons.length}</div>
                </div>
                <div class="stat-card info">
                    <div class="stat-label">Faturamento</div>
                    <div class="stat-value">R$ 0</div>
                </div>
            </div>
        </div>
    `;
}

function renderEstoque() {
    return `
        ${renderHeader()}
        <div class="dashboard-content">
            <h1 class="page-title">Estoque de Sementes</h1>
            <div class="table-container">
                <div class="table-header">
                    <h2 class="table-title">Sementes em Estoque</h2>
                    <button class="btn-secondary" onclick="openModal('seed')">+ Nova Semente</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.seeds.length === 0 ? `
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 40px;">
                                    Nenhuma semente cadastrada
                                </td>
                            </tr>
                        ` : state.seeds.map(seed => `
                            <tr>
                                <td>${seed.name || 'N/A'}</td>
                                <td>${seed.type || 'N/A'}</td>
                                <td>${seed.quantity || 'N/A'}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-icon">${icons.edit}</button>
                                        <button class="btn-icon" onclick="deleteItem('seed', ${seed.id})">${icons.trash}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderCadastroFornecedor() {
    return `
        ${renderHeader()}
        <div class="dashboard-content">
            <h1 class="page-title">Cadastro de Fornecedores</h1>
            <div class="table-container">
                <div class="table-header">
                    <h2 class="table-title">Fornecedores</h2>
                    <button class="btn-secondary" onclick="openModal('supplier')">+ Novo Fornecedor</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CNPJ</th>
                            <th>Contato</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.suppliers.length === 0 ? `
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 40px;">
                                    Nenhum fornecedor cadastrado
                                </td>
                            </tr>
                        ` : state.suppliers.map(supplier => `
                            <tr>
                                <td>${supplier.name || 'N/A'}</td>
                                <td>${supplier.cnpj || 'N/A'}</td>
                                <td>${supplier.contact || 'N/A'}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-icon">${icons.edit}</button>
                                        <button class="btn-icon" onclick="deleteItem('supplier', ${supplier.id})">${icons.trash}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderCadastramento() {
    return `
        ${renderHeader()}
        <div class="dashboard-content">
            <h1 class="page-title">Cadastramento de Pessoas</h1>
            <div class="table-container">
                <div class="table-header">
                    <h2 class="table-title">Pessoas Cadastradas</h2>
                    <button class="btn-secondary" onclick="openModal('person')">+ Nova Pessoa</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF/CNPJ</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.persons.length === 0 ? `
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 40px;">
                                    Nenhuma pessoa cadastrada
                                </td>
                            </tr>
                        ` : state.persons.map(person => `
                            <tr>
                                <td>${person.name || 'N/A'}</td>
                                <td>${person.document || 'N/A'}</td>
                                <td>${person.email || 'N/A'}</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="btn-icon">${icons.edit}</button>
                                        <button class="btn-icon" onclick="deleteItem('person', ${person.id})">${icons.trash}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderPerfil() {
    return `
        ${renderHeader()}
        <div>
            <div class="profile-banner"></div>
            <div class="profile-info">
                <div class="profile-header">
                    <div class="profile-avatar">
                        ${icons.user}
                    </div>
                    <div class="profile-name">
                        <h1>Name User</h1>
                        <p>Administrador do Sistema</p>
                    </div>
                    <button class="btn-edit-profile" onclick="openModal('editProfile')">
                        Editar Perfil
                    </button>
                </div>
                <div class="profile-details">
                    <div class="detail-item">
                        <div class="detail-icon">${icons.mail}</div>
                        <div class="detail-content">
                            <p>Email</p>
                            <p>usuario@atlasystem.com</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-icon">${icons.phone}</div>
                        <div class="detail-content">
                            <p>Telefone</p>
                            <p>(11) 98765-4321</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-icon">${icons.mapPin}</div>
                        <div class="detail-content">
                            <p>Localização</p>
                            <p>São Paulo, SP - Brasil</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-icon">${icons.calendar}</div>
                        <div class="detail-content">
                            <p>Membro desde</p>
                            <p>Janeiro 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderGenericPage(title) {
    return `
        ${renderHeader()}
        <div class="dashboard-content">
            <h1 class="page-title">${title}</h1>
            <div class="table-container">
                <p>Página em desenvolvimento...</p>
            </div>
        </div>
    `;
}

function renderModal() {
    if (!state.showModal) return '';
    
    let modalContent = '';
    
    if (state.modalType === 'seed') {
        modalContent = `
            <div class="modal-header">
                <h2 class="modal-title">Nova Semente</h2>
                <button class="modal-close" onclick="closeModal()">${icons.x}</button>
            </div>
            <div class="modal-body">
                <form onsubmit="handleFormSubmit(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>Tipo</label>
                            <input type="text" name="type" required>
                        </div>
                        <div class="form-group">
                            <label>Quantidade</label>
                            <input type="number" name="quantity" required>
                        </div>
                        <div class="form-group">
                            <label>Unidade</label>
                            <input type="text" name="unit" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Cancelar</button>
                        <button type="submit" class="btn-save">Salvar</button>
                    </div>
                </form>
            </div>
        `;
    } else if (state.modalType === 'supplier') {
        modalContent = `
            <div class="modal-header">
                <h2 class="modal-title">Novo Fornecedor</h2>
                <button class="modal-close" onclick="closeModal()">${icons.x}</button>
            </div>
            <div class="modal-body">
                <form onsubmit="handleFormSubmit(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>CNPJ</label>
                            <input type="text" name="cnpj" required>
                        </div>
                        <div class="form-group">
                            <label>Contato</label>
                            <input type="text" name="contact" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Cancelar</button>
                        <button type="submit" class="btn-save">Salvar</button>
                    </div>
                </form>
            </div>
        `;
    } else if (state.modalType === 'person') {
        modalContent = `
            <div class="modal-header">
                <h2 class="modal-title">Nova Pessoa</h2>
                <button class="modal-close" onclick="closeModal()">${icons.x}</button>
            </div>
            <div class="modal-body">
                <form onsubmit="handleFormSubmit(event)">
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>CPF/CNPJ</label>
                            <input type="text" name="document" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label>Telefone</label>
                            <input type="tel" name="phone" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Cancelar</button>
                        <button type="submit" class="btn-save">Salvar</button>
                    </div>
                </form>
            </div>
        `;
    } else if (state.modalType === 'editProfile') {
        modalContent = `
            <div class="modal-header">
                <h2 class="modal-title">Editar Perfil</h2>
                <button class="modal-close" onclick="closeModal()">${icons.x}</button>
            </div>
            <div class="modal-body">
                <div class="edit-profile-form">
                    <div class="edit-avatar-container">
                        <div class="edit-avatar">
                            ${icons.user}
                        </div>
                        <button class="change-photo-btn">
                            ${icons.camera}
                        </button>
                    </div>
                    <p style="font-size: 12px; color: #6b7280; margin-bottom: 24px;">Clique para alterar a foto</p>
                </div>
                <form onsubmit="closeModal()">
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Nome Completo</label>
                            <input type="text" value="Name User" required>
                        </div>
                        <div class="form-group">
                            <label>Cargo/Função</label>
                            <input type="text" value="Administrador do Sistema" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="usuario@atlasystem.com" required>
                        </div>
                        <div class="form-group">
                            <label>Telefone</label>
                            <input type="tel" value="(11) 98765-4321" required>
                        </div>
                    </div>
                    <div class="form-grid full">
                        <div class="form-group">
                            <label>Localização</label>
                            <input type="text" value="São Paulo, SP - Brasil" required>
                        </div>
                        <div class="form-group">
                            <label>Membro desde</label>
                            <input type="text" value="Janeiro 2024" required>
                        </div>
                    </div>
                    <div class="password-section">
                        <h3>Alterar Senha</h3>
                        <div class="form-grid full">
                            <div class="form-group">
                                <label>Senha Atual</label>
                                <input type="password" placeholder="Digite sua senha atual">
                            </div>
                        </div>
                        <div class="form-grid">
                            <div class="form-group">
                                <label>Nova Senha</label>
                                <input type="password" placeholder="Digite a nova senha">
                            </div>
                            <div class="form-group">
                                <label>Confirmar Senha</label>
                                <input type="password" placeholder="Confirme a nova senha">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Cancelar</button>
                        <button type="submit" class="btn-save">Salvar Alterações</button>
                    </div>
                </form>
            </div>
        `;
    }
    
    return `
        <div class="modal-overlay">
            <div class="modal-content">
                ${modalContent}
            </div>
        </div>
    `;
}

// Renderização principal
function render() {
    const app = document.getElementById('app');
    
    if (!state.isAuthenticated) {
        if (state.currentPage === 'register') {
            app.innerHTML = renderRegister();
        } else {
            app.innerHTML = renderLogin();
        }
        return;
    }
    
    let mainContent = '';
    
    switch(state.currentPage) {
        case 'dashboard':
            mainContent = renderDashboard();
            break;
        case 'estoque':
            mainContent = renderEstoque();
            break;
        case 'cadastroFornecedor':
            mainContent = renderCadastroFornecedor();
            break;
        case 'cadastramento':
            mainContent = renderCadastramento();
            break;
        case 'perfil':
            mainContent = renderPerfil();
            break;
        case 'faturamento':
            mainContent = renderGenericPage('Faturamento');
            break;
        case 'cadastroSementes':
            mainContent = renderGenericPage('Cadastro de Sementes');
            break;
        case 'configuracao':
            mainContent = renderGenericPage('Configuraç��o');
            break;
        default:
            mainContent = renderDashboard();
    }
    
    app.innerHTML = `
        <div class="app-container">
            ${renderSidebar()}
            <main class="main-content">
                ${mainContent}
            </main>
        </div>
        ${renderModal()}
    `;
}

// Event listeners globais
document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu') && state.showUserDropdown) {
        state.showUserDropdown = false;
        render();
    }
    
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}