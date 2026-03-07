import { useEffect } from "react";

const OnlineIndiaAdmissions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 bg-white min-h-screen flex flex-col">
            {/* Wrapper with overflow-hidden to crop the iframe's native header */}
            <div className="flex-grow w-full relative overflow-hidden" style={{ minHeight: "calc(100vh - 80px)" }}>
                <iframe
                    src="https://careertest.edumilestones.com/online-courses/universities/NDUxMw=="
                    title="Online Courses Search"
                    className="absolute left-0 w-full border-none"
                    style={{ top: "-85px", height: "calc(100% + 85px)" }}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default OnlineIndiaAdmissions;
