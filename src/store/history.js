import createHashHistory from 'history/lib/createHashHistory';

const _createHashHistory = () => {
  if (global.window) {
    return createHashHistory();
  }

  return undefined;
};

const createHistory = _createHashHistory();

export default createHistory;
