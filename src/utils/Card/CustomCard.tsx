import clsx from "clsx";
import React from "react";

type Props = {
    title?: string;
    children?: React.ReactNode;
    className?: string;
    titleClassName?: string;
    contentClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CustomCard = ({title, children, className, titleClassName, contentClassName, ...props}: Props) => {
    return (
        <div
            className={clsx(
                // Minimal default styles - just the basics
                "rounded-xl p-4 bg-white shadow-md border border-gray-200",

                // User can override everything
                className
            )}
            {...props}
        >
            {title && <h2 className={clsx("text-xl font-semibold mb-3", titleClassName)}>{title}</h2>}

            {children && <div className={contentClassName}>{children}</div>}
        </div>
    );
};

export default CustomCard;
