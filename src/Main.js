import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "./Display";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todo: null,
            displayId: 'active'
        };
    }
    addTodoHandler = e => {
        this.setState({
            todo: e.target.value
        });
    };
    submitHandler = e => {
        if (e.keyCode !== 13)
            return;
        const { todo } = this.state;
        this.refs.inputRef.value = "";
        this.props.addTodoToStore(todo);
    };
    handleClick = e => {
        const target = e.target.id;
        this.setState({
            displayId: target
        })
    }
    render() {
        const { displayId } = this.state;
        return (
            <div>
                <h1>A Simple TODO app</h1>
                <div style={{ padding: '10px', boxShadow: '5px 5px 10px #c0c0c0' }}>
                    <input
                        ref="inputRef"
                        placeholder="ADD TODO"
                        onChange={this.addTodoHandler}
                        onKeyUp={this.submitHandler}
                    />
                    <button type="submit" onClick={this.submitHandler}>
                        SUBMIT
                    </button>
                    <div onClick={this.handleClick}>
                        <button id='toDos'>All</button>
                        <button id='completed'>Completed</button>
                        <button id='active'>Active</button>
                    </div>
                    <Display data={this.props[this.state.displayId]} click={index => this.props.removeTodo(index)} shouldBeClicked={displayId === 'active' ? true : false} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toDos: state.toDos,
        completed: state.completed,
        active: state.active
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodoToStore: todo =>
            dispatch({ type: "ADD_TODO", payload: { task: todo } }),
        removeTodo: index => dispatch({ type: "REMOVE_TODO", payload: { index } })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
