import React ,{useState} from "react";

function InputArea(props)
{
    const [search, setSearch ] = useState({
        date: '',
        time: ''
    });

    function handleChange (event)
    {
        const {value , name}=  event.target
        setSearch(prev => {
            return{
                ...prev ,
                [name] : value
            }
        })
    }

    function handleClick()
    {
        props.check(search)
    }   

    return(
        <div className="input">
            <div className="box">
            <label htmlFor="date">DATE</label>
            <input onChange= {handleChange} type="date" name="date" value={search.date}/>
            <label htmlFor="date">TIME</label>
            <input onChange= {handleChange} type="time" name="time" step = "1"value={search.time}/>
            <button onClick={handleClick}> Get Details </button>
            </div>
        </div>
    )
}

export default InputArea