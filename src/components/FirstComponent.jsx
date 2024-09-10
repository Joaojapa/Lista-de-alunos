
function FirstComponent() {

    // Definindo as variáveis
    const nome = "João Vitor";
    const sobrenome = "Campos Pires";
    const matricula = "2324290064";
    const nomeProfessor = "Felipe Batista da Silva";
    const nomeDisciplina = "Construção de FrontEnd";


    return (

        <>

            <p><strong>Nome : </strong> {nome} {sobrenome}</p>
            <p><strong>Matrícula : </strong> {matricula}</p>
            <p><strong>Professor : </strong> {nomeProfessor}</p>
            <p><strong>Disciplina : </strong>{nomeDisciplina}</p>

        </>
    )

}


export default FirstComponent;