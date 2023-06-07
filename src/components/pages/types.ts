export default interface Publisher {
    id?: any;
    publisher_name: any;
    incorporation_date: any;
  }

export interface User {
  email : string,
  password : string,
  accessToken? : string
}