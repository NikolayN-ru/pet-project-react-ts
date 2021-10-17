export default interface DescriptionProps {
  todoCard: {
    id: number;
    title: string;
    done: boolean | null;
    important: boolean | null;
  };
  toggleDone(id: number): void;
  onRemove?: (id: number) => void;
}
