class heroi{
    constructor(name, age, type){
this.name = name;
this.age = age;
this.type = type;

    }

    toAttack(){

        let attack;
        
        switch(this.type){
           
            case "mago":
            attack = "magia"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "guerreiro":
            attack = "espada"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "monge":
            attack = "artes marciais"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
            
            case "ninja":
            attack = "shuriken"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
        }
    }
    
}

const heroi1 = new heroi("Gandalf", 82, "mago")
const heroi2 = new heroi("Aragorn", 36, "guerreiro")
const heroi3 = new heroi("Coen", 139, "monge")
const heroi4 = new heroi("Gaiden", 28, "ninja")

heroi1.toAttack()
heroi2.toAttack()
heroi3.toAttack()
heroi4.toAttack()