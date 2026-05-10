import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    name: "E-Commerce Web Application",
    category: "Full Stack (MERN)",
    tools: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    image: "/images/ecommerce.png"
  },
  {
    name: "Document Sharing Platform",
    category: "Cloud/Full Stack (MERN, AWS)",
    tools: "React.js, Node.js, MongoDB, AWS (Lambda, S3, DynamoDB)",
    image: "/images/docuflow.png"
  },
  {
    name: "Gemini-Clone AI",
    category: "Frontend Web App",
    tools: "React.js, Gemini API, Tailwind CSS",
    image: "/images/gemini.png"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="slider-main-wrapper">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          <div className="slider-viewport">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="slider-slide" key={index}>
                  <div className="slide-info">
                    <div className="slide-header">
                      <span className="slide-number">0{index + 1}</span>
                      <div className="slide-title-group">
                        <h3>{project.name}</h3>
                        <p className="slide-category">{project.category}</p>
                      </div>
                    </div>
                    <div className="slide-tools">
                      <h4>TOOLS & FEATURES</h4>
                      <p>{project.tools}</p>
                    </div>
                  </div>
                  
                  <div className="slide-image-container">
                    <WorkImage image={project.image} alt={project.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
