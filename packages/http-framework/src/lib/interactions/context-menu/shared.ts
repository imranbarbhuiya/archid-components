import { Collection } from '@discordjs/collection';
import type { RESTPostAPIContextMenuApplicationCommandsJSONBody } from 'discord-api-types/v10';
import type { Command } from '../../structures/Command';

export const contextMenuCommandRegistry = new Collection<typeof Command, RESTPostAPIContextMenuApplicationCommandsJSONBody[]>();

export type ContextMenuOptions = Omit<RESTPostAPIContextMenuApplicationCommandsJSONBody, 'type'>;
