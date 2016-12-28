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
                this.set_name("SSC_DetailsCheckupForm");
                this.set_classname("SSC_DetailsCheckupForm");
                this.set_titletext("세부검사 항목관리 화면");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsDtcu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtInspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtInspNm\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsCd\" type=\"STRING\" size=\"256\"/><Column id=\"ocsNm\" type=\"STRING\" size=\"256\"/><Column id=\"refHighFig\" type=\"STRING\" size=\"256\"/><Column id=\"refLowFig\" type=\"STRING\" size=\"256\"/><Column id=\"runYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSimpleCheckupList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findSimpleCheckupList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsScct=dsScct</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findDetailsCheckupList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findDetailsCheckupList.do</Col><Col id=\"outData\">dsDtcu=dsDtcu</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">batchDetailsCheckup</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchDetailsCheckup.do</Col><Col id=\"inData\">dsDtcu=dsDtcu:u</Col><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRunYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">Y</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC031</Col><Col id=\"dsName\">dsGenderCd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.51%", "3", null, "45", "71.79%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 세부항목 검사관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "38.16%", "519", null, "185", "2.4%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "39.52%", "532", null, "145", "4%", null, this);
            obj.set_taborder("3");
            obj.style.set_border("0 none #808080ff");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "70.96%", "18", null, "28", "18.27%", null, this.compBox);
            obj.set_taborder("33");
            obj.set_text("성별");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "70.96%", "60", null, "28", "18.27%", null, this.compBox);
            obj.set_taborder("34");
            obj.set_text("검사여부");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("runYnEd", "absolute", "82.86%", "60", null, "28", "1.13%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("dsRunYN");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("genderCombo", "absolute", "82.86%", "18", null, "28", "1.13%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Div("Div08", "absolute", "70.96%", "102", null, "28", "18.27%", null, this.compBox);
            obj.set_taborder("37");
            obj.set_text("단위");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("unitEd", "absolute", "82.86%", "102", null, "28", "1.13%", null, this.compBox);
            obj.set_taborder("38");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("ocsSearchBtn", "absolute", "63.17%", "60", null, "28", "32.29%", null, this.compBox);
            obj.set_taborder("39");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "1.27%", "102", null, "28", "83.85%", null, this.compBox);
            obj.set_taborder("40");
            obj.set_text("참고치(하/상)");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "1.27%", "60", null, "28", "83.85%", null, this.compBox);
            obj.set_taborder("41");
            obj.set_text("OCS코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsCodeEd", "absolute", "17.56%", "60", null, "28", "67.85%", null, this.compBox);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("refLowFigEd", "absolute", "17.56%", "102", null, "28", "58.92%", null, this.compBox);
            obj.set_taborder("43");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("refHighFigEd", "absolute", "41.64%", "102", null, "28", "32.58%", null, this.compBox);
            obj.set_taborder("44");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ocsNameEd", "absolute", "33%", "60", null, "28", "37.39%", null, this.compBox);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("dtInpsNameEd", "absolute", "32.86%", "18", null, "28", "32.58%", null, this.compBox);
            obj.set_taborder("46");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("dtInpsCodeEd", "absolute", "17.56%", "18", null, "28", "67.85%", null, this.compBox);
            obj.set_taborder("47");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "1.27%", "18", null, "28", "83.85%", null, this.compBox);
            obj.set_taborder("48");
            obj.set_text("세부코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);

            obj = new Grid("dtInspGrid", "absolute", "38.16%", "110", null, "399", "2.4%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDtcu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"165\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"세부검사코드\"/><Cell col=\"1\" rowspan=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"세부검사명\"/><Cell col=\"2\" rowspan=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"OCS코드\"/><Cell col=\"3\" rowspan=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#b0bec5ff;background2:#b0bec5ff;font:10 돋움;\" text=\"참고치\"/><Cell col=\"6\" rowspan=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/></Band><Band id=\"body\"><Cell text=\"bind:dtInspCd\"/><Cell col=\"1\" text=\"bind:dtInspNm\"/><Cell col=\"2\" text=\"bind:ocsCd\"/><Cell col=\"3\" text=\"bind:genderCd\"/><Cell col=\"4\" text=\"bind:refLowFig\"/><Cell col=\"5\" text=\"bind:refHighFig\"/><Cell col=\"6\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "2.32%", "110", null, "623", "62.8%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsScct");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"325\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.24%", "71", null, "28", "92.32%", null, this);
            obj.set_taborder("6");
            obj.set_text("검사코드");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("inspCodeEdit", "absolute", "8.16%", "71", null, "28", "84.16%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "16.48%", "71", null, "28", "78.48%", null, this);
            obj.set_taborder("8");
            obj.set_text("검사명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("inspNameEdit", "absolute", "22%", "71", null, "28", "65.52%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "34.8%", "71", null, "28", "62.64%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "72.24%", "707", null, "45", "1.68%", null, this);
            obj.set_taborder("11");
            obj.style.setStyleValue("background", "disabled", "transparent");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Button("addBtn", "absolute", "46.93%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "81.6%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #c2c2c2ff");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("updateBtn", "absolute", "64.11%", "8", "50", "25", null, null, this.btnBox);
            obj.set_taborder("5");
            obj.set_text("수정");
            obj.style.set_background("@gradation");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.btnBox.addChild(obj.name, obj);


            
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
            		p.set_taborder("3");
            		p.style.set_border("0 none #808080ff");
            		p.set_enable("false");
            		p.set_enableevent("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 317, 50, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.setStyleValue("background", "disabled", "transparent");
            		p.set_enable("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_DetailsCheckupForm");
            		p.set_titletext("세부검사 항목관리 화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_DetailsCheckupForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SSC_DetailsCheckupForm.xfdl", "scripts::commonPopup.xjs");
        this.addIncludeScript("SSC_DetailsCheckupForm.xfdl", "scripts::commonBind.xjs");
        this.addIncludeScript("SSC_DetailsCheckupForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SSC_DetailsCheckupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 세부검사관리                                            *
        *                                                                               *
        * @Path		                	                        						*
        * @Description 										   							*
        * @Author	    박상우					                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonPopup.xjs";	
        //include "scripts::commonBind.xjs";
        //include "scripts::supScripts.xjs";

        
        // 공통 변수
        var enableState = false;

        

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var inspCd = this.inspCodeEdit.value;
        	var inspNm = this.inspNameEdit.value;
        	
        	var argument = "inspCd='"+inspCd+"' inspNm='"+inspNm+"'";
        	
        	//alert(argument);
        	var row = this.dsService.findRow("serviceID", "findSimpleCheckupList");

        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findSimpleCheckupList", false);

        	enableState = false;
        	this.btnBox.set_enable(true);
        }

        // 세부조회
        this.dsInsp_onrowposchanged = function(obj,e)
        {
        	var argument = "inspCd='"+obj.getColumn(e.newrow , "inspCd")+"'";
        	var row = this.dsService.findRow("serviceID", "findDetailsCheckupList");
        	
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findDetailsCheckupList", false);
        }

        
        // 처방코드 팝업
        this.ocsSearchBtn_onclick = function(obj,e)
        {
        	var rsltDeptCd = this.dsScct.getColumn(this.dsScct.rowposition, "rsltDeptCd");
        	var param = {rsltDeptCd:rsltDeptCd};
        	
        	this.gfnPopup("SSC_OcsPopupForm","sup",param,"supCallBackFunc");
        }	

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	this.compBox.ocsCodeEd.set_value(arrRtn[0]);
        	this.compBox.ocsNameEd.set_value(arrRtn[1]);
        }

        this.compBox_runYnEd_onitemclick = function(obj,e)
        {
        	alert(obj.value);
        	alert(obj.text);
        }

        //코드 바인드
        this.SSC_DetailsCheckupForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        

        // 추가
        this.btnBox_addBtn_onclick = function(obj,e)
        {
        	if(this.dsScct.rowposition == -1){
        		alert(this.MSG_SUP_ADD);	
        		return;
        	}else{
        		if (enableState == true){
        			if(!this.supCheckMdData(this.compBox)){
        				return;
        			}
        		}
        	}

        	this.dsDtcu.addRow();
        	this.compBox.set_enable(true);
        	
        	this.dsDtcu.setColumn(this.dsDtcu.rowposition, "inspCd",
        							this.dsScct.getColumn(this.dsScct.rowposition, "inspCd"));						
        		
        	//this.fn_setUserData(this.dsDtInsp);
        	enableState = true;
        }

        // 저장
        this.btnBox_saveBtn_onclick = function(obj,e)
        {
        		if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchDetailsCheckup");
        		enableState = false;
        	}
        	this.searchBtn_onclick(null,null);
        }

        
        // 수정
        this.btnBox_updateBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(true);
        	enableState = true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsScct.addEventHandler("onrowposchanged", this.dsInsp_onrowposchanged, this);
            this.dsDtcu.addEventHandler("oncolumnchanged", this.dlDtlInsp_oncolumnchanged, this);
            this.addEventHandler("onload", this.SSC_DetailsCheckupForm_onload, this);
            this.compBox.runYnEd.addEventHandler("onitemclick", this.compBox_runYnEd_onitemclick, this);
            this.compBox.ocsSearchBtn.addEventHandler("onclick", this.ocsSearchBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.btnBox.addBtn.addEventHandler("onclick", this.btnBox_addBtn_onclick, this);
            this.btnBox.saveBtn.addEventHandler("onclick", this.btnBox_saveBtn_onclick, this);
            this.btnBox.updateBtn.addEventHandler("onclick", this.btnBox_updateBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_DetailsCheckupForm.xfdl");

       
    };
}
)();
