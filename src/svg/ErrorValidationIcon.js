import React from "react";

const ErrorValidationIcon = () => {
    return (
        <svg width={30} height={30}>
            <rect
                fill="#db3c30"
                width={28}
                height={28}
                x={-30}
                y={-30}
                rx={14}
                ry={14}
                transform="matrix(0 -1 -1 0 0 0)"
            />
            <path
                className="prefix__error"
                d="M15 7.997h2v13h-2zm0 16h2v2h-2z"
                opacity={0.2}
            />
            <path
                fill="#fff"
                className="prefix__error"
                d="M15 6.997h2v13h-2zm0 16h2v2h-2z"
            />
            <path
                fill="#fff"
                opacity={0.2}
                d="M16 2C8.244 2 2 8.244 2 16c0 .169.02.333.025.5A13.957 13.957 0 0116 3c7.587 0 13.711 5.98 13.975 13.5.005-.167.025-.331.025-.5 0-7.756-6.244-14-14-14z"
            />
            <path
                opacity={0.2}
                d="M2.025 16.5c-.006.167-.025.331-.025.5 0 7.756 6.244 14 14 14s14-6.244 14-14c0-.169-.02-.333-.025-.5C29.71 24.021 23.587 30 16 30 8.412 30 2.289 24.021 2.025 16.5z"
            />
        </svg>
    );
};

export default ErrorValidationIcon;