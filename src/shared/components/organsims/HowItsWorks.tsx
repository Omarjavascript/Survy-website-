import Box from "../melcuers/Box";
import { dataBox } from "../layout/dataBox";
export default function HowItsWorks() {
  return (
    <div className="ds-container  grid grid-cols-1 lg:grid-cols-3 gap-5">
      {dataBox.map((box) => (
        <Box key={box.id} title={box.title} text={box.text} content={box.id} />
      ))}
    </div>
  );
}
