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
                this.set_name("_ext_registry");
                this.set_classname("_ext_registry");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,748,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("_ext_setRegValue", "absolute", "12", "48", "188", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("_ext_setRegValue");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getRegValue", "absolute", "239", "48", "188", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_ext_getRegValue");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getRegValueList", "absolute", "239", "120", "188", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_ext_getRegValueList");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getRegNameList", "absolute", "12", "120", "188", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_ext_getRegNameList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_getRegValue_64bit_32bit_Check", "absolute", "448", "48", "286", "50", null, null, this);
            obj.set_taborder("4");
            obj.set_text("_ext_getRegValue_64bit_32bit_Check");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 748, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("_ext_registry");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("_ext_registry.xfdl", function() {

        
        var Extension = {};
        var objExtURL = "C:\Program Files (x86)\nexacro\14\nexacro14lib\component\ExtCommonV13.dll";

        this._ext_registry_onload = function(obj,e)
        {
        	nexacro._addExtensionModule(Extension, objExtURL);
        }

        this._ext_registry_onclose = function(obj,e)
        {
        	nexacro._clearExtensionModule(objExtURL);
        }

        /****************************************************************************************************
        DESC	_ext_setRegValue
        INPUT	
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[key 이하의 경로]
        		string		   / strName,	[ 기록할 name ]
        		integer,string / strValue, intValue: [ 기록할 값 strValue ]
        		string 		   / strValueType : "String" 데이터 type 은  string 이다.
        						"String" 이 외의 데이터는 type 은 DWORD 이다.
        OUPUT	ret : true(성공) or false(실패)
        ****************************************************************************************************/
        this._ext_setRegValue_onclick = function(obj,e)
        {
        	var ret;
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	var strName = "setVal";
        	var strValue = "HELLO_안녕/";  //[ integer / string ]
        	
        	//var strValueType = "String";

        	ret = Extension._ext_setRegValue(strKey, strPath, strName, strValue, "String");
        	trace("_ext_setRegValue : "+ret);
        	
        	ret = Extension._ext_setRegValue(strKey, strPath, "IntegerValue", 1234, "DWORD");
        	trace("_ext_setRegValue : "+ret);
        }

        /****************************************************************************************************
        DESC	_ext_getRegValue
        INPUT	
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[ key 이하의 경로]
        		string		   / strName,	[ 읽어 올 name ]
        		string 		   / strValueType : "String" 데이터 type 은  String 이다.
        										"String" 이 외의 데이터 type 은  DWORD 이다.

        OUPUT	STRING / INTEGER : 위치의 레지스트리 값을 읽온 값.
        ****************************************************************************************************/
        this._ext_getRegValue_onclick = function(obj,e)
        {
        	var ret;
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	var strName = "setVal";
        	
        	ret = Extension._ext_getRegValue(strKey, strPath, strName, "String");
        	trace("_ext_setRegValue : "+ret);
        	
        	ret = Extension._ext_getRegValue(strKey, strPath, "IntegerValue", "DWORD");
        	trace("_ext_setRegValue : "+ret);
        		
        }

        /****************************************************************************************************
        DESC	_ext_getRegNameList
        INPUT	
        		string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        		string		   / strPath,	[ key 이하의 경로]

        OUPUT	array	해당 path 의 하위 폴더들의 이름들을 array로 리턴한다.
        ****************************************************************************************************/
        this._ext_getRegNameList_onclick = function(obj,e)
        {
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	
        	ret = Extension._ext_getRegNameList(strKey, strPath);
        	trace("_ext_getRegNameList : "+ret);
        }

        /****************************************************************************************************
        DESC	_ext_getRegValueList
        INPUT	
        string		   / strKey,	[ HKEY_CLASSES_ROOT ,HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS ]
        string		   / strPath,	[ key 이하의 경로]

        OUPUT	array	해당 path 에 속한 VALUE들의 이름을 array로 리턴한다.
        ****************************************************************************************************/
        this._ext_getRegValueList_onclick = function(obj,e)
        {
        	var strKey = "HKEY_CURRENT_USER";
        	var strPath = "Software\\AppDataLow\\Software\\TOBESOFT\\";
        	
        	ret = Extension._ext_getRegValueList(strKey, strPath);
        	trace("_ext_getRegValueList : "+ret);
        }

        this.btn_ext_getRegValue_64bit_32bit_Check_onclick = function(obj,e)
        {
        	var rtn = Extension._ext_getRegValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion", "CurrentVersion", "String" );
        	
        	if(rtn == "6.1"){
        		trace("Windows 7");
        	}
        	
        	//rtn = Extension._ext_getRegValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\WOW6432Node", "", "String"  );
        	
        	var bOSVER = Extension._ext_isWow64();
        	
        	trace("32bit or 64bit 확인 : " +bOSVER); 
        	
        	//설치 유무 확인.
        	var BARPRT_Setup;
        	
        	if( bOSVER === 0 )  // 32BIT windows OS
        	{
        		//opos ver : 190
        		BARPRT_Setup = Extension._ext_getRegValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\OLEforRetail\\ServiceInfo\\EPSON OPOS ADK\\EPSON1.6\\Assorted\\COInfo", "PosPrinter.CLSID", "String"  );
        		if( BARPRT_Setup == "{6393F0A3-C4CB-11D1-BD03-02608CDB57B0}")
        		{
        			trace("32bit OPOS 190 Success Setup Barcode Print : " + BARPRT_Setup);
        		}
        		else
        		{
        			trace("32bit OPOS 190 Fail Setup Barcode Print : " + BARPRT_Setup);
        		}
        		
        		//opos ver : 250
        		BARPRT_Setup = Extension._ext_getRegValue("HKEY_CLASSES_ROOT", "CLSID\\{C9E1AFB3-1172-11D7-83AD-0050DA238ADA}\\ProgID", "", "String"  );
        		if( BARPRT_Setup == "OPOS.POSPrinter")
        		{
        			trace("32bit OPOS 250 Success Setup Barcode Print : " + BARPRT_Setup);
        		}
        		else
        		{
        			trace("32bit OPOS 250 Fail Setup Barcode Print : " + BARPRT_Setup);
        		}
        	}
        	else  //64bit windows OS
        	{
        		
        		BARPRT_Setup = Extension._ext_getRegValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\WOW6432Node\\Classes\\\CLSID\\{C9E1AFB3-1172-11D7-83AD-0050DA238ADA}\\ProgID", "", "String"  );
        		if( BARPRT_Setup == "OPOS.POSPrinter")
        		{
        			trace("64bit Success Setup Barcode Print : " + BARPRT_Setup);
        		}
        		else
        		{
        			trace("64bit Fail Setup Barcode Print : " + BARPRT_Setup);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this._ext_registry_onload, this);
            this.addEventHandler("onclose", this._ext_registry_onclose, this);
            this._ext_setRegValue.addEventHandler("onclick", this._ext_setRegValue_onclick, this);
            this._ext_getRegValue.addEventHandler("onclick", this._ext_getRegValue_onclick, this);
            this._ext_getRegValueList.addEventHandler("onclick", this._ext_getRegValueList_onclick, this);
            this._ext_getRegNameList.addEventHandler("onclick", this._ext_getRegNameList_onclick, this);
            this.btn_ext_getRegValue_64bit_32bit_Check.addEventHandler("onclick", this.btn_ext_getRegValue_64bit_32bit_Check_onclick, this);

        };

        this.loadIncludeScript("_ext_registry.xfdl");

       
    };
}
)();
