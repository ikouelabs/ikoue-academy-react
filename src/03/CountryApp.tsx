import Country from "./Country";


interface CountryType {
    name: string
    flag: string
    capital: string
    population: number
}

const countryList:Array<CountryType> = [
    {
        name: "RCA",
        capital: "Bangui",
        population: 5000000,
        flag: "/img/rca.png",
    },
    {
        name: "Portugal",
        capital: "Lisbon",
        population: 10000000,
        flag: "/img/pt.png",
    }
];



export default function CountryApp() {

    const countries = countryList.map(function(p, index) {
        return (
            <Country 
                key={index} 
                name={p.name} 
                capital={p.capital} 
                flag={p.flag} 
                population={p.population} />
        )
    })
    return (
        <div>
            <h1>Liste des pays</h1>
            {countries}
        </div>
    )
}