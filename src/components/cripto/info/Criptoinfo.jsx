import { parseFloatNumber } from "../../../helpers/ParseFloatNumber";

const Criptoinfo = ({cripto}) => {
  return (
    <div className="cripto-info">
      <div className="cripto-info-head">
        <div className="cripto-info-head-rank">
          <span>Ranking:</span>
          <span>{cripto.rank}</span>
        </div>
        <h2>{cripto.name}</h2>
        <span className="label-symbol">{cripto.symbol}</span>
      </div>
      <div className="cripto-info-body">
        <div className="info">
          <ul>
            <li className="info-li">
              Price ($): <span className="info-label">{parseFloatNumber(cripto.priceUsd, 3)}</span>
            </li>
            <li className="info-li">
              Supply: <span className="info-label">{parseFloatNumber(cripto.supply, 3)}</span>
            </li>
            <li className="info-li">
              MaxSupply: <span className="info-label">{parseFloatNumber(cripto.maxSupply,3)}</span>
            </li>
            <li className="info-li">
              Volume 24Hr ($):{" "}
              <span className="info-label">{parseFloatNumber(cripto.volumeUsd24Hr, 3)}</span>
            </li>
            <li className="info-li">
              Change 24Hr (%):{" "}
              <span className="info-label">{parseFloatNumber(cripto.changePercent24Hr, 3)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Criptoinfo;
