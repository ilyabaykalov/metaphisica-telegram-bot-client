import React from 'react';

import { TextContentStub } from '@components';

import { useSelector } from 'react-redux';

import { State } from '@interfaces';

import styles from './ProjectInfo.module.scss';

const ProjectInfo = () => {
	const projectVersion = useSelector(({ projectInfo }: State) => projectInfo.projectVersion);
	const alfrescoWarDate = useSelector(({ projectInfo }: State) => projectInfo.alfrescoWarDate);
	const shareWarDate = useSelector(({ projectInfo }: State) => projectInfo.shareWarDate);

	return (
		<div className={ styles.projectInfo }>
			<span>Дата alfresco.war: { alfrescoWarDate || <TextContentStub/> }</span>
			<span>Дата share.war: { shareWarDate || <TextContentStub/> }</span>
			<span>Текущая версия сборки: { projectVersion || <TextContentStub/> }</span>
		</div>
	);
};

export default ProjectInfo;
