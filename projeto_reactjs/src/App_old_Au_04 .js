import './App.css'; //Importar arquivos para este componente
import HelloWorlds from './components/HelloWorlds';

function App() {

  //Variaveis 
  // const name = "Eduardo Augusto"
  // const newName = name.toUpperCase()

  // function sum(a, b){
  //   return a+b
  // }

  const url = "https://placehold.co/150"

  return (
    //Class e uma palavra reservada do JS, tenho usar ClassName
    <div className="App">
      {/* <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(9, 11)}</p>
      <img src={url} alt="Minha imagem" /> */}
      {/* Chamada do componente e a tag com o próprio nome do componente */}
      <HelloWorlds/>
    </div>
  );
}
//Exportação para outros arquivos
export default App;
