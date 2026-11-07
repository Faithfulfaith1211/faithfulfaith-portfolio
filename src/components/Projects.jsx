import './Projects.css'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
function Projects() {
    const [filter, setFilter] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)
    const projectList = [
        {
            title: 'Fashion Website (React)',
            description: 'A fashion website built with React and deployed on Vercel.',
            tech: ['React', 'CSS', 'JavaScript', 'HTML'],
            link: 'https://faithfulfaith-home-of-fashion.vercel.app/',
        },
        {
            title: 'Nexora Technologies: Service Page',
            description: 'The service page of a company website, built as part of a group project.',
            tech: ['React', 'CSS', 'HTML'],
            link: 'https://nexora-technologies-xi.vercel.app/',
        },
        {
            title: 'Arete Ananke Apparel: About & Contact Pages',
            description: 'About Us and Contact Us pages I built for a Nigerian fashion brand website. The site is no longer live, so screenshots are shown.',
            tech: ['WordPress', 'Elementor', 'XAMPP'],
            link: '#',
            image: '/areteananke1.png',
            images: ['/areteananke1.png', '/areteananke2.png', '/areteananke3.png'],
        },
        // {
        //     title: 'Fashion Website (WordPress)',
        //     description: 'A fashion website built with WordPress.',
        //     tech: ['WordPress', 'Elementor', 'xampp'],
        //     link: '#',
        // },
        {
            title: 'Shoe Website',
            description: 'A shoe Website built for a shoemaking company based in Lagos with Wordpress',
            tech: ['WordPress', 'Elementor', 'XAMPP'], 
            link: '#', 
            image: '/Evolak.png',
            images: ['/Evolak.png', '/evolak2.png', '/evolak3.png'],
        },
        {
            title: 'Solar Projects (TS Academy Capstone Project)',
            description: 'A group frontend project built during my TS Academy training.',
            tech: ['HTML', 'CSS', 'React', 'JavaScript'],
            link: 'https://frontend-capstone-project-last-grou.vercel.app/',
        },
        {
            title: 'Restaurant Website',
            description: 'A restaurant website built with HTML and CSS as a training assignment.',
            tech: ['HTML','CSS'],
            link: '#',
            image: '/Restuarant.png',
        },
        {
         title: 'Perfume Website',
         description: 'A perfume website built and run locally with XAMPP.',
         tech: ['XAMPP', 'wordPress', 'Elementor'],
         link: '#',
         image: '/Perfume.png',
         images: ['/Perfume.png','/perfume2.png',],
        },
        {
         title: 'Delivery & Order Tracking Page',
         description: 'A delivery page with order tracking.',
         tech: ['WordPress', 'Elementor', 'XAMPP'],
         link: '#',
         image: '/tracking.png',
         images: ['/tracking.png', '/tracking2.png'],
        },
    ]
    const filteredProject = filter === 'All'
    ? projectList
    : projectList.filter((project) => project.tech.includes(filter))
    return (
        <section id="projects" className="projects">/
        <h2>My Projects</h2>
        <div className="filter-buttons">
  {['All', 'React', 'WordPress', 'JavaScript', 'HTML'].map((name) => (
    <button
      key={name}
      className={filter === name ? 'filter-btn active' : 'filter-btn'}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ))}
</div>
        <div className="projects-grid">
            {filteredProject.map((project) => (
                <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                image={project.image}
                onOpen={() => setSelectedProject(project)}
                />
            ))}
        </div>
        {selectedProject && selectedProject.images && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button
        className="modal-close"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      <h3>{selectedProject.title}</h3>

      <div className="modal-images">
        {selectedProject.images.map((src) => (
          <img key={src} src={src} alt={selectedProject.title} />
        ))}
      </div>
    </div>
  </div>
)}
        </section>
    )
}

export default Projects