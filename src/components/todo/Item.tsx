import React from 'react';
import { CgUndo } from 'react-icons/cg';
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline
} from 'react-icons/io';
import { DataType } from '.';
import cx from 'classnames';

interface Params {
  data: DataType;
  handleToogleDoneToDo: (id: string) => void;
  handleDeleteToDo: (id: string) => void;
}

const Item = ({ data, handleToogleDoneToDo, handleDeleteToDo }: Params) => {
  return (
    <div
      className={cx(
        'mb-4 p-2 px-4 bg-slate-100 rounded-lg flex justify-center items-center',
        'hover:translate-x-1 hover:translate-y-1 hover:transition-all',
        {
          'line-through': data.status === 'done'
        }
      )}
      key={data.id}
    >
      <span className='flex-1 mr-2'>{data.title}</span>
      {data.status !== 'done' && (
        <>
          <button
            type='button'
            className='bg-green-500 p-2 rounded-lg'
            onClick={() => handleToogleDoneToDo(data.id)}
            title='Done'
          >
            <IoMdCheckmarkCircleOutline />
          </button>

          <button
            type='button'
            className='ml-2 bg-red-500 p-2 rounded-lg'
            onClick={() => handleDeleteToDo(data.id)}
            title='Delete'
          >
            <IoMdCloseCircleOutline />
          </button>
        </>
      )}
      {data.status === 'done' && (
        <button
          type='button'
          className='ml-2 bg-yellow-500 p-2 rounded-lg'
          onClick={() => handleToogleDoneToDo(data.id)}
          title='Undo'
        >
          <CgUndo />
        </button>
      )}
    </div>
  );
};

export default Item;
