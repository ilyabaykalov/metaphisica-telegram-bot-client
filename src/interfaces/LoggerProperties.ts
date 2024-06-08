import { LogLineProperties } from './LogLineProperties';

export interface LoggerProperties {
	namespace: string;
	log: LogLineProperties[];
	isLoaded: boolean;
	eof: boolean;
	downloadInProgress: boolean;
}
