import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Container} from "./components/Container";

function App() {
    const personName = {first: 'Bruce', last: 'Wayne'}
    const nameList = [{first: 'Bruce', last: 'Wayne'}, {first: 'Clark', last: 'Kent'}, {
        first: 'Princess',
        last: 'Diana'
    }]
    return (
        <div className="App">
            <Status status={'loading'}/>
            <Heading>Placeholder</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dispario!</Heading>
            </Oscar>
            <Greet name='Wishwas' isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Button handleClick={(event, id) => {
                console.log("Button clicked.", event, id)
            }}/>
            <Input value={''} handleChange={(event) => {
                console.log(event)
            }}/>
            <Container styles={{border:'1px solid black', padding:'1rem'}}/>
        </div>
    );
}

export default App;
