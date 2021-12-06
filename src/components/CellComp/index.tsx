import 'components/Cell/styles.scoped.scss';

interface Props {
  onClick: () => void;
}

export function CellComp(props: Props): JSX.Element {
  return <button className={CellComp.name} onClick={props.onClick} />;
}
