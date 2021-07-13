export class Content {

  id = 0;
  name = '';
  title = '';
  description = '';
  type = '';
  mimetype = '';
  url = '';

  constructor(data: any) {
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        // @ts-ignore
        this[prop] = data[prop];
      }
    }
  }
}
