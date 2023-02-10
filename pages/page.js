import React, { useRef } from 'react';

const Page = () => {
    const iframeRef = useRef(null);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <iframe
                ref={iframeRef}
                src="temporary/about.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default Page;
