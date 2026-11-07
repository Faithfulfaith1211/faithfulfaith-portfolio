import './Footer.css'
import socialLinks from '../socialLinks'

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-brand">Faith is People</h3>
      <p className="footer-tagline">Building spaces where people flourish.</p>

      <div className="footer-social">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Opeyemi Faith. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer