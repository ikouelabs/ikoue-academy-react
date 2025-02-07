

interface Props {
    name: string
    flag: string
    capital: string
    population: number
}


export default function Country(props: Props) {
    return (
        <div>
            Pays: {props.name}<br />
            Capitale: {props.capital}<br />
            Population: {props.population}<br />
            Flag: <img src={props.flag} width={20} /><br />
        </div>
    )
}