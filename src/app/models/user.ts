export class User {
  constructor(
    private name: string,
    private last_name: string,
    private email: string,
    private phone: string,
    private address: string,
    private exames: boolean,

    private password?: string,
    
    private nomeBB?: string,
    private birthday?: string,
    private id_professional?: number
  ) { }


  public getNome() {
    return this.name;
  }

  public setNome(nome) {
    this.name = nome;
  }

  public getSobrenome() {
    return this.last_name;
  }

  public setSobrenome(sobrenome) {
    this.last_name = sobrenome;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email) {
    this.email = email;
  }

  public getSenha() {
    return this.password;
  }

  public setSenha(senha) {
    this.password = senha;
  }

  public getNumero() {
    return this.phone;
  }

  public setNumero(numero) {
    this.phone = numero;
  }

  public getLocal() {
    return this.address;
  }

  public setLocal(local) {
    this.address = local;
  }

  public getExames() {
    return this.exames;
  }

  public setExames(exames) {
    this.exames = exames;
  }

  public getNomeBB() {
    return this.nomeBB;
  }

  public setNomeBB(nomeBB) {
    this.nomeBB = nomeBB;
  }

  public getDatap() {
    return this.birthday;
  }

  public setDatap(dataP) {
    this.birthday = dataP;
  }

  public getToken() {
    return this.id_professional;
  }

  public setToken(token) {
    this.id_professional = token;
  }
}