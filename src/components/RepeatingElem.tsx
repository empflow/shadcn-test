import getIterable from "@/lib/getIterable";
import { ReactElement, cloneElement } from "react";

type Props = {
  count: number;
  elem: ReactElement;
};

export default function RepeatingElem({ count, elem }: Props) {
  const iterable = getIterable(count);
  return <>{iterable.map((i) => cloneElement(elem, { key: i }))}</>;
}
