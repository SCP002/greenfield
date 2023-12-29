import 'components/CellComp/CellComp.scoped.scss';

interface Props {
  isActive: boolean;
  onClick: () => void;
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
