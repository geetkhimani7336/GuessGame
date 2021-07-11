import React, { useState } from 'react'

function Data(props) {

    const [ctime, setctime] = useState("clear");
    const Update = () => {
        var num = Math.floor(Math.random() * 18) + 1;
        num *= Math.round(Math.random()) ? 1 : -1;
        setctime(num)
    }
    setInterval(Update, 1000);
    return (
        <>
            <h1>{ctime}</h1>

        </>
    )
}

export default Data
