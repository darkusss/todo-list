import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import TodoItems from './todolist/TodoItems';

const Main = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const onAddTodoItem: (e: React.KeyboardEvent) => void = (e) => {
        if (e.key === 'Enter') {
            if (inputValue.trim() === '') return;

            dispatch(addTodo(inputValue));

            setInputValue('');
        }
    };

    return (
        <div className="flex justify-center my-4 mx-2 sm:mx-0">
            <div className="w-full sm:w-1/2">
                <input
                    placeholder="Enter a task..."
                    onChange={(event: any): void => setInputValue(event.target.value)}
                    onKeyDown={onAddTodoItem}
                    value={inputValue}
                    className="bg-white my-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    autoFocus
                />
                <h1 className="font-bold text-2xl text-green">Today</h1>
                <TodoItems />
            </div>
        </div>
    );
};

export default Main;