export class SignInData{
    private email: string;
    private password: string;
    private first_name : string;
    private last_name : string;


    constructor(email: string, password: string, first_name: string, last_name: string){
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getEmail(): string {
        return this.email;
    }

    
    getPassword(): string {
        return this.password;
    }

    getFullName(): string {
        return this.first_name+' '+this.last_name;
    }
}