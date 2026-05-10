import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>KL University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              CGPA: 8.64
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Sri Chaitanya Junior College</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Mathematics, Physics, Chemistry. Percentage: 60.6%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Grade 10</h4>
                <h5>Saint Alphonsa School</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Percentage: 90.8%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various Platforms</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • <a href="https://www.credly.com/badges/a9f674ad-be46-4279-ac3f-722bcdb79704/public_url" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>AWS Certified Cloud Practitioner (CLF-C02)</a><br/>
              • <a href="https://drive.google.com/file/d/1Zw0iRIVnXBSkOXOL0QEYEhu0G11vRlLY/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Salesforce Certified AI Associate</a><br/>
              • <a href="https://drive.google.com/file/d/1D6ZjMe1kO3ahF-qlWwDPOxyrlufnQBOC/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}>Oracle Certified Foundations Associate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
