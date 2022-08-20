import Navbar from "./navbar";
import { useState , useEffect } from "react";

const Balance = () => {
    const [balance , setBalance] = useState(100);

    return ( 
        <div>
            <div className="balance">
                <span>${balance}</span>
            </div>

        </div>
     );
}
 
export default Balance;