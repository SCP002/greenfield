import 'components/Cell/styles.scoped.scss';
import React from 'react';

interface Props {
  onClick: (evt: React.MouseEvent) => void;
}

export function Cell(props: Props): JSX.Element {
  return <button className={Cell.name} onClick={props.onClick} />;
}
