import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './Certifications.css';

function Certifications() {
  const certificateData = [
    {
      title: "Complete SQL Bootcamp",
      description: "Udemy",
      image: "sql.jpg"
    },
    {
      title: "Data Analysis and Visulaization with Pandas",
      description: "LinkedIN Learning",
      image: "Advanced_Pandas.png",
    },
    {
      title: "Essentials of PowerBI",
      description: "DataCamp",
      image: "DataCamp_PowerBI.png",
    },
    {
      title: "Automation with Python",
      description: "Google by Coursera",
      image: "Automation_with_Python.png",
    },
    {
      title: "Basic Python Certification",
      description: "HackerRank",
      image: "python_certification.png",
    },
    {
      title: "Excel for Finance",
      description: "CFI",
      image: "excel_for_finance.png",
    },
    {
      title: "Financial Modeling",
      description: "Udemy",
      image: "Financial_Modeling_Certificate.jpg",
    },
    {
      title: "Content Writing Internship",
      description: "CollegeTips.in",
      image: "Coll_Internship.png",
    },
  
  ];

  return (
    <Container id='certifications'>
      <h1 id='subtitle'>Certifications</h1>
      <Carousel className='cert-carousel'>
        {certificateData.map((certificate, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="cert-image-container"
              style={{ backgroundImage: `url(./${certificate.image})` }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Certifications;
