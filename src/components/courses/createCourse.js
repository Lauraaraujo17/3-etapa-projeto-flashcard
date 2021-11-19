import React, { useEffect, useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { api } from '../../services/api'
import './courses.css'

const CreateCourses = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDesc] = useState('')
    const history = useHistory()

    async function handleSendCourses(event = FormEvent) {
        event.preventDefault()
        if(!nome && !descricao) return

        await api.post('/api/colecoes', {
            nome, descricao
        })

        setNome('')
        setDesc('')
        
        history.push("products")
    }

    return (
        <div>
            <section className="form-style">
                <div>
                    <h1>Cadastrar um novo curso.</h1>
                <form onSubmit={handleSendCourses}>
                    <textarea 
                        name="nome"
                        id="nome"
                        placeholder="Nome do Curso"
                        onChange={event => setNome(event.target.value)}
                        value={nome}
                    />

                    <textarea 
                        name="descricao"
                        id="descricao"
                        placeholder="Descriçao"
                        onChange={event => setDesc(event.target.value)}
                        value={descricao}
                    />

                    <button type="submit">Enviar</button>
                </form>
                </div>          
            </section>
        </div>
    )

}

export default CreateCourses