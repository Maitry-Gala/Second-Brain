import { CTA } from "../components/Landing/CTA";
import { Features } from "../components/Landing/Features";
import { Footer } from "../components/Landing/Footer";
import { Hero } from "../components/Landing/Hero";
import { Navbar } from "../components/Landing/navbar";

export function Landing(){
    return(
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Features />
            <CTA />
            <Footer />
        </div>
    );
}