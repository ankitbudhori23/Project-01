import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders, deleteOrder } from "../../redux/slices/OrderSlice";
import { openModal, setData } from "../../redux/slices/ModalSlice";
import data from "../../utils/data.json";
import ProductCard from "../../components/card/ProductCard";
import Button from "../../components/input/Button";
const Home = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.order.orders);
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newData = data.slice(startIndex, endIndex);
    dispatch(setOrders([...orders, ...newData]));
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const debouncedScrollHandler = debounce(handleScroll, 0);
    window.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleDelete = (orderId: string) => {
    dispatch(deleteOrder(orderId));
  };

  const handleEdit = (order: any) => {
    dispatch(setData(order));
    dispatch(openModal("edit"));
  };

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        <Button
          label="Add product"
          onClick={() => dispatch(openModal("add"))}
          color="blue"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:px-14">
        {orders?.map((order) => (
          <ProductCard
            key={order.id}
            item={order}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
