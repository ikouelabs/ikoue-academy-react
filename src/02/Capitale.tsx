
interface Props {
    pays: string 
    ville: string
}

export default function Capitale(props: Props) {
  return ( 
    <div>
      La capitale de <strong>{props.pays}</strong> est <strong>{props.ville}</strong>.
    </div>
  )
}