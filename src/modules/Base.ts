import ICommand from "@interfaces/ICommand";
import IBot from "@interfaces/IBot";
import Auth from "@interfaces/Auth";

import Message from "@messages/Message";

import Client, { ClientType } from "@modules/Client";
import User from "@modules/User";
import Chat from "@modules/Chat";

import { BotEvents } from "@utils/Emmiter";

import { Chats, ChatStatus } from "../types/Chat";
import { BotStatus } from "../types/Bot";
import { Users } from "../types/User";

export function ClientBase(): ClientType {
  return new Client<BotBase, ICommand>(new BotBase());
}

export class BotBase implements IBot {
  id: string = "";
  status: BotStatus = "offline";
  ev: BotEvents = new BotEvents();

  async connect(auth: Auth | string): Promise<void> {}

  async reconnect(alert?: boolean): Promise<void> {}

  async stop(reason: any): Promise<void> {}

  async readMessage(message: Message): Promise<void> {}

  async send(message: Message): Promise<Message> {
    return message;
  }

  async removeMessage(message: Message): Promise<void> {}

  async deleteMessage(message: Message): Promise<void> {}

  async getBotName(): Promise<string> {
    return "";
  }

  async setBotName(name: string): Promise<void> {}

  async getBotDescription(): Promise<string> {
    return "";
  }

  async setBotDescription(description: string): Promise<void> {}

  async getBotProfile(): Promise<Buffer> {
    return Buffer.from("");
  }

  async setBotProfile(image: Buffer): Promise<void> {}

  async addChat(chat: Chat): Promise<void> {}

  async removeChat(chat: Chat): Promise<void> {}

  async addUserInChat(chat: Chat, user: User): Promise<void> {}

  async removeUserInChat(chat: Chat, user: User): Promise<void> {}

  async promoteUserInChat(chat: Chat, user: User): Promise<void> {}

  async demoteUserInChat(chat: Chat, user: User): Promise<void> {}

  async changeChatStatus(chat: Chat, status: ChatStatus): Promise<void> {}

  async createChat(chat: Chat): Promise<void> {}

  async leaveChat(chat: Chat): Promise<void> {}

  async getChat(chat: Chat): Promise<Chat | null> {
    return null;
  }

  async setChat(chat: Chat): Promise<void> {}

  async getChatName(chat: Chat): Promise<string> {
    return "";
  }

  async setChatName(chat: Chat, name: string): Promise<void> {}

  async getChatDescription(chat: Chat): Promise<string> {
    return "";
  }

  async setChatDescription(chat: Chat, description: string): Promise<void> {}

  async getChatProfile(chat: Chat): Promise<Buffer> {
    return Buffer.from("");
  }

  async setChatProfile(chat: Chat, profile: Buffer): Promise<void> {}

  async getChatAdmins(chat: Chat): Promise<Users> {
    return {};
  }

  async getChatLeader(chat: Chat): Promise<User> {
    return new User("");
  }

  async getChats(): Promise<Chats> {
    return {};
  }

  async setChats(chats: Chats): Promise<void> {}

  async addUser(user: User): Promise<void> {}

  async removeUser(user: User): Promise<void> {}

  async getUser(user: User): Promise<User | null> {
    return null;
  }

  async setUser(user: User): Promise<void> {}

  async getUserName(user: User): Promise<string> {
    return "";
  }

  async setUserName(user: User, name: string): Promise<void> {}

  async getUserDescription(user: User): Promise<string> {
    return "";
  }

  async setUserDescription(user: User, description: string): Promise<void> {}

  async getUserProfile(user: User): Promise<Buffer> {
    return Buffer.from("");
  }

  async setUserProfile(user: User, profile: Buffer): Promise<void> {}

  async unblockUser(user: User): Promise<void> {}

  async blockUser(user: User): Promise<void> {}

  async getUsers(): Promise<Users> {
    return {};
  }

  async setUsers(users: Users): Promise<void> {}

  async addReaction(message: Message, reaction: string): Promise<void> {}

  async removeReaction(message: Message): Promise<void> {}
}
