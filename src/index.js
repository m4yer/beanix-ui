import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Homepage from "./routes/homepage";
import Notfound from "./routes/notfound";
import GenreSelection from "./routes/flow/genre-selection";
import MelodyOption from "./routes/flow/melody-option";
import MelodyGeneration from "./routes/flow/melody-generation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Homepage/>}/>
                <Route path="genre/select" element={<GenreSelection/>}/>
                <Route path="melody/option" element={<MelodyOption/>}/>
                <Route path="melody/generate" element={<MelodyGeneration/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

