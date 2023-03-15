import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTipById } from "../../store/tips/slice";
import { getTipsById } from "../../store/tips/thunks";
import { TipDetails, Loading } from "../../components";
import loadingNoodles from "../../components/Loading/39520-japanese-noodles.json";

function TipsDetailPage() {
  const { id } = useParams<string>();
  const newId = Number(id);
  const tip = useAppSelector(selectTipById);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTipsById(newId));
  }, [dispatch, newId]);

  const [showTipsDetails, setshowTipsDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowTipsDetails(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {!showTipsDetails ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div>
          <TipDetails tipDetail={tip as any} />
        </div>
      )}
    </div>
  );
}

export default TipsDetailPage;
