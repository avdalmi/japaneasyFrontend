import { TipsState } from "../../store/tips/slice";
import { Loading } from "../index";
import { MainTitle } from "../../styles/Titles";
import * as loadingNoodles from "../Loading/39520-japanese-noodles.json";

import "./TipDetails.css";

interface TipDetailDisplayProps {
  tipDetail: TipsState;
}

function TipDetails(props: TipDetailDisplayProps) {
  return (
    <div>
      {!props ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <div>
          <MainTitle>{props.tipDetail.name}</MainTitle>
          <img
            src={props.tipDetail.image}
            alt={props.tipDetail.name}
            className="tipDetailImage"
          />
          <p className="tipDetailDescription">{props.tipDetail.description}</p>

          {!props.tipDetail.substitution ? null : (
            <div>
              <h3 className="tipDetailSecondTitle">Substitutions</h3>
              <p className="tipDetailSubstitution">
                {props.tipDetail.substitution}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TipDetails;
