import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Bartick Maiti",
					description:
						"A passionate Backend, Full Stack and BlockChain Developer.",
					image: "https://avatars.githubusercontent.com/u/69100224?v=4",
					url: "https://bartick.me",
					keywords: [
						"Bartick",
						"Bartick Maiti",
						"@bartick",
						"bartick",
						"Portfolio",
						"Bartick Portfolio ",
						"Bartick Maiti Portfolio",
						"Backend Developer",
						"Full Stack Developer",
						"BlockChain Developer",
						"Full Stack",
						"Backend",
						"BlockChain",
						"Developer",
						"Full Stack Developer in India",
						"Backend Developer in India",
						"BlockChain Developer in India",
						"Full Stack Developer in Kolkata",
						"Backend Developer in Kolkata",
						"BlockChain Developer in Kolkata",
						"Full Stack Developer in West Bengal",
						"Backend Developer in West Bengal",
						"BlockChain Developer in West Bengal",
						"Full Stack Developer in Kolkata, West Bengal",
						"Backend Developer in Kolkata, West Bengal",
						"BlockChain Developer in Kolkata, West Bengal",
						"Full Stack Developer in India, Kolkata, West Bengal",
						"Backend Developer in India, Kolkata, West Bengal",
						"BlockChain Developer in India, Kolkata, West Bengal",
						"Intern",
						"Internship",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			{/* <Feedbacks /> */}
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
