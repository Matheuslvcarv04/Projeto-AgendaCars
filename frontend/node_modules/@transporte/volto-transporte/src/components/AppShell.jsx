import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import useUser from '@plone/volto/hooks/user/useUser';

const NAV_ITEMS = [
  { path: '/painel', label: 'Painel', icon: 'chart bar', roles: ['Manager', 'Administrador'] },
  { path: '/solicitacao', label: 'Solicitar viagem', icon: 'file alternate', authenticated: true },
  { path: '/minhas-solicitacoes', label: 'Minhas solicitações', icon: 'list', roles: ['Solicitante'] },
  { path: '/aprovacao-gestor', label: 'Aprovações', icon: 'check circle', roles: ['Manager', 'Administrador'] },
  { path: '/agenda', label: 'Agenda', icon: 'calendar alternate', roles: ['Manager', 'Administrador', 'Motorista'] },
  { path: '/checklist', label: 'Checklist', icon: 'check square', roles: ['Manager', 'Administrador', 'Motorista'] },
  { path: '/abastecimento', label: 'Abastecimento', icon: 'tint', roles: ['Manager', 'Administrador', 'Motorista'] },
  { path: '/motoristas', label: 'Motoristas', icon: 'users', roles: ['Manager', 'Administrador'] },
  { path: '/disponibilidade', label: 'Disponibilidade', icon: 'search', roles: ['Manager', 'Administrador'] },
  { path: '/relatorio-mensal', label: 'Relatório mensal', icon: 'file alternate outline', roles: ['Manager', 'Administrador'] },
];

const AppShell = ({ activePath, title, description, children }) => (
  <AppShellContent activePath={activePath} title={title} description={description}>
    {children}
  </AppShellContent>
);

const AppShellContent = ({ activePath, title, description, children }) => {
  const user = useUser();
  const authenticated = useSelector((state) => Boolean(state.userSession?.token));
  const roles = user?.roles || [];
  const visibleItems = NAV_ITEMS.filter((item) => (
    item.authenticated
      ? authenticated
      : item.roles.some((role) => roles.includes(role))
  ));

  return (
  <div className="transporte-app-shell" data-page={activePath}>
    <header className="transporte-topbar">
      <div className="transporte-brand">
        <span className="transporte-brand-mark" aria-hidden="true">PR</span>
        <span className="transporte-brand-copy">
          <strong>Porto do Recife</strong>
          <small>Gestao de transporte</small>
        </span>
      </div>
      <div className="transporte-topbar-status">
        <span className="transporte-status-dot" />
        Operacao interna
      </div>
    </header>

    <nav className="transporte-nav" aria-label="Navegacao principal">
      <div className="transporte-nav-inner">
        {visibleItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            exact
            className="transporte-nav-link"
            activeClassName="is-active"
          >
            <Icon name={item.icon} aria-hidden="true" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>

    <main className="transporte-main">
      <header className="transporte-page-heading">
        <div>
          <p className="transporte-eyebrow">FROTA INSTITUCIONAL / PORTO DO RECIFE</p>
          <h1>{title}</h1>
          {description && <p className="transporte-page-description">{description}</p>}
        </div>
        <span className="transporte-page-marker" aria-hidden="true">PR</span>
      </header>
      <div className="transporte-page-content">{children}</div>
    </main>

    <footer className="transporte-footer">
      <span>Porto do Recife</span>
      <span>Sistema de gestao de transporte</span>
    </footer>
  </div>
  );
};

export default AppShell;
