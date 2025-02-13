import { useState } from "react";

export default function CompteurApp() {
    const [compteur, setCompteur] = useState(0);
    
    function augmenter() {
        setCompteur(compteur + 1);
    }
    function diminuer() {
        if (compteur > 0) {
            setCompteur(compteur - 1);
        }
    }
    
    
    return (
        <div>
            <button onClick={augmenter}>+</button>
            <button onClick={diminuer}>-</button>
            <div>Compteur: {compteur}</div>
        </div>
    )
}