import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectAllTips } from "../store/tips/slice";
import { getAllTips } from "../store/tips/thunks";
import { TipsState } from "../store/tips/slice";
import TipsCard from "../components/TipsCard/TipsCard";

function TipsPage() {
  const tips = useAppSelector(selectAllTips);
  //   console.log("tips", tips);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTips());
  }, [dispatch]);

  return (
    <div>
      <h1>Tips Page</h1>
      {tips.map((tip: TipsState) => {
        return <TipsCard key={tip.id} tips={tip} />;
      })}
    </div>
  );
}

export default TipsPage;
