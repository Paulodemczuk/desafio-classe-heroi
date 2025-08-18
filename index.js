class heroi{
    constructor(nomeHeroi,idadeHeroi,tipoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }
    atacar(){
        switch (this.tipoHeroi){
            case "Mago":
            console.log(`o ${this.tipoHeroi} atacou usando magia`);
            break;
            case "Guerreiro":
            console.log(`o ${this.tipoHeroi} atacou usando espada`);
            break;
            case "Monge":
            console.log(`o ${this.tipoHeroi} atacou usando artes marciais`);
            break;
            case "Ninja":
            console.log(`o ${this.tipoHeroi} atacou usando shuriken`);
            break;
            default: console.log(`o ${this.tipoHeroi} atacou usando as mãos`);
        }
    }
}

let heroiFogo = new heroi("Marcos", 26,"Mago");
console.log(`${heroiFogo.nomeHeroi} o ${heroiFogo.tipoHeroi} de ${heroiFogo.idadeHeroi} anos`);
heroiFogo.atacar();
