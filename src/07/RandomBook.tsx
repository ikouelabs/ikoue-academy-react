import { useEffect, useState } from "react"


interface Book {
    title: string
    cover: string
    releaseDate: string
    pages: number
    description: string
}


export default function RandomBookApp() {

    const [lang, setLang] = useState('fr')
    const [book, setBook] = useState<Book|null>(null);

    async function handleNextBook(l?:string) {
        // Utilise l'API pour retourner de façon aléatoire un liver
        // de la saga Harry Potter
        const res = await fetch(`https://potterapi-fedeperin.vercel.app/${l ?? lang}/books/random`);
        const data = await res.json();
        setBook(data);
    }

    function changeLang(value: string) {
        // Changer la langue
        setLang(value);
        // Afficher le livre suivant avec la nouvelle langue choisir
        handleNextBook(value);
    }

    useEffect(function() {
        // Cette fonction n'est exécutée qu'une seule fois
        // au premier chargement du composant
        handleNextBook();
    }, []);

    return (
        <div className="flex items-center place-content-center pt-12">
            <div className="w-80">
                <div className="space-x-4 pb-4">
                    <button onClick={handleNextBook} className="bg-black rounded cursor-pointer text-white px-4 py-2">
                        Next book
                    </button>
                    {lang != 'fr' && <button onClick={() => changeLang('fr')}>FR</button> }
                    {lang != 'en' &&<button onClick={() => changeLang('en')}>EN</button> }
                </div>
                { book ? <BookCard book={book}/> : <EmptyBook /> }
            </div>
        </div>
    )
}

const EmptyBook = () => (
    <div className="bg-gray-100 flex place-content-center items-center p-10 text-center text-sm h-60">

        <div>
            Utilisez le bouton "Next book" pour afficher un livre de façon aléatoire
        </div>

    </div>
)


interface BookCardProps {
    book: Book
}

function BookCard({book}: BookCardProps) {
    return (
        <div>
            <div className="bg-gray-100 p-12">
                <img src={book.cover} alt={book.title} />
            </div>
            <div className="p-2">
                <div className="font-bold text-xl py-2">{book.title}</div>
                <div className="text-gray-500">{book.pages} pages</div>
                <div className="text-sm text-gray-600">{book.releaseDate}</div>
            </div>
        </div>
    )
}