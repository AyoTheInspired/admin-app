import {
	FaSearch,
	FaRegBell,
	FaCommentDots,
	FaPager,
	FaBookReader,
	FaRegHeart,
	FaUserCheck,
	FaMapMarkerAlt,
	FaRegCalendarAlt,
	FaUserFriends,
} from "react-icons/fa";
import { ImEqualizer2 } from "react-icons/im";
import {
	AiOutlineAppstore,
	AiOutlineBars,
	AiOutlinePieChart,
	AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {
	FiCheckCircle,
	FiShoppingCart,
	FiDollarSign,
	FiShoppingBag,
} from "react-icons/fi";
import { RiPulseLine } from "react-icons/ri";

export const navInfo = [
	{
		icon: <FaSearch />,
		tip: "Search Dashboard",
		place: "left",
		tag: "Search",
	},
	{
		icon: <FaRegBell />,
		tip: "Notifications",
		place: "top",
		tag: "Notifications",
	},
	{
		icon: <FaCommentDots />,
		tip: "Messages & Chat",
		place: "right",
		tag: "Chat",
	},
];

export const sidebarTopInfo = [
	{
		icon: <ImEqualizer2 />,
		title: "Dashboards",
		badge: 5,
		badgeVariant: "primary",
		children: ["Default", "Analytics", "Saas", "Social", "Crypto"],
	},
	{
		icon: <FaPager />,
		title: "Pages",
		dropArrow: true,
		children: [
			"Profile",
			"Settings",
			"Clients",
			"Projects",
			"Invoice",
			"Pricing",
			"Tasks",
		],
	},
	{
		icon: <FaUserFriends />,
		title: "Auth",
		badge: "Special",
		badgeVariant: "secondary",
		children: ["Sign In", "Sign Up", "Reset Password", "Error Pages"],
	},
	{
		icon: <AiOutlineFundProjectionScreen />,
		title: "Layouts",
		dropArrow: true,
		children: [
			"Sticky Sidebar",
			"Sidebar Collapsed",
			"Boxed Layout",
			"Classic Theme",
			"Corporate Theme",
			"Modern Theme",
		],
	},
	{
		icon: <FaBookReader />,
		title: "Documentation",
		dropArrow: true,
		children: [
			"Introduction",
			"Getting Started",
			"Customization",
			"Plugins",
			"Changelog",
		],
	},
];

export const sidebarMidInfo = [
	{
		icon: <AiOutlineAppstore />,
		title: "UI Elements",
		children: [
			"Alerts",
			"Buttons",
			"Cards",
			"Carousel",
			"Embed Video",
			"General",
			"Typography",
		],
	},
	{
		icon: <FaRegHeart />,
		title: "Icons",
		badge: "1500+",
		badgeVariant: "primary",
		children: ["Feather", "Font Awesome"],
	},
	{
		icon: <FaUserCheck />,
		title: "Forms",
		children: ["Layouts", "Basic Inputs", "Input Groups", "Floating Labels"],
	},
	{
		icon: <AiOutlineBars />,
		title: "Tables",
	},
];

export const sidebarBottomInfo = [
	{
		icon: <FiCheckCircle />,
		title: "Form Plugins",
		dropArrow: true,
		children: ["Advanced Inputs", "Editors", "Validation", "Wizard"],
	},
	{
		icon: <AiOutlineBars />,
		title: "Advanced Tables",
		dropArrow: true,
		children: ["Pagination", "Row Selection", "Expandable Rows", "Export CSV"],
	},
	{
		icon: <AiOutlinePieChart />,
		title: "Charts",
		badge: "New",
		badgeVariant: "primary",
		children: ["Charts.js", "ApexCharts"],
	},
	{
		icon: <FaRegBell />,
		title: "Notifications",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Maps",
		dropArrow: true,
		children: ["Google Maps", "Vector Maps"],
	},

	{
		icon: <FaRegCalendarAlt />,
		title: "Calendar",
	},
];

export const overviewInfo = [
	{
		icon: <FiShoppingCart />,
		iconColor: "text-primary",
		figure: "2,562",
		text: "Sales Today",
	},
	{
		icon: <RiPulseLine />,
		iconColor: "text-warning",
		figure: "17,212",
		text: "Total Clients",
	},
	{
		icon: <FiDollarSign />,
		iconColor: "text-success",
		figure: "$ 43,500",
		text: "Total Earnings",
	},
	{
		icon: <FiShoppingBag />,
		iconColor: "text-danger",
		figure: "50",
		text: "Pending Orders",
	},
];

export const dailyFeedInfo = [
	{
		imgSrc: "/user.jpg",
		msg: "Ayo Abimbola started following Matthew Kings",
		timeBelow: "Today - 2:17 am",
		timeBadge: "25m ago",
	},
	{
		imgSrc: "/ashley.jpg",
		msg: "Ashley Briggs started following Stacie Hall",
		timeBelow: "Today - 7:51 pm",
		timeBadge: "5m ago",
	},
	{
		imgSrc: "./chris.jpg",
		msg: "Chris Wood posted something on Stacie Hall's timeline",
		timeBelow: "Today - 7:21 pm",
		detail:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, voluptas facere? Sequi minus aut autem repellendus?",
		timeBadge: "30m ago",
	},
	{
		imgSrc: "./stacie.jpg",
		msg: "Stacie Hall posted a new blog",
		timeBelow: "Today - 6:35 pm",
		timeBadge: "1h ago",
	},
];

export const weeklySalesData = [
	{
		statusColor: "text-primary",
		source: "Direct",
		revenue: "$ 2602",
		value: "+43%",
	},
	{
		statusColor: "text-warning",
		source: "Affiliate",
		revenue: "$ 1253",
		value: "+13%",
	},
	{
		statusColor: "text-danger",
		source: "Email",
		revenue: "$ 5416",
		value: "+24%",
	},
	{
		statusColor: "text-dark",
		source: "Other",
		revenue: "$ 1465",
		value: "+11%",
	},
];

export const scheduleInfo = [
	{
		scheduleTitle: "Chat with Carl and Ashley",
		scheduleTime: "30m ago",
		scheduleDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab vitae quia, beatae harum corporis odio qui in autem inventore.",
	},
	{
		scheduleTitle: "The Big Launch",
		scheduleTime: "2h ago",
		scheduleDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab vitae quia, beatae harum corporis odio qui in autem inventore.",
	},
	{
		scheduleTitle: "Coffee Break",
		scheduleTime: "3h ago",
		scheduleDetail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab vitae quia, beatae harum corporis odio qui in autem inventore.",
	},
];

export const projectsInfo = [
	{
		title: "Project Apollo",
		startDate: "01 / 01 / 2018",
		endDate: "31 / 06 / 2018",
		status: "Done",
		statusColor: "success",
		assignee: "Carl Jenkins",
	},
	{
		title: "Project Fireball",
		startDate: "01 / 01 / 2018",
		endDate: "31 / 06 / 2018",
		status: "Cancelled",
		statusColor: "danger",
		assignee: "Bertha Martin",
	},
	{
		title: "Project Hades",
		startDate: "01 / 01 / 2018",
		endDate: "31 / 06 / 2018",
		status: "Done",
		statusColor: "success",
		assignee: "Stacie Hall",
	},
	{
		title: "Project Nitro",
		startDate: "01 / 01 / 2018",
		endDate: "31 / 06 / 2018",
		status: "In progress",
		statusColor: "warning",
		assignee: "Carl Jenkins",
	},
	{
		title: "Project Phoenix",
		startDate: "01 / 01 / 2018",
		endDate: "31 / 06 / 2018",
		status: "Done",
		statusColor: "success",
		assignee: "Bertha Martin",
	},
];
