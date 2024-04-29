import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {

  const [qandas,setQandas] = useState(questions);
  
  return (
    <main>
      <Questions qandas={qandas} />
    </main>
  )
};
export default App;
