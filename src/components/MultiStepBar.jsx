//MultiStepBar.jsx
import "./MultiStepBar.css";

const MultiStepBar = ({ currentStep, stepCount }) => {
    return (
      <div className="multi-step-bar">
        {[...Array(stepCount)].map((_, i) => (
          <div
            key={i}
            className={`step ${currentStep === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    );
  };

export default MultiStepBar;