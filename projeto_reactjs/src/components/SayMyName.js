
//Argumento props na passsagem de parâmetro
function SayMyName(props){

    return (

        <div>
            {/* Aqui, obtenho o valor 'nome="Eduardo"' passado pelo atributo nome no App.js */}
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )

}

export default SayMyName