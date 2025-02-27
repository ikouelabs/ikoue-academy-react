import { createRoot } from 'react-dom/client'
import './index.css'
import BookApp from './07/BooksApp.tsx';

createRoot(document.getElementById('root')!).render(
    <BookApp  />
)
