import { height } from '@mui/system'
import React from 'react'
import hero_img from '../assets/images/home.jpg'

export default function Home(){
    return<> 
    
    <div style={{marginTop:'64px' , height:'70vh',
    backgroundImage:'linear-gradient(to bottom, #010101 40% ,#010109 100%)'
    
    }}>
        <div className='hero' style={{display:'flex',flexDirection:'row' ,//backgroundImage:'linear-gardient(to bottom,#010101 ,#010109)'
    }}>
            <div style={{width:'50vw' ,marginLeft:'5rem',color:"#fff", marginTop:'5rem'}} className="infos">
                <p style={{marginBottom:0,position:'relative'}}>Buy whatever you want on the</p>
                <h1 style={{margin:0,fontSize:'3.5rem'}}>Easy-peasy way</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum saepe animi accusamus pariatur impedit nemo dignissimos maxime error debitis nostrum perferendis veniam quisquam, adipisci magnam. Provident quidem amet qui?</p>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'40px'}}>
                <button className='primary-btn' style={{width:'20vw',padding:'12px'}}>Buy now</button>
                <button className='secondary-btn' style={{width:'20vw'}}>More info</button>
                </div>
            </div>
            <img src={hero_img} style={{width:'50vw'}}/>

        </div>
    </div>
    
    </>
}