import { FieldComp } from 'components/FieldComp';
import 'components/Game/styles.scoped.scss';
import React from 'react';

interface Props {}

interface State {
  changeClickedCell: boolean;
  colAmount: number;
  rowAmount: number;
  stepsAmount: number;
}

export class GameComp extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    const colAmount = 6;
    const rowAmount = 1;
    this.state = {
      changeClickedCell: false,
      colAmount: colAmount,
      rowAmount: rowAmount,
      stepsAmount: 0,
    };
  }

  public componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ) {
    console.log(prevState); // TODO: Remove; Update Field on colAmount / rowAmount change
  }

  public render(): JSX.Element {
    return (
      <div className={GameComp.name}>
        <FieldComp
          colAmount={this.state.colAmount}
          rowAmount={this.state.rowAmount}
          onClick={this.handeClick}
        />
      </div>
    );
  }

  private handeClick() {
    console.log('Handle click!'); // TODO: Remove
  }

  private resetSteps() {
    this.setState({
      stepsAmount: 0,
    });
  }
}
