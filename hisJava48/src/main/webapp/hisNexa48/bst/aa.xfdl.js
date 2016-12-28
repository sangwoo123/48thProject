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
                this.set_name("aa");
                this.set_classname("aa");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "-1", "0", "632", "353", null, null, this);
            obj.set_taborder("0");
            obj.style.set_border("0 solid #808080ff");
            obj.getSetter("titletext").set("E-Chart");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("aa");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("aa.xfdl", function() {

        this.aa_oninit = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://localhost:8282/his/sample.html");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.aa_oninit, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);

        };

        this.loadIncludeScript("aa.xfdl");

       
    };
}
)();
