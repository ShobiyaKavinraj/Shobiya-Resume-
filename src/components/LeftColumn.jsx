const LeftColumn = () => (
  <div className="text-dark">
    {/* Contact */}
    <section className="mb-5">
      <h5 className="text-uppercase fw-bold border-bottom pb-2">Contact</h5>
      <ul className="list-unstyled mt-3">
        <li className="d-flex align-items-center mb-2">
          <i className="bi bi-geo-alt-fill text-primary me-2"></i>
          <span>Chennai, Tamil Nadu</span>
        </li>
        <li className="d-flex align-items-center mb-2">
          <i className="bi bi-telephone-fill text-primary me-2"></i>
          <span>9944772593</span>
        </li>
        <li className="d-flex align-items-center mb-2">
          <i className="bi bi-envelope-fill text-primary me-2"></i>
          <span style={{ fontSize: '0.85rem' }}>shobiyachandrasekaran2096@gmail.com</span>
          
        </li>
      </ul>
    </section>
    {/* Education */}
    <section className="mb-4">
      <h5 className="text-uppercase fw-bold border-bottom pb-2">Education</h5>
      <ul className="list-unstyled mt-3">
        <li className="mb-3">
          <strong>B.Sc. Mathematics</strong><br />
          Kongunadu Arts & Science College<br />
          <small className="text-muted">2014 – 2017</small>
        </li>
        <li>
          <strong>B.Ed.</strong><br />
          RVS College of Education<br />
          <small className="text-muted">2018 – 2020</small>
        </li>
      </ul>
    </section>

    {/* Technical Skills */}
    <section className="mb-5">
      <h5 className="text-uppercase fw-bold border-bottom pb-2">Technical Skills</h5>
      <ul className="list-unstyled mt-3">
        {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5/CSS3', 'REST APIs', 'Git & GitHub'].map((skill, idx) => (
          <li key={idx} className="mb-2 ps-3 position-relative">
            <i className="bi bi-dot text-primary position-absolute start-0 top-0"></i>
            {skill}
          </li>
        ))}
      </ul>
    </section>

    {/* Soft Skills */}
    <section className="mb-5">
      <h5 className="text-uppercase fw-bold border-bottom pb-2">Soft Skills</h5>
      <ul className="list-unstyled mt-3">
        {['Team Collaboration', 'Communication', 'Problem Solving', 'Time Management'].map((skill, idx) => (
          <li key={idx} className="mb-2 ps-3 position-relative">
            <i className="bi bi-check-circle-fill text-success position-absolute start-0 top-0"></i>
            {skill}
          </li>
        ))}
      </ul>
    </section>

    {/* Languages */}
    <section>
      <h5 className="text-uppercase fw-bold border-bottom pb-2">Languages</h5>
      <ul className="list-unstyled mt-3">
        <li className="mb-2 ps-3 position-relative">
          <i className="bi bi-globe text-info position-absolute start-0 top-0"></i>
          Tamil – Native
        </li>
        <li className="mb-2 ps-3 position-relative">
          <i className="bi bi-globe text-info position-absolute start-0 top-0"></i>
          English – Proficient
        </li>
      </ul>
    </section>
  </div>
);
export default LeftColumn