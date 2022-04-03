import React from 'react';
import { DataType } from './';
import Item from './Item';
import Card from '../card';

interface Params {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const List = ({ data, setData }: Params) => {
  const handleToogleDoneToDo = (id: string) => {
    const newList: DataType[] = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === 'done' ? 'pending' : 'done'
        };
      }
      return item;
    });
    setData(newList);
  };

  const handleDeleteToDo = (id: string) => {
    const newList = data.filter(item => item.id !== id);
    setData(newList);
  };

  const noData = () => (
    <div className='text-gray-400'>Sorry, no ToDo to show</div>
  );

  const PendingList = () => {
    const pendingList = data.filter(item => item.status === 'pending');

    return (
      <Card title='Pending'>
        {pendingList.length === 0 && noData()}
        {pendingList.map(item => (
          <Item
            key={item.id}
            data={item}
            handleDeleteToDo={handleDeleteToDo}
            handleToogleDoneToDo={handleToogleDoneToDo}
          />
        ))}
      </Card>
    );
  };
  const DoneList = () => {
    const doneList = data.filter(item => item.status === 'done');

    return (
      <Card title='Done'>
        {doneList.length === 0 && noData()}
        {doneList.map(item => (
          <Item
            key={item.id}
            data={item}
            handleDeleteToDo={handleDeleteToDo}
            handleToogleDoneToDo={handleToogleDoneToDo}
          />
        ))}
      </Card>
    );
  };
  return (
    <div>
      {<PendingList />}
      {<DoneList />}
    </div>
  );
};

export default List;
