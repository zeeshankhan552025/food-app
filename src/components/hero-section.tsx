
interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  showButton?: boolean
  buttonText?: string
  showBreadcrumb?: boolean
  breadcrumbItems?: string[]
  backgroundImage?: string
  showFoodImage?: boolean
  overlayOpacity?: number
  customHeight?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  showButton = false,
  buttonText = "Book A Table",
  showBreadcrumb = false,
  breadcrumbItems = [],
  backgroundImage = "/restaurant-interior-dining-area-with-tables-and-ch.png",
  showFoodImage = false,
  overlayOpacity = .86,
  customHeight,
}: HeroSectionProps) {
  return (
    <section
      className="hero-section"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        ['--hero-overlay-opacity' as any]: overlayOpacity,
        ...(customHeight && { height: customHeight })
      }}
    >
      <div className="hero-inner">
        <div className="hero-text">
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}

          <h1 className="hero-title">{title}</h1>

          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <div className="hero-breadcrumb">
              {breadcrumbItems.map((item, index) => (
                <span key={index}>
                  <span className={index === breadcrumbItems.length - 1 ? "current" : undefined}>{item}</span>
                  {index < breadcrumbItems.length - 1 && <span className="current">/</span>}
                </span>
              ))}
            </div>
          )}

          {description && <p className="hero-description">{description}</p>}

          {showButton && (
            <button className="btn" type="button">{buttonText}</button>
          )}
        </div>

        {showFoodImage && (
          <div className="hero-image-wrapper">
            <div className="hero-image-ring">
              <img
                src="/home-banner-content.svg"
                alt="Delicious grilled food"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
