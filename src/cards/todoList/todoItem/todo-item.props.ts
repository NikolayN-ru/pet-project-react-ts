export default interface TodoItemProps {
  item: {
    id: number;
    title: string;
    done: boolean;
    important: boolean;
  };
}
