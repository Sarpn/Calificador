import { useEffect, useState } from "react"

export default function Form({
    title,
    rowNumber,
    onChange,
}) {

    const [fields, setFields] = useState([]);


    const changeHandler = (target) => {
        onChange(title, target.target.name, target.target.value)       
    }

    useEffect(() => {
        let fieldArray = []

        for (let i = 0; i < rowNumber; i++) {
            fieldArray.push(<input type={"number"} onChange={changeHandler} name={i} className="input is-success mt-2" placeholder={(i + 1) + "º Calificación " + title} />)
        }
        setFields(() => fieldArray);

    }, [rowNumber]);

    return (
        <>
            <div className="title has-text-centered">
                {title}
            </div>

            {
                fields.map((element) => element)
            }
            <hr />
        </>
    )
}