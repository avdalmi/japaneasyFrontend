import React from "react";
import { WhereToEatMap } from "../../components";
import { MainTitle } from "../../styles/Text";

function WhereToEatPage() {
  return (
    <div>
      <MainTitle>Where to eat in Amsterdam (according to Akiko)</MainTitle>
      <WhereToEatMap />
    </div>
  );
}

export default WhereToEatPage;
