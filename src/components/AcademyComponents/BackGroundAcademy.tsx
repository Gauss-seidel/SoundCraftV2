import '../../styles/AcademyStyles/BackGround.css';

export default function Background() {
  return (
    <div className="bg-container">
      {/* Animated gradient orbs */}
      <div className="orbs-wrapper">
        {/* Primary cyan orb */}
        <div className="orb orb-primary" />

        {/* Secondary purple orb */}
        <div className="orb orb-secondary" />

        {/* Accent indigo orb */}
        <div className="orb orb-accent" />

        {/* Deep color accent */}
        <div className="orb orb-deep" />
      </div>

      {/* Animated lines/waves effect */}
      <div className="waves-wrapper">
        <svg
          className="waves-svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50"
            className="wave-path-1"
          />
          <path
            d="M0,70 Q300,30 600,70 T1200,70"
            className="wave-path-2"
          />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div className="grid-overlay" />

      {/* Noise texture */}
      <div className="noise-texture" />

      {/* Radial gradient overlay for depth */}
      <div className="radial-overlay" />
    </div>
  );
}