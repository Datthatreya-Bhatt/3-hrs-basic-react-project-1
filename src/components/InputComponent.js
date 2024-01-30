import React, {useState} from "react";


const InputComponent = ({setData, setTotal, total, data })=>{

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    function idHandler(e){
        setId(e.target.value);
    }
    function nameHandler(e){
        setName(e.target.value);
    }
    function amountHandler(e){
        setAmount(Number(e.target.value));
    }

    function addProductHandler(){
        setData([...data, {id, name, amount}]);
        setTotal(Number((total+amount)))
        setId('');
        setName('');
        setAmount('');
        localStorage.setItem(id, JSON.stringify({id, name, amount}));

    }

    return (
        <>
            <input value={id} placeholder="Product Id" type="number"  onChange={idHandler}/>
            <input value={name} placeholder="Product Name" type="text"  onChange={nameHandler}/>
            <input value={amount} placeholder="Amount" type="number"  onChange={amountHandler}/>
            <input  type="button" className="btn btn-primary btn-sm" value={"Add Product"} onClick={addProductHandler}/>

        </>
    )
};


export default InputComponent;