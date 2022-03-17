import React from "react";

const data = {
  categories: { group: 'Category', root_id: 1, list: [{ id: 3, name: 'test', children: [{ id: 4, name: 'test1', children: [] }] }, { id: 5, name: 'parallel', children: [{ id: 7, name: 'test2', children: [{ id: 10, name: 'aaaa', children: [{ id: 10, name: 'bbb', children: [], }], },], },], }, { id: 6, name: 'test1', children: [] }] }
};

export default function App() {


  return Object.entries(data.categories.list).map(item => (
    <div key={item[0]}>
      {item[1].name}

      <Menu item={item[1].children}/>
    </div>
  ));
}

const Menu = ({item}) => {
  return (
    <ul>
      {item.map(m => {
        return (<li key={m.id}>
          {m.name}
          {m.children && <Menu item={m.children} />}
        </li>);
      })}
    </ul>
  );
}