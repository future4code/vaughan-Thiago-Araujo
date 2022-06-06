import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 16px;
  border: 1px solid black;
  max-height: 650px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
`;

const ProfileInfo = styled.div`
  padding: 16px;
`;

function ProfileCard(props) {
  return (
    <ProfileCardContainer>
      <ProfilePicture src={props.profile.photo} alt="Imagem da pessoa" />
      <ProfileInfo>
        <p>
          {props.profile.name}, {props.profile.age}
        </p>
        <p>{props.profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
