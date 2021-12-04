import { Field as FieldComp } from 'components/Field';
import { Field } from 'components/Game/Field';
import { Row } from 'components/Game/Row';
import 'components/Game/styles.scoped.scss';
import React from 'react';

interface Props {}

interface State {
  changeClickedCell: boolean;
  columns: number;
  field?: ReadonlyArray<Row>;
  rows: number;
  stepsAmount: number;
}

export class Game extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    const cols = 6;
    const rows = 1;
    this.state = {
      changeClickedCell: false,
      columns: cols,
      field: Field.New(rows, cols),
      rows: rows,
      stepsAmount: 0,
    };
  }

  public componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ) {
    console.log(prevState); // TODO: Remove; Update Field on columns / rows change
  }

  public render(): JSX.Element {
    return (
      <div className={Game.name}>
        <FieldComp onClick={this.handeClick} />
      </div>
    );
  }

  private handeClick(evt: React.MouseEvent) {
    console.log('Handle click!'); // TODO: Remove
  }

  private resetSteps() {
    this.setState({
      stepsAmount: 0,
    });
  }
}
