import 'components/Field/index.scss';
import React from 'react';

interface Props {}

class Field extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>Field component</div>;
  }
}

export default Field;
