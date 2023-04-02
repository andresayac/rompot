/// <reference types="node" />
import IAuth from "../interfaces/IAuth";
import IBot from "../interfaces/IBot";
import Message from "../messages/Message";
import User from "./User";
import Chat from "./Chat";
import { BotEvents } from "../utils/Emmiter";
import { Chats, ChatStatus } from "../types/Chat";
import { ClientType } from "../types/Client";
import { BotStatus } from "../types/Bot";
import { Media } from "../types/Message";
import { Users } from "../types/User";
export declare function ClientBase(): ClientType;
export declare class BotBase implements IBot {
    id: string;
    status: BotStatus;
    ev: BotEvents;
    connect(auth: IAuth | string): Promise<void>;
    reconnect(alert?: boolean): Promise<void>;
    stop(reason: any): Promise<void>;
    addReaction(message: Message, reaction: string): Promise<void>;
    removeReaction(message: Message): Promise<void>;
    readMessage(message: Message): Promise<void>;
    send(message: Message): Promise<Message>;
    removeMessage(message: Message): Promise<void>;
    deleteMessage(message: Message): Promise<void>;
    downloadStreamMessage(media: Media): Promise<Buffer>;
    getBotName(): Promise<string>;
    setBotName(name: string): Promise<void>;
    getBotDescription(): Promise<string>;
    setBotDescription(description: string): Promise<void>;
    getBotProfile(): Promise<Buffer>;
    setBotProfile(image: Buffer): Promise<void>;
    addChat(chat: Chat): Promise<void>;
    removeChat(chat: Chat): Promise<void>;
    addUserInChat(chat: Chat, user: User): Promise<void>;
    removeUserInChat(chat: Chat, user: User): Promise<void>;
    promoteUserInChat(chat: Chat, user: User): Promise<void>;
    demoteUserInChat(chat: Chat, user: User): Promise<void>;
    changeChatStatus(chat: Chat, status: ChatStatus): Promise<void>;
    createChat(chat: Chat): Promise<void>;
    leaveChat(chat: Chat): Promise<void>;
    getChat(chat: Chat): Promise<Chat | null>;
    setChat(chat: Chat): Promise<void>;
    getChatName(chat: Chat): Promise<string>;
    setChatName(chat: Chat, name: string): Promise<void>;
    getChatDescription(chat: Chat): Promise<string>;
    setChatDescription(chat: Chat, description: string): Promise<void>;
    getChatProfile(chat: Chat): Promise<Buffer>;
    setChatProfile(chat: Chat, profile: Buffer): Promise<void>;
    getChatAdmins(chat: Chat): Promise<Users>;
    getChatLeader(chat: Chat): Promise<User>;
    getChats(): Promise<Chats>;
    setChats(chats: Chats): Promise<void>;
    addUser(user: User): Promise<void>;
    removeUser(user: User): Promise<void>;
    getUser(user: User): Promise<User | null>;
    setUser(user: User): Promise<void>;
    getUserName(user: User): Promise<string>;
    setUserName(user: User, name: string): Promise<void>;
    getUserDescription(user: User): Promise<string>;
    setUserDescription(user: User, description: string): Promise<void>;
    getUserProfile(user: User): Promise<Buffer>;
    setUserProfile(user: User, profile: Buffer): Promise<void>;
    unblockUser(user: User): Promise<void>;
    blockUser(user: User): Promise<void>;
    getUsers(): Promise<Users>;
    setUsers(users: Users): Promise<void>;
}
