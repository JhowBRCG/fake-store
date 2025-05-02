import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type ErrorMessageProps = {
  className: string;
  message: string;
  goHome?: boolean;
};

export default function ErrorMessage({
  className,
  message,
  goHome = false,
}: ErrorMessageProps) {
  return (
    <div className={`${cn(className)}`}>
      <div className="rounded-md border bg-neutral-100 p-5 shadow-md">
        <p className="text-center text-lg text-neutral-400">{message}</p>
      </div>
      {goHome && (
        <div className="mt-4 text-center">
          <Link className="text-neutral-400 hover:underline" href="/">
            BACK TO HOME
          </Link>
        </div>
      )}
    </div>
  );
}
