import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoListTemplate form={<Form/>}>
                    집가서 잠자기
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
