import "./landing.css";
import illustration from "../assets/Illustration.jpg";

function Landing() {
  return (
    <section className="landing">
      <div className="landing-header">
        {/* TEXT SIDE */}
        <div className="landing-text">
          <h1 className="heading">Video Editor Opportunity</h1>

          <p className="content">
            If you are looking for a role in video editing and have a passion for
            creating compelling visual content, we’d love to hear from you. Join
            our team and help shape the future of digital storytelling.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="landing-image">
          <img src={illustration} alt="Video editing illustration" />
        </div>
      </div>

      {/* FEATURES */}
      <ul className="features-list">
        <li>
          <strong>Creative Freedom:</strong> Work on diverse projects that allow
          you to express your creativity.
        </li>
        <li>
          <strong>Cutting-Edge Tools:</strong> Access the latest video editing
          software and technology.
        </li>
        <li>
          <strong>Collaborative Environment:</strong> Join a team that values
          innovation and teamwork.
        </li>
        <li>
          <strong>Professional Growth:</strong> Opportunities for continuous
          learning and career advancement.
        </li>
        <li>
          <strong>Impactful Work:</strong> Create content that reaches wide
          audiences through storytelling.
        </li>
      </ul>
    </section>
  );
}

export default Landing;
