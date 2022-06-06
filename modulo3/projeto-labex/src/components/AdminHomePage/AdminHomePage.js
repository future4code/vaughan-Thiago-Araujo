import React from "react";
import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;


function AdminPage(props) {
  return (
    <ListItemContainer>
    </ListItemContainer>
  );
}

export default AdminPage;