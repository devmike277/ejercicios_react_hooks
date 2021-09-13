import React,{useContext} from 'react'
import {MyContext} from '../App';

function ComponentB() {

    const data = useContext(MyContext)

    return (
        <div>
           {/* <MyContext.Consumer>
                {
                    data=>{
                        return <h2>{data}</h2>
                    }
                }
           </MyContext.Consumer> */}
           <h2>{data}</h2>
        </div>
    )
}

export default ComponentB
