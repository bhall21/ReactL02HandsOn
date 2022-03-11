import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (state, population, capital,state2, population2, capital2,state3, population3, capital3,state4, population4, capital4) => {
    return (
        <table>
            <tr>
                <td><h1>State</h1></td>
                <td><h1>Population</h1></td>
                <td><h1>Capitol</h1></td>
            </tr>
            <tr>
                <td>{state}</td>
                <td>{population}</td>
                <td>{capital}</td>
            </tr>
            <tr>
                <td>{state2}</td>
                <td>{population2}</td>
                <td>{capital2}</td>
            </tr>
            <tr>
                <td>{state3}</td>
                <td>{population3}</td>
                <td>{capital3}</td>
            </tr>
            <tr>
                <td>{state4}</td>
                <td>{population4}</td>
                <td>{capital4}</td>
            </tr>
           

        </table>

    );
}
ReactDOM.render(
    stateInfo('Idaho', '','Bosie','Tennessee','6.651 million','Nashville','Maine','1.331 million','Agusta','Wisconsin','5.779 million','Madison'), document.getElementById('root')
);