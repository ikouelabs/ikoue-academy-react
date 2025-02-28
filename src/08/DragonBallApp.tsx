import axios from "axios"
import { useEffect, useState } from "react"

interface Character {
    id: string
    name: string
    race: string
    gender: string
    image: string
}

interface Metadata {
    totalPages: number
    currentPage: number
}

interface GetCharacterResponse {
    items: Character[]
    meta: Metadata
}

export default function DragonBallApp() {

    const [data, setData] = useState<GetCharacterResponse | null>(null);

    async function loadData(page:number) {
        const res = await axios.get(`https://dragonball-api.com/api/characters?page=${page ?? 1}&limit=8`);
        setData(res.data);
    }

    useEffect(function(){
        // Créer un délai artificiel pour charger les données
        // 2s après l'affichage initial de notre page.
        setTimeout(loadData, 1000 * 2);
    }, []);

    if (!data) return <EmptyState />

    return (
    <div className="pt-8 pb-24 text-center font-bold w-screen h-screen ">
        <Header />
        <CharacterList items={data.items} />
        <Pagination currentPage={data.meta.currentPage} totalPages={data.meta.totalPages} loadData={loadData} />
    </div>
    )
}


function Header() {
    return (
    <div className="flex items-center place-content-center">
        <img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" 
            className="h-40 w-auto inline-block"
            />
    </div>
    )
}

interface CharacterListProps {
    items: Character[]
}

const CharacterList = (props: CharacterListProps) => (
    <div className="container mx-auto max-w-6xl grid grid-cols-4 gap-12 pt-12">
        { props.items.map(function(p) {
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
)


interface PaginationProps {
    currentPage: number
    totalPages: number
    loadData: (page: number) => void
}

const Pagination = (props: PaginationProps) => {

    const showNextButton = props.currentPage < props.totalPages;
    const showPrevButton = props.currentPage > 1;

    function handleNextPage() {
        props.loadData(props.currentPage + 1)
    }

    function handlePreviousPage() {
        props.loadData(props.currentPage - 1)
    }

    return (
        <div className="container mx-auto max-w-6xl py-8">
            <div>Page {props.currentPage} / {props.totalPages}</div>
            <div className="flex items-center place-content-between">
                <div>
                    {showPrevButton &&  <button  onClick={handleNextPage} className="bg-black text-white rounded px-4 py-2">Previous</button>}
                </div>
                {showNextButton && <button  onClick={handlePreviousPage} className="bg-black text-white rounded px-4 py-2">Next</button>}
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