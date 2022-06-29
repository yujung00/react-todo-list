import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component{

    // 컴포넌트가 리렌더링을 할지 말지 정해줌!
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        // 하단에 조건을 정해서 Return 해주면됨! default 값은 true!
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map((todo) => (
            <TodoItem
                {...todo}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        ))
        return (
          <div>
              {todoList}
          </div>
        );
    }
}

export default TodoItemList;