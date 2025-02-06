import Capitale from "./Capitale";
import Hello from "./Hello";
import Student from "./Student";


export default function App02() {

    const capitales = (
        <div>
            <h1>Capitales</h1>
            <Capitale pays="RCA" ville="Bangui"  />
            <Capitale pays="Sénégal" ville="Dakar" />
        </div>
    )

    const students = (
        <div>
            <h1>Etudiants</h1>
            <Student name="John" age={21} phoneNumber="000000" />
            <Student name="Jane" age={23} phoneNumber="111111" />
        </div>
    )

    const welcome = (
        <div>
            <h1>Welcome</h1>
            <Hello lang="fr" name="Titus" />
            <Hello lang="en" name="Aristide" />
            <Hello lang="es" name="Pétula" />
        </div>
    )

    return (
        <div>
            {capitales}
            {students}
            {welcome}
        </div>
    )
}