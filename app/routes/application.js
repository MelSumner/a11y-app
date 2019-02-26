import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  router: inject(),

  init() {
    this._super(...arguments);

    let priorActive;
    this.router.on('routeWillChange', () => {
      priorActive = document.activeElement;
    });

    this.router.on('routeDidChange', () => {
      if (priorActive === document.activeElement) {
        document.activeElement.blur();
      }
    });
  }
});