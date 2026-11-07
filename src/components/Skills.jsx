import './Skills.css'
import SkillCard from './SkillCard'
function Skills() {
    const skilllist = [
        {
            name: 'HTML',
            description: 'Structuring web pages with clean, semantic markup.',
        },
        {
            name: 'CSS',
            description: 'Styling responsive, modern layouts with Flexbox and media queries.',
        },
        {
            name: 'JavaScript',
            description: 'Adding logic and interactivity to web pages.',
        },
        {
            name: 'WordPress',
            description: 'Building and customising websites with WordPress and Elementor.',
        },
        {
            name: 'React',
            description: 'Learning to build component-based interfaces. Currently in progress.',
        }
    ]
    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {skilllist.map((skill) => (
            <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            />
            ))}
            </div>
        </section>
    )
}
export default Skills