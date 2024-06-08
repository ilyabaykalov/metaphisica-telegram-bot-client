import { ConfirmDialogProperties, LoggerProperties, NotificationProperties, ProjectInfoProperties, ScriptsProperties } from '@interfaces';

export interface State {
	notifications: NotificationProperties;
	projectInfo: ProjectInfoProperties;
	confirmDialog: ConfirmDialogProperties;
	logger: LoggerProperties;
	scripts: ScriptsProperties;
}
