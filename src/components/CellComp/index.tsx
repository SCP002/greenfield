import 'components/CellComp/styles.scoped.scss';

interface Props {
  isActive: boolean;
  onClick: () => void;
}

export function CellComp(props: Props): JSX.Element {
  return (
    <button
      className={`${CellComp.name} ${props.isActive ? 'active' : ''}`}
      onClick={props.onClick}
    />
  );
}
