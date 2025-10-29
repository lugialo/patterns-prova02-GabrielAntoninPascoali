// Composite
class Component {
    constructor(name) {
      this.name = name;
    }
  
    add(component) {
      throw new Error("Método add() não implementado");
    }
  
    remove(component) {
      throw new Error("Método remove() não implementado");
    }
  
    showDetails(indent = "") {
      throw new Error("Método showDetails() não implementado");
    }
  }
  
  class Task extends Component {
    showDetails(indent = "") {
      console.log(`${indent}Tarefa: ${this.name}`);
    }
  }
  
  class Project extends Component {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      const index = this.children.indexOf(component);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  
    showDetails(indent = "") {
      console.log(`${indent}Projeto: ${this.name}`);
      this.children.forEach((child) => child.showDetails(indent + "  "));
    }
  }
  
  // Cliente
  const t1 = new Task("Escrever documentação");
  const t2 = new Task("Fazer testes");
  const t3 = new Task("Code review");
  const t4 = new Task("Deploy");
  
  const subProject = new Project("Preparação");
  subProject.add(t1);
  subProject.add(t2);
  
  const mainProject = new Project("Lançamento v1.0");
  mainProject.add(subProject);
  mainProject.add(t3);
  mainProject.add(t4);
  
  mainProject.showDetails();