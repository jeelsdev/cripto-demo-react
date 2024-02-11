import { useParams } from "react-router-dom";
import "./Criptopage.css";
import usePetition from "../../hooks/usePetition";
import Criptoinfo from "./info/Criptoinfo";
import Criptohistory from "./info/Criptohistory";
import LoaderCircle from "../loaders/LoaderCircle";

const Criptopage = () => {
  const params = useParams();

  const cripto = usePetition(`assets/${params.id}`);
  const history = usePetition(`assets/${params.id}/history?interval=d1`);

  if (!cripto || !history) return <LoaderCircle />

  return (
    <div className="cripto-page">
      {cripto && <Criptoinfo cripto={cripto} />}

      {history && <Criptohistory history={history} />}
    </div>
  );
};

export default Criptopage;
