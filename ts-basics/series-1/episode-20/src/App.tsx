import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.css';

const Heading = ({ title }: { title?: string }) => <h2>{title}</h2>;

const Box: React.FC = ({ children }) => {
  return <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>;
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

const ListFunc = ({
  items,
  onClick,
}: {
  items: string[];
  onClick?: (item: string) => void;
}) => {
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

const listFunc = ListFunc({ items: ['a', 'b', 'c'] });

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'REMOVE'; id: number };

const useNumber = (initialValue: number) => useState<number>(initialValue);
type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Incrementer: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <button onClick={() => setValue(value + 1)}>Add - {value}</button>
);

function App() {
  const onListClicked = useCallback((item: string) => {
    alert(item);
  }, []);

  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
            done: false,
          },
        ];
      case 'REMOVE':
        return state.filter((item) => item.id !== action.id);
      default:
        throw new Error();
    }
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = '';
    }
  }, []);

  const [value, setValue] = useState(0);

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
      <Box>{JSON.stringify(payload)}</Box>
      <Incrementer value={value} setValue={setValue} />
      <Heading title="TODOs" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() => {
              dispatch({
                type: 'REMOVE',
                id: todo.id,
              });
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
