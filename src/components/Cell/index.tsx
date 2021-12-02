import 'components/Cell/styles.scoped.scss';
import { Component } from 'react';

interface Props {}

interface State {}

export default class Cell extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return <div className={Cell.name}>Cell component</div>;
  }
}
