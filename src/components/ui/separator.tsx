export function FadedSeparator({ fadeBothSides }: { fadeBothSides?: boolean }) {
  if (fadeBothSides)
    return (
      <span
        className=" block w-full"
        aria-hidden
        style={{
          border: "0.9px solid transparent",
          borderImage:
            "linear-gradient(to right, #fff 0%, #fff 13%, var(--border-neutral-primary) 60%, #fff 87%, #fff 100%) 0.9",
        }}
      ></span>
    );
  return (
    <span
      className=" block w-full"
      aria-hidden
      style={{
        border: "0.9px solid transparent",
        borderImage:
          "linear-gradient(to right, var(--border-neutral-primary), #fff) 0.9",
      }}
    ></span>
  );
}
