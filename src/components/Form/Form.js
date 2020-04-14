import React from 'react';
import SearchIcon from '@material-ui/icons/Search'

import './style.css'

class Form extends React.Component{
    render(){
        return(
            <>
            <form onSubmit={this.props.getWeather}>
                <input className="inputCity" name="city" placeholder="Cidade"/>
                <input className="inputCountry" name="country" placeholder="País"/>
                <button className="btnSubmit" type="submit"><SearchIcon/></button>
            </form>
            </>
        );
    }
}

export default Form;