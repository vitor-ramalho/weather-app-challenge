import React from 'react';

import './style.css'

class WeatherInfo extends React.Component {

    render() {
        return (
            <>
                <div className="weatherInfo">

                    {this.props.city && this.props.country &&
                        <>
                            <span className="locationTitle">{this.props.city}, {this.props.country}</span>
                            <h1 className="tempTitle">{this.props.temperature}Cº  {this.props.climate}</h1>
                            <div className="descriptionList">
                                <tr>
                                    <td>{this.props.temp_min}Cº {this.props.temp_max}Cº</td>
                                    <td>Sensação: {this.props.feels_like.toFixed(2)}Cº</td>
                                </tr>
                                <tr>
                                    <td>{this.props.humidity}%</td>
                                    <td>{this.props.wind}Km/h</td>
                                </tr>
                            </div>
                        </>
                    }
                </div>
            </>
        )
    }
}

export default WeatherInfo