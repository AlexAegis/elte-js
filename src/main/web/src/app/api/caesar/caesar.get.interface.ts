import { Payload } from '../payload.interface';

const url = (seed: string = undefined) => `rest/caesar/${seed ? seed : ''}`;

export { url };

export interface SeedResponse extends Payload {
	shift: number;
}
