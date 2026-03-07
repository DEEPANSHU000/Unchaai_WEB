import { useEffect } from "react";

const CampusIndiaAdmissions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 bg-white min-h-screen flex flex-col">
            <div className="flex-grow w-full relative" style={{ minHeight: "calc(100vh - 80px)" }}>
                <iframe
                    src="https://careertest.edumilestones.com/india-colleges/NDUxMw=="
                    title="India Colleges Search"
                    className="absolute top-0 left-0 w-full h-full border-none"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default CampusIndiaAdmissions;
