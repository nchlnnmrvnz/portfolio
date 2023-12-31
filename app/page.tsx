import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {

    const textArrayContents = [
        "WEB AND MOBILE DEVELOPER",
        "EDUCATION",
        "EXPERIENCE",
        "SKILLS"
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar/>

            <section id="home">
                <Header textProp={textArrayContents} />
            </section>

            <section id="projects">
                <Header textProp="PROJECTS" />
            </section>

            <section id="contact">
                <Header textProp="CONTACT" />
            </section>
        </main>
    )
}