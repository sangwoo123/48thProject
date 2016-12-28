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
                this.set_name("sample020");
                this.set_classname("sample020");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "725", "25", "120", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("WebSocket Start");
            this.addChild(obj.name, obj);

            obj = new ExtWebSocket("ExtWebSocket00", "absolute", "31", "61", "20", "16", null, null, this);
            obj.set_taborder("2");
            obj.set_text("ExtWebSocket00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "860", "25", "120", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("WebSocket Stop");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "30", "84", "950", "372", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "30", "458", "950", "20", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample020");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample020.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        WebSocketEventInfo.wsstart();
        	
        	this.ExtWebSocket00.wsstart();
        	
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.ExtWebSocket00.wsstop();
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.ExtWebSocket01.wsstart();
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.ExtWebSocket01.wsstop();
        }

        this.ExtWebSocket00_onbroadcast = function(obj,e)
        {
        	trace("ExtWebSocket00_onbroadcast");
        	//trace(e.userid);
        	//trace(e.flag);
        	//trace(e.message);
        	var sValue = this.TextArea00.value;
        		sValue += "\n"+e.userid+" "+e.flag+" "+e.message;
        	this.TextArea00.set_value(sValue);
        }

        this.ExtWebSocket01_onbroadcast = function(obj,e)
        {
        	trace("ExtWebSocket01_onbroadcast");
        	var sValue = this.TextArea01.value;
        		sValue += "\n"+e.userid+" "+e.flag+" "+e.message;
        	this.TextArea01.set_value(sValue);
        }

        this.Edit00_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		trace("keydown1");
        		this.ExtWebSocket00.wsbroadcast(obj.value);
        	}
        }

        this.Edit01_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		trace("keydown2");
        		this.ExtWebSocket01.wsbroadcast(obj.value);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.ExtWebSocket00.addEventHandler("onbroadcast", this.ExtWebSocket00_onbroadcast, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Edit00.addEventHandler("onkeydown", this.Edit00_onkeydown, this);

        };

        this.loadIncludeScript("sample020.xfdl");

       
    };
}
)();
