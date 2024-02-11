import { Link } from "react-router-dom";
import "./Grid.css";

const Grid = ({ id, name, rank, symbol, changePercent24Hr, price }) => {
  return (
    <div key={id} className="cripto">
      <div className="cripto-header">
        <h3 className="cripto-title">{name}</h3>
        <p className="cripto-rank">{rank}</p>
      </div>
      <div className="cripto-infor">
        <p>
          <span className="span-title">Simbolo:</span>
          {symbol}
        </p>
        <p>
          <span className="span-title">Precio USD:</span>
          <span>{parseFloat(price).toFixed(3)}</span>
        </p>
        <p>
          <span className="span-title">Variación:</span>
          <span className={changePercent24Hr < 0 ? "negative" : "positive"}>
            {parseFloat(changePercent24Hr).toFixed(3)}
          </span>
        </p>
        <p>
          <span className="link">
            <Link to={`/cripto/${id}`}>
                <span>
              Ver más

                </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Grid;
