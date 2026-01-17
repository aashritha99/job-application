import "./landing.css";
import illustration from "../assets/Illustration.jpg";

function Landing() {
  return (
    <section className="landing">
    
      <div className="landing-header">
       
        <div className="landing-text">
          <span className="badge">We’re Hiring</span>

          <h1 className="heading">
            Video Editor & Motion Designer
          </h1>

          <p className="content">
            We’re looking for a creative video editor who loves storytelling and
            visual design. If you enjoy turning ideas into engaging content,
            this role is for you.
          </p>

          <a href="#apply-form" className="cta-button">
            Apply Now
          </a>
        </div>

       
        <div className="landing-image">
          <img
            src={illustration}
            alt="Creative video editing illustration"
          />
        </div>
      </div>

    
      <div className="features-wrapper">
        <h2 className="features-heading">Why Join Our Team?</h2>

        <ul className="features-list">
          <li>
            <strong>Creative Freedom</strong>
            <span>
              Work on diverse projects that let you experiment and grow creatively.
            </span>
          </li>

          <li>
            <strong>Modern Tools</strong>
            <span>
              Use the latest video editing and motion design tools.
            </span>
          </li>

          <li>
            <strong>Collaborative Culture</strong>
            <span>
              Work with designers, marketers, and creators who value teamwork.
            </span>
          </li>

          <li>
            <strong>Career Growth</strong>
            <span>
              Learn continuously and grow your career in a fast-moving environment.
            </span>
          </li>

          <li>
            <strong>Meaningful Impact</strong>
            <span>
              Create content that reaches real audiences and tells real stories.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Landing;
