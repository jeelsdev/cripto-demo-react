import { parseFloatNumber } from "../../../helpers/ParseFloatNumber";

const Criptohistory = ({history}) => {
  return (
    <div className="cripto-history">
      <h2>Historial</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ time, priceUsd, date }) => (
            <tr key={time}>
              <td className="history-table-date">
                {new Date(date).toLocaleDateString()}
              </td>
              <td className="history-table-price">{parseFloatNumber(priceUsd, 3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Criptohistory;
