import React, { useCallback, useReducer } from 'react';

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'REMOVE'; id: number };

// ✓ Type define using ReturnType
type UserTodosManagerResult = ReturnType<typeof useTodosManager>;

const TodoContext = React.createContext<UserTodosManagerResult>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

function useTodosManager(initialValue: Todo[]): {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
} {
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
  }, initialValue);

  const addTodo = useCallback((text: string) => {
    dispatch({
      type: 'ADD',
      text,
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  }, []);

  return { todos, addTodo, removeTodo };
}

// Creating the Provier
export const TodosProvider: React.FC<{ initialsTodos: Todo[] }> = ({
  initialsTodos,
  children,
}) => {
  const value = useTodosManager(initialsTodos);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Custom hooks
export const useTodos = (): Todo[] => {
  const { todos } = React.useContext(TodoContext);
  return todos;
};
export const useAddTodo = (): UserTodosManagerResult['addTodo'] => {
  const { addTodo } = React.useContext(TodoContext);
  return addTodo;
};
export const useRemoveTodo = (): UserTodosManagerResult['removeTodo'] => {
  const { removeTodo } = React.useContext(TodoContext);
  return removeTodo;
};
