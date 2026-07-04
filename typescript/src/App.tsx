import { UserCard } from "./components/01_RequireOptionalProps";
import { GreetA, GreetB } from "./components/02_DefaultProps";


function App() {
 

  return (
    <>
     <UserCard id={"1"} name="Dicky" subtitle={<p>Nested  P</p>}/> 
       <GreetA/>
       <GreetA name="Raj"/>
       <GreetB name="Mr. Bean"/>
    </>
  );
}

export default App
