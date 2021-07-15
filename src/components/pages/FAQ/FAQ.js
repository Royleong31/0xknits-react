import Layout from "../../Layout/Layout";
import Accordion from "../../UI/Accordions/Accordion";
import "./FAQ.scss";

const dummyFAQArr = [
	{
		question: "This is the first question. This is a one line accordion",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, architecto.  ipsum, dolor sit amet consectetur adipisicing elit ipsum, dolor sit amet consectetur adipisicing elit",
	},
	{
		question:
			"This is a two line accordion. This is the second question. This is a really long sentence so that we can see how two lines work. ",
		answer: "This is the answer to the FAQ question. The answer can be quite long. Zürich classic iconic, Sunspel Nordic exquisite Beams impeccable sleepy international Shinkansen. Sophisticated carefully curated wardrobe bureaux. ",
	},
	{
		question: "This is how the accordion is when open.",
		answer: "This is the answer to the FAQ question. The answer can be quite long. Zürich classic iconic, Sunspel Nordic exquisite Beams impeccable sleepy international Shinkansen. Sophisticated carefully curated wardrobe bureaux. ",
	},
];

export default function FAQ() {
	const style = {
		gridTemplateRows: `repeat(${dummyFAQArr.length}, min-content)`,
	};

	return (
		<Layout navbar footer page="faq">
			<section className="faq" style={style}>
				<h1 className="faq__header">FAQ</h1>

				{dummyFAQArr.map((faq, i) => (
					<Accordion key={i} {...faq} />
				))}
			</section>
		</Layout>
	);
}
