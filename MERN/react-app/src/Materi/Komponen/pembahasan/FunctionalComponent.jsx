import { useState } from "react"
const FunctionalComponent = () => {
    const[nama, setNama]= useState("Putra")
    function updateNama() {
        setNama(prompt("Please enter your name:"))
    }

    return ( 
        <div>
            <h1>Functional Component</h1>
            <h2>Hello {nama} , selamat belajar Functional Component</h2>
            <button onClick={updateNama}>Update Nama</button>
        </div>
    )
}

export default FunctionalComponent