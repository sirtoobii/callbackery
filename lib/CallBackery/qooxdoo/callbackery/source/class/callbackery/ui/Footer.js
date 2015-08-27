/* ************************************************************************
   Copyright: 2011 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: äöü
************************************************************************ */
/**
 * Build the desktop. This is a singleton. So that the desktop
 * object and with it the treeView and the searchView are universaly accessible
 */
qx.Class.define("callbackery.ui.Footer", {
    extend : qx.ui.container.Composite,
    type : 'singleton',

    construct : function() {
        this.base(arguments,new qx.ui.layout.HBox().set({
            alignX: 'right'
        }));
        var cfg = callbackery.data.Config.getInstance().getBaseConfig();
        var label;
        var who = '';
        if ( cfg.company_name ){
            who = ', created by ';
            if (cfg.company_url){
                who += '<a href="' + cfg.company_url + '" style="color: #444;" target="_blank">' + cfg.company_name + '</a>';
            }
            else {
                who += cfg.company_name;
            }
        }
        this.add(new qx.ui.basic.Atom(this.tr('release %1, %2%3','#VERSION#','#DATE#',who)).set({
            textColor : '#444',
            rich : true,
            paddingRight  : 5,
            paddingBottom : 3,
            font: 'small'
        }));
    }
});