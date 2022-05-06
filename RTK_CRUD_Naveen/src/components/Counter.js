import React, { useState } from "react"
let Counter =()=>{
    let [state, setState] = useState({
    count:0
})
let clickIncrement=()=>{
    setState({
        count:state.count+1
    })
}
let clickDecrement=()=>{
    setState({
        count:state.count-1
    })
}
let clickInc5=()=>{
    setState({
        count:state.count+5
    })
}
    return (
       <React.Fragment>
       <div className="container mt-5">
       <div className="row">
          <div className="col-md-4">
             <div className="card">
                <div className="card-body">
                   <p className="h3 display-3">{state.count}</p>
                   <button className="btn btn-success m-1" onClick={clickIncrement}>Increment</button>
                   <button className="btn btn-warning m-1" onClick={clickDecrement} >Decrement</button>
                   <button className="btn btn-danger m-1" onClick={clickInc5}>Increment by 5</button>
                </div>
             </div>
          </div>
       </div>
       </div>

       </React.Fragment>
    )
};
export default Counter;