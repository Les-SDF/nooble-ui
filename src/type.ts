import type { EventStatus } from "./util/lib/EventStatus";
import type { MemberStatus } from "./util/lib/MemberStatus";
import type { Visibility } from "./util/lib/Visibility";
import type { RewardType } from "./util/lib/rewardType";

export interface User {
  id: number;
  image?: string;
  email? : string;
  username? : string;
  members?: Member[];
  customerRegistrations?: CustomerRegistration[];
  managers?: Manager[];
  createdRewards?: Reward[];
  createdEvents?: Event[];
  createdTeams?: Team[];
  participatedEvents ?: number[];
}

export interface Sponsor {
  id: number;
  eventSponsors: EventSponsor[];
  teamSponsors: TeamSponsor[];
}

export interface Event {
  id: number;
  name?: string;
  description ?: string;
  creator?: User;
  endDate ?: Date;
  startDate ?: Date;
  eventRewards?: EventReward[];
  eventSponsors?: EventSponsor[];
  customerRegistrations?: CustomerRegistration[];
  confrontations?: Confrontation[];
  price ?: number;
  managers?: Manager[];
  teamRegistrations?: TeamRegistration[];
  status?: EventStatus | undefined;
  participantsVisibility ?: Visibility | undefined;
  maxParticipants ?: number;
}

export interface Reward {
  id: number;
  name ?: string;
  description ?: string;
  creator ?: User;
  rewardType ?: RewardType;
  prizePacks ?: PrizePack[];
}

export interface EventReward {
  id: number;
  prizePacks?: PrizePack[];
  recipients?: Recipient[];
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
  quantity ?: number;
  reward ?: Reward;
  eventReward ?: EventReward;
}

export interface Recipient {
  id: number;
}

export interface RefreshToken {
  id: number;
}

export interface Member {
  id : number;
  team ?: Team;
  status?: MemberStatus;
  user ?: User;
}

export interface Team {
  id: number;
  name?: string;
  recipients?: Recipient[];
  teamSponsors?: TeamSponsor[];
  members?: Member[];
  participations?: Participation[];
  teamRegistrations?: TeamRegistration[];
}

export interface TeamRegistration {
  id: number;
  team ?: Team[];
  event ?: Event;
}
