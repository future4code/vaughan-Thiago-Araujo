import React, { useEffect, useState } from "react";
import axios from "axios";

import ChooseButtons from "./ChooseButtons";
import ProfileCard from "./ProfileCard";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mazzi/person"
      )
      .then((res) => {
        console.log("PERFIL: ", res.data.profile);
        setProfileToChoose(res.data.profile);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      id: profileToChoose.id,
      choice: choice
    };
    setProfileToChoose(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mazzi/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        getProfileToChoose();
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ChooseProfilePage;
