export class Person{
  Firstname: string;
  Midlename: string;
  Lastname: string;
  age: number;
  

  constructor(Firstname: string,Midlename: string,Lastname: string, age: number) {
      this.Firstname = Firstname;
      this.Midlename = Midlename;
      this.Lastname = Lastname;
      this.age = age;
  }

  Getfullname(){
      return this.Firstname + " " + this.Midlename + " " + this.Lastname ;
    }

  GetbirthdayYear() {
    let year = 2022;
    return year-this.age;
  }
}
 
