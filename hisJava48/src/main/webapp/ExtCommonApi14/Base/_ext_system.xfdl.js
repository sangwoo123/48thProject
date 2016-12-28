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
            obj = new Button("_ext_killProcessAll", "absolute", "256", "118", "215", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("_ext_killProcessAll");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_killProcessID", "absolute", "17", "118", "207", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_ext_killProcessID");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getProcessNameHandleutton00", "absolute", "511", "117", "215", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_ext_getProcessNameHandle");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getSystemDir", "absolute", "17", "190", "207", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_ext_getSystemDir");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_setTime", "absolute", "256", "190", "214", "50", null, null, this);
            obj.set_taborder("4");
            obj.set_text("_ext_setTime");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getTime", "absolute", "514", "188", "215", "50", null, null, this);
            obj.set_taborder("5");
            obj.set_text("_ext_getTime");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getIPAddress", "absolute", "17", "262", "207", "50", null, null, this);
            obj.set_taborder("6");
            obj.set_text("_ext_getIPAddress");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getMACAddress", "absolute", "256", "262", "214", "50", null, null, this);
            obj.set_taborder("7");
            obj.set_text("_ext_getMACAddress");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getPrintList", "absolute", "512", "259", "215", "50", null, null, this);
            obj.set_taborder("8");
            obj.set_text("_ext_getPrintList");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_setDefaultPrinter", "absolute", "17", "334", "207", "50", null, null, this);
            obj.set_taborder("9");
            obj.set_text("_ext_setDefaultPrinter");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getDefaultPrinter", "absolute", "256", "334", "214", "50", null, null, this);
            obj.set_taborder("10");
            obj.set_text("_ext_getDefaultPrinter");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_setPageOption", "absolute", "512", "330", "215", "50", null, null, this);
            obj.set_taborder("11");
            obj.set_text("_ext_setPageOption");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_setPrintOption", "absolute", "17", "406", "207", "50", null, null, this);
            obj.set_taborder("12");
            obj.set_text("_ext_setPrintOption");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_selectFolder", "absolute", "256", "406", "214", "50", null, null, this);
            obj.set_taborder("13");
            obj.set_text("_ext_selectFolderPath");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getFileList", "absolute", "512", "401", "215", "50", null, null, this);
            obj.set_taborder("14");
            obj.set_text("_ext_getFileList");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getKeyCheck", "absolute", "17", "478", "207", "50", null, null, this);
            obj.set_taborder("15");
            obj.set_text("_ext_getKeyCheck");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getHostName", "absolute", "256", "478", "214", "50", null, null, this);
            obj.set_taborder("16");
            obj.set_text("_ext_getHostName");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getUserName", "absolute", "512", "472", "215", "50", null, null, this);
            obj.set_taborder("17");
            obj.set_text("_ext_getUserName");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getFileInfo", "absolute", "17", "550", "207", "50", null, null, this);
            obj.set_taborder("18");
            obj.set_text("_ext_getFileInfo");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getCheckDir", "absolute", "256", "550", "214", "50", null, null, this);
            obj.set_taborder("19");
            obj.set_text("_ext_getCheckDir");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getSystemEnv", "absolute", "512", "543", "215", "50", null, null, this);
            obj.set_taborder("20");
            obj.set_text("_ext_getSystemEnv");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getDriveInfo", "absolute", "17", "622", "207", "50", null, null, this);
            obj.set_taborder("21");
            obj.set_text("_ext_getDriveInfo");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getFontInfo", "absolute", "256", "622", "214", "50", null, null, this);
            obj.set_taborder("22");
            obj.set_text("_ext_getFontInfo");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_writeUProfile", "absolute", "512", "614", "215", "50", null, null, this);
            obj.set_taborder("23");
            obj.set_text("_ext_writeUProfile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_readUProfile", "absolute", "17", "694", "207", "50", null, null, this);
            obj.set_taborder("24");
            obj.set_text("_ext_readUProfile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getAppPath", "absolute", "256", "694", "214", "50", null, null, this);
            obj.set_taborder("25");
            obj.set_text("_ext_getAppPath");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getTraySizeInfo", "absolute", "512", "685", "215", "50", null, null, this);
            obj.set_taborder("26");
            obj.set_text("_ext_getTraySizeInfo");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getDesktopWorkArea", "absolute", "17", "766", "207", "50", null, null, this);
            obj.set_taborder("27");
            obj.set_text("_ext_getDesktopWorkArea");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_setSecuritySite", "absolute", "256", "766", "214", "50", null, null, this);
            obj.set_taborder("28");
            obj.set_text("_ext_setSecuritySite");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_excuteProcess", "absolute", "17", "46", "207", "50", null, null, this);
            obj.set_taborder("29");
            obj.set_text("_ext_excuteProcess");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_excuteAppPostion", "absolute", "256", "46", "215", "50", null, null, this);
            obj.set_taborder("30");
            obj.set_text("_ext_excuteAppPostion");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_currentProcessID", "absolute", "511", "46", "215", "50", null, null, this);
            obj.set_taborder("31");
            obj.set_text("_ext_getCurrentProcessID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_isWow64", "absolute", "512", "766", "215", "50", null, null, this);
            obj.set_taborder("32");
            obj.set_text("_ext_isWow64");
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
        this.registerScript("_ext_system.xfdl", function() {

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

        /*///////////////////////////////////////////////////////
        function : _ext_excuteProcess
        des 	 : 외부 프로그램을 실행 합니다.
        prameter : 
        		   var[0] : 실행하려는 파일 경로를 작성합니다.
        		   var[1] : 실행하려는 프로그램 Arg 입력 합니다.
        return :
        		true : 정상.
        		false : 오류
        ///////////////////////////////////////////////////////*/
        this._ext_excuteProcess_onclick = function(obj,e)
        {
        	var ret;
        	//ret = Extension._ext_excuteProcess("notepad.exe");
        	//ret = Extension._ext_excuteProcess("notepad.exe");
        	//ret = Extension._ext_excuteProcess("notepad.exe","c:/TEMP/test.txt");

        	//ret = Extension._ext_excuteProcess("iexplore.exe","http://kweb.upgarage.com/wheelfitting/wheelselect/index.php?kameiten_id=00000&tenpo_id=001&shouhin_cd=0000000000104&shouhin_kbn_flg=1&tireset_kbn_flg=0&user_id=0013183&wheel_rim=13");
        	//ret = Extension._ext_excuteProcess(this,"http://kweb.upgarage.com/wheelfitting/wheelselect/index.php?kameiten_id=00000&tenpo_id=001&shouhin_cd=0000000000104&shouhin_kbn_flg=1&tireset_kbn_flg=0&user_id=0013183&wheel_rim=13");
        	//ret = Extension._ext_excuteProcess("osk.exe");
        	//odbcad32.exe
        	ret = Extension._ext_excuteProcess("C:\\Windows\\System32\\osk.exe");//syskey.exe
        	//ret = Extension._ext_excuteProcess("C:\\Windows\\SysWOW64\\osk.exe");//syskey.exe
        	trace( "_ext_excuteProcess : " + ret );
        }

        
        /*///////////////////////////////////////////////////////
        function : _ext_excuteAppPostion
        des 	 : 외부 프로그램을 특정 위치에 실행 합니다.
        prameter : 
        		   var[0] : 프로그램 PATH
        		   var[1] : X 좌표.
        		   var[2] : Y 좌표.
        		   var[3] : Wigth
        		   var[4] : height
        return :
        		true : 정상.
        		false : 오류
        ///////////////////////////////////////////////////////*/
        this._ext_excuteAppPostion_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_excuteAppPostion("notepad.exe" ,10,23,800,600);
        	
        	trace("_ext_excuteAppPostion : " +ret);
        	
        	ret = Extension._ext_excuteAppPostion("notepad.exe c:/TEMP/test.txt" ,800,600,800,600);
        	trace("_ext_excuteAppPostion : " +ret);
        }

        
        /*///////////////////////////////////////////////////////
        function : _ext_getcurrentProcessID
        des 	 : 현재 프로세스의 아이디 리턴 합니다.
        prameter : 없음.
        return 	 : 
        			integer / 프로세스 아이디.
        ///////////////////////////////////////////////////////*/
        this._ext_currentProcessID_onclick = function(obj,e)
        {
        	var ret_ProcessID;
        	ret_ProcessID = Extension._ext_getCurrentProcessID(); 
        	trace("_ext_getcurrentProcessID : " + ret_ProcessID );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_killProcessID
        des 	 : 프로그래을 종료 합니다.
        prameter : var[0] : 프로세스 아이디
        return   : 없음.
        ///////////////////////////////////////////////////////*/
        this._ext_killProcessID_onclick = function(obj,e)
        {
        	Extension._ext_killProcessID(6944); 
        	trace("_ext_killProcessID : " );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_killProcessAll
        des 	 :프로그래을 종료 합니다.
        prameter : 
        		   var[0] : 프로세스 명.
        		   var[1] : 0  검색되어진 프로세스 중 첫번째로 검색 되어진 프로세스 종료.
        				  : 1  검색되어진 모든 프로세스 종료.
        return : 성공 : true / 실패 : false.
        ///////////////////////////////////////////////////////*/
        this._ext_killProcessAll_onclick = function(obj,e)
        {
        	var strFileName = "notepad.exe"
        	var nCloseOption = 1; // 0 : 첫번째 프로세스 / 1 : 모든 프로세스
        	var ret = Extension._ext_killProcessAll(strFileName, nCloseOption); 
        	trace("_ext_killProcessAll : " + ret );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getProcessNameHandle
        des 	 : 현재 프로세스의 헨들  리턴 합니다.
        prameter : var[0] / 프로세스 명.
        return   : integer / 프로세스 헨들.
        참고  : 같은 이름에 여러개의 프로세스가 로드 되었을 경우 맨 처음으로 찾은 프로세스 헨들 정수값을 리턴합니다.
        ///////////////////////////////////////////////////////*/
        this._ext_getProcessNameHandleutton00_onclick = function(obj,e)
        {
        	var ret_ProcessHwnd;
        	ret_ProcessHwnd = Extension._ext_getProcessNameHandle("XPlatform.exe"); 
        	trace("_ext_getcurrentProcessID : " + ret_ProcessHwnd );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getSystemDir
        des 	 : 입력된 flag 값을 이용하여 system path 를 리턴 한다.
        prameter : string / Flag 값
        return   : string / flag directory path
        ///////////////////////////////////////////////////////*/
        this._ext_getSystemDir_onclick = function(obj,e)
        {
        	var ret_SysPath;
        	ret_SysPath = Extension._ext_getSystemDir("SYSTEM"); 
        	trace("SYSTEM : " + ret_SysPath );
        	
        	ret_SysPath = Extension._ext_getSystemDir("PROGRAMS"); 
        	trace("PROGRAMS : " + ret_SysPath );
        	
        	ret_SysPath = Extension._ext_getSystemDir("PROGRAM_COMMON"); 
        	trace("PROGRAM_COMMON : " + ret_SysPath );
        	
        	ret_SysPath = Extension._ext_getSystemDir("WINDOWS"); 
        	trace("WINDOWS : " + ret_SysPath );
        	
        	ret_SysPath = Extension._ext_getSystemDir("CSIDL_COMMON_DOCUMENTS"); 
        	trace("CSIDL_COMMON_DOCUMENTS : " + ret_SysPath );
        	
        	ret_SysPath = Extension._ext_getSystemDir("TEMP"); 
        	trace("TEMP : " + ret_SysPath );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_setTime
        des 	 : 입력된 flag 값을 이용하여 system 시간을 설정한다.
        prameter : 자릿수를 체크하여 년원일시간분초/시간분초 를 구분하여 설정한다.
        			string 
        			//년,월,일,시간,분,초 : [ len : 14 ]
        			/시간,분,초 : [ len : 6 ]
        return : 
        			BOOL : TRUE / 완료 , FALSE / 실패
        			
        ///////////////////////////////////////////////////////*/
        this._ext_setTime_onclick = function(obj,e)
        {
        	
        	var ret_SysTime;
        	
        	//사용 시 주석을 해제 하세요.
        	//ret_SysTime = Extension._ext_setTime("20130225000000");  //년,월,일,시간,분,초 : [ len : 14 ]
        	//ret_SysTime = Extension._ext_setTime("122432");  		 //시간,분,초 : [ len : 6 ]
        	
        	if( ret_SysTime )
        		alert("OK");
        	
        	trace( ret_SysTime );	
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getTime
        des 	 : 	현재 시간을 읽어온다.
        prameter :  없음
        return   : 	STRING : 현재시간. [년,월,일,시간,분,초]
        ///////////////////////////////////////////////////////*/
        this._ext_getTime_onclick = function(obj,e)
        {
        	var ret_SysTime;
        	ret_SysTime = Extension._ext_getTime();  //년,월,일,시간,분,초 : [ len : 14 ]
        	trace( ret_SysTime );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getIPAddress
        des 	 : 	현재 피시의 IP 리스트를 읽어온다. 
        prameter :  없음
        return   :	[ Array : 아이피. ]
        ///////////////////////////////////////////////////////*/
        this._ext_getIPAddress_onclick = function(obj,e)
        {
        	//배열로 리턴 합니다.
        	var ret_SysipAddress;
        	ret_SysipAddress = Extension._ext_getIPAddress(); 
        	
        	trace("IP Address :: " + ret_SysipAddress );
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getMACAddress
        des 	 : 	현재 피시의 어뎁터의 리스트를 읽어온다. 
        prameter :  integer : 0 : MacAddress 만 읽어 온다. / 
        					  1 : adapter 의 name, dec, type, gateway, ip, mask, mac 
        return :	Array : string
        ///////////////////////////////////////////////////////*/
        this._ext_getMACAddress_onclick = function(obj,e)
        {
        	//배열로 리턴 합니다.
        	var ret_SysMACAddress;
        	ret_SysMACAddress = Extension._ext_getMACAddress(1);  //
        	trace("MAC Address ALL:: " + ret_SysMACAddress);
        	
        	var maclen = ret_SysMACAddress.length;
        	for( var mac=0; mac < maclen; mac++)
        	{
        		trace("--------------------------------------");
        		var str = ret_SysMACAddress[mac];
        		var strarray = str.split("/");
        		var strlen = strarray.length;
        		for( var i=0; i<strlen; i++)
        		{
        			trace("_data : " + i + " : "+ strarray[i]);
        		}
        		trace("--------------------------------------");
        	}
        	
        	ret_SysMACAddress = Extension._ext_getMACAddress();  //
        	trace("MAC Address ONLY:: " + ret_SysMACAddress);
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getPrintList
        des 	 : 	현재 피시의 프린터  리스트를 읽어온다. 
        prameter :  없음.
        return :	Array : string. [프린터 이름]
        ///////////////////////////////////////////////////////*/
        this._ext_getPrintList_onclick = function(obj,e)
        {
        	//배열로 리턴 합니다.
        	var ret_SysPrintLists;
        	ret_SysPrintLists = Extension._ext_getPrintList();  //
        	trace("Print List : " + ret_SysPrintLists);
        }

        /*///////////////////////////////////////////////////////
        function : _ext_setDefaultPrinter
        des 	 : 	현재 피시의 디폴트 프린터를 설정한다.
        prameter :  string : 프린터 이름.
        return :	bool : true 완료 , false 실패
        ///////////////////////////////////////////////////////*/
        this._ext_setDefaultPrinter_onclick = function(obj,e)
        {
        	var ret_SysPrintLists;
        	ret_SysPrintLists = Extension._ext_getPrintList();  //
        	trace(ret_SysPrintLists);
        	var settingRet;
        	settingRet = Extension._ext_setDefaultPrinter(ret_SysPrintLists[0]);  //
        	trace("_ext_setDefaultPrinter : " +  settingRet);
        }

        /*///////////////////////////////////////////////////////
        function : _ext_getDefaultPrinter
        des 	 : 	현재 피시의 디폴트 프린터를 읽어온다.
        prameter :  없음.
        return :	string. [프린터 이름]
        ///////////////////////////////////////////////////////*/
        this._ext_getDefaultPrinter_onclick = function(obj,e)
        {
        	var settingRet;
        	settingRet = Extension._ext_getDefaultPrinter();  //
        	trace("_ext_getDefaultPrinter : " +  settingRet);
        }

        /*///////////////////////////////////////////////////////
        function : _ext_setPageOption
        des 	 : 	현재 피시의 프린트 페이지 옵션 창을 활성화 합니다.
        prameter :  없음.
        return :	없음.
        ///////////////////////////////////////////////////////*/
        this._ext_setPageOption_onclick = function(obj,e)
        {
        	var settingRet;
        	settingRet = Extension._ext_setPageOption(); 
        }

        /*///////////////////////////////////////////////////////
        function : _ext_setPrintOption
        des 	 : 	현재 피시의 프린트 옵션 창을 활성화 합니다.
        prameter :  없음.
        return :	없음.
        ///////////////////////////////////////////////////////*/
        this._ext_setPrintOption_onclick = function(obj,e)
        {
        	var settingRet;
         	settingRet = Extension._ext_setPrintOption();  //
        }

        /*///////////////////////////////////////////////////////
        //method		: _ext_selectFolderPath
        //DESC			: 입력된 패스를 이용하여 파일 다이얼로그창을 활성화 하여
        //				  선택 완료 후 폴더명을 리턴 합니다.
        //INPUT			: Default : null (  c:/ 를 디폴트 드라이버로 선택 다이얼로그 창을 오픈.)
        //				  sring : 입력된 폴더를 default 폴더로 설정 하여 선택 다이얼로그 창을 오픈 한다.
        //OUPUT			: string : 선택된 폴더경로를 리턴 합니다.
        ///////////////////////////////////////////////////////*/
        this._ext_selectFolder_onclick = function(obj,e)
        {
        	var settingRet;
        	
        	settingRet = Extension._ext_selectFolderPath();  //
        	trace("_ext_selectFolderPath default 설정 시 : " + settingRet);
        	
        	var setFolder = "D://TEMP";
        	settingRet = Extension._ext_selectFolderPath(setFolder);  //
        	trace("_ext_selectFolderPath "+ setFolder +" [ 설정 [: " + settingRet);
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getFileList
        //DESC			: 입력 된 폴더 경로에서 파일 리스트를 스트링으로 리턴 합니다.
        //INPUT			: [String ] strPath : 선택 하려는 폴더 경로
        //				  [String ] Option  : F”(default) 파일 명, 
        //									“D”일 때, 디렉토리 리스트를 리턴한다.			
        //OUPUT			: Array : 선택된 폴더에서 파일명들을 리턴 합니다.
        //////////////////////////////////////////////////////////
        this._ext_getFileList_onclick = function(obj,e)
        {
        	var settingRet;
        	//var getFilePATH = "C://TEMP";
        	var getFilePATH = "Ahn_SM-N900S://Card//Movie";
        	settingRet = Extension._ext_getFileList(getFilePATH,"D");  //D
        	trace("_ext_getFileList : " + settingRet );
        	settingRet = Extension._ext_getFileList(getFilePATH);  //D
        	trace("_ext_getFileList : " + settingRet );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getKeyCheck
        //DESC			: 해당 키의 활성화 여부
        //INPUT			: string
        //OUPUT			: bool : true 활성화./false 비활성화
        //////////////////////////////////////////////////////////
        this._ext_getKeyCheck_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getKeyCheck("CAPSLOCK");  //
        	trace(" CAPSLOCK : " + ret );
        	ret = Extension._ext_getKeyCheck("NUMLOCK");  //
        	trace(" NUMLOCK : " + ret );
        	ret = Extension._ext_getKeyCheck("SCROLLOCK");  //
        	trace(" SCROLLOCK : " + ret );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getHostName
        //DESC			: 피시의 호스트 명.
        //INPUT			: 없음
        //OUPUT			: String : 사용자 명.
        //////////////////////////////////////////////////////////
        this._ext_getHostName_onclick = function(obj,e)
        {
        	var ret = "";
        	ret = Extension._ext_getHostName();  //
        	trace("_ext_getHostName : " + ret  );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getUserName
        //DESC			: 로그인 되어 있는 사용자 계정 명.
        //INPUT			: 없음
        //OUPUT			: String : 사용자 명.
        //////////////////////////////////////////////////////////
        this._ext_getUserName_onclick = function(obj,e)
        {
        	var ret = "";
        	ret = Extension._ext_getUserName();  //
        	trace("_ext_getUserName : " +  ret );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getFileDateInfo
        //DESC			: 파일 버전 정보.
        //INPUT			: 읽어 들이려는 파일 날짜, ACCESS 날짜,저장 날짜
        //OUPUT			: Array
        //					[0] : 만든 날자 : 년,월,일,시분초
        //					[1] : 수정 날자 : 년,월,일,시분초
        //					[2] : 저장 날자 : 년,월,일,시분초
        //////////////////////////////////////////////////////////
        this._ext_getFileInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getFileDateInfo("C://TEMP//test.txt");  //
        	trace("_ext_getFileInfo : " +  ret );
        	trace("_ext_getFileInfo 만든날짜[ 0 ]: " +  ret[0] );
        	trace("_ext_getFileInfo 수정날짜[ 1 ]: " +  ret[1]);
        	trace("_ext_getFileInfo 저장날자[ 2 ]: " +  ret[2]);
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getUserName
        //DESC			:지정된 경로에 해당 폴더 유무 확인 하여 true, false 리턴.
        //INPUT			:[0]String : dirName : 찾을 directory명
        //				 [1]integer : 1 : 해당 폴더가 없으면 생성 합니다.
        //OUPUT			:Bool : true: 있음 ,false :없음.
        //////////////////////////////////////////////////////////
        this._ext_getCheckDir_onclick = function(obj,e)
        {
        	ret = Extension._ext_getCheckDir("C://TEMP//test");  //
        	trace( "_ext_getCheckDir : " + ret);
        	
        	if(ret == false)
        	{
        		ret = Extension._ext_getCheckDir("C://TEMP//test", 1);  //
        		trace( "_ext_getCheckDir : " + ret);
        	}
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_setSystemEnv
        //DESC			: system 환경변수에 등록 되어 있는 값을 읽어 옵니다.
        //INPUT			:String : 설정 하려는 환경변수 값.
        //OUPUT			:String : 설정 된 환경변수 값.
        //////////////////////////////////////////////////////////
        this._ext_getSystemEnv_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getSystemEnv("path");  //
        	trace( " _ext_setSystemEnv : " + ret );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getDriveInfo
        //DESC			: 현재 시스템의 드라이브 명을 array 로 리턴 합니다..
        //INPUT			: 없음
        //OUPUT			: array 로 드라이브 명을 리턴 합니다..
        //////////////////////////////////////////////////////////
        this._ext_getDriveInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getDriveInfo();  //
        	trace( " _ext_getDriveInfo : " + ret );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getFontInfo
        //DESC			: 입력 된 폰트 영역을 이용하여 폰트정보를 array 로 리턴 합니다..
        //INPUT			: STRING : [ Caption, SmCaption, Menu, Status , Message]
        //OUPUT			: array 로 폰트 정보를 리턴 합니다.
        //////////////////////////////////////////////////////////
        this._ext_getFontInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getFontInfo("Caption");  //
        	trace( " _ext_getDriveInfo Caption : " + ret );
        	ret = Extension._ext_getFontInfo("SmCaption");  //
        	trace( " _ext_getDriveInfo SmCaption : " + ret );
        	ret = Extension._ext_getFontInfo("Menu");  //
        	trace( " _ext_getDriveInfo Menu : " + ret );
        	ret = Extension._ext_getFontInfo("Status");  //
        	trace( " _ext_getDriveInfo Status : " + ret );
        	ret = Extension._ext_getFontInfo("Message");  //
        	trace( " _ext_getDriveInfo Message : " + ret );
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_writeUProfile
        //DESC			: ini 파일 작성. 성공 유무에 따라. true, false 리턴.
        //INPUT			:strAppNm : 그룹명
        //				 strKey : 그룹내의 Key명
        //				 strValue : 지정할 값
        //				 strFilename : 경로가 포함된 파일명
        //				 strUnicode;
        /*					>>	Type : 	String [ “utf-16” ]
        					>> Description : INI File 생성 시 Unicode format 형식으로 파일 생성.
        					>> INI file format 은 Unicode format 중 “utf-16 little	 engdian“ format 형식 사용.
        					>> Format 형식을 지정하지 않으면, default “ANSI” format 형식으로 파일 생성
        */
        //OUPUT			:Bool : true: 성공 ,false :실패
        //////////////////////////////////////////////////////////
        this._ext_writeUProfile_onclick = function(obj,e)
        {
        	var groupVal = "English";
        	var keyVal 	 = "key";
        	var strVal 	 = "한글";
        	
        	var ret;
        	ret = Extension._ext_writeUProfile(groupVal,keyVal,strVal,"D:\\TEMP\\iniFileUTF16.ini","utf-16");
        	trace( " _ext_writeUProfile UTF-16 : " + ret );
        	
        	
        	ret = Extension._ext_writeUProfile(groupVal,keyVal,strVal,"D:\\TEMP\\iniFile.ini");
        	trace( " _ext_writeUProfile  : " + ret );	
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_readUProfile
        //DESC			: ini 파일 작성. 성공 유무에 따라. true, false 리턴.
        //INPUT			:strAppNm : 그룹명
        //					strKey : 그룹내의 Key명
        //					strVal : 지정된 값을 찾을 수 없을 때 반환되는 디폴트 값 
        //					strFilename : 경로가 포함된 파일명
        //OUPUT			:string 읽은 key 값.
        //////////////////////////////////////////////////////////
        this._ext_readUProfile_onclick = function(obj,e)
        {
        	var groupVal = "English";
        	var keyVal 	 = "key";
        	var strVal 	 = "value";
        		
        	var ret;
        	ret = Extension._ext_readUProfile(groupVal,keyVal,strVal,"D:\\TEMP\\iniFileUTF16.ini");
        	trace( " _ext_readUProfile  : " + ret );
        }

        
        //////////////////////////////////////////////////////////
        //method		: _ext_getAppPath
        //DESC			: 현재 프로그램의 경로를 출력합니다.
        //INPUT			: 없음
        //OUPUT			: XPLATFORM 프로그램 경로.
        //////////////////////////////////////////////////////////
        this._ext_getAppPath_onclick = function(obj,e)
        {
        	var ret;   
        	ret = Extension._ext_getAppPath();
        	trace("_ext_getAppPath : " + ret);
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getTraySizeInfo
        //DESC			: 시작 표시줄 및 트레이 영역 위치를 리턴 한다.
        //INPUT			: 없음
        //OUPUT			: Array : 
        //				  rect 좌표.
        //				  [ 0 ] 상태표시줄 rect.left
        //				  [ 1 ] 상태표시줄 rect.top
        //				  [ 2 ] 상태표시줄 rect.right
        //				  [ 3 ] 상태표시줄 rect.right

        //				  [ 4 ] 트레이영역 rect.right
        //				  [ 5 ] 트레이영역 rect.right
        //				  [ 6 ] 트레이영역 rect.right
        //				  [ 7 ] 트레이영역 rect.right
        //////////////////////////////////////////////////////////
        this._ext_getTraySizeInfo_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getTraySizeInfo();
        	trace("_ext_getTraySizeInfo " + ret);	
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_getDesktopWorkArea
        //DESC			: 메인 화면의 작업 영역을 리턴 합니다.
        //INPUT			: 없음
        //OUPUT			: Array : 
        //				  rect 좌표.
        //				  [ 0 ] 작업 영역 rect.left
        //				  [ 1 ] 작업 영역 rect.top
        //				  [ 2 ] 작업 영역 rect.right
        //				  [ 3 ] 작업 영역 rect.right
        //////////////////////////////////////////////////////////
        this._ext_getDesktopWorkArea_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_getDesktopWorkArea();
        	trace("_ext_getDesktopWorkArea : "+ret);
        }

        //////////////////////////////////////////////////////////
        //method		: _ext_setSecuritySite
        //DESC			: 메인 화면의 작업 영역을 리턴 합니다.
        //INPUT			: site	string	등록하려는 URL
        //OUPUT			: integer : 
        //					1	성공
        //					0	실패
        //					2	등록하려는 영역이 서버 확인이 필요.
        //					3	등록하려는 영역이 이미 설정되어 있음.
        //////////////////////////////////////////////////////////
        this._ext_setSecuritySite_onclick = function(obj,e)
        {
        	var site = "www.miplalform.com";
        	var ret;
        	ret = Extension._ext_setSecuritySite(site);
        	trace("_ext_setSecuritySite : " + ret);
        }

        this.btn_ext_isWow64_onclick = function(obj,e)
        {
        	var ret = Extension._ext_isWow64();
        	if( ret === true)
        		trace("Windows OS 64BIT ");
        	else
        		trace("Windows OS 32BIT ");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this._ext_registry_onload, this);
            this.addEventHandler("onclose", this._ext_registry_onclose, this);
            this._ext_killProcessAll.addEventHandler("onclick", this._ext_killProcessAll_onclick, this);
            this._ext_killProcessID.addEventHandler("onclick", this._ext_killProcessID_onclick, this);
            this._ext_getProcessNameHandleutton00.addEventHandler("onclick", this._ext_getProcessNameHandleutton00_onclick, this);
            this._ext_getSystemDir.addEventHandler("onclick", this._ext_getSystemDir_onclick, this);
            this._ext_setTime.addEventHandler("onclick", this._ext_setTime_onclick, this);
            this._ext_getTime.addEventHandler("onclick", this._ext_getTime_onclick, this);
            this._ext_getIPAddress.addEventHandler("onclick", this._ext_getIPAddress_onclick, this);
            this._ext_getMACAddress.addEventHandler("onclick", this._ext_getMACAddress_onclick, this);
            this._ext_getPrintList.addEventHandler("onclick", this._ext_getPrintList_onclick, this);
            this._ext_setDefaultPrinter.addEventHandler("onclick", this._ext_setDefaultPrinter_onclick, this);
            this._ext_getDefaultPrinter.addEventHandler("onclick", this._ext_getDefaultPrinter_onclick, this);
            this._ext_setPageOption.addEventHandler("onclick", this._ext_setPageOption_onclick, this);
            this._ext_setPrintOption.addEventHandler("onclick", this._ext_setPrintOption_onclick, this);
            this._ext_selectFolder.addEventHandler("onclick", this._ext_selectFolder_onclick, this);
            this._ext_getFileList.addEventHandler("onclick", this._ext_getFileList_onclick, this);
            this._ext_getKeyCheck.addEventHandler("onclick", this._ext_getKeyCheck_onclick, this);
            this._ext_getHostName.addEventHandler("onclick", this._ext_getHostName_onclick, this);
            this._ext_getUserName.addEventHandler("onclick", this._ext_getUserName_onclick, this);
            this._ext_getFileInfo.addEventHandler("onclick", this._ext_getFileInfo_onclick, this);
            this._ext_getCheckDir.addEventHandler("onclick", this._ext_getCheckDir_onclick, this);
            this._ext_getSystemEnv.addEventHandler("onclick", this._ext_getSystemEnv_onclick, this);
            this._ext_getDriveInfo.addEventHandler("onclick", this._ext_getDriveInfo_onclick, this);
            this._ext_getFontInfo.addEventHandler("onclick", this._ext_getFontInfo_onclick, this);
            this._ext_writeUProfile.addEventHandler("onclick", this._ext_writeUProfile_onclick, this);
            this._ext_readUProfile.addEventHandler("onclick", this._ext_readUProfile_onclick, this);
            this._ext_getAppPath.addEventHandler("onclick", this._ext_getAppPath_onclick, this);
            this._ext_getTraySizeInfo.addEventHandler("onclick", this._ext_getTraySizeInfo_onclick, this);
            this._ext_getDesktopWorkArea.addEventHandler("onclick", this._ext_getDesktopWorkArea_onclick, this);
            this._ext_setSecuritySite.addEventHandler("onclick", this._ext_setSecuritySite_onclick, this);
            this._ext_excuteProcess.addEventHandler("onclick", this._ext_excuteProcess_onclick, this);
            this._ext_excuteAppPostion.addEventHandler("onclick", this._ext_excuteAppPostion_onclick, this);
            this._ext_currentProcessID.addEventHandler("onclick", this._ext_currentProcessID_onclick, this);
            this.btn_ext_isWow64.addEventHandler("onclick", this.btn_ext_isWow64_onclick, this);

        };

        this.loadIncludeScript("_ext_system.xfdl");

       
    };
}
)();
