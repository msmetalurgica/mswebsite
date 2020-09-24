import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

// Pages
import Main from './pages/Main';
import Empresa from './pages/Empresa';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

const App = () => (
  <div className="Site">
    <Router>
      <GlobalStyle />
      <Route exact path="/" component={Main} />
      <Route path="/empresa" component={Empresa} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/contato" component={Contato} />
    </Router>
  </div>
);

export default App;
