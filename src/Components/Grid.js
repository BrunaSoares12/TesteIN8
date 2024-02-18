import React, { useState, useEffect } from 'react'
import './Style.css'


const Grid = () =>{
    const [ListaDePessoas, setListaDePessoas] = useState([])
    useEffect(() => {
        const novaLista = localStorage.getItem("Person") ? JSON.parse(localStorage.getItem("Person")) : []
        setListaDePessoas(novaLista)
      });
    return(
        <div className="table-container">
            <table className="table-style">
                
                <tr>
                    <th className="table-cell"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                    <th className="table-cell">Nome</th>
                    <th className="table-cell">E-mail</th>
                    <th className="table-cell">Nascimento</th>
                    <th className="table-cell2">Telefone</th>
                </tr>
                {ListaDePessoas.map((value, index) => {
                    return(
                    <tr>
                        <td className="table-cell">{index + 1}</td>
                        <td className="table-cell">{value?.name}</td>
                        <td className="table-cell">{value?.Email}</td>
                        <td className="table-cell">{value?.Nascimento}</td>
                        <td className="table-cell2">{value?.Telefone}</td>
                    </tr>
                    )
                })
            }

            </table>

        </div>
    )
}
export default Grid