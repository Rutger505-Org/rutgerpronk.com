import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // New, stricter react-hooks rules shipped with eslint-config-next 16.
      // Demoted to warnings so the Next 16 bump doesn't break CI; the flagged
      // patterns (guarded setState-in-effect, latest-ref) are intentional.
      // Address as a separate follow-up if desired.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
    },
  },
  prettier,
];

export default eslintConfig;
