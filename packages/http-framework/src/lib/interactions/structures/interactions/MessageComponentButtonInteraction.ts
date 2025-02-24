import type { APIMessageComponentButtonInteraction } from 'discord-api-types/v10';
import { MessageComponentInteraction } from './base/MessageComponentInteraction';

export class MessageComponentButtonInteraction extends MessageComponentInteraction<MessageComponentButtonInteraction.Type> {}

export namespace MessageComponentButtonInteraction {
	export type Type = APIMessageComponentButtonInteraction;
}
