import type Message from "./Message";

export default interface IMailer {
  send: (Message: Message) => void
}
