import 'components/Field/styles.scoped.scss';
import { Component } from 'react';

interface Props {}

interface State {}

export class Field extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div className={Field.name}>Field component</div>;
  }
}
