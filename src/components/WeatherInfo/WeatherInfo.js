import React from 'react';

import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import './style.css'

class WeatherInfo extends React.Component {

    render() {
        return (
            <>

                {this.props.city && this.props.country &&
                    <>
                        <div className="weather-info">
                            <span className="locationTitle">{this.props.city}, {this.props.country}</span>
                            <h1 className="tempTitle">{this.props.temperature.toFixed(0)}ºC  {this.props.climate}</h1>
                            <div className="descriptionList">
                                <tr>
                                    <td><ArrowUpward style={{ fontSize: 'small' }} />{this.props.temp_max.toFixed(0)}º <ArrowDownward style={{ fontSize: 'small' }} /> {this.props.temp_min.toFixed(0)}º</td>
                                    <td>Sensação: {this.props.feels_like.toFixed(0)}ºC</td>
                                </tr>
                                <tr>
                                    <td>Humidade: {this.props.humidity}%</td>
                                    <td>Vento: {this.props.wind.toFixed(0)}Km/h</td>
                                </tr>
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default WeatherInfo