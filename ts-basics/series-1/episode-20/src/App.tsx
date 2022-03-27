import React from 'react';
import './App.css';

const Heading = ({ title }: { title?: string }) => <h2>{title}</h2>;

const Box: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const List: React.FC<{
  items: string[];
}> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div
      style={{
        padding: '1rem',
        fontWeight: 'bold',
      }}
    >
      <Heading title="Instruction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} />
    </div>
  );
}

export default App;
