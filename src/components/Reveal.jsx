import { useReveal } from "../hooks/useReveal";

/**
 * Fades a block up as it scrolls into view. `variant` picks the flavour of the
 * entrance ("up" by default, plus "left", "right" and "zoom"), and `delay`
 * staggers siblings. All of it collapses to a plain fade under
 * prefers-reduced-motion — see the reveal rules in App.css.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, shown] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${shown ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
