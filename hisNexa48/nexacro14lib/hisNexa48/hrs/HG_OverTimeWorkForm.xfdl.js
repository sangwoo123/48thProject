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
                this.set_name("HG_OverTimeWorkForm");
                this.set_classname("HG_OverTimeWorkForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOverTimeWork", this);
            obj._setContents("<ColumnInfo><Column id=\"startOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"endOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"totalOvertime\" type=\"STRING\" size=\"256\"/><Column id=\"overStatus\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"approvalReason\" type=\"STRING\" size=\"256\"/><Column id=\"overtimeNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"startOvertimeDate\" type=\"STRING\" size=\"256\"/><Column id=\"endOvertimeDate\" type=\"STRING\" size=\"256\"/><Column id=\"beforeOvertimeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">searchOverTimeList</Col><Col id=\"URL\">his::/hrs/overtime/findOverTimeWorkList.do</Col><Col id=\"outData\">dsOverTimeWork=dsOverTimeWork</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">searchApproverOverTimeList</Col><Col id=\"URL\">his::/hrs/overtime/findApproverOverTimeWorkList.do</Col><Col id=\"outData\">dsOverTimeWork=dsOverTimeWork</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchOverTimeProcess</Col><Col id=\"URL\">his::/hrs/overtime/batchOverTimeWorkProcess.do</Col><Col id=\"inData\">dsOverTimeWork=dsOverTimeWork:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("시간외근무");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("overTimeInfoDiv", "absolute", "1.36%", "70", null, "48", "0.8%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#546e7aff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "1.14%", "8", null, "30", "93.38%", null, this.overTimeInfoDiv);
            obj.set_taborder("13");
            obj.set_text("기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Calendar("startCal", "absolute", "6.79%", "8", null, "30", "83.73%", null, this.overTimeInfoDiv);
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj = new Static("Static04", "absolute", "15.13%", "10", null, "32", "82.26%", null, this.overTimeInfoDiv);
            obj.set_taborder("15");
            obj.set_text("   ~");
            obj.style.set_color("aliceblue");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 arial");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Calendar("endCal", "absolute", "17.66%", "8", null, "30", "72.85%", null, this.overTimeInfoDiv);
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj = new Static("subCodeStc02", "absolute", "29.68%", "8", null, "30", "63.78%", null, this.overTimeInfoDiv);
            obj.set_taborder("20");
            obj.set_text("사원");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Edit("empnoEd", "absolute", "36.39%", "8", null, "30", "56.5%", null, this.overTimeInfoDiv);
            obj.set_taborder("21");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Edit("empnmEd", "absolute", "46.12%", "8", null, "30", "46.77%", null, this.overTimeInfoDiv);
            obj.set_taborder("22");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchOverTimeWorkBtn", "absolute", "92.4%", "7", null, "32", "0.33%", null, this.overTimeInfoDiv);
            obj.set_taborder("24");
            obj.set_cssclass("SearchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Button("addOverTimeBtn", "absolute", "75.8%", "6", null, "32", "16.93%", null, this.overTimeInfoDiv);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.set_enable("true");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Button("apBtn", "absolute", "61.08%", "7", null, "30", "33.93%", null, this.overTimeInfoDiv);
            obj.set_taborder("26");
            obj.set_text("결재");
            obj.set_enable("false");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.style.setStyleValue("background", "disabled", "#b0bec5ff");
            obj.style.setStyleValue("color", "disabled", "navy");
            obj.style.setStyleValue("bordertype", "disabled", "normal 3 3");
            obj.getSetter("class").set("ProcessBtn");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn00", "absolute", "66.56%", "6", null, "32", "24.04%", null, this.overTimeInfoDiv);
            obj.set_taborder("27");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::batchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.overTimeInfoDiv.addChild(obj.name, obj);
            obj = new Button("delOverTimeBtn", "absolute", "83.16%", "7", null, "32", "9.16%", null, this.overTimeInfoDiv);
            obj.set_taborder("28");
            obj.set_cssclass("DelBtn");
            obj.set_enable("false");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.overTimeInfoDiv.addChild(obj.name, obj);

            obj = new Div("inoutTimeDiv", "absolute", "1.36%", "125", null, "627", "0.8%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Grid("transferPatGrid", "absolute", "13", "19", "1202", "592", null, null, this.inoutTimeDiv);
            obj.set_taborder("0");
            obj.set_binddataset("dsOverTimeWork");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"84\"/><Column size=\"68\"/><Column size=\"57\"/><Column size=\"85\"/><Column size=\"78\"/><Column size=\"79\"/><Column size=\"71\"/><Column size=\"73\"/><Column size=\"75\"/><Column size=\"174\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#b0bec5ff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"사번\"/><Cell col=\"2\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"사원명\"/><Cell col=\"3\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"부서번호\"/><Cell col=\"4\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"부서명\"/><Cell col=\"5\" colspan=\"4\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"시간외근무시간\"/><Cell col=\"9\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"총근무시간\"/><Cell col=\"10\" style=\"background:#b0bec5ff;\" text=\"사유\"/><Cell col=\"11\" style=\"background:#b0bec5ff;font:bold 9 돋움;\" text=\"결재\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;font:10 돋움;\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center middle;font:10 돋움;\" text=\"bind:empNo\"/><Cell col=\"2\" style=\"align:center middle;font:10 돋움;\" text=\"bind:empNm\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"align:center middle;font:10 돋움;\" text=\"bind:deptCd\" combodataset=\"dsInoutGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" style=\"align:center middle;font:10 돋움;\" text=\"bind:deptNm\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;font:10 돋움;\" text=\"bind:startOvertimeDate\"/><Cell col=\"6\" edittype=\"masknumber\" style=\"align:center middle;font:10 돋움;\" text=\"bind:startOvertime\" mask=\"##:00\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"date\" style=\"align:center middle;font:10 돋움;\" text=\"bind:endOvertimeDate\"/><Cell col=\"8\" edittype=\"masknumber\" style=\"align:center middle;font:10 돋움;\" text=\"bind:endOvertime\" mask=\"##:00\"/><Cell col=\"9\" style=\"align:center middle;font:10 돋움;\" text=\"bind:totalOvertime\" mask=\"##시간\"/><Cell col=\"10\" edittype=\"text\" style=\"align:center middle;font:10 돋움;\" text=\"bind:reason\"/><Cell col=\"11\" style=\"align:center middle;font:10 돋움;\" text=\"bind:overStatus\"/></Band></Format></Formats>");
            this.inoutTimeDiv.addChild(obj.name, obj);

            obj = new Button("findEmpBtn", "absolute", "550", "78", "30", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 0, 48, this.overTimeInfoDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#546e7aff");

            	}
            );
            this.overTimeInfoDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 627, this.inoutTimeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.inoutTimeDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HG_OverTimeWorkForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HG_OverTimeWorkForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("HG_OverTimeWorkForm.xfdl", function() {
        /********************************************************************************                                                                            

        시간외근무 관리 

        @Path		    시간외근무 관리           				   				
        @Description	시간외근무 등록 정보 조회,등록,수정,삭제 화면			
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
        var pms;			//권한코드
        var sDate;			//시간외근무 시작일
        var eDate;			//시간외근무 종료일
        var hrs;

        
        //================================ CallBackFunc ================================

        this.CallbackFunc = function CallbackFunc(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert(errorMsg);
        		return;
        	}
        	
        	if(svcID=="searchOverTimeList")
        	{
        		var rowCount = this.dsOverTimeWork.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="searchApproverOverTimeList")
        	{
        		var rowCount = this.dsOverTimeWork.getRowCount();
        			
        			if(rowCount== 0)
        			{
        			
        				alert("조회 내용이 없습니다.");
        				return;
        		
        			}else
        			{
        			
        				alert("조회성공");
        			
        			}
        		
        	}
        	
        	if(svcID=="batchOverTimeProcess")
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

        
        //================================  onload Event ================================

        this.HG_OverTimeWorkForm_onload = function(obj,e)
        {
        	empNo = application.gdsEmp.getColumn(0,"empNo");
        	empNm = application.gdsEmp.getColumn(0,"empNm");
        	deptCd = application.gdsEmp.getColumn(0,"deptCd");
        	deptNm = application.gdsEmp.getColumn(0,"deptNm");
        	pms = application.gdsEmp.getColumn(0,"pms");

        	this.overTimeInfoDiv.startCal.set_value(this.fn_Today());
        	this.overTimeInfoDiv.endCal.set_value(this.fn_Today());
        	this.overTimeInfoDiv.empnoEd.set_value(empNo);
        	this.overTimeInfoDiv.empnmEd.set_value(empNm);
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        	
        		this.overTimeInfoDiv.apBtn.set_enable(true);
        		this.overTimeInfoDiv.delOverTimeBtn.set_enable(true);
        	
        	}
        }

        
        //================================  사원 조회 버튼 클릭  Event   ================================

        this.findEmpBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        	empNo = this.overTimeInfoDiv.empnoEd.value;
        	empNm = this.overTimeInfoDiv.empnmEd.value;
        	pms = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"pms");
        	deptCd = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"deptCd");
        	deptNm = application.gdsEmp.getColumn(application.gdsEmp.rowposition,"deptNm");	
        }

        //================================  사원 세팅  ================================

        this.setEmpInfo = function(arrRtn){

        	this.overTimeInfoDiv.empnoEd.set_value(arrRtn[0]);
        	this.overTimeInfoDiv.empnmEd.set_value(arrRtn[1]);
        	deptCd = arrRtn[2];
        	deptNm = arrRtn[3];
        	alert("부서명:"+deptNm+"권한:"+pms);

        }

        
        //================================  조회 버튼 클릭  Event   ================================

        this.overTimeInfoDiv_searchOverTimeWorkBtn_onclick = function(obj,e)
        {
        	if(pms == "admin" && deptNm == "인사팀"){
        		
        		this.gfnService("searchApproverOverTimeList");
        		
        	}else{
        	
        		sDate = this.overTimeInfoDiv.startCal.value;
        		eDate = this.overTimeInfoDiv.endCal.value;
        		var argument = 'empNo='+empNo+' sDate='+sDate+' eDate='+eDate;
        		
        		this.dsService.setColumn(0,"argument",argument);
        		
        		this.gfnService("searchOverTimeList");
        	
        	}
        	
        }

        
        //================================  추가 버튼 클릭  Event   ================================

        this.overTimeInfoDiv_addOverTimeBtn_onclick = function(obj,e)
        {
        	var toDate = this.fn_Today();
        	var beforeOvertimeNo;
        	alert("시간외근무코드:"+this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo"));
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        	
        		empNo = this.overTimeInfoDiv.empnoEd.value;
        		empNm = this.overTimeInfoDiv.empnmEd.value;
        	
        	}else{
        		if(this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo") == undefined){
        		
        			alert('신청할 시간외근무 정보가 존재하지 않습니다.');
        			return;
        		
        		}else if(this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overStatus") == "신청"){
        		
        			alert('결재완료가 되지않은 시간외근무 정보에 대하여 다시 신청할 수 없습니다.');
        			return;
        		
        		}
        		
        		beforeOvertimeNo = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overtimeNo");
        	
        	}
        	
        	this.dsOverTimeWork.addRow();
        	
        	var overtimeNo = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition-1, "overtimeNo");
        	var count = 0;
        	count = count+1;
        	
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition, "startOvertimeDate", toDate);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"endOvertimeDate",toDate);
        	var dept = this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"deptCd",deptCd);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"deptNm",deptNm);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"empNo",empNo);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"empNm",empNm);
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","신청");
        	
        	alert(dept);
        	
        	if(overtimeNo == undefined){
        		overtimeNo = parseInt(this.fn_Today()+"00")+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);
        	}else if(overtimeNo.substring(0,8) != toDate){
        		
        		overtimeNo = parseInt(toDate.substr(0,8)+"00")+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);

        
        	}else if(overtimeNo.substring(0,8) == toDate){
        	
        		overtimeNo = parseInt(overtimeNo)+count;
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overtimeNo",overtimeNo);

        	}
        	
        	if(pms == "admin" && deptNm == "인사팀"){
        		
        	}else{
        	
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","신청");
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"beforeOvertimeNo",beforeOvertimeNo);

        	}

        }

        //================================  삭제 버튼 클릭  Event   ================================

        this.overTimeInfoDiv_delOverTimeBtn_onclick = function(obj,e)
        {
        	var status = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"overStatus");
        	
        	if(status == undefined){
        	
        		this.dsOverTimeWork.deleteRow(this.dsOverTimeWork.rowposition);
        	
        	}else{
        	
        		alert("결재완료되었거나 신청된 내용은 삭제가 불가능합니다.");
        	
        	}
        }

        //================================  결재 버튼 클릭  Event   ================================

        this.overTimeInfoDiv_apBtn_onclick = function(obj,e)
        {
        	this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"overStatus","결재완료");
        }

        
        //================================  일괄처리 버튼 클릭  Event   ================================

        this.overTimeInfoDiv_saveBtn00_onclick = function(obj,e)
        {
        	this.gfnService("batchOverTimeProcess");
        }

        //================================  그리드 onenterdown   Event   ================================

        
        this.inoutTimeDiv_transferPatGrid_onenterdown = function(obj,e)
        {
        	if(e.cell == 8){
        	
        		var endTime = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"endOvertime");
        		var startTime = this.dsOverTimeWork.getColumn(this.dsOverTimeWork.rowposition,"startOvertime");
        	
        		var workHours = (parseInt(endTime) - parseInt(startTime))/100;
        		
        		this.dsOverTimeWork.setColumn(this.dsOverTimeWork.rowposition,"totalOvertime",workHours);	
        	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HG_OverTimeWorkForm_onload, this);
            this.overTimeInfoDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.overTimeInfoDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.overTimeInfoDiv.searchOverTimeWorkBtn.addEventHandler("onclick", this.overTimeInfoDiv_searchOverTimeWorkBtn_onclick, this);
            this.overTimeInfoDiv.addOverTimeBtn.addEventHandler("onclick", this.overTimeInfoDiv_addOverTimeBtn_onclick, this);
            this.overTimeInfoDiv.apBtn.addEventHandler("onclick", this.overTimeInfoDiv_apBtn_onclick, this);
            this.overTimeInfoDiv.saveBtn00.addEventHandler("onclick", this.overTimeInfoDiv_saveBtn00_onclick, this);
            this.overTimeInfoDiv.delOverTimeBtn.addEventHandler("onclick", this.overTimeInfoDiv_delOverTimeBtn_onclick, this);
            this.inoutTimeDiv.transferPatGrid.addEventHandler("onenterdown", this.inoutTimeDiv_transferPatGrid_onenterdown, this);
            this.findEmpBtn.addEventHandler("onclick", this.findEmpBtn_onclick, this);

        };

        this.loadIncludeScript("HG_OverTimeWorkForm.xfdl");

       
    };
}
)();
