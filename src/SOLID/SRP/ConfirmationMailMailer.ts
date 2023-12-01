import type ConfirmationMailFactory from "./ConfirmationMailFactory";
import type IMailer from "./IMailer";
import type Message from "./Message";
import type User from "./User";

export default class ConfirmationMailMailer {
  private readonly mailer: IMailer;
  private readonly confirmationMailFactory: ConfirmationMailFactory;

  constructor(
    mailer: IMailer,
    confirmationMailFactory: ConfirmationMailFactory
  ) {
    this.mailer = mailer;
    this.confirmationMailFactory = confirmationMailFactory;
  }

  public sendTo(user: User): void {
    const message: Message = this.confirmationMailFactory.createMessageFor(user);
    this.sendMessage(message);
  }

  private sendMessage(message: Message): void {
    this.mailer.send(message);
  }
}
