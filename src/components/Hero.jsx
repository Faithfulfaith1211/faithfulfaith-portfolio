import './Hero.css'
function Hero() {
    return (
        <section id="home" className="hero">
            <p className="greeting">WELCOME TO MY PORTFOLIO</p>
            <h1>Hi I'm <span>Adigun Opeyemi Faith</span>
            </h1>
            <h2>A full-Stack Developer in progress</h2>
            <p className="hero-description">Exploring the world of web development one project at a time. I'm passionate about learning, building, and creating useful digital experiences.</p>
            <div className="hero-buttons">
                <button
  onClick={() =>
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }
>
  View My Projects
</button>
<button
  onClick={() =>
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }
>
  Contact Me
</button>
            </div>
        </section>
    )
}
export default Hero