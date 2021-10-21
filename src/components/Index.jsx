import React from 'react'
import person from './../image.jpeg'

export default function Index() {
    return (
        <div style={{paddingTop: '5rem'}}>
            <div className="bg-white rounded-lg mx-auto flex-col md:flex-row flex justify-center my-6">
                <div> 
                    <img src={person} alt="Person Working" />
                </div>
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="flex flex-col justify-center text-center">
                    <h1 className="text-6xl font-medium mb-2"> Hi, I am <a className="text-purple-600">Bartick Maiti</a></h1>
                    <p>
                        <a className="text-3xl"> Welcome to my portfolio. </a> <br/> 
                        <br />  
                         <a className="text-1xl">I am a 1st year B. Tech Student studying Computer Science And Engineering <br/> at RCC Institute of Information Technology.</a>
                         <br />
                         <br />
                         <a className="text-purple-600">Hope You like my portfolio!!</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
