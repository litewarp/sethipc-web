import { styled, css } from "../stitches.config";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { useThemeToggle } from "../hooks/useThemeToggle";

const StyledToggle = styled(TogglePrimitive.Root, {
  all: "unset",
  backgroundColor: "$primaryBg",
  color: "$primaryText",
  height: 35,
  width: 35,
  borderRadius: 4,
  display: "flex",
  fontSize: 15,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 10px $blackA7",
  "&:hover": { backgroundColor: "$mauve3" },
  // "&[data-state=on]": { backgroundColor: "$tomato2", color: "$tomato9" },
  "&:focus": { boxShadow: `0 0 0 2px $mauve4` },
});

export default function ThemeToggle() {
  const { isMounted, toggleTheme, resolvedTheme } = useThemeToggle();

  // delay rendering to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <StyledToggle
      aria-label="Toggle dark mode"
      pressed={resolvedTheme === "dark"}
      onPressedChange={() => toggleTheme()}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </StyledToggle>
  );
}
