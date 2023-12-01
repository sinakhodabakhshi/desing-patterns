import type ITemplateEngine from "./ITemplateEngine";
import type ITranslator from "./ITranslator";
import type Message from "./Message";
import type User from "./User";

export default interface ConfirmationMailFactory {
  readonly templateEngine: ITemplateEngine
  readonly translator: ITranslator

  createMessageFor: (user: User) => Message
}
