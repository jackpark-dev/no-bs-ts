import React, { useCallback } from 'react';
import './App.css';

const Heading = ({ title }: { title?: string }) => <h2>{title}</h2>;

const Box: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const List: React.FC<{
  items: string[];
  onClick?: (item: string) => void /* ✓ TODO remember here */;
}> = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const onListClicked = useCallback((item: string) => {
    alert(item);
  }, []);

  return (
    <div
      style={{
        padding: '1rem',
        fontWeight: 'bold',
      }}
    >
      <Heading title="Instruction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClicked} />
    </div>
  );
}

export default App;
