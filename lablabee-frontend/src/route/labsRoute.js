import ListLab from "../component/list_lab";
import { useSelector } from "react-redux";

const LabsRoute = () => {
  const labList = useSelector((state) => state.labList);

  console.log("labList", labList);
  return <ListLab labs={labList} />;
};

export default LabsRoute;
