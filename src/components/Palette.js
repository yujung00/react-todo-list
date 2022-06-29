import React, {Component} from "react";
import './Palette.css';

class Palette extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.selectColor != nextProps.selectColor;
    }

    render() {
        const {colors, onClick, selectColor} = this.props;
        const colorList = colors.map((color, index) => {

            return <div className={`color ${selectColor === color && 'active'}`}
                        style={{background: color}}
                        key={index}
                        onClick={() => onClick(color)}
            />;
        });

        return (
            <div className="palette">
                {colorList}
            </div>
        );
    }
}

export default Palette;