import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const walimiItems = ["react native", "mongodb"];
const savnaItems = ["blockchain", "web3", "redis db", "nodejs", "react native", "nextjs", "tailwind css"];

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={ process.env.PUBLIC_URL + "/walmi.jpg"}
								alt="walimi"
								className="work-image"
							/>
							<div className="work-title">Walimi Katale</div>
							<div className="work-subtitle">
								Software Engineer
								<div className="horizontal-list">
									{walimiItems.map((item, index) => (
										<React.Fragment key={index}>
											{index > 0 && <div className="vertical-line" />}
											<div className="list-item">{item}</div>
										</React.Fragment>
									))}
								</div>
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src={ process.env.PUBLIC_URL + "/savna.jpg" }
								alt="csavannah"
								className="work-image"
							/>
							<div className="work-title">CryptoSavannah</div>
							<div className="work-subtitle">
								Software Engineer
								<div className="horizontal-list">
									{savnaItems.map((item, index) => (
										<React.Fragment key={index}>
											{index > 0 && <div className="vertical-line" />}
											<div className="list-item">{item}</div>
										</React.Fragment>
									))}
								</div>
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
