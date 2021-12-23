import 'components/CellComp/styles.scoped.scss';
import { observer } from 'mobx-react-lite';

interface Props {
  isActive: boolean;
  onClick: (cellIdx?: number, rowIdx?: number) => void;
}

export const CellComp = observer((props: Props) => {
  return (
    <button
      className={`CellComp ${props.isActive ? 'active' : ''}`}
      onClick={() => {
        props.onClick();
      }}
    />
  );
});
