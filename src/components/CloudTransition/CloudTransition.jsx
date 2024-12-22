const CloudTransition = ({ isActive, onAnimationEnd }) => {
    return (
        <div
            className={`fixed inset-0 bg-white z-[100] flex items-center justify-center 
        ${isActive ? "animate-cloud-in" : "animate-cloud-out"}`}
            onAnimationEnd={onAnimationEnd}
        >
            <div className="smoke w-full h-full"></div>
        </div>
    );
};

export default CloudTransition;