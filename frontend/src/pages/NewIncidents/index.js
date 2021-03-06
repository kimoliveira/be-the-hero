import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import heroesLogo from '../../assets/logo.svg';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ heroesLogo } alt="Be The Heroes"/>
                    <h1>Cadastrar novo caso</h1>

                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder="Título do caso"/>
                    <textarea type="email" placeholder="Descrição"/>
                    <input type="text" placeholder="Valor em Reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}