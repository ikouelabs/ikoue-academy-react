
interface Props {
    lang?: string // facultatif
    name: string
}

export default function Hello(p: Props) {

    // const {lang, name} = p

    if (p.lang == "en") {
        return (<div>Welcome <strong>{p.name}</strong></div>)    
    }

    return (
        <div>Bienvenue <strong>{p.name}</strong></div>
    )
}