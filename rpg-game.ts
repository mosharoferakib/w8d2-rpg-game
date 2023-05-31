
interface Collectible {
    collectGold(): void;
  }
  
  abstract class Character implements Collectible {
    private gold: number = 0
  
    constructor() {}
  
    collectGold(): void {
      this.gold += 10
      console.log(`Collected 10 gold. Total gold: ${this.gold}`)
    }
  
    abstract attack(): void;
    abstract defend(): void;
  }
  
  class Orge extends Character {
    attack(): void {
      console.log("Orge attacks with a club.");
    }
  
    defend(): void {
      console.log("Orge defends with a shield.");
    }
  }
  
  class Peon extends Character {
    attack(): void {
      console.log("Peon attacks with a club.");
    }
  
    defend(): void {
      console.log("Peon defends with a shield.");
    }
  }
  
  class Knight extends Character {
    attack(): void {
      console.log("Knight attacks with a sword.");
    }
  
    defend(): void {
      console.log("Knight defends with armor.");
    }
  }
  class Archer extends Character {
    attack(): void {
      console.log("Archer attacks with a bow and arrow.");
    }
  
    defend(): void {
      console.log("Archer has only a tunic for protection.");
    }
  }
  

  const orge = new Orge();
  orge.attack()
  orge.defend()
  orge.collectGold()
  
  const knight = new Knight();
  knight.attack()
  knight.defend()
  knight.collectGold();
  
  knight.attack = function () {
    console.log("Knight attacks with a club.")
  }
  
  knight.attack()
  