import './ProjectCard.css'
function ProjectCard(props) {
 return (
    <div className="project-card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <div className="project-tech">
            {props.tech.map((item) => (
                <span key={item} className="project-tag">
                    {item}
                </span>
            ))}
        </div>
        {props.image && (
            <img
            src={props.image}
            alt={props.title}
            onClick={props.onOpen}
            className="project-image"
            />
        )}
        {props.link !== '#' && (
        <a href={props.link} target="_blank" rel="noreferrer">
            View Project
        </a>
        )}
    </div>
 )
}
export default ProjectCard