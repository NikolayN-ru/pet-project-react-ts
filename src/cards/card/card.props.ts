export interface CardProps {
  id: number;
  title: string;
  done: boolean | null;
  important: boolean | null;
}

export interface ItemProps {
  id: number;
  title: string;
  done: boolean;
  important: boolean;
}