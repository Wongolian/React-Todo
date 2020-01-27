import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toggleTodoAction, deleteTodoAction} from '../redux';
import styled from 'styled-components';

const TodoListUL = styled.ul`
    width: 50%;
    background: #ddd;
    margin: auto;
    padding: 20px;
    color: #232323;
    list-style: none;
`;

const TodoListItem = styled.li`
    font-size: 200%;
    text-align: center;
    
`;

const TodoListDelete = styled.button`
    color: red;
`;

export default () => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    return (
        <TodoListUL>
            {todos.map((todo) => (
                <TodoListItem>
                    <li key={todo.id}>
                        <input 
                        type="checkbox"
                        checked={todo.complete}
                        onChange={toggleTodo.bind(null, todo.id)}
                        />
                        <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                        <TodoListDelete>
                            <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}><button><i class="fas fa-times"></i></button></span>
                        </TodoListDelete>
                    </li>
                </TodoListItem>
            ))}
        </TodoListUL>
    )
}
