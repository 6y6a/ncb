/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

  var pluginName = "Tabs",
    defaults = {
      activeTab: 1,
      activeClassItem: 'tabs__item--active',
      activeClassLink: 'tabs__link--active',
      activeClassContent: 'tabs__text--active'
    };

  function Tabs( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this._activeTab = this.options.activeTab;
    this._list = $(element).find('.tabs__list');
    this._items = $(element).find('.tabs__item');
    this._links = $(element).find('.tabs__link');
    this._content = $(element).find('.tabs__content');
    this._text = $(element).find('.tabs__text');

    this.init();
  }

  Tabs.prototype.init = function () {
    this.activate(this.options.activeTab - 1);
    this.initializeEvents();
  };


  Tabs.prototype.activate = function (position) {
    this.hideAll();
    this.showActive(position);
  };

  Tabs.prototype.showActive = function(position) {
    this._items
      .eq(position)
      .addClass(this.options.activeClassItem);
    this._links
      .eq(position)
      .addClass(this.options.activeClassLink);
    this._text
      .filter($(this._links.eq(position).attr('href')))
      .addClass(this.options.activeClassContent)
  };

  Tabs.prototype.hideAll = function() {
    this._items.removeClass(this.options.activeClassItem) ;
    this._links.removeClass(this.options.activeClassLink);
    this._text.removeClass(this.options.activeClassContent);
  };
  
  Tabs.prototype.initializeEvents = function () {
    var self = this;

    self._links.on('click', function (e) {
      e.preventDefault();
      self.activate(self._links.index(this));
    })
    
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if ( !$.data(this, "plugin_" + pluginName )) {
        $.data( this, "plugin_" + pluginName,
          new Tabs( this, options ));
      }
    });
  }

})( jQuery, window, document );


$(document).ready(function () {
  $("#tabs").Tabs({
    activeTab: 3
  });
});

