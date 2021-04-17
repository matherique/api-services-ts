export default class HttpException extends Error {
  public status: number;
  public mensagem: string;

  constructor(status: number, mensagem: string) {
    super(mensagem);
    this.status = status;
    this.mensagem = mensagem;
  }
}
