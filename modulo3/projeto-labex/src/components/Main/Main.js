import React, { useState } from "react";
import styled from "styled-components";

import Home from "../Home/Home";
import AdminPage from "../AdminPage/AdminPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 800px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;

function Main() {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "choose-profile":
        return <AdminPage />;
      case "match-list":
        return <ListTripsPage />;
      default:
        return <AdminPage />;
    }
  };

  const goToListTripsPage = () => {
    setSelectedPage("choose-profile");
  };

  const goToAdminHomePage = () => {
    setSelectedPage("match-list");
  };

  return (
    <MainContainer>
      <Home
        goToListTripsPage={goToListTripsPage}
        goToAdminHomePage={goToAdminHomePage}
      />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default Main;
