import React, { Fragment }  from "react";
import { Icon } from "@iconify/react";

import { Card, CardBody, Col, UncontrolledTooltip } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={2000} >
				<Card className="shadow-lg--hover shadow mt-4">
					<a 
						href={data.link} 
						style={{color: 'black'}}
						target="_blank"
						rel="noreferrer"
					>
						<CardBody>
							<div className="d-flex px-3">
								<div className="pl-4">
									<h3>${data.name}</h3>
									<p className="description mt-3">{data.desc}</p>
										{data.techUsed?.length>0? data.techUsed.map((skill, i) => {
											return (
												<Fragment key={i}>
													<div
														className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
														id={skill.skillName.replace(/\s/g, '')}
													>
														<Icon
															icon={
																skill.fontAwesomeClassname
															}
															data-inline="false"
														></Icon>
													</div>
													<UncontrolledTooltip
														delay={0}
														placement="bottom"
														target={skill.skillName.replace(/\s/g, '')}
													>
														{skill.skillName}
													</UncontrolledTooltip>
												</Fragment>
											);
										}):null}
								</div>
							</div>
						</CardBody>
					</a>
					
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
