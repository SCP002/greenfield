import React from 'react';
import './Field.scss';

interface Props {}

export default class Field extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>Field component</div>;
  }
}
