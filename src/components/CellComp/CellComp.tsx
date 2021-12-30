import 'components/CellComp/CellComp.scoped.scss';

interface Props {
  isActive: boolean;
  onClick: (cellIdx?: number, rowIdx?: number) => void;
}

export function CellComp(props: Props) {
  return (
    <button
      className={`CellComp ${props.isActive ? 'active' : ''}`}
      onClick={() => {
        props.onClick();
      }}
    />
  );
};
