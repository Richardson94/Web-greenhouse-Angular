export class Invernadero {
  constructor(
    public id: string,
    public department: string,
    public location: string,
    public province: string,
    public maxTemp: string,
    public ninTemp: string,
    public avgtemp: string,
    public intermitentTime: string,
    public userId: string,
    public motorTime: string,
    public pauseTime: string,
    public logo: string
  ) {}
}
