# poo-carro
class Carro {
    tan: number;
    pessoas: number;
    km: number;

    
    constructor (){
        this.tan = 0;
        this.pessoas = 0;
        this.km = 0;

    }

    mostrar() : string {
      return "gas : " + this.tan + ", pass" + this.pessoas + ", km" + this.km;
    }
  
    embarcar() : void {
    
      if( this.pessoas < 2){
          this.pessoas += 1;
      }
    }
    desembarcar() : void{
      if (this.pessoas > 0)
          this.pessoas -= 1;
    }
    abastecer (qtd : number){
        this.tan += qtd;
        if (this.tan > 10)
            this.tan = 10;
            
    }
    andar(distancia : number) {
        if(this.pessoas >=1 && this.gas >= distancia/10) 
