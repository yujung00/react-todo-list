import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import Palette from "./components/Palette";

class App extends Component {

    id = 3;
    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리액트 소개', checked: false },
            { id: 1, text: ' 리액트 소개', checked: true },
            { id: 2, text: ' 리액트 소개', checked: false }
        ],
        colors: [
            '#343a40', '#f03e3e', '#12b886', '#228ae6'
        ],
        selectColor: '#343a40'
    }



    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleCreate = () => {
        const {input, todos, selectColor} = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: selectColor
            })
        });
    };

    handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        // 선택한 todo item index
        const index =  todos.findIndex(todo  => todo.id === id);

        // select todo item
        const selected = todos[index];

        // 기존 값 복사 및 checked 값 변경
        const nextTodos = [...todos];
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }

        this.setState({
            todos: nextTodos
        });

    }

    handleRemove = (id) => {
        const {todos} = this.state;

        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });

    }

    handleChangeColor = (color) => {
        this.setState({
            selectColor: color
        });
    }

    render() {
        const {input, todos, colors, selectColor} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleChangeColor
        } = this;

        return (
            <div>

                <TodoListTemplate form={(
                    <Form
                        value={input}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        onCreate={handleCreate}
                        selectColor={selectColor}
                    />
                )}
                  palette={<Palette
                      colors={colors}
                      onClick={handleChangeColor}
                      selectColor={selectColor}
                  />}
                >
                    <TodoItemList
                        todos={todos}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                    />
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
