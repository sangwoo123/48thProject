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
                this.set_name("SSC_SynthesisCheckupCheckTypeForm");
                this.set_classname("SSC_SynthesisCheckupCheckTypeForm");
                this.set_titletext("종합검진 검사종류 관리화면");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBindCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC035</Col><Col id=\"dsName\">dsOcsDivCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOcsDivCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">사용</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSynthesisCheckupCheckTypeList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findSynthesisCheckupCheckTypeList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsScct=dsScct</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">batchSynthesisCheckupCheckType</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchSynthesisCheckupCheckType.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsScct=dsScct:u</Col><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsScct", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.51%", "3", null, "45", "71.79%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 검사관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "2.25%", "118", null, "618", "35.84%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsScct");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"183\"/><Column size=\"66\"/><Column size=\"229\"/><Column size=\"53\"/><Column size=\"89\"/><Column size=\"53\"/><Column size=\"40\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"처방코드\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"처방명\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"OCS구분\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"결과부서\"/><Cell col=\"6\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell col=\"7\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"사용\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" text=\"bind:ocsCd\"/><Cell col=\"3\" style=\"font:8 arial;\" text=\"bind:ocsNm\"/><Cell col=\"4\" text=\"bind:ocsDivCd\"/><Cell col=\"5\" text=\"bind:rsltDeptNm\"/><Cell col=\"6\" text=\"bind:amt\"/><Cell col=\"7\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("inspNameEdit", "absolute", "33.01%", "72", null, "25", "55.86%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "24.12%", "72", null, "25", "67.87%", null, this);
            obj.set_taborder("5");
            obj.set_text("검사명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("inspCodeEdit", "absolute", "10.84%", "72", null, "25", "77.93%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.25%", "72", null, "25", "89.75%", null, this);
            obj.set_taborder("7");
            obj.set_text("검사코드");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "65.2%", "174", null, "301", "1.52%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "66.08%", "191", null, "283", "2.64%", null, this);
            obj.set_taborder("9");
            obj.style.set_border("0 none #808080ff");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "3.32%", "18", null, "25", "69.82%", null, this.compBox);
            obj.set_taborder("71");
            obj.set_text("검사코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "3.32%", "98", null, "25", "69.31%", null, this.compBox);
            obj.set_taborder("72");
            obj.set_text("처방코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "3.32%", "58", null, "25", "69.31%", null, this.compBox);
            obj.set_taborder("73");
            obj.set_text("결과부서");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "51.56%", "175", null, "25", "29.06%", null, this.compBox);
            obj.set_taborder("74");
            obj.set_text("사용금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "3.44%", "216", null, "25", "76.88%", null, this.compBox);
            obj.set_taborder("75");
            obj.set_text("사용여부");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "3.32%", "175", null, "25", "76.98%", null, this.compBox);
            obj.set_taborder("76");
            obj.set_text("OCS구분");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("ocsSearchBtn", "absolute", "89.06%", "98", null, "26", "2.81%", null, this.compBox);
            obj.set_taborder("77");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("rsltDeptSearchBtn", "absolute", "89.06%", "58", null, "26", "2.81%", null, this.compBox);
            obj.set_taborder("78");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("useYnCombo", "absolute", "24.06%", "216", null, "25", "50.31%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("79");
            obj.set_innerdataset("dsUseYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("ocsDivCombo", "absolute", "24.38%", "175", null, "25", "50%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_innerdataset("dsOcsDivCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("compCheck").set("EsCombo");
            obj = new Edit("amtEd", "absolute", "72.19%", "175", null, "25", "3.44%", null, this.compBox);
            obj.set_taborder("81");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsCodeEd", "absolute", "31.87%", "98", null, "25", "47.5%", null, this.compBox);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsNameEd", "absolute", "53.44%", "98", null, "25", "12.19%", null, this.compBox);
            obj.set_taborder("83");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsltDeptNameEd", "absolute", "53.44%", "58", null, "25", "12.19%", null, this.compBox);
            obj.set_taborder("84");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsltDeptCodeEd", "absolute", "31.97%", "58", null, "25", "47.57%", null, this.compBox);
            obj.set_taborder("85");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("inpsNameEd", "absolute", "53.44%", "18", null, "25", "3.44%", null, this.compBox);
            obj.getSetter("compCheck").set("EsEd");
            obj.set_taborder("86");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("inpsCodeEd", "absolute", "31.97%", "18", null, "25", "47.57%", null, this.compBox);
            obj.set_taborder("87");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "73.12%", "483", null, "45", "0.8%", null, this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "transparent");
            this.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "46.84%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "81.65%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("updateBtn", "absolute", "64.24%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "747", "72", "58", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#90a4aeff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "65.2%", "118", null, "40", "1.52%", null, this);
            obj.set_taborder("12");
            obj.set_text("검사종류 추가/수정");
            obj.style.set_background("#78909cff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 11 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 392, 264, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_border("0 none #808080ff");
            		p.set_enableevent("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 317, 50, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_enable("false");
            		p.style.setStyleValue("background", "disabled", "transparent");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_SynthesisCheckupCheckTypeForm");
            		p.set_titletext("종합검진 검사종류 관리화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.inpsNameEd","value","dsScct","inspNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.inpsCodeEd","value","dsScct","inspCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.rsltDeptCodeEd","value","dsScct","rsltDeptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.rsltDeptNameEd","value","dsScct","rsltDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.ocsNameEd","value","dsScct","ocsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.ocsCodeEd","value","dsScct","ocsCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.ocsDivCombo","value","dsScct","ocsDivCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.useYnCombo","value","dsScct","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.amtEd","value","dsScct","amt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_SynthesisCheckupCheckTypeForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupCheckTypeForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SSC_SynthesisCheckupCheckTypeForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 검사관리                                                *
        *                                                                               *
        * @Path		    scripts-commonScript                   	                        *
        * @Description 	공통스크립트의 모음										   	*
        * @Author	    박상우					                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        
        var editFlag = false;

        

        

        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	this.btnBox.set_enable(true);
        	
        	var inspCd = this.inspCodeEdit.value;
        	var inspNm = this.inspNameEdit.value;
        	
        	var argument = "inspCd='"+inspCd+"' inspNm='"+inspNm+"'";
        	
        	//alert(argument);
        	var row = this.dsService.findRow("serviceID", "findSynthesisCheckupCheckTypeList");

        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findSynthesisCheckupCheckTypeList", false);

        	editFlag = false;
        }

        // 결과부서 팝업
        this.rsltDeptSearchBtn_onclick = function(obj,e)
        {
        	var param = {code:"SC036"};
        	this.gfnPopup("CM_CodepopupForm","com",param,"supCallBackFunc");
        }

        

        // 처방코드 팝업
        this.ocsSearchBtn_onclick = function(obj,e)
        {
        	var rsltDeptCd = this.dsScct.getColumn(this.dsScct.rowposition, "rsltDeptCd");
        	var param = {rsltDeptCd:rsltDeptCd};
        	
        	this.gfnPopup("SSC_OcsPopupForm","sup",param);
        }

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	if(code=="SC036"){
        		this.compBox.rsltDeptCodeEd.set_value(arrRtn[0]);
        		this.compBox.rsltDeptNameEd.set_value(arrRtn[1]);
        	}else{
        		this.compBox.ocsCodeEd.set_value(arrRtn[0]);
        		this.compBox.ocsNameEd.set_value(arrRtn[1]);
        	}
        }

        //코드 바인드
        this.SSC_SynthesisCheckupCheckTypeForm_onload = function(obj,e)
        {
        	this.gfnBind();	
        }

        // 추가
        this.btnBox_addBtn_onclick = function(obj,e)
        {
        	if(editFlag == true)
        	{
        		if(!this.supCheckMdData(this.compBox))			
        		{
        			return;
        		}	
        	}
        	
        	this.dsScct.addRow();
        	this.compBox.set_enable(true);
        		
        		
        }

        
        // 수정
        this.btnBox_updateBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(true);
        	editFlag = true;
        }

        // 저장
        this.btnBox_saveBtn_onclick = function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchSynthesisCheckupCheckType",false);
        	}
        	
        	this.searchBtn_onclick(null,null);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SSC_SynthesisCheckupCheckTypeForm_onload, this);
            this.inspGrid.addEventHandler("onsetfocus", this.inspGrid_onsetfocus, this);
            this.compBox.ocsSearchBtn.addEventHandler("onclick", this.ocsSearchBtn_onclick, this);
            this.compBox.rsltDeptSearchBtn.addEventHandler("onclick", this.rsltDeptSearchBtn_onclick, this);
            this.btnBox.addBtn.addEventHandler("onclick", this.btnBox_addBtn_onclick, this);
            this.btnBox.saveBtn.addEventHandler("onclick", this.btnBox_saveBtn_onclick, this);
            this.btnBox.updateBtn.addEventHandler("onclick", this.btnBox_updateBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_SynthesisCheckupCheckTypeForm.xfdl");

       
    };
}
)();
