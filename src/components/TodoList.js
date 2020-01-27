import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toggleTodoAction, deleteTodoAction} from '../redux';
import styled from 'styled-components';

const TodoListDiv = styled.div`
    width: 30%;
    margin: auto;
    `;

const TodoListUL = styled.ul`
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
    margin-left: 20px;
`;

export default () => {

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    return (
        <TodoListDiv>
            <TodoListUL>
                {todos.map((todo) => (
                    <TodoListItem>
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.complete ? 'complete' : null} onChange={toggleTodo.bind(null, todo.id)}/>
                            {todo.name}
                            <TodoListDelete>
                                <button onClick={deleteTodo.bind(null, todo.id)}><i class="fas fa-times"></i></button>
                            </TodoListDelete>
                        </li>
                    </TodoListItem>
                ))}
            </TodoListUL>
        </TodoListDiv>
    )
}
