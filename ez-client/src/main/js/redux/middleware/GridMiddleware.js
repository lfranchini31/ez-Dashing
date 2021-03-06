import { GridEvent } from 'redux/event/GridEvent';
import { MenuEvent } from 'redux/event/MenuEvent';

const gridMiddleware = gridService => store => next => action => {

  if (action.type === GridEvent.LayoutChange) {
    gridService.onGridLayoutChange(action);
  }

  if (action.type === MenuEvent.ResetLayout) {
    gridService.resetLayout();
  }

  if (action.type === MenuEvent.SaveLayout) {
    gridService.saveLayout();
  }

  return next(action);
};

export default gridMiddleware;


