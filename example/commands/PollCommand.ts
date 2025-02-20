import { Command, Message, PollMessage, isPollUpdateMessage, CMDKeyExact, IMessage } from "../../src";

export class PollCommand extends Command {
  public onRead() {
    this.keys = [CMDKeyExact("poll")];
  }

  public async onExec(message: IMessage) {
    const msg = new PollMessage(message.chat, "Enquete");

    msg.addOption("op1", "poll-id1");
    msg.addOption("op2", "poll-id2");
    msg.addOption("op3", "poll-id3");

    await this.client.send(msg);
  }

  public async onReply(message: Message): Promise<void> {
    if (isPollUpdateMessage(message) && message.action == "remove") return;

    await message.chat.send(`Opção ${message.text} (${message.selected}) foi selecionado!`);
  }
}
