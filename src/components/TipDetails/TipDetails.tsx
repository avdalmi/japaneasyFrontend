import React from "react";
import { TipsState } from "../../store/tips/slice";
import Loading from "../Loading/Loading";
import * as loadingNoodles from "../Loading/39520-japanese-noodles.json";

interface TipDetailDisplayProps {
  tipDetail: TipsState;
}

function TipDetails(props: TipDetailDisplayProps) {
  // console.log("props", props.tipDetail);
  return (
    <div>
      {!props ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div>
          <h1>{props.tipDetail.name}</h1>
          <img
            src={props.tipDetail.image}
            alt={props.tipDetail.name}
            style={{ width: "300px" }}
          />
          <p style={{ whiteSpace: "pre-wrap" }}>
            {props.tipDetail.description}
          </p>

          {!props.tipDetail.substitution ? null : (
            <div>
              <h3>Substitutions:</h3>
              <p>{props.tipDetail.substitution}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TipDetails;
