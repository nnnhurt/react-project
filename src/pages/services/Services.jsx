import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MyCard from "../../components/cards/Card";
import { selectServices, setService } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Foot";
import { Grid, GridItem } from "@consta/uikit/Grid"
const Services = () => {
    const dispatch = useDispatch()
    const services = useSelector(selectServices)
    useEffect(() => {
        if (services.length === 0) {
          fetch("https://673423afa042ab85d1190055.mockapi.io/api/v1/services")
            .then((response) => response.json())
            .then((data) => {
              dispatch(setService(data));
            })
            .catch((error) => console.error("Error fetching services:", error));
        }
      }, [dispatch, services.length]);
    
      return (
        <>
          <Header />
          <main style={{width: "80vh", margin: "auto", marginTop: "70px"}}>
            <Grid cols={3}>
            { services.length > 0 ?
              services.map((item) => (
                <GridItem>
                  <MyCard key={item.id} id={item.id} imgURI={item.image} name={item.name} desc={item.description} /> 
                </GridItem>
              ))
            : "Загрузка..."}
            </Grid>
          </main>
          <Footer />
        </>
      )
    }    

export default Services