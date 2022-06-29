import React, {Component} from "react";
import './TodoItem.css';

class TodoItem extends Component{

    // 컴포넌트가 리렌더링을 할지 말지 정해줌!
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        // 하단에 조건을 정해서 Return 해주면됨! default 값은 true!
        return this.props.checked !== nextProps.checked;
    }

    render() {

        const {text, checked, id, color, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{color: color}}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">☑</div>)
                }
            </div>
        );
    };
}


export default TodoItem;
