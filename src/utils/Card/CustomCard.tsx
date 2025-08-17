import clsx from "clsx";
import React from "react";

type Props = {
  header?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const CustomCard = ({
  header,
  children,
  className,
  headerClassName,
  bodyClassName,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        // Quran widget default styles
        "rounded-xl p-6 border border-[#d4af37] bg-gradient-to-br from-[#2f1a2f] to-[#4a2c4a]",

        // User overrides
        className
      )}
      {...props}
    >
      {header && (
        <h2
          className={clsx(
            "text-center text-xl font-semibold mb-3 text-[#d4af37]",
            headerClassName
          )}
        >
          {header}
        </h2>
      )}

      {children && <div className={bodyClassName}>{children}</div>}
    </div>
  );
};

export default CustomCard;
