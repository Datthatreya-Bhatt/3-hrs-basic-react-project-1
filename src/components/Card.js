import React, {useState} from "react";


import InputComponent from "./InputComponent";



const Card = ()=>{

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);


    function deleteHandler(index){
        let temp =[...data];

        temp.map((el, i)=>{
            if(el.id === index){
                localStorage.removeItem(el.id);
                setTotal(Number((total-el.amount)))
                temp.splice(i, 1);
                return {}
            }
            return el;
        })
        
        setData(temp);

    }
    
    return (
        <>
            <InputComponent setData={setData} setTotal={setTotal} total={total} data={data}/>
           <h4>Products</h4>
            {data.map((el, i)=>(
                
                    <li key={i}> <b> {el.id} - {el.name} - {el.amount}</b>
                    <input type="button" className="btn btn-danger btn-sm" value={"delete"} onClick={()=> deleteHandler(el.id)}/>
                    
                    </li>
                    
               
            ))}
            <h4>Total value of Products: {total}</h4>

        </>
    )
};


export default Card;