import React from 'react';
import './App.css';

const Heading = ({ title }: { title?: string }) => <h2>{title}</h2>;

const Box: React.FC = ({ children }) => {
  return <div>{children}</div>;
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
    </div>
  );
}

export default App;
