import type { EventStatus } from "./util/lib/EventStatus";

export interface User {
  id: number;
  email : string;
  username : string;
  members: Member[];
  customerRegistrations: CustomerRegistration[];
  managers: Manager[];
  createdRewards: Reward[];
  createdEvents: Event[];
  createdTeams: Team[];
}

export interface Sponsor {
  id: number;
  eventSponsors: EventSponsor[];
  teamSponsors: TeamSponsor[];
}

export interface Event {
  id: number;
  name: string;
  description : string;
  creator: User;
  endDate : Date;
  startDate : Date;
  eventRewards: EventReward[];
  eventSponsors: EventSponsor[];
  customerRegistrations: CustomerRegistration[];
  confrontations: Confrontation[];
  managers: Manager[];
  teamRegistrations: TeamRegistration[];
  status: EventStatus | undefined;
}

export interface Reward {
  id: number;
  prizePacks: PrizePack[];
}

export interface EventReward {
  id: number;
  prizePacks: PrizePack[];
  recipients: Recipient[];
}

export interface TeamSponsor {
  id: number;
}

export interface Manager {
  id: number;
}

export interface Confrontation {
  id: number;
  participations: Participation[];
}

export interface CustomerRegistration {
  id: number;
}

export interface EventSponsor {
  id: number;
}

export interface Game {
  id: number;
  confrontations: Confrontation[];
}

export interface Participation {
  id: number;
}

export interface PrizePack {
  id: number;
}

export interface Recipient {
  id: number;
}

export interface RefreshToken {
  id: number;
}

export interface Member {
  id: number;
}

export interface Team {
  id: number;
  recipients: Recipient[];
  teamSponsors: TeamSponsor[];
  members: Member[];
  participations: Participation[];
  teamRegistrations: TeamRegistration[];
}

export interface TeamRegistration {
  id: number;
}
