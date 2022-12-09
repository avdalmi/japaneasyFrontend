import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectAllTips } from "../../store/tips/slice";
import { getAllTips } from "../../store/tips/thunks";
import { TipsState } from "../../store/tips/slice";
import TipsCard from "../../components/TipsCard/TipsCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import loadingNoodles from "../../components/Loading/39520-japanese-noodles.json";
import { MainTitle } from "../../styles/Text";

function TipsPage() {
  const tips = useAppSelector(selectAllTips);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTips());
  }, [dispatch]);

  return (
    <div>
      {!tips ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MainTitle>Tips and tricks</MainTitle>
          <SearchBar recipes={null} ingredients={tips} />
          {tips.map((tip: TipsState) => {
            return <TipsCard key={tip.id} tips={tip} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TipsPage;
