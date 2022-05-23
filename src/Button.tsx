import "./App.css";


export default function Button (props) {
	const { text, click, afterClick, hideButton } = props;
	const handleClick = () => {
		click();
		afterClick();
		hideButton();
	}
	return (
		<button className="button" onClick={handleClick}>
			{text}
			</button>
	)
}