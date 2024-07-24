import React from 'react'
import Card from 'react-bootstrap/Card';
import {green} from "../utility/asset.tsx"
import { Link } from 'react-router-dom';

const Sucess = () => {
  return (
    <div>
      <Card style={{margin:'auto',width:'400px',textAlign:'center',marginTop:80,padding:20}}>
        <h1 style={{fontSize:20,marginBottom:10}}>Payment successful.</h1>
        <div style={{textAlign:'center'}}>
        <img src={green} alt="" width={180} height={180}/>
        </div>
        
        <Link to="/" style={{alignSelf:'center',marginTop:20,height:'50px',width:'50%',lineHeight:3,border:'2px solid #55af55',textDecoration:'none',borderRadius:'6px',color:'#FFFFFF',background:'#55af55'}}>
          Go to Home
        </Link>
        
      </Card>
    </div>
  )
}

export default Sucess