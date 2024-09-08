import ContentArea from "../components/ContentArea/ContentArea";
import Sidebar from "../components/Sidebar/Sidebar";

const MyNotesPage = async () => {
  return (
    <div className="flex max-md:flex-col">
      <Sidebar />
      <ContentArea />
    </div>
  );
};

export default MyNotesPage;
