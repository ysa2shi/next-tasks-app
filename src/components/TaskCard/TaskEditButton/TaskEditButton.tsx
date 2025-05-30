import Link from "next/link";

interface TaskEditButtonProps {
  id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="m290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
        />
      </svg>
    </Link>
  );
};

export default TaskEditButton;
