import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function MainContent({ children }: Props) {
  return (
    <div className="p-4 mt-8 flex-grow">
      <main className="max-w-[1000px] m-auto">{children}</main>
    </div>
  );
}
