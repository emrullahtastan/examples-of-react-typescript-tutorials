import './App.css';
import {Text} from "./components/polymorphic/Text";

function App() {
    return (
        <div className="App">
            <Text as={'h1'} size={'lg'}>Heading</Text>
            <Text as={'p'} size={'md'}>Paragraph</Text>
            <Text as={'a'} href={"https://trt.net.tr"}>Label</Text>
        </div>
    );
}

export default App;
