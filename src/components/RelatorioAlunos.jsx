
const RelatorioALunos = () => {

    const alunos = [

        {
         aluno: "Renato",
        matrícula: "2312456789",
        nota: 8
        },

        {
          aluno: "Julia",
        matrícula: "2003456789",
        nota: 9
        },


        {
           aluno: "Pedro",
        matrícula: "2209876543",
        nota: 5
        },

        {
            aluno: "Mariana",
        matrícula: "2109876543",
        nota: 10
        },

        {
            aluno: "Tiago",
            matrícula: "2203456789",
            nota: 7
        }
    ]

    alunos.sort((a,b)=> a.aluno.localeCompare(b.aluno))

    return (

        <div>
            <div id="relatorio">
                <h1>RELATORIO</h1>

                <table>

                    <thead>

                        <tr>
                            <th>Nome</th>
                            <th>Matrícula</th>
                            <th>Nota Final</th>
                        </tr>

                    </thead>

                    <tbody id="tbody">
                        {alunos.map((elemento, index) => (

                            <tr key={index}>
                                <td>{elemento.aluno}</td>
                                <td>{elemento.matrícula}</td>
                                <td>{elemento.nota}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default RelatorioALunos
