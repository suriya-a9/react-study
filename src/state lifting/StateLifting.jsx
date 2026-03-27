import { useState } from "react";
import Count from "./Count";
import SetCount from "./SetCount";

const StateLifting = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Count count={count} />
            <SetCount setCount={setCount} />
        </div>
    )
}

export default StateLifting;