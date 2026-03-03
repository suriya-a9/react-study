import { increment, decrement } from "../counterReducer";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
    const count = useSelector((state) => (state.counter.count));
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Redux;