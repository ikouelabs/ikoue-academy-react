
interface Props {
    name: string
    age: number
    phoneNumber: string
}

export default function Student(props: Props) {
    
    const { name, age, phoneNumber } = props;

    return (
        <div>
            Nom: <strong>{ name }</strong><br />
            Age: <strong>{ age }</strong><br />
            Phone number: <strong>{ phoneNumber }</strong><br />
        </div>
    )
}