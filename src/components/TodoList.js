// src/TodoApp.js
import React, { useState } from 'react';


function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const addTodo = () => {
        if (inputValue.trim() === '') {
            return ;
          }
        
          setList([...list, { text: inputValue, isStriked: false }]);
          setInputValue('');
      };
    
    const clearTodo = () => {
          setList([]);
      };
    
    const deleteTodo = (index) => {
        // setList([]);
        const deleteList = list.filter((_, i) => i !== index);
        setList(deleteList);
    };

    const toggleStrike = (index) => {
        const updatedList = list.map((todo, i) =>
            i === index ? { ...todo, isStriked: !todo.isStriked } : todo
        );
        setList(updatedList);
    };

    return (
        <div className='mr-80 ml-80 mt-20 bg-orange-300 bg-opacity-30 text-center p-2'>
            <h1 className='text-6xl m-3'>StudyList</h1>
            <div className='inline-flex justify-center m-3 mt-5 gap-2 text-3xl'>
                <form className='flex'>
                    <input type='text' placeholder='type here...' onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='bg-transparent placeholder-white border-2 rounded-lg  border-white focus:outline-none p-1 text-white'/>
                </form>
                <button onClick={addTodo} className='bg-transparent border-2 rounded-lg p-2 border-white text-white'>Add Task</button>
                <button onClick={clearTodo} className='bg-transparent border-2 rounded-lg p-2 border-white text-white'>Clear Task</button>
            </div>

            <ul className='space-y-3'>
                {list.map((todo, index) => (
                <h1 key={index} className='text-white text-3xl space-x-2'>
                        <span
                            onClick={() => toggleStrike(index)}
                            className={`cursor-pointer ${todo.isStriked ? 'line-through' : ''}`}
                        >
                            {todo.text}
                            </span>
                        <button onClick={() => deleteTodo(index)} className='bg-transparent border-2 rounded-lg p-1 border-white text-white'>Delete</button>
                    </h1>
                    
                ))}
            </ul>

            
        </div>
    );
}

export default TodoList;
