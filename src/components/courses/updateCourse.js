import React, { useEffect, useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

import { api } from '../../services/api'
import './courses.css'

const UpdateCourse = () => {
    let [nome, setNome] = useState('')
    let [descricao, setDesc] = useState('')
    const { colecaoId } = useParams()
    const [ messages, setMessage ] = useState([])
    const history = useHistory()

    async function handleSendCourses(event = FormEvent) {
        event.preventDefault()
        if(!nome && !descricao) return history.replace("/products")

        if (nome == undefined) nome = messages.nome
        if (descricao == undefined) descricao = messages.descricao

        await api.put(`/api/colecoes/${colecaoId}`, {
            nome, descricao
        })
        
        history.replace("/products")
    }

    useEffect(() => {
        api.get(`/api/colecoes/${colecaoId}`).then(response => {
            setMessage(response.data)
        })
    }, colecaoId)

    return (
        <div>
            <section className="form-style">
                <div>
                    <h1>Atualizar Curso</h1>
                <form onSubmit={handleSendCourses}>
                    <textarea 
                        name="nome"
                        id="nome"
                        onChange={event => setNome(event.target.value)}
                        value={nome}
                        defaultValue={messages.nome || nome}
                    />

                    <textarea 
                        name="descricao"
                        id="descricao"
                        onChange={event => setDesc(event.target.value)}
                        value={descricao}
                        defaultValue={messages.descricao || descricao}
                    />

                    <button type="submit">Atualizar</button>
                </form>
                </div>          
            </section>
        </div>
    )
}

export default UpdateCourse