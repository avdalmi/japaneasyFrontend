import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectAllTips } from "../store/tips/slice";
import { getAllTips } from "../store/tips/thunks";

function TipsPage() {
  const tips = useAppSelector(selectAllTips);
  console.log("tips", tips);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTips());
  }, [dispatch]);
  return <div>TipsPage</div>;
}

export default TipsPage;
