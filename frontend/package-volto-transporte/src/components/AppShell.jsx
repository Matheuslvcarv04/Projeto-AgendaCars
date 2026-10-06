import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const NAV_ITEMS = [
  { path: '/painel', label: 'Painel', icon: 'chart bar' },
  { path: '/solicitacao', label: 'Solicitar viagem', icon: 'file alternate' },
  { path: '/aprovacao-gestor', label: 'Aprovacoes', icon: 'check circle' },
  { path: '/agenda', label: 'Agenda', icon: 'calendar alternate' },
  { path: '/checklist', label: 'Checklist', icon: 'check square' },
  { path: '/abastecimento', label: 'Abastecimento', icon: 'tint' },
];

const AppShell = ({ activePath, title, description, children }) => (
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
        {NAV_ITEMS.map((item) => (
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

export default AppShell;
