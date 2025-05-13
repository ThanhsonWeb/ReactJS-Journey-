// import { useState } from "react";

import { useState } from "react";

// export default function Step({ data }) {
// 	const [step, setStep] = useState(1);

// 	function handleBtnPrev() {
// 		if (step > 1) setStep((c) => c - 1);
// 	}

// 	function handleBtnNext() {
// 		if (step < 3) setStep((c) => c + 1);
// 	}

// 	return (
// 		<div className="box">
// 			<div className="wrap-step">
// 				<div className={`step ${step >= 1 ? "active" : ""} `}>1</div>
// 				<div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
// 				<div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
// 			</div>

// 			<StepMessage data={data} step={step}>
// 				{data[step - 1]}
// 			</StepMessage>

// 			<div className="btn-group">
// 				<button onClick={handleBtnPrev} className="btn">
// 					previous
// 				</button>
// 				<button onClick={handleBtnNext} className="btn">
// 					nextStep
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// function StepMessage({ children, step }) {
// 	return (
// 		<div>
// 			<h3 className="content"> Step : {step} </h3>
// 			<p className="message">{children}</p>
// 		</div>
// 	);
// }

// lan 2 ok 30p hahahaaha

export default function Step({ data }) {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState("true");

	function handlePrev() {
		if (step > 1) setStep((c) => c - 1);
	}

	function handleNext() {
		if (step < 3) setStep((c) => c + 1);
	}

	function handleToggle() {
		setIsOpen((c) => !c);
	}

	return (
		<>
			{isOpen ? (
				<>
					<div className="box">
						<div className="wrap-step">
							<div className={`step ${step >= 1 ? "active" : ""} `}>1</div>
							<div className={`step ${step >= 2 ? "active" : ""} `}>2</div>
							<div className={`step ${step >= 3 ? "active" : ""} `}>3</div>
						</div>

						<StepMessage>
							<h3 className="content">Step : {step}</h3>
							<p>{data[step - 1]}</p>
						</StepMessage>

						<div className="btn-group">
							<button className="btn" onClick={handlePrev}>
								previous
							</button>
							<button className="btn" onClick={handleNext}>
								Next
							</button>
						</div>
					</div>
				</>
			) : (
				""
			)}

			<button className="btn-toggle" onClick={handleToggle}>
				X
			</button>
		</>
	);
}

function StepMessage({ children }) {
	return <div className="message">{children}</div>;
}
