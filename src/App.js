import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async function () {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const data = await advice.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1> {advice}</h1>
      <button onClick={getAdvice}>Click Me</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p>You have got {props.count} piece of advice.</p>;
}
