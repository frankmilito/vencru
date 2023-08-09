import clsx from "clsx";
import * as React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const variants = {
  success: "bg-green-200 text-green-600 font-semibold rounded-full",
  danger: "bg-red-300 text-red-800 font-semibold rounded-full",
  default: "bg-gray-200 text-gray-600 font-semibold rounded-full",
};

const IconVariants = {
  success: "text-green-600 ",
  danger: "text-red-700",
  default: "text-gray-700",
};

const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1 text-sm",
  md: "px-3 py-1 text-md",
};

const getIconColor = (variant) => {
  return IconVariants[variant];
};

export const Badge = React.forwardRef(
  (
    {
      children,
      isLoading = false,
      variant = "default",
      size = "sm",
      className = "",
      withCloseIcon = false,
      IconBefore,
      IconAfter,
      handleClose,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(
          "flex items-center flex-shrink-0 space-x-1 text-gray-700",
          variants[variant],
          sizes[size],
          className
        )}
      >
        {IconBefore && (
          <IconBefore
            className={clsx("h-4 w-4 cursor-pointer", getIconColor(variant))}
          />
        )}
        <span>{children}</span>
        {IconAfter && (
          <IconAfter
            className={clsx("h-4 w-4 cursor-pointer", getIconColor(variant))}
          />
        )}
        {withCloseIcon && (
          <XCircleIcon
            onClick={handleClose}
            className="h-4 w-4 cursor-pointer hover:text-red-800 ml-1"
          />
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";
