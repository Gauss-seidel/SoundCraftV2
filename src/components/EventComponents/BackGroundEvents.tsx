import '../../styles/EventStyles/backgroundEvents.css';

export default function BackgroundEventsAbstract() {
  return (
    <div className="bg-abstract-container">
      {/* Subtle grid */}
      <div className="bg-abstract-grid"></div>

      {/* Background orbs */}
      <div className="bg-abstract-orb bg-abstract-orb-1"></div>
      <div className="bg-abstract-orb bg-abstract-orb-2"></div>

      {/* Geometric shapes */}
      <svg className="abstract-shapes" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        {/* Rotating rectangles */}
        <g className="shape-group shape-1">
          <rect x="300" y="200" width="150" height="150" className="abstract-rect" />
          <rect x="250" y="250" width="100" height="100" className="abstract-rect abstract-rect-2" />
        </g>

        <g className="shape-group shape-2">
          <rect x="1500" y="700" width="140" height="140" className="abstract-rect" />
          <rect x="1460" y="740" width="90" height="90" className="abstract-rect abstract-rect-2" />
        </g>

        {/* Center accent squares */}
        <g className="shape-group shape-3">
          <rect x="800" y="350" width="200" height="200" className="abstract-rect" />
          <rect x="850" y="400" width="100" height="100" className="abstract-rect abstract-rect-2" />
        </g>

        {/* Corner accents */}
        <rect x="100" y="100" width="80" height="80" className="corner-rect corner-1" />
        <rect x="1800" y="150" width="70" height="70" className="corner-rect corner-2" />
        <rect x="150" y="900" width="75" height="75" className="corner-rect corner-3" />
        <rect x="1750" y="850" width="85" height="85" className="corner-rect corner-4" />
      </svg>

      {/* Pulsing dots */}
      <div className="abstract-dot abstract-dot-1"></div>
      <div className="abstract-dot abstract-dot-2"></div>
      <div className="abstract-dot abstract-dot-3"></div>
      <div className="abstract-dot abstract-dot-4"></div>

      {/* Overlay */}
      <div className="bg-abstract-overlay"></div>
    </div>
  );
}