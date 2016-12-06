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
                this.set_name("SC_EmrForm");
                this.set_classname("SC_EmrForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("reportTab", "absolute", "2.56%", "185", null, "567", "11.92%", null, this);
            obj.set_tooltiptype("hover");
            obj.set_taborder("33");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#78909cff");
            obj.style.set_buttonborder("1 solid #455a64ff");
            obj.style.set_showextrabutton("false");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #607d8bff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.set_focusacceptable("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("med", this.reportTab);
            obj.set_text("진료기록");
            this.reportTab.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "-304", "19", "266", "147", null, null, this.reportTab.med);
            obj.set_taborder("59");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.getSetter("hideendline").set("col");
            obj.set_useselcolor("false");
            obj.getSetter("mergeview").set("fullview");
            obj.style.set_border("1px solid azure");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"124\"/><Column size=\"42\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"항목\"/><Cell col=\"1\" style=\"color: ;\" text=\"측정치\"/><Cell col=\"2\" text=\"단위\"/></Band><Band id=\"body\"><Cell style=\"background: ;font:bold 9 휴먼고딕;\" text=\"혈압(수축기)\"/><Cell col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:systolicPressure\"/><Cell col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"1\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"혈압(이완기)\"/><Cell row=\"1\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:diastolicPressure\"/><Cell row=\"1\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"2\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"맥박\"/><Cell row=\"2\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:pulse\"/><Cell row=\"2\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"3\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"호흡수\"/><Cell row=\"3\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:respirationRate\"/><Cell row=\"3\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"4\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"체온\"/><Cell row=\"4\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:bodyTemp\"/><Cell row=\"4\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"℃\"/></Band></Format></Formats>");
            this.reportTab.med.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "59.53%", "19", null, "146", "0.78%", null, this.reportTab.med);
            obj.set_taborder("60");
            obj.style.set_bordertype("normal 0 0");
            this.reportTab.med.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.84%", "8", null, "511", "0.84%", null, this.reportTab.med);
            obj.set_taborder("61");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.reportTab.med.addChild(obj.name, obj);
            obj = new Tabpage("prscTp", this.reportTab);
            obj.set_text("처방기록");
            this.reportTab.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.84%", "8", null, "511", "0.84%", null, this.reportTab.prscTp);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.reportTab.prscTp.addChild(obj.name, obj);
            obj = new Tabpage("chartTp", this.reportTab);
            obj.set_text("검사기록");
            this.reportTab.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.84%", "8", null, "511", "0.84%", null, this.reportTab.chartTp);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.reportTab.chartTp.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.68%", "8", null, "41", "85.92%", null, this);
            obj.set_taborder("41");
            obj.set_text("EMR");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("attPatDiv", "absolute", "2.56%", "52", "1066", "121", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.attPatDiv);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "1.33%", "42", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("26");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "1.32%", "78", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("27");
            obj.set_text("초/재진");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "7.71%", "43", "78", "30", null, null, this.attPatDiv);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "19.36%", "78", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("30");
            obj.set_text("유형");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "19.36%", "42", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("31");
            obj.set_text("등록번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "25.47%", "79", "78", "30", null, null, this.attPatDiv);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "25.47%", "43", "78", "30", null, null, this.attPatDiv);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "33.55%", "78", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("34");
            obj.set_text("입원여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "33.46%", "42", "60", "30", null, null, this.attPatDiv);
            obj.set_taborder("35");
            obj.set_text("진료여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Combo("hosCombo", "absolute", "39.76%", "80", "70", "29", null, null, this.attPatDiv);
            this.attPatDiv.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.style.set_bordertype("normal 0 0");
            obj = new Combo("trmtCombo", "absolute", "39.85%", "43", "70", "29", null, null, this.attPatDiv);
            this.attPatDiv.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.style.set_bordertype("normal 0 0");
            obj = new Radio("inoutRadio", "absolute", "53.29%", "82", null, "25", "32.89%", null, this.attPatDiv);
            this.attPatDiv.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.attPatDiv.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("38");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.set_index("0");
            obj = new Button("searchAttBtn", "absolute", "741", "82", "58", "23", null, null, this.attPatDiv);
            obj.set_taborder("39");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "48.5%", "42", null, "30", "44.83%", null, this.attPatDiv);
            obj.set_taborder("40");
            obj.set_text("진료일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Calendar("trmtDateCal", "absolute", "55.92%", "42", null, "31", "35.53%", null, this.attPatDiv);
            this.attPatDiv.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_bordertype("normal 0 0");
            obj = new Static("subCodeStc06", "absolute", "65.32%", "42", null, "30", "27.26%", null, this.attPatDiv);
            obj.set_taborder("42");
            obj.set_text("진료의");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "73.03%", "43", "74", "30", null, null, this.attPatDiv);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Button("searchAttPatBtn", "absolute", "856", "43", "30", "30", null, null, this.attPatDiv);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "84.3%", "42", null, "30", "13.16%", null, this.attPatDiv);
            obj.set_taborder("45");
            obj.set_text("과");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "87.59%", "43", "67", "30", null, null, this.attPatDiv);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("regAttStc00", "absolute", "0%", "-1", null, "34", "0%", null, this.attPatDiv);
            obj.set_taborder("47");
            obj.set_text("   환자정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Button("searchAttPatBtn00", "absolute", "168", "43", "30", "30", null, null, this.attPatDiv);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Combo("hosCombo00", "absolute", "7.71%", "80", "84", "29", null, null, this.attPatDiv);
            this.attPatDiv.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.style.set_bordertype("normal 0 0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 430, 208, this.reportTab.med,
            	//-- Layout function
            	function(p) {
            		p.set_text("진료기록");

            	}
            );
            this.reportTab.med.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.reportTab.prscTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("처방기록");

            	}
            );
            this.reportTab.prscTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.reportTab.chartTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("검사기록");

            	}
            );
            this.reportTab.chartTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1066, 121, this.attPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.attPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_EmrForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("SCP_EmrForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	EMR 관리 화면				
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 6. 13.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  
        //include "scripts::hrsScripts.xjs";

        var patNo = "";
        var dept;
        var empNo;
        var smCd;
        var prescDt; 			// 상병내역등록이랑 처방내역 등록때 시퀀스만들때 사용한다 날짜시분초
        var searchDate = null;
        var diCode;
        var diCodeNm;
        var receiptNo;          // 외래접수번호
        var prescNo;
        var sDate = null     			// 오늘날짜      
                                                                                                                                                        
                                                                                                                                                            
        // 화면 로딩시
        this.MB_EmrForm_onload = function(obj,e)
        {

        	empNo = application.gdsEmp.getColumn(0, "empNo");
        	this.trmtDiv.trmtDoctEd.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.trmtDiv.trmtDeptEd.set_value(application.gdsEmp.getColumn(0, "deptNm"));

        	//searchDate = this.gfnLocalDate();
        	//searchDate = "20160401";
        	//sDate = searchDate;
        	//this.trmtDiv.trmtDateCal.set_value(searchDate.replace(/-/g, ""));
        }

        
        // 조회버튼 클릭시 
        this.searchBtn_onclick = function(obj,e)
        {

        	searchDate = null;
        // 	this.dsService.setColumn(1,"argument","trmtDoct=43000 trmtDate="+searchDate+" gubun=N");//n은 입원유무 43000은 현재 차트에 들어온 의사번호를 뜻한다 나중에 로그인의사번호 받아서  넣으면된다
        	this.dsService.setColumn(1, "argument", "trmtDoct=" + empNo + " trmtDate=" + searchDate);
        	//var trmtDoct = application.gdsEmp.getColumn(0, "empNo"); //alert(trmtDoct); /*"43000"*/
         	//this.dsService.setColumn(1, "argument", "trmtDoct=" + trmtDoct + " trmtDate=" + searchDate);  //담당의 번호가 들어간다
          	this.gfnService("findReceiptList");
        }

        // 환자그리드 클릭시
        this.patGrid_oncellclick = function(obj,e)
        {
        	prescDt = this.gfnFormatDate("YmdHis");
        	patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        	receiptNo=this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "outpaReceiptNo");
        	
        	//기초검사정보조회
        	this.dsService.setColumn(4, "argument","patNo="+patNo);
        	this.gfnService("findBaseExamList");             
        	//상병내역조회
            this.dsService.setColumn(2,"argument","patNo="+patNo);
            this.gfnService("findPatientDsPrscList"); 
            
        	this.medTab.chartTp.chartDiv.patNoEd.set_value(patNo); //pdf파일칸에 미리 선택한 환자번호 넣어두기
        }

        // 입원/외래 라디오버튼 클릭시 
        this.inoutRadio_onitemchanged = function(obj,e)
        {
        	var radio = this.inoutRadio.value;
        	if (radio == "") {
        	    this.dsOutpaReceipt.filter("");    
            } else {
                this.dsOutpaReceipt.filter("prescYb=='" + radio + "'");
            }
        }

        /****** 진단탭 *****/

        // 진단탭 상병내역 그리드 클릭시   
        this.medTab_reportTp_diseaseGrid_oncellclick = function(obj,e)
        {
        	// 해당 상병에 대한 처방 필터링
        	var diseaseCode = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "code");   
        	var prescDate   = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescDate");  
        	var patNo       = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "patNo"); 

        	this.dsPatientPrsc.filter("patNo=='"+patNo+"' && prescDate=='"+prescDate+"' && diseaseCd =='"+diseaseCode+"'");
        }

        /***** 여기까지 진단 탭 *****/

        
        /***** 처방 탭 *****/

        
        // 처방탭 상병내역 그리드 클릭시
        this.medTab_prscTp_diseaseGrid_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) { 
        		var diseaseType = application.open("상병코드검색",
        										   "med::MB_DiseasePopupForm.xfdl", 
        										   this.parent,
        										   {},
        										   "showtitlebar=true showstatusbar=false",
        										   700, 100, 250, 300
        										  );	
         
        		this.setDsCode = function(arrRtn) { 
        			// 같은 상병코드가 같은 날에 있을때 등록불가 설정
        			for (var i = 0; i < this.dsPatientDs.getRowCount(); i++) {   
        				var check = this.dsPatientDs.getColumn(i, "code");  
        				var sDateCheck = this.dsPatientDs.getColumn(i, "prescDate");
        				if (arrRtn[0] == check && sDate == sDateCheck) {
        					alert("기준일에 동일한 상병이 이미 등록되어있습니다");
        					return;
        				}
        			}
        			this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "code", arrRtn[0]);
        			this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "codeNm", arrRtn[1]);
        			
        			diCode   = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "code");   	  // 상병코드
        			diCodeNm = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "codeNm");	  // 상병명
        			patNo    = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "patNo"); 	  // 환자번호
        			dept 	 = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "dept");	  // 진료과
        			prescNo  = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescNo");	  // 처방번호
        			var pDate  = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescDate"); // 처방일
        			// 해당 상병에 대한 처방 필터링
        			this.dsPatientPrsc.filter("patNo=='"+patNo+"' && prescDate=='"+pDate+"' && diseaseCd =='"+diCode+"'");
        		} 
        	}	
        }

        // 처방탭 상병내역등록 버튼 클릭시
        this.medTab_prscTp_diseaseDiv_diseaseAddBtn_onclick = function(obj,e)
        {
        	//여기에서 날짜시분초로 상병 내역등록시 시퀀스만들고 처방내역은 이 시퀀스뒤에 처방내역 만들때 줄번호를 붙여 시퀀스를 만든다
        	prescDt = this.gfnFormatDate("YmdHis");

        	if (this.gfnIsNull(patNo)) {
        		alert("환자를 선택해주세요");
        		return;
        	} else {
        		this.dsPatientDs.addRow();        // 상병내역 추가 
        	   	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "patNo", patNo);
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "dept", this.trmtDeptEd.value);
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescDate", prescDt);   
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescNo", prescNo);
        	}
        }

        // 처방탭 상병내역삭제 버튼 클릭시
        this.medTab_prscTp_diseaseDiv_diseaseDelBtn_onclick = function(obj,e)
        {
        	this.dsPatientDs.deleteRow(this.dsPatientDs.rowposition);
        }

        // 처방탭 처방내역삭제 버튼 클릭시
        this.medTab_prscTp_prscDiv_prscDelBtn_onclick = function(obj,e)
        {
        	this.dsPatientPrsc.deleteRow(this.dsPatientPrsc.rowposition);
        }
         
        // 처방버튼 클릭시
        this.medTab_prscTp_prscTypeDiv_prscBtn_onclick = function(obj,e)
        {
        	// [투약] [검사] [수혈] [처치] [재료] [재활]
        	switch (obj.text) {
        		case "투약" :
        			smCd = 1;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "투약항목");
        			this.dsService.setColumn(0, "argument", "smCd=1");
        			this.gfnService("findFeeCdList");
        			break;
        		case "검사" :
        			smCd = 2;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "검사항목");
        			this.dsService.setColumn(0, "argument", "smCd=2");
        			this.gfnService("findFeeCdList");
        			break;
        		case "수혈" :
        			smCd = 3;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "수혈항목");
        			this.dsService.setColumn(0, "argument", "smCd=3");
        			this.gfnService("findFeeCdList");
        			break;
        		case "처치" :
        			smCd = 4;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "처치항목");
        			this.dsService.setColumn(0, "argument", "smCd=4");
        			this.gfnService("findFeeCdList");
        			break;
        		case "재료" :
        			smCd = 5;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "재료항목");
        			this.dsService.setColumn(0, "argument", "smCd=5");
        			this.gfnService("findFeeCdList");
        			break;
        		case "재활" :
        			smCd = 6;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "재활항목");
        			this.dsService.setColumn(0, "argument", "smCd=6");
        			this.gfnService("findFeeCdList");
        			break;
        	}
        }

        // 처방탭 처방그리드 더블클릭시
        this.medTab_prscTp_presGrid_oncelldblclick = function(obj,e)
        {	
            dept = this.trmtDiv.trmtDeptEd.value;
        	this.dsPatientPrsc.addRow();
        	
         	if (this.gfnIsNull(prescDt)) {
        		// 처방전 시퀀스 생성(처방일-5자리순번)
         		prescSeqNo = (this.dsPatientPrsc.getRowCount()).toString().padLeft(5, "0");
        		prescNo = prescDt + "-" + prescSeqNo;
        		alert(prescNo);
         	} else {
        		prescNo = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescNo");
         		prescSeqNo = (this.dsPatientPrsc.getRowCount()).toString().padLeft(5,"0");
        		prescNo = prescDt + "-" + prescSeqNo; 
        		alert(prescNo);  
        	}
        	
            this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "doctNm", this.trmtDiv.trmtDoctEd.value);  // 진료의명
            this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "patNo", patNo);                       	// 환자번호
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescNo", prescNo);                   	// 처방번호
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescDate", sDate);                   	// 처방일(오늘날짜)
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescGubun", smCd);                   	// 코드
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseCd", diCode);                  	// 상병코드
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseNm", diCodeNm);                	// 상병명
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "dept", this.trmtDiv.trmtDeptEd.value);   	// 진료과
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "outpaReceiptNo", receiptNo);          	// 접수번호

        	var arrRtn = new Array();
        	for (var i = 0; i < this.dsFeeCd.getColCount(); i++) {		
        		var colName = this.dsFeeCd.getColID(i);   
        		var colVal = this.dsFeeCd.getColumn(this.dsFeeCd.rowposition, colName);
        		arrRtn[i] = "\n" + i + " " + colName + " " + colVal;
        		this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, colName, colVal);
        	}  
        	trace(this.dsPatientPrsc.saveXML());
        	this.dsPatientPrsc.setColumn(this.medTab.prscTp.patientGrid.currentrow, "uniqueNtc", this.dsBaseExam.getColumn(0, "sopMemo"));
        }

        
        /***** 차트탭 *****/

        // 차트탭 조회 클릭시
        this.medTab_chartTp_chartDiv_reportBtn_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.medTab.chartTp.chartDiv.patNoEd.value)) { 
        		alert("환자번호를 선택해주세요");
        		return;
        	}
        	this.medTab.chartTp.emrBrowser.set_url("http://localhost:8282/his/med/base/reportEmr.do?format=pdf&patNo=" + this.medTab.chartTp.chartDiv.patNoEd.value);
        	this.medTab.chartTp.emrBrowser.reload();
        	//this.medTab.chartTp.emrBrowser.set_url("http://localhost/erp45/med/mc/findEmrReport.do?patCode="+this.medTab.tabpage4.Div00.emrReport.value);//값에 담긴 환자번호 보낸다
        	//this.medTab.chartTp.emrBrowser.url = "http://localhost/ERP44/med/mc/findEmrReport.do?format=pdf";
        	//gfnService("reportEmr");
        }
          
        /***** 여기까지 차트탭 *****/  
          
          
        /***** 화면 하단구역 *****/

        // 닫기버튼 클릭시
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        // 등록버튼 클릭시
        this.registerBtn_onclick = function(obj,e)
        { 
          	var hosYn = this.patientDiv.hosCombo.value;
        	var diseaseNm = this.dsPatientDs.getColumn(0, "codeNm");
        	var trmtDept = this.trmtDiv.trmtDeptEd.value;
        	for (var i = 0; i < this.dsPatientDs.getRowCount(); i++) {
        	   this.dsPatientDs.setColumn(i, "gubun", hosYn);  
        	}
        	
        	if (this.dsPatientDs.getRowCount != 0) {
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "trmtYb", "Y");   
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "prescYb", "Y");
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "dgnsNm", diseaseNm);
        		//this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescNo", prescNo);
        	} 
        	
          	if (confirm("EMR 등록 하시겠습니까?")) {
        		this.gfnService("batchEmr");			
        	} 
        } 
         	
        // EMR 트랜잭션 콜백함수
        this.emrCallback = function(serviceID,errorCode,errorMsg)
        {
        	if (errorCode < 0) {
        		this.gfnErrorPopup(serviceID, errorCode, errorMsg);
        	} else {
        		if (serviceID == "findReceiptList") {
        			patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        		    this.patGrid.patGrid_oncellclick;
        		} else if (serviceID == "findBaseExamList") {
        			if (this.dsBaseExam.getRowCount()==0) this.dsBaseExam.addRow();
        			this.dsBaseExam.setColumn(this.dsBaseExam.rowposition, "patNo", patNo);
        		} else if (serviceID == "batchEmrList") {
        			alert("EMR이 정상적으로 등록되었습니다.");
        		}
        	}
        }

        
        // ❖S: patient’s symptoms and complaints
        // ❖O: patient's height, weight, temperature, pulse, blood pressure, visual acuity, etc.
        // ❖A: new lab data and results of studies, reports, assessments
        // ❖P: the current formulation and plan for the patient

        this.trmtDeptEd_oneditclick = function(obj,e)
        {
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.attPatDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.attPatDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.attPatDiv.searchAttBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.attPatDiv.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.searchAttPatBtn.addEventHandler("onclick", this.clickBtn, this);
            this.attPatDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.trmtDeptEd.addEventHandler("oneditclick", this.trmtDeptEd_oneditclick, this);
            this.attPatDiv.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.searchAttPatBtn00.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("SCP_EmrForm.xfdl");

       
    };
}
)();
