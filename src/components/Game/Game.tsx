import Field from 'components/Field/Field';
import { Component } from 'react';
import './Game.scss';

interface Props {}

interface State {
  changeClickedCell: boolean;
  columns: number;
  rows: number;
  stepsAmount: number;
}

export default class Game extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      changeClickedCell: false,
      columns: 6,
      rows: 1,
      stepsAmount: 0,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <Field></Field>
      </div>
    );
  }
}
