import { useState } from "react";


export default function FlagApp() {
    const [flag, setFlag] = useState("/img/rca.png");

    function setSango() {
        setFlag("/img/rca.png")
    }

    function setEnglish() {
        setFlag("/img/ng.png")
    }

    return (
        <div>
            <button onClick={setSango}>SANGO</button>
            &nbsp;
            <button onClick={setEnglish}>Anglais</button>
            <p>
            <img src={flag} alt="" width={32} height={32} />
            </p>
        </div>
    )
}