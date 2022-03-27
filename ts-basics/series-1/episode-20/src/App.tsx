import React from 'react';
import './App.css';

const Heading = ({ title }: { title?: string }) => <h2>{title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

function App() {
  return (
    <div>
      <Heading title="Instruction" />
      <Box>Hello there</Box>
    </div>
  );
}

export default App;
