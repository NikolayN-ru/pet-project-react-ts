import React, { useState } from "react";
import styles from "./server.module.css";
import { APIServer } from "../../../api/api-swapi";
import { Placeholder } from "../../../api/api-json-palseholder";
import Spinner from "../../../elements/spinner";
import CardServerElements from "../../../elements/card-server-elements";
import Connect from "../../header/connect";

interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const data = {
  id: 0,
  name: "",
  gender: "",
  birthYear: "",
  eyeColor: "",
};

const plaseholder = {
  userId: 0,
  id: 0,
  title: "",
  completed: false,
};

export const Server: React.FC = (): JSX.Element => {
  const [state, setState] = useState(data);
  const [plase, setPlase] = useState<TodoProps>(plaseholder);

  const getRandomPeople = (id: number): void => {
    setState(data);
    let server = new APIServer();
    server.getPerson(id).then((person) => {
      setState({
        id: id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor,
      });
    });
  };

  const getPlaseholder = (id: number): void => {
    let server = new Placeholder();
    server.getTodoId(id).then((todo) => {
      setPlase({
        userId: todo.userId,
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      });
    });
  };

  return (
    <div>
      server-
      {state.name ? (
        <CardServerElements name={state.name} id={state.id} />
      ) : (
        <Spinner />
      )}
      <div onClick={() => getRandomPeople(Math.round(Math.random() * 100))}>
        <Connect value="random-person" />
      </div>
      <p>
        {plase.userId}={plase.id}={plase.title}={plase.completed}
      </p>
      <button onClick={() => getPlaseholder(Math.round(Math.random() * 100))}>
        swapi-get
      </button>
      <p>получить случайный пост : --</p>
      <p>получить список коментариев к посту : --</p>
    </div>
  );
};
