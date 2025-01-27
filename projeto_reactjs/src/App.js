import './App.css'; //Importar arquivos para este componente
import HelloWorlds from './components/HelloWorlds';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome ="Joana"

  return (
    //Class e uma palavra reservada do JS, tenho usar ClassName
    <div className="App">
 
      {/* <HelloWorlds/> */}
      {/* Trabalhando com props */}
      <SayMyName nome="Eduardo" /> {/*Atributo com nome  */}
      <SayMyName nome="Mário" />
      <SayMyName nome={nome} /> {/* Possível passar a variável para propriedade nome do componente SayMyName */}
      <Pessoa nome="Dedé" idade="47" profissao="Programador" foto="https://placehold.co/150" />

    </div>
  );
}
//Exportação para outros arquivos
export default App;
