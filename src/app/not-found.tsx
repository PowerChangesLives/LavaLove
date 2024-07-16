import EndScripts from "./components/EndScripts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollUp from "./components/ScrollUp";
import NotFound404 from "./components/NotFound404";

export default function ActiveLayout() {
    return <>
        <Navbar alwaysActive />
        <NotFound404 />
        <Footer />
        <ScrollUp />
        <EndScripts />
    </>
}
