import type { Event } from './event.model';

export interface WebHookEvent<T extends Event = Event> {
  destination: string;
  events: T[];
}
