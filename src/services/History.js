class HistoryService {

  constructor({ onPopState }) {
    window.addEventListener('popstate', onPopState, false);
  }

}

export default HistoryService
