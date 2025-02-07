import Hello from "../02/Hello";

function transform(valeur: number, index: number) {
    return (
        <div key={index}>Chiffre: {valeur}</div>
    )
}

function transform2(nom:string, index:number) {
    return (<Hello key={index} name={nom} />)
}

export default function App() {
    const data = [10, 40, 50]; // BD
    const listEtudiants = data.map(transform);

    const data2 = ["Alban", "Eliel", "Heritier"]
    const bienvenue = data2.map(transform2);

    return (
        <div>
            {listEtudiants}
            <hr />
            {bienvenue}
        </div>
    )
}