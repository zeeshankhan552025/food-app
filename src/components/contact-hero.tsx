import "../component-styles/contact-hero.css";

interface ContactHeroProps {
  title: string
  breadcrumbItems?: string[]
  backgroundImage?: string
  overlayOpacity?: number
  customHeight?: string
}

export function ContactHero({
  title,
  breadcrumbItems = [],
  backgroundImage = "/contact-page-banner.svg",
  overlayOpacity = 0.86,
  customHeight,
}: ContactHeroProps) {
  return (
    <section
      className="contact-hero-section"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        ['--contact-hero-overlay-opacity' as any]: overlayOpacity,
        ...(customHeight && { height: customHeight })
      }}
    >
      <div className="contact-hero-inner">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">{title}</h1>
          
          {breadcrumbItems.length > 0 && (
            <div className="contact-hero-breadcrumb">
              {breadcrumbItems.map((item, index) => (
                <span key={index}>
                  <span className={index === breadcrumbItems.length - 1 ? "current" : undefined}>
                    {item}
                  </span>
                  {index < breadcrumbItems.length - 1 && <span className="separator">/</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
