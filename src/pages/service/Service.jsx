import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/cards/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Foot';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the service:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!service) {
    return <div>Услуга не найдена.</div>;
  }

  return (
    <>
      <Header />
      <MyCard 
        imgURI={service.image} 
        name={service.name} 
        desc={service.description} 
        id={service.id} 
        height="100%"
      />
      <Footer/>
    </>
  );
};

export default ServiceDetail;
