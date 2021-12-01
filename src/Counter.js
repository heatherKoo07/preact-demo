import { Connect } from "redux-zero/preact";
import { useEffect } from "preact/hooks";
import DelayedContents from "./DelayedContents";

import actions from "./actions";

const mapToProps = ({ count, msg }) => ({ count, msg });

export default () => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {({ count, msg, delay, increment, decrement }) => {
      // useEffect(()=>{
      //   delay()
      // }, [delay])
      console.log(count)
      console.log(msg)

       return <div>
          <DelayedContents action={() => delay()}>
            <h1>{count}</h1>
            <div>{msg}</div>
          </DelayedContents>
        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
          
        </div>
      </div>
    }}
  </Connect>
);
