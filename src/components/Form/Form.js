import React from 'react';


class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input name="city" placeholder="Insira o nome da cidade aqui"/>
                <input name="country" placeholder="Insira o nome do país aqui"/>
                <button>Busque</button>
            </form>
        );
    }
}

export default Form;