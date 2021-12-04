import { Cell } from 'components/Cell';
import 'components/Field/styles.scoped.scss';
import React from 'react';

interface Props {
  onClick: (evt: React.MouseEvent) => void;
}

interface State {}

export function Field(props: Props): JSX.Element {
  return (
    <div className={Field.name}>
      <Cell onClick={props.onClick} />
    </div>
  );
}
