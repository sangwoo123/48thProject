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
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "2.34%", "14", null, "46", "84.77%", null, this);
            obj.set_taborder("0");
            obj.set_text("EMR");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("trmtDiv", "absolute", "0.49%", "64", "450", "641", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "75.47%", "47", null, "30", "17.69%", null, this.trmtDiv);
            obj.set_taborder("25");
            obj.set_text("과");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "42.45%", "47", null, "30", "43.4%", null, this.trmtDiv);
            obj.set_taborder("26");
            obj.set_text("진료의");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.94%", "43", null, "30", "86.08%", null, this.trmtDiv);
            obj.set_taborder("27");
            obj.set_text("진료일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Calendar("trmtDateCal", "absolute", "14.62%", "42", null, "31", "58.02%", null, this.trmtDiv);
            this.trmtDiv.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_bordertype("normal 0 0");
            obj = new Edit("trmtDeptEd", "absolute", "82.78%", "47", "67", "30", null, null, this.trmtDiv);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "57.08%", "47", "74", "30", null, null, this.trmtDiv);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.trmtDiv.addChild(obj.name, obj);

            obj = new Static("regAttStc", "absolute", "1.27%", "76", null, "28", "57.13%", null, this);
            obj.set_taborder("14");
            obj.set_text("   진료정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc00", "absolute", "1.56%", "148", null, "28", "56.84%", null, this);
            obj.set_taborder("15");
            obj.set_text("   환자정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "1.56%", "190", "60", "30", null, null, this);
            obj.set_taborder("16");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDeptEd00", "absolute", "7.62%", "190", "78", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "1.56%", "232", "60", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_text("초/재진");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDeptEd01", "absolute", "7.62%", "233", "78", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "15.82%", "232", "60", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_text("유형");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "15.82%", "190", "60", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_text("등록번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDeptEd02", "absolute", "21.97%", "190", "78", "30", null, null, this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("searchDeptEd04", "absolute", "21.97%", "232", "78", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "30.08%", "234", "60", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_text("입원여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "30.08%", "192", "60", "30", null, null, this);
            obj.set_taborder("25");
            obj.set_text("진료여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("trmtCombo", "absolute", "36.43%", "190", "70", "29", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.style.set_bordertype("normal 0 0");

            obj = new Combo("hosCombo", "absolute", "36.43%", "232", "70", "29", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.style.set_bordertype("normal 0 0");

            obj = new Radio("inoutRadio", "absolute", "10.94%", "279", null, "25", "75.29%", null, this);
            this.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("28");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.set_index("0");

            obj = new Button("searchAttBtn", "absolute", "259", "280", "58", "23", null, null, this);
            obj.set_taborder("30");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("patGrid", "absolute", "11", "321", "425", "366", null, null, this);
            obj.set_taborder("31");
            obj.set_binddataset("dsOutpaReceipt");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;color:black;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#cfd8dcff;color:black;\" text=\"환자번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;color:black;\" text=\"환자명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;color:black;\" text=\"환자유형\"/><Cell col=\"4\" style=\"background:#cfd8dcff;color:black;\" text=\"초/재진여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:patType\"/><Cell col=\"4\" text=\"bind:ntTtYb\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"background:#cfd8dcff;\" text=\"인원\"/><Cell col=\"3\" colspan=\"2\" style=\"background:#cfd8dcff;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("trmtDiv00", "absolute", "45.31%", "64", "542", "645", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Tab("reportTab", "absolute", "46.09%", "80", null, "607", "3.52%", null, this);
            obj.set_taborder("33");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#78909cff");
            obj.style.set_buttonborder("1 solid #455a64ff");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #607d8bff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
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
            obj = new Div("Div05", "absolute", "59.3%", "34", null, "146", "0.97%", null, this.reportTab.med);
            obj.set_taborder("60");
            obj.style.set_bordertype("normal 0 0");
            this.reportTab.med.addChild(obj.name, obj);
            obj = new Tabpage("prscTp", this.reportTab);
            obj.set_text("처방기록");
            this.reportTab.addChild(obj.name, obj);
            obj = new Tabpage("chartTp", this.reportTab);
            obj.set_text("검사기록");
            this.reportTab.addChild(obj.name, obj);
            obj = new Div("chartDiv", "absolute", "0.39%", "2", null, "30", "0.39%", null, this.reportTab.chartTp);
            obj.set_taborder("0");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("TStc");
            this.reportTab.chartTp.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 450, 641, this.trmtDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.trmtDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 542, 645, this.trmtDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.trmtDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 430, 208, this.reportTab.med,
            	//-- Layout function
            	function(p) {
            		p.set_text("진료기록");

            	}
            );
            this.reportTab.med.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.reportTab.chartTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("검사기록");

            	}
            );
            this.reportTab.chartTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.trmtDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.searchAttBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.patGrid.addEventHandler("oncellclick", this.patGrid_oncellclick, this);

        };

        this.loadIncludeScript("SCP_EmrForm.xfdl");

       
    };
}
)();
