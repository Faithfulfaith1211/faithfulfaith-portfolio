import './About.css'
function About() {
    const skills = ['HTML','CSS', 'JavaScript', 'WordPress', 'React']
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
         <div className="about-content">
                <img
                 src="/Faith.jpg" 
                 alt="Adigun Opeyemi Faith" 
                 className="about-photo"
                />
             <div className="about-details">
                 <p className="about-text">
                    I'm a Sociology graduate transitioning into full-stack development. I started with WordPress, HTML, CSS,JavaScript, and now i am learning React to build modern, interactive web applications.</p>
                 <p className="about-text">
                    I enjoy building things that are useful to people.</p>
                    <div className="about-skills">
                        {skills.map((skill) => (
                            <span key={skill} className="skill-tag">
                            {skill}
                            </span>
                        ))}
                    </div>
               </div>
          </div>
        </section>
    )
}
export default About