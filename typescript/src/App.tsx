// import { UserCard } from "./components/01_RequireOptionalProps";
// import { GreetA, GreetB } from "./components/02_DefaultProps";
// import { Panel, RequiredChildrenPanel } from "./components/03_ChildrenReactNode";
import { Button } from "./components/05_ComponentProps";

function App() {
 

  return (
    <>
     {/* <UserCard id={"1"} name="Dicky" subtitle={<p>Nested  P</p>}/> 
       <GreetA/>
       <GreetA name="Raj"/>
       <GreetB name="Mr. Bean"/> */}
       {/* <Panel title="Panel" children={
        <ul>
          <li>one</li>
        </ul>
       }
        />
        <RequiredChildrenPanel title="hello">
          some content here
        </RequiredChildrenPanel> */}
        <Button variant="primary" onClick={() => alert("clicked")}>Text</Button>
    </>
  );
}

export default App
