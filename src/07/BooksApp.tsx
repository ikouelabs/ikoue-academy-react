import { useEffect, useState } from "react"


interface Book {
    title: string
    cover: string
    releaseDate: string
    pages: number
    description: string
}

/*
const booksData:Array<Book> = [
    {
        title: "Livre 01",
        cover: "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/1660938091838-OPRIN3NA7SEHYSW7VSDH/image001.jpg",
        releaseDate: "01/01/2024",
        pages: 125,
        description: "Description du livre"
    },
    {
        title: "Livre 02",
        cover: "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/1660938091838-OPRIN3NA7SEHYSW7VSDH/image001.jpg",
        releaseDate: "01/01/2024",
        pages: 125,
        description: "Description du livre"
    },
    {
        title: "Livre 03",
        cover: "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/1660938091838-OPRIN3NA7SEHYSW7VSDH/image001.jpg",
        releaseDate: "01/01/2024",
        pages: 125,
        description: "Description du livre"
    },
    {
        title: "Livre 04",
        cover: "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/1660938091838-OPRIN3NA7SEHYSW7VSDH/image001.jpg",
        releaseDate: "01/01/2024",
        pages: 125,
        description: "Description du livre"
    }
]
*/

export default function BookApp() {
    // HOOKS
    const [booksData, setBooksData] = useState<Book[]>([]);

    // Nouveauté
    useEffect(function() {
        //  Code exécuté uniquement au premier affichage du composante
        fetch('https://potterapi-fedeperin.vercel.app/fr/books').then(async function(res) {
            const livres = await res.json() 
            setBooksData(livres);
        })
    }, []);


    const books = booksData.map(function(book, index) {
        return (
            <div key={index}>
                <div className="bg-gray-100 p-4">
                    <img src={book.cover} alt={book.title} />
                </div>
                <div className="font-bold text-xl py-2">{book.title}</div>
                <div className="text-gray-500">{book.pages} pages</div>
                <div className="text-sm text-gray-600">{book.releaseDate}</div>
            </div>
        )
    })

    return (
        <div className="p-8 mx-auto container max-w-7xl">
            <div>
                <h1 className="py-12 text-7xl font-bold">Saga Harry Potter</h1>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {books}
            </div>
        </div>
    )

}