class UserAccount {
    private name: string;
    age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }

    get getName(){
        return this.name;
    }

    set setName(age: number){
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.getName} is ${this.age} and has the char ${this.nickname} al level ${this.level}.`);
    }
}

const will = new UserAccount("Willian", 30);
console.log(will);
console.log(will.age);
will.logDetails();

const john = new CharAccount("John", 45, "johnmaster", 80);
john.logDetails();
john.logCharDetails();
