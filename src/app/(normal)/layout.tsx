import { PropsWithChildren } from "react";
import EndScripts from "../components/EndScripts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollUp from "../components/ScrollUp";

export default function NormalLayout({ children }: PropsWithChildren<{ }>) {
    return <>
        <Navbar />
        {children}
        <Footer />
        <ScrollUp />
        <EndScripts />
    </>
}
