import React,{useState} from 'react';
import Button from 'react-bootstrap/Button'

function Options() {

    const [value,setvalue] = useState();

    const handleOnClick=()=>{
        var score = 0;
        if(value === "1"){
            score += 1;
        }
        else if(value === "2"){
            score += 2;
        }
        else if(value === "3"){
            score += 3;
        }
        else if(value === "4"){
            score += 4;
        }
    }

    return (
        <div>
            
            <Button variant="outline-primary"
                    onClick = {handleOnClick} value = "1">Not at all</Button>{' '}
            <Button variant="outline-primary"
                    onClick = {handleOnClick} value = "2">Several days</Button>{' '}
            <Button variant="outline-primary"
                    onClick = {handleOnClick} value = "3">More than half the days</Button>{' '}
            <Button variant="outline-primary"
                    onClick = {handleOnClick} value = "4">Nearly every day</Button>{' '}
            
        score
        </div>
        

    )
}

export default Options


