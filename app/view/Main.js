Ext.define('SenchaTilt.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        layout: 'card',
        items: [
            {
                xtype: 'panel',
                listeners: {
                    initialize: function(){
                        var photoTilt = SenchaTilt.js.photoTilt.PhotoTilt({
                            url:'http://farm5.staticflickr.com/4016/4251578904_f13592585c_b.jpg',
                            lowResUrl: 'http://farm5.staticflickr.com/4016/4251578904_f13592585c_m.jpg',
                            maxTilt: 12                           
                        });              
                    }
                }
            }
        ]
    }
});
