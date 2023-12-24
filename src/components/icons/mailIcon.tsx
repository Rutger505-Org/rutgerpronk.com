interface ComponentProps {
  className?: string;
}
export default function MailIcon({ className }: Readonly<ComponentProps>) {
  return (
    <svg
      className={className}
      viewBox="80 -800 800 640"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"
        fill="currentColor"
      />
    </svg>
  );
}
