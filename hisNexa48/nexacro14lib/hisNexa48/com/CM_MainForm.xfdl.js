(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("CM_MainForm");
                this.set_classname("CM_MainForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,774);
            }
            this.style.set_background("#edefeeff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "0.64%", "6", null, "752", "0.72%", null, this);
            obj.set_taborder("0");
            obj.set_image("URL('img::main.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#edefeeff");
            obj.style.set_border("0 none #ffffffff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 774, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_MainForm");
            		p.set_titletext("New Form");
            		p.style.set_background("#edefeeff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("CM_MainForm.xfdl");

       
    };
}
)();
