import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {
  return (
    <div
      className="container-fluid py-4 px-2"
      style={{
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      {/* Header */}
      <div className="container mb-4">
        <Header />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="row g-0 shadow-lg rounded overflow-hidden bg-white" style={{ minHeight: '80vh' }}>
          
          {/* Left Column (wider now) */}
          <div className="col-md-6 col-lg-4 bg-light p-4 border-end d-flex flex-column">
            <LeftColumn />
          </div>

          {/* Right Column (slightly reduced width) */}
          <div
            className="col-md-6 col-lg-8 p-4 d-flex flex-column"
            style={{
              background: 'linear-gradient(135deg,rgb(61, 70, 92), #4f5f76)',
              color: '#fff',
              borderLeft: '1px solid #bbb',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
