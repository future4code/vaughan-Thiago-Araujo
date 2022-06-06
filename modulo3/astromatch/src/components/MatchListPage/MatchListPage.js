import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import MatchListItem from "./MatchListItem";

const ListContainer = styled.div`
  padding: 8px;
`;

function MatchListPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mazzi/matches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}

export default MatchListPage;
