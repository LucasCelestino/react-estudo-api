import React from 'react'
import Produto from './Produto';

const App = () => {

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event)
  {

    setLoading(true);

    const productUrl = event.target.innerText.toLowerCase();

    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/'+productUrl);

    const productJson = await response.json();

    setDados(productJson);

    setLoading(false);
  }

  return (
    <div style={{paddingTop:'70px', paddingLeft:'300px'}}>
      {loading && 'Carregando...'}
      {!loading && dados && <Produto dados={dados} />}
      <button onClick={handleClick} style={{marginRight:'20px', backgroundColor:'greenyellow'}}>Notebook</button>
      <button onClick={handleClick} style={{marginRight:'20px', backgroundColor:'greenyellow'}}>Smartphone</button>
      <button onClick={handleClick} style={{marginRight:'20px', backgroundColor:'greenyellow'}}>Tablet</button>
    </div>
  )
}

export default App