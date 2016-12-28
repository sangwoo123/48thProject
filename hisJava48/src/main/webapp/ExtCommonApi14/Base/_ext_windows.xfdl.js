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
                this.set_name("_ext_windows");
                this.set_classname("_ext_windows");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,748,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("_ext_setTopWindows", "absolute", "8", "56", "195", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("_ext_setTopWindows");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_getFindWindows", "absolute", "254", "56", "195", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_ext_getFindWindows");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_ext_windowSendMSG", "absolute", "495", "56", "195", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_ext_windowSendMSG");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_delDirectory", "absolute", "8", "127", "195", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_ext_delDirectory");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_readFile", "absolute", "8", "198", "195", "50", null, null, this);
            obj.set_taborder("5");
            obj.set_text("_ext_readFile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_writeFile", "absolute", "254", "198", "195", "50", null, null, this);
            obj.set_taborder("6");
            obj.set_text("_ext_writeFile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_reNameFile", "absolute", "495", "198", "195", "50", null, null, this);
            obj.set_taborder("7");
            obj.set_text("_ext_reNameFile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_copyFile", "absolute", "8", "269", "195", "50", null, null, this);
            obj.set_taborder("8");
            obj.set_text("_ext_copyFile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_moveFile", "absolute", "254", "269", "195", "50", null, null, this);
            obj.set_taborder("9");
            obj.set_text("_ext_moveFile");
            this.addChild(obj.name, obj);

            obj = new Button("_ext_deleteFile", "absolute", "495", "269", "195", "50", null, null, this);
            obj.set_taborder("10");
            obj.set_text("_ext_deleteFile");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_ext_EmptyWorkingSet", "absolute", "8", "340", "195", "50", null, null, this);
            obj.set_taborder("11");
            obj.set_text("_ext_EmptyWorkingSet");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ext_setBeep", "absolute", "8", "411", "195", "50", null, null, this);
            obj.set_taborder("12");
            obj.set_text("_ext_setBeep");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 748, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("_ext_windows");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("_ext_windows.xfdl", function() {

        var Extension = {};
        var objExtURL = "C:\Program Files (x86)\nexacro\14\nexacro14lib\component\ExtCommonV13.dll";
         
          

        
        this._ext_windows_onload = function(obj,e)
        {
        	nexacro._addExtensionModule(Extension, objExtURL);
        }

        this._ext_windows_onclose = function(obj,e)
        {
        	nexacro._clearExtensionModule(objExtURL);
        }

        /////////////////////////////////////////////////////////
        //method		: _ext_setTopWindows
        //DESC			: 화면 모드를 최상위로 설정.
        //INPUT			: bool : true 설정 / false 해제
        //OUPUT			: BOOL : 
        //					TRUE	성공
        //					FALSE	실패
        //////////////////////////////////////////////////////////
        this._ext_setTopWindows_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = Extension._ext_setTopWindows(true);
        	trace( "_ext_setTopWindows : " + ret);
        	
        	ret = Extension._ext_setTopWindows(false);
        	trace( "_ext_setTopWindows : " + ret);
        }

        /////////////////////////////////////////////////////////
        //method		: _ext_getFindWindows
        //DESC			: 검색 된 창을 화렁화 하여, handle을 dword 값으로 리턴 합니다.
        //INPUT			: string classname : 해당 프로그램의 class;
        //					string : 프로그램의 타이틀 명.
        //					bool : 검색된 프로그램을 윈도우 top 설정 유무. true 설정 / false 해제
        //OUPUT			: dword : 검색 된 프로그램의 헨들 값.
        //////////////////////////////////////////////////////////
        this._ext_getFindWindows_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = Extension._ext_getFindWindows("","Q-DIR 5.60",false);
        	trace( "_ext_setTopWindows : " + ret);
        }

        /////////////////////////////////////////////////////////
        //method		: _ext_windowSendMSG
        //DESC			: 검색 된 창에 copy data send msg 전달하기.
        //INPUT			: string strclassname : 해당 프로그램의 class;
        //				  string strtitle: 프로그램의 타이틀 명.
        //				  integer Flag :  보내려는 윈도우 에서의 식별 값.
        //				  string copydata : 보내여질 스트링 데이터.
        //OUPUT			: dword : 검색 된 프로그램의 헨들 값.
        //////////////////////////////////////////////////////////
        this.Btn_ext_windowSendMSG_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = Extension._ext_windowSendMSG("","Q-DIR 5.60",123,"check");
        	trace( "_ext_windowSendMSG : " + ret);
        }

        /////////////////////////////////////////////////////////
        //method		: _ext_delDirectory
        //DESC			: 디렉토리의 모든 파일을 삭제 합니다.
        //INPUT			: string directory path: 삭제하려는 디렉 토리 경로.
        //				  integer : 0 파일만 삭제 , 1 디렉토리 모두 삭제
        //OUPUT			: bool : true 성공, false : 실패
        //////////////////////////////////////////////////////////
        this._ext_delDirectory_onclick = function(obj,e)
        {
        	var ret = false;
        	ret = Extension._ext_delDirectory("C:/TEMP/test",0);
        	trace( "_ext_delDirectory : " + ret);
         	ret = Extension._ext_delDirectory("C:/TEMP/test",1);
         	trace( "_ext_delDirectory : " + ret);
        }

        
        /****************************************************************************************************
        method		: _ext_readFile
        DESC			: 파일을 읽습니다.
        INPUT			: string directory path: 읽으려는 파일 경로. 

        				현재 파일 포멧
        				ANSI  : 정상.
        				UTF-8 : 정상.

        OUPUT			: string : 읽은 파일 데이터.
        ****************************************************************************************************/
        this._ext_readFile_onclick = function(obj,e)
        {
        	var ret;
        	ret = Extension._ext_readFile("D:/TEMP/ANSI_UTF8.txt");
        	trace("_ext_readFile :--- " +  ret);
        }

        

        /****************************************************************************************************
        method		: _ext_writeFile
        DESC			: 파일을 생성합니다.
        INPUT			: 
        				1. string directory path: 생성하려는 파일 경로 및 파일명.
        				2. 생성되어질 string 데이터

        				[2014.3.10] - 수정 예정.
        				현재 파일 포멧
        				ANSI  : 정상.
        				UTF-8 : 정상.

        OUPUT			: string : 읽은 파일 데이터.
        ****************************************************************************************************/
        this._ext_writeFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_readFile("D:/TEMP/ANSI.txt");
         	trace("_ext_readFile : " +  ret);
        	
        	ret = Extension._ext_writeFile("C:/TEMP/test/utf-8.txt","한,글,안,녕,세,요");
        	trace("_ext_writeFile : " +  ret);
        }

        
        /****************************************************************************************************
        method		: _ext_reNameFile
        DESC			: 파일 이름을 변경 합니다.
        INPUT			: 
        				1. 원 데이터 파일 파일 경로 및 파일명.
        				2. 새롭게 이름을 변경하려는 파일명.

        				[2014.3.10] - 수정 예정.
        				현재 파일 포멧
        				ANSI  : 정상.
        				UTF-8 : 정상.

        OUPUT			: BOOL : TRUE : 성공, FALSE: 실패
        ****************************************************************************************************/
        this._ext_reNameFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_reNameFile("C:/TEMP/test/utf-8.txt","C:/TEMP/test/utf-83.txt");
         	trace("_ext_reNameFile : " + ret);
        }

        /****************************************************************************************************
        DESC	CopyFile
        INPUT	1. strExistingFileName	: 복사할 파일 경로
        		2. strNewFileName		: 새로운 파일 경로
        		3. bFailIfExists		: 덮어 쓸지 말지 True면 같은 파일 있으면 Fail, False면 덮어 쓰기
        OUPUT	ret : true(성공) or false(실패)
        ****************************************************************************************************/
        this._ext_copyFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_copyFile("C:/TEMP/test/utf-83.txt","C:/TEMP/test/utf-88.txt", true);
         	trace("_ext_copyFile : " + ret);
         	
         	ret = Extension._ext_copyFile("C:/TEMP/test/utf-83.txt","C:/TEMP/test/utf-89.txt", false);
         	trace("_ext_copyFile : " + ret);
        }

        /****************************************************************************************************
        DESC	MoveFile
        INPUT	1. lpExistingFileName	: 파일 경로
        		2. lpNewFileName		: 새로운 파일 경로
        OUPUT	ret : true(성공) or false(실패)
        ****************************************************************************************************/
        this._ext_moveFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_moveFile("C:/TEMP/test/utf-83.txt","C:/TEMP/test/test32/utf-88.txt");
         	trace("_ext_moveFile : " + ret);
        }

        /****************************************************************************************************
        DESC	DeleteFile
        INPUT	1. lpFileName 		: 파일 경로
        OUPUT	ret : true(성공) or false(실패)
        ****************************************************************************************************/
        this._ext_deleteFile_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_deleteFile("C:/TEMP/test/test32/utf-88.txt");
         	trace("_ext_deleteFile : " + ret);	
        }

        /****************************************************************************************************
        DESC	_ext_EmptyWorkingSet
        INPUT	working memory init
        OUPUT	ret : true(성공) or false(실패)
        ****************************************************************************************************/
        this.Btn_ext_EmptyWorkingSet_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_EmptyWorkingSet();
         	trace("_ext_EmptyWorkingSet: " + ret);	
        }

        /****************************************************************************************************
        DESC	_ext_setBeep(frequency, length)
        INPUT	Beep 음 발생.
        		frequency 는 주파수 (높을수록 높은음) <vc : Beep() 함수 참고.>
        		length 는 1/1000초 단위.
        		frequency 
        		경고음의 주파수이며 해당 범위는 37 - 32767헤르츠입니다.
        		length 
        		경고음의 지속 시간(밀리초)입니다.

        
        OUPUT	없음
        ****************************************************************************************************/
        this.btn_ext_setBeep_onclick = function(obj,e)
        {
        	var ret;
         	ret = Extension._ext_setBeep(1000,500);
         	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this._ext_windows_onload, this);
            this.addEventHandler("onclose", this._ext_windows_onclose, this);
            this._ext_setTopWindows.addEventHandler("onclick", this._ext_setTopWindows_onclick, this);
            this._ext_getFindWindows.addEventHandler("onclick", this._ext_getFindWindows_onclick, this);
            this.Btn_ext_windowSendMSG.addEventHandler("onclick", this.Btn_ext_windowSendMSG_onclick, this);
            this._ext_delDirectory.addEventHandler("onclick", this._ext_delDirectory_onclick, this);
            this._ext_readFile.addEventHandler("onclick", this._ext_readFile_onclick, this);
            this._ext_writeFile.addEventHandler("onclick", this._ext_writeFile_onclick, this);
            this._ext_reNameFile.addEventHandler("onclick", this._ext_reNameFile_onclick, this);
            this._ext_copyFile.addEventHandler("onclick", this._ext_copyFile_onclick, this);
            this._ext_moveFile.addEventHandler("onclick", this._ext_moveFile_onclick, this);
            this._ext_deleteFile.addEventHandler("onclick", this._ext_deleteFile_onclick, this);
            this.Btn_ext_EmptyWorkingSet.addEventHandler("onclick", this.Btn_ext_EmptyWorkingSet_onclick, this);
            this.btn_ext_setBeep.addEventHandler("onclick", this.btn_ext_setBeep_onclick, this);

        };

        this.loadIncludeScript("_ext_windows.xfdl");

       
    };
}
)();
