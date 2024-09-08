import ContentArea from "../components/ContentArea/ContentArea";
import Sidebar from "../components/Sidebar/Sidebar";

const MyNotesPage = async () => {
  return (
    <div className="flex">
      <Sidebar />
      <ContentArea />
    </div>
  );
};

export default MyNotesPage;
