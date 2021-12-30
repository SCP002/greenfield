import { FieldComp } from 'components/FieldComp/FieldComp';
import 'components/GameComp/GameComp.scoped.scss';
import { MenuComp } from 'components/MenuComp/MenuComp';

export function GameComp() {
  return (
    <div className={GameComp.name}>
      <FieldComp />
      <MenuComp />
    </div>
  );
}
