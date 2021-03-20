const HtmlTemplateEngine = (callbackAfterEach) => {
    jQuery("[data-include]").each(function (e) {
        const $self = jQuery(this);
        const path = jQuery(this).data("include");
        const iterate = jQuery(this).data("iterate") || 1;
        const template = jQuery.get(path, (data) => {
          let iteratedData = "";
          for(let i = 1; i <= iterate; i++) {
                iteratedData += data;
          }
          jQuery(iteratedData).replaceAll($self);
          callbackAfterEach && callbackAfterEach()
        });
    });
}