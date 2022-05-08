import emoji from "react-easy-emoji";

export const greetings = {
	name: "Bartick Maiti",
	title: "Hello, I'm Bartick",
	description:
		"I'm student who is passionate about technology. I having an experience of web applications with Python, Flask, React.js, Next.js, Vue Js, Node Js and Blockchain development on Ethereum, Solidity, Ethers and Moralis.",
	resumeLink:
		"https://drive.google.com/file/d/1xwJDz9ox6bKBIdVWOZOMFwqlKTfZ9-AZ/view?usp=sharing",
};

export const openSource = {
	githubUserName: "bartick",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/bartick2003/",
	instagram: "https://www.instagram.com/bartick._/",
	github: "https://github.com/bartick/",
	linkedin: "https://www.linkedin.com/in/bartick-maiti/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK AND DREAM TO BE THE BEST DEVELOPER",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using React.js"),
				emoji(
					"⚡ Building RESTful APIs in Express.js, Node.js, MongoDB, MySQL, PostgreSQL"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "vscode-icons:file-type-typescript-official"
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Vuejs",
					fontAwesomeClassname: "logos:vue",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Setting up load balancers and firewalls to provide high availability"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "GCP",
					fontAwesomeClassname: "logos:google-cloud",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "Vercel",
					fontAwesomeClassname: "logos:vercel-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
				emoji(
					"⚡ Building APIs with Node.js & Solidity using IPFS and Ethers"
				)
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Ethers",
					fontAwesomeClassname: "logos:ethers",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
				{
					skillName: "Hardhat",
					fontAwesomeClassname: "logos:hardhat-icon",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design",
		progressPercentage: "40", 
	},
	{
		Stack: "Flutter",
		progressPercentage: "70",
	},
	{
		Stack: "Blockchain",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "76",
	},
];

export const educationInfo = [
	{
		schoolName: "Rcc Institute of Information Technology",
		subHeader: "Bachelor of Technology in Computer Science and Engineering",
		duration: "October 2021 - Till Date",
		// desc: "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const experience = [
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "DeCert",
		desc: "We are proving a simple fast API to ed-tech businesses to make their certificates into NFTs and send to the receiver. We are making the NFTs non-transferable so maintain the legitimacy of the certificates.",
		link: "https://github.com/Hackspiration-Team/DeCert",
		techUsed: [
			{
				skillName: "Solidity",
				fontAwesomeClassname: "logos:solidity",
			},
			{
				skillName: "NodeJs",
				fontAwesomeClassname: "logos:nodejs-icon",
			},
			{
				skillName: "Reactjs",
				fontAwesomeClassname: "logos:react",
			},
			{
				skillName: "Ethereum",
				fontAwesomeClassname: "logos:ethereum",
			}
		],
	},
	{
		name: "AniFarm",
		desc: "Discord bot made to have a layered business management helper so that people caneasy earn in-game gold (Game: AniGame)",
		link: "https://github.com/bartick/AniFarm",
		techUsed: [
			{
				skillName: "NodeJs",
				fontAwesomeClassname: "logos:nodejs-icon",
			},
			{
				skillName: "MongoDB",
				fontAwesomeClassname: "logos:mongodb",
			},
			{
				skillName: "Sqlite",
				fontAwesomeClassname: "logos:sqlite",
			},
		],
	},
	{
		name: "MedKept",
		desc: "A decentralized service where the patient’s report can only be viewed by only the Doctor and the Patient. There are Managers who can issue a report to the Patients.",
		link: "https://github.com/aztecs-team/MedKept",
		techUsed: [
			{
				skillName: "Solidity",
				fontAwesomeClassname: "logos:solidity",
			},
			{
				skillName: "NodeJs",
				fontAwesomeClassname: "logos:nodejs-icon",
			},
			{
				skillName: "Reactjs",
				fontAwesomeClassname: "logos:react",
			},
			{
				skillName: "Hardhat",
				fontAwesomeClassname: "logos:hardhat-icon",
			}
		],
	}
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
