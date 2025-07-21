import React from 'react';
import LineChartComponent from '../Components/Linechart';
import BarChartComponent from '../Components/BarChart';
import './HomePage.css';
import AnimalDeathRate from '../Components/AnimalDeathRate';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


function HomePage() {
    const { t } = useTranslation();

  return (
    <div className="homepage">

        <div className="section row">
            <h2>{t('poachingTitle')}</h2>

            <div className="col-12">

            <img src="./images/poaching.avif" class="img-fluid float-md-end mb-3 ms-md-3 col-md-4" alt="ivory burning" style={{ height: '230px', objectFit: 'cover' }}></img>
            <p>{t('poachingDescription')} </p>
            </div>
      </div>
      
      {/* Animal death count section */}
      <div class="row ">
      <div className="d-flex align-items-center col-6 p-4 shadow rounded bg-white" style={{marginBottom:'25px', marginRight:'20px'}}>
        <div className="display-number text-center">
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d9534f' }}>
            30 000
          </div>
        </div>
        <div className="ms-4">
          <p className="mb-0 text-muted" style={{ fontSize: '14px', maxWidth: '220px' }}>
            {t('speciesExtinction')}
          </p>
        </div>
      </div>
      {/* Money section */}
      <div className="d-flex align-items-center col-5 p-4 shadow rounded bg-white" style={{marginBottom:'25px'}}>
        <div className="display-number text-center">
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#d9534f' }}>
            {t('money')}
          </div>
        </div>
        <div className="ms-4">
          <p className="mb-0 text-muted" style={{ fontSize: '14px', maxWidth: '220px' }}>
            {t('poachingTurnover')}
          </p>
        </div>
      </div>
     </div>
      <Container fluid className="my-5">
      <Row className="g-3">
        {/* Left card */}
        <Col md={6}>
           <AnimalDeathRate />
        </Col>

        {/* Right cards */}
         <Col
      md={6}
      className="shadow rounded d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/rhi_life.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px', // Adjust height as needed
        
      }}>
    
    </Col>

      </Row>
    </Container>

    <Container fluid className="my-5">
      <Row className="g-3 shadow rounded ">
        {/* Left big card */}
        
           <BarChartComponent title={t('elephantIvoryMass')}/>
    
      </Row>
    </Container>
     


      

      {/* Another Section: Text or More Charts */}
      <div className="section">
        <LineChartComponent title={t('rhinoPoachingTrends')} />
      </div>
    </div>
  );
}

export default HomePage;
