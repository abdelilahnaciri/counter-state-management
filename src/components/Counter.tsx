import { useSelector } from "react-redux";
import Button from "./ui/Button";
import { RootState, useAppDispatch } from "../app/store";
import { increaseAction } from "../app/features/counter/counterSlice";
const Counter = () => {
  const { text, value } = useSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Counter: {value}</h3>
      <Button onClick={() => dispatch(increaseAction(5))}>{text}</Button>
    </div>
  );
};

export default Counter;
