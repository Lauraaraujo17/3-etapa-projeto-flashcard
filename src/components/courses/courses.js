import React, { useEffect, useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import img1 from '../../images/productImages/product7.png'
import { api } from '../../services/api'
import './courses.css'
const Products = () => {
    const [ messages, setMessage ] = useState([])

    const history = useHistory()

    useEffect(() => {
        api.get('/api/colecoes').then(response => {
            setMessage(response.data)
        })
    })
    
    const handlerDelete = async (e, item) => { 
        e.preventDefault
        const { colecaoId, nome } = item
        
        if (window.confirm(`Deseja excluir o curso ${nome}?`)) {
            await api.delete(`/api/colecoes/${colecaoId}`).then(() => history.go(0))
        }
    }

    return (
        <div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {messages.map((item, index) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                                <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={img1} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nome}</h5>
                                        <p className="card-text">{item.descricao}</p>
                                    </div>
                                    
                                <p><Link to={"/update/" + item.colecaoId}>Editar</Link></p>
                                <a href="#" onClick={ e => handlerDelete(e, item)}>Excluir</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        </div>
    )

}

export default Products