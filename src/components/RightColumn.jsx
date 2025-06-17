const RightColumn = () => (
  <div className="bg-gradient p-4 rounded shadow-sm text-white" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', fontFamily: 'Segoe UI, sans-serif' }}>
    {/* Objective */}
    <section className="mb-4">
      <h4 className="text-uppercase fw-bold border-bottom pb-2">Objective</h4>
      <p>
        To apply my MERN stack skills and passion for web development in building impactful, real-world applications with clean, scalable code.
      </p>
    </section>

    {/* Projects */}
    <section className="mb-4">
      <h4 className="text-uppercase fw-bold border-bottom pb-2">Projects</h4>

      <div className="mb-3">
        <h6 className="fw-bold">PoovizhiFarms – E-Commerce Platform</h6>
        <ul className="list-unstyled ps-3">
          <li>🛒 Full-stack organic product store (MERN stack)</li>
          <li>🔐 JWT auth, admin dashboard, Razorpay payments</li>
          <li>📱 Responsive design & product filtering</li>
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">To-Do List App</h6>
        <ul className="list-unstyled ps-3">
          <li>📋 Built with HTML, CSS, JavaScript</li>
          <li>✅ Add/delete tasks, mark as complete, save to localStorage</li>
          <li>⚡ Lightweight UI with live updates</li>
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">Flipkart Clone</h6>
        <ul className="list-unstyled ps-3">
          <li>🛍️ HTML/CSS/JS based homepage replica</li>
          <li>🧭 Navbar, slider, product grid</li>
          <li>📱 Responsive across screen sizes</li>
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">Portfolio Website</h6>
        <ul className="list-unstyled ps-3">
          <li>💼 React.js portfolio with routing</li>
          <li>🖼️ Pages for About, Projects, Resume, Contact</li>
          <li>🎨 Modern UI with animations</li>
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">Resume Builder App</h6>
        <ul className="list-unstyled ps-3">
          <li>🧾 Single-page React resume using Bootstrap</li>
          <li>🧱 Structured layout with Left/Right columns</li>
          <li>📄 Downloadable and clean print layout</li>
        </ul>
      </div>
    </section>

    {/* Internships */}
<section className="mb-4">
  <h4 className="text-uppercase fw-bold border-bottom pb-2">Internships</h4>
  <ul className="list-unstyled ps-3">
    <li>👨‍💻 Full Stack Intern @ NoviTech (Jan–Mar 2024)</li>
    <li>📚 30-Day MERN Stack Bootcamp – NoviTech</li>
    <li>⚛️ 21-Day React Internship – NoviTech</li>
  </ul>
</section>

{/* Certifications */}
<section className="mb-4">
  <h4 className="text-uppercase fw-bold border-bottom pb-2">Certifications</h4>
  <ul className="list-unstyled ps-3">
    <li>🎓 Full Stack Development – NoviTech</li>
    <li>⚛️ React.js Masterclass – NoviTech</li>
    <li>🧩 MERN Stack – FreeCodeCamp</li>
    <li>☕ Java Beginner Level – Great Learning</li>
  </ul>
</section>


    
  </div>
);

export default RightColumn;
