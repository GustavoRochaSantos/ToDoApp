import React, { useRef, useState } from 'react';
import { MdAddTask } from 'react-icons/md';
import { v1 } from 'uuid';
import { DataType } from '.';

interface Params {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const NewToDo = ({ data, setData }: Params) => {
  const [inputData, setInputData] = useState('');
  const inputRef = useRef(null);

  const handleAddTask = () => {
    const newTask: DataType = {
      id: v1(),
      title: inputData,
      status: 'pending'
    };
    setData([...data, newTask]);
    setInputData('');
    inputRef.current?.focus();
  };

  return (
    <div className='flex items-start'>
      <input
        className='bg-white w-full p-2 
          mb-5 rounded-tl-lg rounded-bl-lg 
          border-2 border-r-0 h-10 outline-none'
        ref={inputRef}
        placeholder='Add a new todo'
        value={inputData}
        onChange={e => setInputData(e.target.value)}
      />
      <button
        type='button'
        className='bg-gray-300 p-2 rounded-tr-lg rounded-br-lg h-10'
        onClick={handleAddTask}
        title='Add a new todo'
      >
        <MdAddTask size={23} />
      </button>
    </div>
  );
};

export default NewToDo;
