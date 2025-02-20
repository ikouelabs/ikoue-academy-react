import {ChangeEvent, useState} from "react";

export default function Form01() {
  const [chiffre, setChiffre] = useState(10);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setChiffre(Number(event.target.value));
  }

  return (
    <div className="p-12">
      <h1 className="font-bold text-xl py-2">Contrôlés</h1>
      <label>Chiffre: </label>
      <input type="number" className="border px-2 py-0.5"
             onChange={handleChange}
             value={chiffre}/>
      <div>
        <p>Calcul automatique</p>
        <div className="text-bold text-red-500">{chiffre * 2}</div>
      </div>

    </div>
  )
}
