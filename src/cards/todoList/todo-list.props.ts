export default interface TodoListProps {
  data: {
    id: number;
    title: string;
    done: boolean | null;
    important: boolean | null;
  }[];
  setTodo(id: number): void;
  addTodo(id: string): void;
  //   toggleDone: (id: number) => void;
}
