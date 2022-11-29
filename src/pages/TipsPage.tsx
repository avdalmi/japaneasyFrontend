import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectAllTips } from "../store/tips/slice";
import { getAllTips } from "../store/tips/thunks";
import { TipsState } from "../store/tips/slice";
import TipsCard from "../components/TipsCard/TipsCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Loading from "../components/Loading/Loading";
import loadingNoodles from "../components/Loading/39520-japanese-noodles.json";

function TipsPage() {
  const tips = useAppSelector(selectAllTips);
  // console.log("tips", tips);

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
          <h1>Tips and tricks</h1>
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
