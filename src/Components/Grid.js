import React, { useState, useEffect } from 'react'
import './Style.css'


const Grid = () =>{
    const [ListaDePessoas, setListaDePessoas] = useState([])
    useEffect(() => {
        const novaLista = localStorage.getItem("Person") ? JSON.parse(localStorage.getItem("Person")) : []
        setListaDePessoas(novaLista)
      }, [ListaDePessoas]);
     return (
            <div className="Tabela">
                <table className="Tabela-estilo">
                    
                    <tr>
                        <th className="tabela-contatos"> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </th>
                        <th className="tabela-contatos">Nome</th>
                        <th className="tabela-contatos">E-mail</th>
                        <th className="tabela-contatos">Nascimento</th>
                        <th className="tabela-contatos2">Telefone</th>
                    </tr>
                    {ListaDePessoas.map((value, index) => {
                        return(
                        <tr>
                            <td className="tabela-contatos">{index + 1}</td>
                            <td className="tabela-contatos">{value?.name}</td>
                            <td className="tabela-contatos">{value?.Email}</td>
                            <td className="tabela-contatos">{value?.Nascimento}</td>
                            <td className="tabela-contatos2">{value?.Telefone}</td>
                        </tr>
                        )
                    })
                }

                </table>

            </div>
    )
}
export default Grid