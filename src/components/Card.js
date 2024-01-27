import React, {useState} from "react";


import InputComponent from "./InputComponent";



const Card = ()=>{

    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);


    function deleteHandler(index){
        let temp =[...data];

        console.log(temp, index);

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
           <h1>Products</h1>
            {data.map((el, i)=>(
                
                    <li key={i}> {el.id} -{el.name} -{el.amount}
                    <input type="button" value={"delete"} onClick={()=> deleteHandler(el.id)}/>
                    
                    </li>
                    
               
            ))}
            <h1>Total value of Products: {total}</h1>

        </>
    )
};


export default Card;