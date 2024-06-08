export interface ScriptsProperties {
	scripts: {
		filename: string,
		callback?: () => void | null
	} [];
}
