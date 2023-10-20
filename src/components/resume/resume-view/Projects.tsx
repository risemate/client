import React from 'react';
import styled from 'styled-components';
import { Project } from 'types/Resume';

interface ProjectProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectProps) {
	return (
		<StyledProject>
			<h3>프로젝트</h3>
			{projects.map((project, index) => (
				<div key={index}>
					<h4>{project.projectName}</h4>
				</div>
			))}
		</StyledProject>
	);
}

const StyledProject = styled.section``;
