import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TipDetails from "../components/TipDetails/TipDetails";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectTipById } from "../store/tips/slice";
import { getTipsById } from "../store/tips/thunks";

function TipsDetailPage() {
  const { id } = useParams() as any;
  const tip = useAppSelector(selectTipById);
  //   console.log("tip selector", tip);
  // console.log("id", id)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTipsById(parseInt(id)));
  }, [dispatch, id]);

  return (
    <div>
      {!tip ? (
        "Loading..."
      ) : (
        <div>
          {/* @ts-ignore */}
          <TipDetails tipDetail={tip} />
        </div>
      )}
    </div>
  );
}

export default TipsDetailPage;
