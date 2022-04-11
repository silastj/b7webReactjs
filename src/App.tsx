/* eslint-disable array-callback-return */
import styles from '../src/App.module.css';
import Header from './components/header'
import logo from '../src/img/logo.svg'
import Footer from './components/footer'
import Texto from './components/texto'
import Button from './components/button';
import React, { useState } from 'react';
import List from './components/list';

function App() {

  let [numero, setNumero] = useState(0);
  let [name, setName] = useState('Silas')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)

  const handleButtonClick = () => {
    alert('clicou com a function externa')
  }

  const handleButtonClickName = () => {
    return setName('Amós')
  }

  const handleButtonClickDelete = () => {
    setNumero(numero - 1)
  }
  const handleButtonClickSome = () => {
    setNumero(numero + 1)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  }

  const handleButtonClickPai = () => {
    alert('clicou com a function no pai')
  }

  const handleMostrar = () => {
    setShow(!show)
  }
  let list = [
    'Silas',
    'Samara',
    'Sebastião',
    'Ivonete',
    'Lucivaldo'
  ]

  let newList = [
    { name: 'Silas', age: 37 },
    { name: 'Amós', age: 41 },
    { name: 'Samara', age: 26 }
  ]

  return (
    <div className="App">
      <Header
        title="Título do Header"
        text="Descrição do header" >
        <img src={logo} alt="imagem da Logo" />
      </Header>
      <main>
        <Texto
          text="Silas"
        />
        <p>Main</p>
        <div className={styles.divisoria}>
          <h2>Button</h2>
          <Button
            funcao={handleButtonClickPai}
            text="Clique aqui com function no Pai"
          />
          <Button
            funcao={handleButtonClick}
            text="Clique aqui 01a"
          />
          <Button
            funcao={handleButtonClickName}
            text="Mude para Amós"
          />
          <Button
            funcao={handleButtonClickSome}
            text=" + "
          />
          <Button
            funcao={handleButtonClickDelete}
            text=" - "
            disabled={numero <= 0 ? true : false}
          />
          <Button
            onClick={() => { alert('clicou com a function inline') }}
            text="Clique aqui 02"
          />
          <Button funcao={handleMostrar}
            text={show ? 'Ocultar' : 'Mostrar'}
          />
          {show &&
            <div>
              <p>Mostrar ou Esconder</p>
            </div>
          }
          Meu nome é {name}
          Meu numero {numero}
        </div>
        <div className={styles.divisoria}>
          <h2>Input</h2>
          <p>Nome:</p>
          <input type="text" value={nome} onChange={handleInput} />
          <p>Copia do valor digitado acima: {nome}</p>
          <p>email:</p>
          <input type="email" value={email} onChange={handleInput} />
          <p>Copia do valor digitado acima: {email}</p>
        </div>
        <div className={styles.divisoria}>
          <h2>Lista</h2>
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li key={index}>{item.toUpperCase()}</li>
            ))}
          </ul>
          <ul>
            {newList.map((item, index) => (
              <List key={index} data={item} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
