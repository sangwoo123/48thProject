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
                this.set_name("HG_InoutTimeForm");
                this.set_classname("HG_InoutTimeForm");
                this.set_titletext("출퇴근관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchInoutTimeList</Col><Col id=\"URL\">his::hrs/inoutTime/findInoutTimeList.do</Col><Col id=\"outData\">dsInoutWorkTime=dsInoutWorkTime</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchInoutTimeProcess</Col><Col id=\"URL\">his::hrs/inoutTime/batchInoutWorkTimeProcess.do</Col><Col id=\"inData\">dsInoutWorkTime=dsInoutWorkTime:u</Col><Col id=\"outData\">dsInoutWorkTime=dsInoutWorkTime</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInoutGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">출근</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">퇴근</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">외출</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">귀사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInoutWorkTime", this);
            obj._setContents("<ColumnInfo><Column id=\"inOutTime\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"inoutGubun\" type=\"STRING\" size=\"256\"/><Column id=\"inoutTimeNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"overTime\" type=\"STRING\" size=\"256\"/><Column id=\"belongDay\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("출퇴근등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("inoutInfoDiv", "absolute", "1.36%", "70", null, "48", "0.8%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#546e7aff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "1.14%", "8", null, "30", "93.38%", null, this.inoutInfoDiv);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Calendar("startCal", "absolute", "6.79%", "8", null, "30", "83.73%", null, this.inoutInfoDiv);
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj = new Static("Static04", "absolute", "15.13%", "10", null, "32", "82.26%", null, this.inoutInfoDiv);
            obj.set_taborder("2");
            obj.set_text("   ~");
            obj.style.set_color("aliceblue");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 arial");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Calendar("endCal", "absolute", "17.66%", "8", null, "30", "72.85%", null, this.inoutInfoDiv);
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Static("subCodeStc01", "absolute", "28.21%", "8", null, "30", "65.25%", null, this.inoutInfoDiv);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Edit("deptnoEd", "absolute", "34.91%", "8", null, "30", "57.97%", null, this.inoutInfoDiv);
            obj.set_taborder("5");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Edit("deptnmEd", "absolute", "44.64%", "8", null, "30", "48.24%", null, this.inoutInfoDiv);
            obj.set_taborder("6");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "52.58%", "8", null, "30", "40.88%", null, this.inoutInfoDiv);
            obj.set_taborder("7");
            obj.set_text("사원");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEd", "absolute", "59.28%", "8", null, "30", "33.61%", null, this.inoutInfoDiv);
            obj.set_taborder("8");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEd", "absolute", "69.01%", "8", null, "30", "23.88%", null, this.inoutInfoDiv);
            obj.set_taborder("9");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "77.02%", "6", null, "32", "15.62%", null, this.inoutInfoDiv);
            obj.set_taborder("10");
            obj.set_cssclass("DelBtn");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::permitBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchInoutTimeBtn", "absolute", "92.4%", "7", null, "32", "0.33%", null, this.inoutInfoDiv);
            obj.set_taborder("11");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.inoutInfoDiv.addChild(obj.name, obj);
            obj = new Button("addInoutTimeBtn", "absolute", "84.63%", "6", null, "32", "8.09%", null, this.inoutInfoDiv);
            obj.set_taborder("12");
            obj.set_cssclass("DelBtn");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.inoutInfoDiv.addChild(obj.name, obj);

            obj = new Button("findDeptBtn", "absolute", "532", "78", "30", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("findEmpBtn", "absolute", "830", "78", "30", "30", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Div("inoutTimeDiv", "absolute", "1.36%", "125", null, "627", "0.8%", null, this);
            obj.set_taborder("5");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Grid("transferPatGrid", "absolute", "13", "19", "1202", "592", null, null, this.inoutTimeDiv);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInoutWorkTime");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"84\"/><Column size=\"68\"/><Column size=\"57\"/><Column size=\"95\"/><Column size=\"90\"/><Column size=\"94\"/><Column size=\"189\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#b0bec5ff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"사번\"/><Cell col=\"2\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"사원명\"/><Cell col=\"3\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"출/퇴근\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"출입시간\"/><Cell col=\"6\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"시간외근무시간\" autosizecol=\"default\"/><Cell col=\"7\" style=\"background:#b0bec5ff;\" text=\"사유\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;font:10 돋움;\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center middle;font:10 돋움;\" text=\"bind:empNo\"/><Cell col=\"2\" style=\"align:center middle;font:10 돋움;\" text=\"bind:empNm\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center middle;font:10 돋움;\" text=\"bind:inoutGubun\" combodataset=\"dsInoutGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;font:10 돋움;\" text=\"bind:belongDay\"/><Cell col=\"5\" edittype=\"text\" style=\"align:center middle;font:10 돋움;\" text=\"bind:inOutTime\" mask=\"##:##\"/><Cell col=\"6\" style=\"align:center middle;font:10 돋움;\" text=\"bind:overTime\" mask=\"#시간\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:reason\"/></Band></Format></Formats>");
            this.inoutTimeDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 48, this.inoutInfoDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#546e7aff");

            	}
            );
            this.inoutInfoDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 627, this.inoutTimeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.inoutTimeDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_InoutTimeForm");
            		p.set_titletext("출퇴근관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HG_InoutTimeForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HG_InoutTimeForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path		              				   				
        @Description				
        @Author	  		백송은			    			                        								                                            
        @Create         2016.12.02                          		                    				                                            
        ********************************************************************************/

        
        //================================공통 Script Include================================

        //include "scripts::commonScripts.xjs";
        //include "scripts::hrsScripts.xjs";

        
        //================================ 화면 변수 선언부================================

        var deptCd;			//부서코드
        var deptNm;			//부서명
        var empNo;			//사원번호
        var empNm;			//사원명
        var belongDay;		//기준일
        var time;			//현재시간
        var startDate;		//출퇴근등록 시작날짜
        var endDate;		//출퇴근등록 마지막날짜
        var pms;			//권한
        var code;
        var hrs;

        
        //================================ CallBackFunc ================================

        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert(errorMsg);
        		return;
        	}
        	
        	if(svcID=="searchInoutTimeList")
        	{
        		var rowCount = this.dsInoutWorkTime.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="batchInoutTimeProcess")
        	{
        		alert("정상 처리되었습니다.");
        		
        	}
        	
        	
        }

        

        //================================ 현재 날짜 세팅 ================================

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0");
        	    sToday += objDate.getDate().toString().padLeft(2, "0"); 

        	return sToday;

        }

        //================================ 현재 시간 세팅 ================================

        this.fn_ThisTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0");
        	    sTime += objDate.getMinutes().toString().padLeft(2, "0");

        	return sTime;

        }

        
        //================================  onload Event ================================

        this.HG_InoutTimeForm_onload = function(obj,e)
        {
        	this.inoutInfoDiv.startCal.set_value(this.fn_Today());
        	this.inoutInfoDiv.endCal.set_value(this.fn_Today());
        	
        	belongDay = this.fn_Today().substr(0,6);
        }

        
        //================================  부서 조회 버튼 클릭  Event ================================

        this.findDeptBtn_onclick = function(obj,e)
        {
        	var param = {code:"GP500"};
            this.gfnPopup("CM_CodePopupForm","com",param);
            
           
          
        }

        //================================  부서 세팅  ================================

        this.setCode = function(code,arrRtn,codeSeq){

        	this.inoutInfoDiv.deptnoEd.set_value(arrRtn[0]);
        	this.inoutInfoDiv.deptnmEd.set_value(arrRtn[1]);
        	
        }

        //================================  사원 조회 버튼 클릭  Event   ================================

        this.findEmpBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        }

        
        //================================  사원 세팅  ================================
        this.setEmpInfo = function(arrRtn){

        	this.inoutInfoDiv.empnoEd.set_value(arrRtn[0]);
        	this.inoutInfoDiv.empnmEd.set_value(arrRtn[1]);
        	this.inoutInfoDiv.deptnoEd.set_value(arrRtn[2]);
        	this.inoutInfoDiv.deptnmEd.set_value(arrRtn[3]);

        }

        

        //================================  조회 버튼 클릭 Event  ================================
        this.inoutInfoDiv_searchInoutTimeBtn_onclick = function(obj,e)
        {
        	
        	deptNm = this.inoutInfoDiv.deptnmEd.value;
        	empNo = this.inoutInfoDiv.empnoEd.value;
        	startDate = this.inoutInfoDiv.startCal.value;
        	endDate = this.inoutInfoDiv.endCal.value;
        	
        	if(deptNm == '인사팀'){
        	alert(deptNm);
        		this.inoutInfoDiv.addInoutTimeBtn.set_enable(true);
        		this.inoutInfoDiv.saveBtn.set_enable(true);
        	}
        	var argument = 'empNo='+empNo+' sDate='+startDate+' eDate='+endDate;
        	 
        	this.dsService.setColumn(0, "argument", argument);
        	
        	this.gfnService("searchInoutTimeList", false);
        }

        
        //================================  추가 버튼 클릭 Event  ================================

        this.inoutInfoDiv_addInoutTimeBtn_onclick = function(obj,e)
        {
        alert(111);

        	empNo = this.inoutInfoDiv.empnoEd.value;
        	empNm = this.inoutInfoDiv.empnmEd.value;
        	deptCd = this.inoutInfoDiv.deptnoEd.value;
        	deptNm = this.inoutInfoDiv.deptnmEd.value;
        	belongDay = this.fn_Today();
        	time = this.fn_ThisTime();
        	
        	this.dsInoutWorkTime.addRow();
        	
        	var inoutTimeNo = this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1, "inoutTimeNo");
        	var count=0;
        	count = count+1;
        	
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "empNo", empNo);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "empNm", empNm);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "deptCd", deptCd);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "deptNm", deptNm);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "belongDay", belongDay);
        	this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "inOutTime", time);
        	
        	if(inoutTimeNo == undefined){
        		inoutTimeNo = parseInt(this.fn_Today()+"00")+ count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "inoutTimeNo", inoutTimeNo);
        		alert(inoutTimeNo);
        	}else if(belongDay == this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1, "belongDay")){
        		inoutTimeNo = parseInt(inoutTimeNo) + count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "inoutTimeNo", inoutTimeNo);
        		alert(inoutTimeNo);
        	}else if(belongDay != this.dsInoutWorkTime.getColumn(this.dsInoutWorkTime.rowposition-1, "belongDay")){
        		inoutTimeNo = parseInt(this.fn_Today()+"00")+count;
        		this.dsInoutWorkTime.setColumn(this.dsInoutWorkTime.rowposition, "inoutTimeNo", inoutTimeNo);
        		alert(inoutTimeNo);
        	}
        	
        }

        //================================  승인버튼 Event  ================================
        this.inoutInfoDiv_saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchInoutTimeProcess");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_InoutTimeForm_onload, this);
            this.inoutInfoDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.inoutInfoDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.inoutInfoDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.inoutInfoDiv.saveBtn.addEventHandler("onclick", this.inoutInfoDiv_saveBtn_onclick, this);
            this.inoutInfoDiv.searchInoutTimeBtn.addEventHandler("onclick", this.inoutInfoDiv_searchInoutTimeBtn_onclick, this);
            this.inoutInfoDiv.addInoutTimeBtn.addEventHandler("onclick", this.inoutInfoDiv_addInoutTimeBtn_onclick, this);
            this.findDeptBtn.addEventHandler("onclick", this.findDeptBtn_onclick, this);
            this.findEmpBtn.addEventHandler("onclick", this.findEmpBtn_onclick, this);
            this.inoutTimeDiv.transferPatGrid.addEventHandler("oncellclick", this.transferPatGrid_oncellclick, this);

        };

        this.loadIncludeScript("HG_InoutTimeForm.xfdl");

       
    };
}
)();
