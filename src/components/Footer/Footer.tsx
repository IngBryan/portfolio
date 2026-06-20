import { siteConfig } from '../../data/site';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <p className="site-footer__copy">
            © {year} {siteConfig.name}.
          </p>
          <div className="site-footer__links">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="site-footer__link"
            >
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="site-footer__link"
            >
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className="site-footer__link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
