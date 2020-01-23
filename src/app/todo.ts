export class Todo {
  id: number;
  title = '';
  complete = false;
  duration = 1800; 

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
