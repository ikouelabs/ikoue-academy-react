// App01.tsx
import './style.css'
import logoReact from './react.jpg'

// Mon premier composant React
export default function App01() {
    return (
        <div className="c01">
            <div>
                <img src={logoReact} alt="" width={500} />
            </div>
            <div>Mon premier composant React</div>
        </div>
    )
} 
// npm run dev