import React, { useEffect, useState } from 'react';
import Select from './select';
import Api from './api';

function App()
{
    let [s1,s2]=useState(1);
    let [s3,s4]=useState(1);
    let [s5,s6]=useState("");
    let [s7,s8]=useState("#");
    let [s9,s10]=useState();
    let [s11,s12]=useState();
    
    function f1(e)
    {
        s2(e.target.previousElementSibling.value)
        // let api=`https://pokeapi.co/api/v2/pokemon/${s1}`;
        // fetch(api).then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     let imgsrc=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s1}.png`;
        //     let poke_name=data.name;
        //     let poke_height=data.height;
        //     let moves=data.moves.length;
        //     s6(poke_name);
        //     s8(imgsrc);
        //     s10(moves);
        //     s12(poke_height);
        // })
    }
    useEffect(()=>{
        let api=`https://pokeapi.co/api/v2/pokemon/${s1}`;
        fetch(api).then((response)=>{
            return response.json();
        }).then((data)=>{
            let imgsrc=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s1}.png`;
            let poke_name=data.name;
            let poke_height=data.height;
            let moves=data.moves.length;
            s6(poke_name);
            s8(imgsrc);
            s10(moves);
            s12(poke_height);
        })
    })
    function f2(e)
    {
        s2(e.target.previousElementSibling.value);
    }
    return(
        <>
            <Select f1={f1} f2={f2}/>
            <Api poke_name={s5} move={s9} poke_height={s11} imgsrc={s7}/>
        </>
    )
}
export default App;