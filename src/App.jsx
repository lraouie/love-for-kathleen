import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Anniversary from "./pages/Anniversary";
import Game from "./pages/Game";
import Reasons from "./pages/Reasons";
import Home from "./pages/Home";
import Letter from "./pages/Letter";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import Flower from "./pages/Flower";



export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/anniversary" element={<Anniversary />} />
<Route path="/game" element={<Game />} />
<Route path="/reasons" element={<Reasons />} />
<Route path="/home" element={<Home />} />
<Route path="/letter" element={<Letter />} />
<Route path="/music" element={<Music />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/flower" element={<Flower />} />

</Routes>
</BrowserRouter>
);
}