export default interface TodoItemProps {
  item: {
    id: number;
    title: string;
    done: boolean | null;
    important: boolean | null;
  };
  setTodo(id: number): void;
}
