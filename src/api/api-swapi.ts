interface answerFetch{
  name: string,
  gender: string,
  birthYear: string,
  eyeColor:string
}

export class APIServer {
  _apibase:string = "https://swapi.dev/api";

  async getResourse(url: string):Promise<any> {
    const res = await fetch(`${this._apibase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not get resourse ${url} reseiver ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople():Promise<any>  {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id: number):Promise<any> {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  _transformPerson = (person: any):answerFetch => {
    return {
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
