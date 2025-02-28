import axios from "axios"
import { useEffect, useState } from "react"

interface Character {
    id: string
    name: string
    ki: string
    maxKi: string
    race: string
    gender: string
    description: string
    image: string
    affiliation: string
}

interface Metadata {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
}

interface Links {
    first: string
    previous: string
    next: string
    last: string
}

interface GetCharacterResponse {
    items: Character[]
    meta: Metadata
    links: Links
}

export default function DragonBallApp() {

    // install axios
    const [data, setData] = useState<GetCharacterResponse | null>(null);

    async function loadData() {
        /*
        const res = await fetch('https://dragonball-api.com/api/characters')
        const result = await res.json();
        setData(result);
        */

        const res = await axios.get('https://dragonball-api.com/api/characters');
        setData(res.data);

    }

    useEffect(function(){
        // Créer un délai artificiel pour charger les données
        // 2s après l'affichage initial de notre page.
        setTimeout(loadData, 1000 * 2);
    }, []);

    if (!data) {
        return <EmptyState />
    }

    return (
        <div className="p-8 text-center font-bold w-screen h-screen bg-gray-800">
        <div className="flex items-center place-content-center">
            <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" 
                className="h-40 w-auto inline-block"
                />
        </div>

        <div className="container mx-auto max-w-6xl grid grid-cols-4 gap-12 pt-12">
            { data.items.map(function(p) {
                return (
                    <div key={p.id} className="bg-gray-200 rounded-lg relative flex flex-col">
                        <div className="flex w-full items-center place-content-center">
                            <img src={p.image} alt="" className="h-72 -mt-4 hover:scale-125 transition-all duration-700" />
                        </div>
                        <div className="w-full text-left bg-gray-500 p-4">
                            <div className="text-white font-bold text-lg">{p.name}</div>
                            <div className="text-yellow-300">
                                <span>{p.race}</span>
                                <span>&mdash;</span>
                                <span>{p.gender}</span>
                            </div>
                        </div>
                    </div>
                )
            }) }
            
        </div>
    </div>
    )
}



const EmptyState = () => (
    <div className="p-8 text-center font-bold w-screen h-screen bg-gray-800">
        <div className="flex items-center place-content-center">
            <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" 
                className="h-40 w-auto inline-block"
                />
        </div>

        <div className="container mx-auto max-w-6xl grid grid-cols-4 gap-12 pt-12">
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-72 bg-gray-200 rounded animate-pulse"></div>
        </div>
    </div>
)