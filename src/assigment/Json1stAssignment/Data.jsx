import React from 'react';

const Data = (props) => {
    return (
        <>
        <div className='parent'>
            <div className='main'>
                <img src={props.pass[0].Photo} alt="" />
                <h1>{props.pass[0].Name}</h1>
                <h2>{props.pass[0].PhoneNumber}</h2>
                <h2>{props.pass[0].Qualification}</h2>
                <h2>{props.pass[0].YOP}</h2>
                <h2>{props.pass[0].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[0].CTCDemand}</h2>
                <h2>{props.pass[0].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[1].Photo} alt="" />
                <h1>{props.pass[1].Name}</h1>
                <h2>{props.pass[1].PhoneNumber}</h2>
                <h2>{props.pass[1].Qualification}</h2>
                <h2>{props.pass[1].YOP}</h2>
                <h2>{props.pass[1].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[1].CTCDemand}</h2>
                <h2>{props.pass[1].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[2].Photo} alt="" />
                <h1>{props.pass[2].Name}</h1>
                <h2>{props.pass[2].PhoneNumber}</h2>
                <h2>{props.pass[2].Qualification}</h2>
                <h2>{props.pass[2].YOP}</h2>
                <h2>{props.pass[2].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[2].CTCDemand}</h2>
                <h2>{props.pass[2].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[3].Photo} alt="" />
                <h1>{props.pass[3].Name}</h1>
                <h2>{props.pass[3].PhoneNumber}</h2>
                <h2>{props.pass[3].Qualification}</h2>
                <h2>{props.pass[3].YOP}</h2>
                <h2>{props.pass[3].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[3].CTCDemand}</h2>
                <h2>{props.pass[3].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[4].Photo} alt="" />
                <h1>{props.pass[4].Name}</h1>
                <h2>{props.pass[4].PhoneNumber}</h2>
                <h2>{props.pass[4].Qualification}</h2>
                <h2>{props.pass[4].YOP}</h2>
                <h2>{props.pass[4].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[4].CTCDemand}</h2>
                <h2>{props.pass[4].Status}</h2>
            </div>
            {/* <div className='main'>
                <img src={props.pass[5].Photo} alt="" />
                <h1>{props.pass[5].Name}</h1>
                <h2>{props.pass[5].PhoneNumber}</h2>
                <h2>{props.pass[5].Qualification}</h2>
                <h2>{props.pass[5].YOP}</h2>
                <h2>{props.pass[5].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[5].CTCDemand}</h2>
                <h2>{props.pass[5].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[6].Photo} alt="" />
                <h1>{props.pass[6].Name}</h1>
                <h2>{props.pass[6].PhoneNumber}</h2>
                <h2>{props.pass[6].Qualification}</h2>
                <h2>{props.pass[6].YOP}</h2>
                <h2>{props.pass[6].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[6].CTCDemand}</h2>
                <h2>{props.pass[6].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[7].Photo} alt="" />
                <h1>{props.pass[7].Name}</h1>
                <h2>{props.pass[7].PhoneNumber}</h2>
                <h2>{props.pass[7].Qualification}</h2>
                <h2>{props.pass[7].YOP}</h2>
                <h2>{props.pass[7].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[7].CTCDemand}</h2>
                <h2>{props.pass[7].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[8].Photo} alt="" />
                <h1>{props.pass[8].Name}</h1>
                <h2>{props.pass[8].PhoneNumber}</h2>
                <h2>{props.pass[8].Qualification}</h2>
                <h2>{props.pass[8].YOP}</h2>
                <h2>{props.pass[8].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[8].CTCDemand}</h2>
                <h2>{props.pass[8].Status}</h2>
            </div>
            <div className='main'>
                <img src={props.pass[9].Photo} alt="" />
                <h1>{props.pass[9].Name}</h1>
                <h2>{props.pass[9].PhoneNumber}</h2>
                <h2>{props.pass[9].Qualification}</h2>
                <h2>{props.pass[9].YOP}</h2>
                <h2>{props.pass[9].Skills.map((x)=>
                <li>{x}</li>) }</h2>
                <h2>{props.pass[9].CTCDemand}</h2>
                <h2>{props.pass[9].Status}</h2>
            </div> */}
        </div>
        </>
    );
}

export default Data;
