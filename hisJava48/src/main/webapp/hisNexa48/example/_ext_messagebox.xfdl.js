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
                this.set_name("_ext_messagebox");
                this.set_classname("_ext_messagebox");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,748,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Btn_ext_messagebox", "absolute", "14", "66", "215", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("_ext_messagebox");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_strsum", "absolute", "293", "66", "215", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_ext_strsum");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_strcat", "absolute", "14", "136", "215", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_ext_strcat");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_makejsobject", "absolute", "293", "136", "215", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_ext_makejsobject");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 748, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("_ext_messagebox");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("_ext_messagebox.xfdl", function() {

        var Extension = {};

        var objExtURL = "C:\Program Files (x86)\nexacro\14\nexacro14lib\component\ExtCommonV13.dll";

        
        this._ext_messagebox_onload = function(obj,e)
        {
        	nexacro._addExtensionModule(Extension, objExtURL);
        }

        this._ext_messagebox_onclose = function(obj,e)
        {
        	nexacro._clearExtensionModule(objExtURL);
        }

        
        this.Btn_ext_messagebox_onclick = function(obj,e)
        {
        	var message = "HELLO XPLATFORM V13";
        	Extension._ext_messagebox(message);
        }

        
        //////////////////////////////////////////////////////////
        //method : _ext_sum
        //DESC	 : 두 integer value 더하기
        //INPUT	 : integer_arg1: 입력 값
        //		   integer_arg2: 입력 값
        //OUPUT	return  : integer 두 값을 합친 값.
        //////////////////////////////////////////////////////////
        this._ext_strsum_onclick = function(obj,e)
        {
        	var arg1 = 1;
        	var arg2 = 2;
        	
        	var sum = Extension._ext_sum(arg1, arg2);	
        	trace(sum);
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_strcat
        //DESC			: 문자열 합치기
        //INPUT			: str_arg1: 입력 문자열
        //				: str_arg2: 두번째 입력 문자열
        //OUPUT	return  : 연결된 문자열
        //////////////////////////////////////////////////////////
        this._ext_strcat_onclick = function(obj,e)
        {
        	var arg1 = "안녕";
        	var arg2 = "HELLO";
        	
        	var sum = Extension.API._ext_strcat(arg1, arg2);
        	
        	trace(sum);
        }

        this._ext_makejsobject_onclick = function(obj,e)
        {
        	var arg1 = "안녕";
        	var arg2 = "HELLO";
        	
        	var sum = Extension.API._ext_makejsobject(arg1, arg2);
        	
        	trace(sum.안녕);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this._ext_messagebox_onload, this);
            this.addEventHandler("onclose", this._ext_messagebox_onclose, this);
            this.Btn_ext_messagebox.addEventHandler("onclick", this.Btn_ext_messagebox_onclick, this);
            this._ext_strsum.addEventHandler("onclick", this._ext_strsum_onclick, this);
            this._ext_strcat.addEventHandler("onclick", this._ext_strcat_onclick, this);
            this._ext_makejsobject.addEventHandler("onclick", this._ext_makejsobject_onclick, this);

        };

        this.loadIncludeScript("_ext_messagebox.xfdl");

       
    };
}
)();
