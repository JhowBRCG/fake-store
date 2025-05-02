import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-50 p-6">
      <p className="text-center">
        Created by{" "}
        <Link
          className="text-slate-700 hover:underline"
          href="https://github.com/JhowBRCG"
        >
          jhowbrcg
        </Link>
      </p>{" "}
    </footer>
  );
}
