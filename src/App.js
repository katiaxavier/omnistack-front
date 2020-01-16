import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

//Componente: Bloco isolado de HTML, CSS E JS, o qual nao interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informaçoes mantidas pelo componente (Imutabilidade)

function App() {
  return (<div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required></input>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required></input>
          </div>

        </div>
        <button type="submit">Salvar</button>
      </form>

    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/22611972?s=460&v=4" />
            <div className="user-info">
              <strong>Kátia Xavier</strong>
              <span>React, Node.js</span>
            </div>
          </header>
          <p>Computer science</p>
          <a href="https://github.com/katiaxavier">Acessar Perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/22611972?s=460&v=4" />
            <div className="user-info">
              <strong>Kátia Xavier</strong>
              <span>React, Node.js</span>
            </div>
          </header>
          <p>Computer science</p>
          <a href="https://github.com/katiaxavier">Acessar Perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/22611972?s=460&v=4" />
            <div className="user-info">
              <strong>Kátia Xavier</strong>
              <span>React, Node.js</span>
            </div>
          </header>
          <p>Computer science</p>
          <a href="https://github.com/katiaxavier">Acessar Perfil no Github</a>
        </li>
      </ul>

      
    </main>
  </div>
  )
}

export default App;
