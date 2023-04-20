export class User {
  constructor(
    public id: string,
    public name: string,
    public firstLastName: string,
    public secondLastName: string,
    public type: string,
    public location: string,
    public phone: string,
    public mail: string,
    public password: string,
    public status: string,
    public change: string
  ) {}
}
