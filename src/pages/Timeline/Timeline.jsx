import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline__container">
        <h1 className="timeline__title">Timeline</h1>
        <p className="timeline__intro">
          A quick look at appearances, milestones, and upcoming events.
        </p>

        <div className="timeline__list">
          <article className="timeline__item">
            <span className="timeline__date">2024</span>
            <div className="timeline__content">
              <h2>Stage Debut</h2>
              <p>
                Ms. Anita Prozac begins bringing horror and glamour to the
                stage.
              </p>
            </div>
          </article>

          <article className="timeline__item">
            <span className="timeline__date">2025</span>
            <div className="timeline__content">
              <h2>Featured Performances</h2>
              <p>
                Expanded into more shows, themed appearances, and
                collaborations.
              </p>
            </div>
          </article>

          <article className="timeline__item">
            <span className="timeline__date">Soon</span>
            <div className="timeline__content">
              <h2>More to Come</h2>
              <p>More appearances, more chaos, more glamour.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
