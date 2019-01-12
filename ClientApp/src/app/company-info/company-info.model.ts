export class CompanyInfo {
  public id: string;
  public name: string;
  public phone: string;
  public site: string;
  public mail: string;
  public imagePath: string;

  constructor(id:string, name: string, phone:string, site:string,
              mail:string, imagePath: string) {
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.site = site;
    this.mail=  mail;
    this.imagePath = imagePath;
  }
}
