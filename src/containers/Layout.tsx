import ModalComponent from "../components/modal/modal";
import PageContent from "./PageContent";
import { useSelector } from "react-redux";
import { selectModalState } from "../redux/slices/ModalSlice";
const Layout = () => {
  const { isOpen } = useSelector(selectModalState);
  return (
    <>
      <PageContent />
      {isOpen && <ModalComponent />}
    </>
  );
};

export default Layout;
