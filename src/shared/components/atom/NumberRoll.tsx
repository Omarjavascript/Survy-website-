interface Props {
  number: number;
}
export default function NumberRoll({ number }: Props) {
  return (
    <div className="flex ds-text-white ds-bg-zhry w-[48px] rounded-[57px] p-[10px] gap-[10px] items-center justify-center">
      {number}
    </div>
  );
}
