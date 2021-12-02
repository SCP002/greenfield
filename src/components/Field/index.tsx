import 'components/Field/styles.scoped.scss';
import { Component } from 'react';

interface Props {}

interface State {}

export default class Field extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>Field component</div>;
  }
}
