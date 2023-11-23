import { cva } from "class-variance-authority";
import classNames from 'classnames';
import { SwitchProps } from "./Switch";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled }: SwitchProps) => {
    const conteinerVariant = cva(
        classNames(
            "outline-none relative inline-flex h-6 w-16 items-center rounded-full disabled:bg-disabled",
    {"pointer-events-none": disabled}
    ),{
       variants: {
         variant: {
            common: classNames(
                { "bg-primary": enabled },
                { "bg-primary hover:bg-primaryHover": !enabled }
            ),
            contract: classNames(
                { "bg-success": enabled },
                { "bg-error": !enabled }
            ),
        },
     },
     defaultVariants: {
        variant: "common",
      },
    }
  );
  const containerClasses = conteinerVariant({ variant });

  const switchClasses = classNames(
    "inline-block bg-white h-5 w-5 rounded-full transform transition-transform duration-200 ease-in-out",
    enabled ? "translate-x-[2.1rem]" : "translate-x-1"
   );

   const iconClasses = classNames(
    "aria-disabled: text-font-disabled",
   {"text-success": enabled && !disabled },
   {"text-erro": !enabled && !enabled },
   {"text-disabled": disabled }
   );

   return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses
   };
};