import ContentContainer from "../../components/UI-Elements/content/ContentContainer";
import { useOutletContext } from "react-router-dom";

const Overdue = () => {
  const [setShowAddTask] = useOutletContext();

  return (
    <ContentContainer setShowAddTask={setShowAddTask} />
  )
}

export default Overdue;
