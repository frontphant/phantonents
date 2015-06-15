(function() {
  'use strict';

  FPH.core.Main = Class.extend({
    init: function() {
      this.bind();
      this.bindEvents();
      
      if (FPH.i.client.hasSupport) {
        jQuery('body').removeClass('fallback');
      }
    },

    bind: function() {
      var _this = this,
        resizeTimeout = null;

      jQuery(window).on({
        resize: function() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function() {
            jQuery(document).trigger('Main.resized');
          }, 100);
        },

        scroll: function() {
          jQuery(document).trigger('Main.scrolled');
        },

        orientationchange: function() {
          jQuery(window).trigger('resize');
        }
      });
    },

    bindEvents: function() {
      this.instantiateComponents();
      this.instantiateHTMLComponents();
    },

    instantiateHTMLComponents: function() {
      FPH.i.util.instantiateHTMLComponents(jQuery('html'));
    },

    instantiateComponents: function() {
      
    }
  });
})();

/* SET PATHS */
FPH.paths = {
  data: 'data/',
  templates: 'templates/'
};

/* CREATE INSTANCES */
FPH.i.client = new FPH.core.ClientDetect();
FPH.i.util = new FPH.core.Util();

jQuery(function() {
  FPH.i.main = new FPH.core.Main();
});