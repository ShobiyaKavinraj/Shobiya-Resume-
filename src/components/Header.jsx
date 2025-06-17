import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Header = () => (
  <div
    className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4 p-4 shadow rounded"
    style={{
      background: 'linear-gradient(135deg,rgb(226, 237, 241),rgb(175, 208, 241))',
      backgroundColor: '#e3f2fd',
      border: '1px solid #dee2e6',
      width: '100%',
    }}
    
  >
    {/* Profile Image */}
    <img
      src="/shobiya-profile.jpg"
      alt="Shobiya Chandrasekaran"
      className="rounded-circle me-md-4 mb-3 mb-md-0 shadow-sm"
      style={{
        width: '130px',
        height: '130px',
        objectFit: 'cover',
        border: '3px solid #c3cfe2',
      }}
    />

    {/* Content */}
    <div className="flex-grow-1">
      <h1 className="fw-bold mb-1" style={{ color: '#2e3a59' }}>
        Shobiya Chandrasekaran
      </h1>

      <p className="mb-2" style={{ fontSize: '1.1rem', color: '#444' }}>
        MERN Stack Developer | Passionate about Full-Stack Web Development
      </p>

      <hr className="my-2" style={{ borderTop: '1px solid #ccc', width: '100%' }} />

      {/* About */}
      <p style={{ fontSize: '0.95rem', color: '#555' }}>
        I'm a dedicated MERN Stack Developer with hands-on experience in building responsive and scalable web
        applications using <strong>MongoDB, Express.js, React.js</strong>, and <strong>Node.js</strong>. I’m passionate
        about clean code, intuitive UI, and seamless backend integration.
      </p>

      {/* Tech Stack Icons */}
      <div className="d-flex align-items-center my-3" style={{ gap: '12px' }}>
        <SiMongodb size={26} color="#4DB33D" title="MongoDB" />
        <SiExpress size={26} color="#000000" title="Express.js" />
        <SiReact size={26} color="#61DAFB" title="React.js" />
        <SiNodedotjs size={26} color="#3C873A" title="Node.js" />
      </div>

      {/* Social Links + Resume */}
      <div className="d-flex flex-wrap gap-2">
        <a
          href="https://linkedin.com/in/shobiyachandrasekaran"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-outline-primary d-flex align-items-center"
        >
          <FaLinkedin className="me-2" /> LinkedIn
        </a>

        <a
          href="https://github.com/ShobiyaKavinraj"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-outline-dark d-flex align-items-center"
        >
          <FaGithub className="me-2" /> GitHub
        </a>

       {/* <a
          href="/Shobiya Resume(4).dozx"
          className="btn btn-sm btn-primary d-flex align-items-center"
          download
        >
          
          <FaDownload className="me-2" /> Download Resume
        </a>*/}
      </div>
    </div>
  </div>
);

export default Header;
