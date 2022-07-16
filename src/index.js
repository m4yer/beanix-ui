import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Homepage from "./routes/homepage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Homepage/>}/>
                <Route path="*" element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
);

