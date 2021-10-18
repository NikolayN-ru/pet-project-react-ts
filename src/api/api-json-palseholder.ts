// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Placeholder {
  _base: string = "https://jsonplaceholder.typicode.com";

  async getResourse(url: string): Promise<any> {
    const res = await fetch(`${this._base}${url}`);
    return await res.json();
  }

  async getTodoId(id: number): Promise<any> {
    const todo = await this.getResourse(`/todos/${id}`);
    return this._transformTodo(todo);
  }

  _transformTodo = (todo: TodoProps) => {
    return {
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    };
  };
}

// userId: 1,
// id: 1,
// title: "delectus aut autem",
// completed: false
