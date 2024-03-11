import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Education_Card from "@/components/EducationCard";

export default function Home() {

    const educationData = [
        {
          schoolLogo: "/schoolLogos/FCPC.png",
          schoolName: "First City Providential College",
          schoolLocation: "SJDM, Bulacan",
          schoolBatch: 2018,
          schoolExperienceList: ["Completed Junior High School", "With high honors", "Experience in extra-curricular activities and competitions"]
        },
        {
          schoolLogo: "/schoolLogos/FEU-Diliman.png",
          schoolName: "FEU Diliman",
          schoolLocation: "Diliman, Quezon City",
          schoolBatch: 2020,
          schoolExperienceList: ["Graduated in STEM strand with IT specialization", "President’s Scholar" ,"With honors"]
        },
        {
          schoolLogo: "/schoolLogos/FEU-tech.png",
          schoolName: "FEU Institute of Technology",
          schoolLocation: "Sampaloc, Manila",
          schoolBatch: 2024,
          schoolExperienceList: ["Graduated BS Computer Science major in Software Engineering", "Active officership in school organizations"]
        }
      ];

    return (
        <main className="flex min-h-screen flex-col bg-light-gray items-center justify-between p-24">
            <Navbar/>

            <section id="home">
                <div className="min-h-screen">
                    <Header sectionTitle="Web and Mobile Developer"/>
                </div>

                <div className="min-h-screen">
                    <Header sectionTitle="Education"/>
                    <div className="flex flex-wrap text-balance overflow-y-auto justify-around">
                        {educationData.map((school, index) => (
                            <div key={index} className="min-w-vw min-h-vh md:w-1/3 mb-8">
                            <Education_Card
                                schoolLogo={school.schoolLogo}
                                schoolName={school.schoolName}
                                schoolLocation={school.schoolLocation}
                                schoolBatch={school.schoolBatch}
                                schoolExperienceList={school.schoolExperienceList}
                            />
                            </div>
                        ))}
                        </div>
                </div>

                <div className="min-h-screen">
                    <Header sectionTitle="Experience"/>
                </div>

                <div className="min-h-screen">
                    <Header sectionTitle="Skills"/>
                </div>
            </section>

            <section id="projects">
                <div className="min-h-screen">
                    <Header sectionTitle="Projects" />
                </div>
            </section>

            <section id="contact">
                <div className="min-h-screen">
                    <Header sectionTitle="Contact" />
                </div>
            </section>
        </main>
    )
}