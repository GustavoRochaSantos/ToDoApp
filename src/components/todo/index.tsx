import React, { useState } from 'react';
import Input from './Input';
import List from './List';

export interface DataType {
  id: string;
  title: string;
  status: 'pending' | 'done';
}

const ToDo = () => {
  const [list, setList] = useState<DataType[]>([
    { id: '1', title: 'Learn React', status: 'pending' },
    { id: '2', title: 'Learn Typescript', status: 'pending' },
    { id: '3', title: 'Learn GraphQL', status: 'pending' }
  ]);
  const qtdPending = list.filter(item => item.status === 'pending').length;

  return (
    <div className='rounded-lg bg-white p-5 w-1/2 shadow-lg'>
      <div className='mb-5'>
        <h2 className='font-black text-2xl'>ToDo App</h2>
        <small>You have {qtdPending} todo pending</small>
      </div>
      <Input data={list} setData={setList} />
      <List data={list} setData={setList} />
    </div>
  );
};

export default ToDo;
