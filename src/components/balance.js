const Balance = ({balance , setBalance}) => {
    
    return ( 
        <div>
            <div className="balance">
                <span>${balance}</span>
            </div>
        </div>
     );
}
 
export default Balance;