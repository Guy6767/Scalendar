import { useState } from "react";

function useInput(initialState) {
  const [input, setInput] = useState(initialState);

  const onChangeInput = e => setInput(e.target.value);

  function onSubmitInput(e, submitCallback) {
    e.preventDefault();
    if (input) {
      submitCallback(input);
      setInput("");
    }
  }

  return { input, onChangeInput, onSubmitInput };
}

export { useInput };
