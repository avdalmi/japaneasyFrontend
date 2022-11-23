import React, { useEffect } from "react";
import Map from "../components/Map/Map";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectPrefectures } from "../store/prefectures/slice";
import { getAllPrefectures } from "../store/prefectures/thunks";

const MapPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPrefectures());
  }, [dispatch]);

  return (
    <div>
      <h1>日本地図</h1>
      <Map />
    </div>
  );
};

export default MapPage;
