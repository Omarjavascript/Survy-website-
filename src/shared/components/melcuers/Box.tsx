import NumberRoll from "../atom/NumberRoll";
import Text from "../atom/Text";
import Title from "../atom/Title";
interface Props {
  title: string;
  text: string;
  content: number;
}
export default function Box({ title, text, content }: Props) {
  return (
    <div className="ds-bg-ramadiFateh  flex justify-center items-center p-5 flex-col rounded-md">
      <NumberRoll content={content} />
      <Title variant="black" center={true} size="lg">
        {title}
      </Title>
      <Text variant="ramadi" className="text-center" size="md">
        {text}
      </Text>
    </div>
  );
}
