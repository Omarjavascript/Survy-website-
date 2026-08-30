import NumberRoll from "../atom/NumberRoll";
import Text from "../atom/Text";
import Title from "../atom/Title";

export default function Box() {
  return (
    <div className="ds-bg-alt w-[350px] flex justify-center items-center p-5 flex-col rounded-2xl">
      <NumberRoll>1</NumberRoll>
      <Title variant="zahry" center={true}>
        Events
      </Title>
      <Text variant="disabeld">
        Attendance registration, event feedback, post-event surveys.
      </Text>
    </div>
  );
}
