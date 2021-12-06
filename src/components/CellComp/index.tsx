import 'components/Cell/styles.scoped.scss';
import React from 'react';

interface Props {
  onClick: (evt: React.MouseEvent) => void;
}

export function CellComp(props: Props): JSX.Element {
  return <button className={CellComp.name} onClick={props.onClick} />;
}
