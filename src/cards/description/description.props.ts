export default interface DescriptionProps {
  todoCard: {
    id: number;
    title: string;
    done: boolean | null;
    important: boolean | null;
  };
  toggleDone(id: number): void;
  removeTodo: (id: number) => void;
  toggleImp: (id: number) => void;
  upTop: (id: number) => void;
}
