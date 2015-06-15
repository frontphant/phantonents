(function() {
  'use strict';

  FPH.component.Close = FPH.component.Toggle.extend({
    bind: function () {
      var _this = this;

      this.element.on(this.event, function (e) {
        _this.action();
      });
    },

    action: function() {
      this.target.removeClass('is-active');
    }
  });
})();
