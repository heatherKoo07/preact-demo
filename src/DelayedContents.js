import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

const DelayedContents = ({ action, children }) => {
  const [loading, setLoading] = useState(true);
  console.log("Delayed Contents");

  useEffect(() => {
    // Why does useEffect fall into infinite loop?
    console.log(action);
    action()
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [action]);

  return (
    <Fragment>
      {loading && (
        <h1>loading....</h1>
      )}
      {!loading && children}
    </Fragment>
  );
};

export default DelayedContents;
