import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoListTemplate form={<Form/>}>
                    <TodoItemList/>
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
