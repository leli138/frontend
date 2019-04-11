import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default class Main extends Component{

    //Criar o objeto state, que contém todas informações do componente
    state = {
        newBox: '',
    };

    //Método que é chamado todo vez que o form receber um submit
    handleSubmit = async e => {
        //eviar o comportamento padrão do form
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });
        //Fazer o usuário navegar por uma tela
        this.props.history.push(`/box/${response.data._id}`)
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value }); // recebe o valor do input
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit} >
                   <img src={logo} alt="" /> 
                   <input placeholder="Criar um box"
                    value={this.state.newBox} onChange={this.handleInputChange}/>
                   <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}

