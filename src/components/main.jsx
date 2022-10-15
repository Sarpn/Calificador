import { useState } from 'react';
import Form from './form';
import { RadarChart, Percentage } from './graph';


export default function Main() {

    const [started, setStarted] = useState(false);
    const [number, setNumber] = useState(1);
    const [name, setName] = useState('');

    const [pro, setPro] = useState([]);
    const [con, setCon] = useState([]);
    const [act, setAct] = useState([]);

    const [data, setData] = useState({number,con,pro,act});


    const numberChange = (target) => {
        setNumber(target.target.value)
        setStarted(!started);
    }

    const changeName = (target) =>{
        setName(target.target.value)
        setStarted(!started);
    }


    const changeCalificacion = (title, index, value) =>{
        setStarted(!started);
        console.log('SI')
        if (title === 'Conceptual'){
            setCon(prevProps => {
                prevProps[index] = value;
                return prevProps;
            })
        }

        if (title === 'Procedimental'){
            setPro(prevProps => {
                prevProps[index] = value;
                return prevProps;
            })
        }

        if (title === 'Actitudinal'){
            setAct(prevProps => {
                prevProps[index] = value;
                return prevProps;
            })
        }

        setData({number,con,pro,act})
    }

    return (

        <>
            
        <div className="container p-6">
            <div className="columns">
                <div className="column"> <input class="input is-success" type="number" onChange={numberChange} placeholder="Número de profesores"/> </div>
                <div className="column"> <input class="input is-success" type="text" onChange={changeName} placeholder="Nombre del estudiante"/> </div>
            </div>
            
        
        
        <hr></hr>

        <div className="subtitle has-text-centered">
            Evaluación {name}
        </div>

        
        <Form onChange={changeCalificacion} title={"Conceptual"} rowNumber={number}></Form>
        <Form onChange={changeCalificacion} title={"Procedimental"} rowNumber={number}></Form>
        <Form onChange={changeCalificacion} title={"Actitudinal"} rowNumber={number}></Form>


        <div className="subtitle has-text-centered">
            Resultados finales {name}
        </div>
        
        

        </div>

        <RadarChart change={started} data={data}></RadarChart>

        <hr>
        </hr>

        <Percentage change={started} data={data} ></Percentage>

        <hr></hr>

        </>


    )

}
