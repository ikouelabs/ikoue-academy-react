import { useState } from "react";


const capitals:Record<string,string> = {
    "Centrafrique": "Bangui",
    "Cameroon": "Yaoundé",
    "Soudan": "Khartoum",
    "Tchad": "N'Djamena",
    "France": "Paris"
  };

export default function CapitalesApp() {

    const [country, setCountry] = useState('Centrafrique');

    const capital = capitals[country];
  
    return (
      <>
        <div >
          <div>
            <button onClick={() => setCountry("Centrafrique")} >Centrafrique</button>
            <button onClick={() => setCountry("Cameroon")} >Cameroon</button>
            <button onClick={() => setCountry("Soudan")} >Soudan</button>
            <button onClick={() => setCountry("Tchad")}>Tchad</button>
            <button onClick={() => setCountry("France")}>France</button>
          </div>
          <p>Capitale : {capital}</p>
        </div>
      </>
    );
}