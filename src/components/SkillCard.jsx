import './SkillCard.css'
function SkillCard(props) {
    return (
        <div className="skill-card">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        </div>
    )
}
export default SkillCard