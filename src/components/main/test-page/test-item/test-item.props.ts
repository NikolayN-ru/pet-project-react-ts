interface TestItemProps {
  id: number;
  question: string;
  answers: string[];
  rightAnswer: string;
}

export default interface ItemProps {
  itemTest: TestItemProps;
  onAnswer: (answer:string) => void;
}
