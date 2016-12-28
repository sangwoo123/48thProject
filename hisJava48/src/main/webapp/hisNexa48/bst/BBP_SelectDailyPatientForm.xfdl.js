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
                this.set_name("BBP_SelectDailyPatientForm");
                this.set_classname("BBP_SelectDailyPatientForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,774);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelectDailyPatient", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"ibwon\" type=\"STRING\" size=\"256\"/><Column id=\"rk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSelectDailyPatientList</Col><Col id=\"URL\">his::bst/selectDailyPatient/findSelectDailyPatientList.do</Col><Col id=\"outData\">dsSelectDailyPatient=dsSelectDailyPatient</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">SelectDailyPatient_CallbackFunc</Col><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">patNo</Col><Col id=\"data\">환자번호</Col></Row><Row><Col id=\"code\">patNm</Col><Col id=\"data\">성함</Col></Row><Row><Col id=\"code\">age</Col><Col id=\"data\">나이</Col></Row><Row><Col id=\"code\">gender</Col><Col id=\"data\">성별</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSelectDailyPatientCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"ibwon\" type=\"STRING\" size=\"256\"/><Column id=\"rk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "64.75%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("경영통계-환자현황");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 맑은 고딕");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("SearchPatient", "fixed", "22.64%", "64", null, "686", "1.6%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            obj.style.set_color("#b0bec5ff");
            this.addChild(obj.name, obj);
            obj = new Combo("searchWardCombo", "absolute", "37.57%", "11", "140", "28", null, null, this.SearchPatient);
            this.SearchPatient.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("white");
            obj = new Edit("Edit00", "absolute", "501", "11", "262", "28", null, null, this.SearchPatient);
            obj.set_taborder("8");
            obj.set_displaynulltext("입력");
            this.SearchPatient.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "771", "11", "80", "28", null, null, this.SearchPatient);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            this.SearchPatient.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "857", "11", "80", "28", null, null, this.SearchPatient);
            obj.set_taborder("10");
            obj.set_text("재설정");
            obj.set_cssclass("btn_WF_CRUD");
            this.SearchPatient.addChild(obj.name, obj);
            obj = new Grid("PatientGrid", "absolute", "0.74%", "51", null, "627", "0.74%", null, this.SearchPatient);
            obj.set_taborder("12");
            obj.set_binddataset("dsSelectDailyPatient");
            obj.set_autofittype("col");
            obj.set_suppresslevel("sameskip");
            obj.style.set_font("bold 9 맑은 고딕");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"286\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"환자번호\"/><Cell col=\"1\" text=\"성함\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"진료과\"/><Cell col=\"4\" text=\"현황\"/><Cell col=\"5\" text=\"병명\"/></Band><Band id=\"body\" style=\"border:1 solid #888888ff,0 none #888888ff,0 none #888888ff,1 solid #888888ff;selectcolor:#000000ff;cellline:1 solid #888888ff ;cellfont:9 맑은 고딕 Semilight;cellcolor:#000000ff;cellcolor2:#000000ff;\"><Cell style=\"align:center middle;background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;\" text=\"bind:patNo\" suppress=\"1\" suppressalign=\"middle,over\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:patNm\" suppress=\"2\" suppressalign=\"middle,over\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:prescDate\" mask=\"@@@@-@@-@@ \" suppress=\"3\" suppressalign=\"middle,over\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:dept\" suppress=\"4\" suppressalign=\"middle,over\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:ibwon\" wordwrap=\"none\" suppress=\"5\" suppressalign=\"middle,over\"/><Cell col=\"5\" style=\"align:left middle;color:black;color2:black;\" text=\"bind:diseaseNm\" suppress=\"6\" suppressalign=\"middle,over\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.SearchPatient.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "16", "15", "104", "21", null, null, this.SearchPatient);
            obj.set_taborder("13");
            obj.set_text("진료정보 검색");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 돋움");
            this.SearchPatient.addChild(obj.name, obj);

            obj = new Div("SearchPatient00", "fixed", "2.08%", "64", null, "209", "78%", null, this);
            obj.set_taborder("45");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            obj.style.set_color("#b0bec5ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "12", "6", "142", "21", null, null, this.SearchPatient00);
            obj.set_taborder("0");
            obj.set_text("환자 현황 선택");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 돋움");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "6", "33", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("1");
            obj.set_text("종합 현황");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 solid #6477adff,1 solid #6477adff,0 none #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "6", "61", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("2");
            obj.set_text("입원 환자");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 dashed #eeeeeeff,1 solid #6477adff,0 solid #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_shadow("outer 0,1 1 #00000019");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "6", "89", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("3");
            obj.set_text("외진 환자");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 dashed #eeeeeeff,1 solid #6477adff,0 solid #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "6", "173", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("4");
            obj.set_text("재진 환자");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 dashed #eeeeeeff,1 solid #6477adff,1 solid #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "6", "145", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("6");
            obj.set_text("초진 환자");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 dashed #eeeeeeff,1 solid #6477adff,0 solid #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            this.SearchPatient00.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "6", "117", "233", "28", null, null, this.SearchPatient00);
            obj.set_taborder("7");
            obj.set_text("퇴원 환자");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_border("1 dashed #eeeeeeff,1 solid #6477adff,0 solid #6477adff,1 solid #6477adff");
            obj.style.set_bordertype("normal 0 0");
            this.SearchPatient00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "1.92%", "309", null, "310", "78%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_type("monthonly");
            obj.style.set_daysize("40 40");
            obj.style.set_trailingdaycolor("darkgray");
            obj.style.set_displaynulltextcolor("transparent");
            obj.style.set_border("1 solid black");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_tooltiptype("default");
            obj.set_value("null");

            obj = new Static("Static00", "absolute", "1.92%", "277", null, "29", "78%", null, this);
            obj.set_taborder("48");
            obj.style.set_background("#f5f5f5ff");
            obj.style.set_border("0 solid #6477adff,2 solid #aaaaaaff,2 solid #999999ff,0 solid #999999ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "34", "280", "180", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("일자별 환자현황");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_background("URL('theme://img/img_WF_Subtitle1.png') left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "1.92%", "626", null, "123", "78%", null, this);
            obj.set_taborder("51");
            obj.style.set_background("transparent URL('img::graph.jpg') stretch");
            obj.style.set_border("1 solid black");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center top");
            obj.style.set_font("bold 12 나눔바른고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10.88%", "627", null, "28", "78.48%", null, this);
            obj.set_taborder("52");
            obj.set_text("진단치료 현황 차트");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 686, this.SearchPatient,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");
            		p.style.set_color("#b0bec5ff");

            	}
            );
            this.SearchPatient.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 209, this.SearchPatient00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");
            		p.style.set_color("#b0bec5ff");

            	}
            );
            this.SearchPatient00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 774, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("BBP_SelectDailyPatientForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("BBP_SelectDailyPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("BBP_SelectDailyPatientForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 외래환자관리 및 외래진료접수관리                             		        *
        *                                                                   			*
        * @Path			원무 - 환자정보등록									 		*
        * @Description 	환자정보를 등록한다					*
        * @Author		최민하						 								*
        * 									 											*
        * Created on	2015. 6. 16.                           		 					*
        *									 											*
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";

        

        /***************************************************************************************************
        *                                          dsService 호출                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  this.gfnService(" ",false);   
        +-------------------------------------------------------------------------------------------------*/

        
        this.gfnService("findSelectDailyPatientList",false);

        
        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        

        

        /***************************************************************************************************
        *                                         조회조건 EVENT START                                    *
        /*-------------------------------------------------------------------------------------------------+
        >>  onkeyDown EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	this.gfnService("batchPatientProcess",false);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	var swc=this.Div00.searchWardCombo.value;
        	var edit00=this.Edit00.value
        	this.dsPatient.filter("");
        	this.dsPatient.filter(swc+"=="+edit00);  
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.dsPatient.filter("");
        }

        
        this.Button03_onclick = function(obj,e)
        {		
        	var rowCount = this.dsPatient.getRowCount();
        	var patNo=this.dsPatient.getColumn(rowCount-1,"patNo");
        	this.dsPatient.addRow();
        	this.dsPatient.setColumn(rowCount,"patNo",parseInt(patNo)+1);
        }

        

        /***************************************************************************************************
        *                                          그리드 클릭 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        /***************************************************************************************************
        *                                          콜백 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        
        this.SelectDailyPatient_CallbackFunc = function(svcID,ErrorCode,ErrorMsg){

           if (ErrorCode < 1) {
              alert(svcID + "가 처리되지 않았습니다");
           } else {
              alert(svcID + "의 처리가 완료되었습니다");
           }
        }

        

        
        this.Calendar00_ondayclick = function(obj,e)
        {

        	
        if(obj.value==null){obj.value=this.dsSelectDailyPatient.getColumn(this.dsSelectDailyPatient.getRowCount()-1,'prescDate');}
        var day1=obj.value;
        this.dsSelectDailyPatient.filter("");
        this.dsSelectDailyPatient.filter("prescDate=='"+day1+"'");  

        }

        this.Button04_onclick = function(obj,e)
        {
        	this.dsSelectDailyPatient.filter("");
        }

        this.Button05_onclick = function(obj,e)
        {
        this.dsSelectDailyPatient.filter("");
        this.dsSelectDailyPatient.filter("ibwon=='입원'");  
        }

        this.Button06_onclick = function(obj,e)
        {
        	
        this.dsSelectDailyPatient.filter("");
        this.dsSelectDailyPatient.filter("ibwon=='외진'");	
        	
        }

        
        this.Button07_onclick = function(obj,e)
        {
        this.dsSelectDailyPatient.filter("");
        this.dsSelectDailyPatient.filter("ibwon=='퇴원'");
        	
        }

        

        this.Button08_onclick = function(obj,e)
        {
        	this.dsSelectDailyPatient.filter("");
        this.dsSelectDailyPatient.filter("rk=='1'");
        }

        this.Button09_onclick = function(obj,e)
        {
        this.dsSelectDailyPatient.filter("rk>'1'");	
        }

        

        
        this.Button11_onclick = function(obj,e)
        {
        	application.open("modeless", "bst::BBP_highChart.xfdl", this.getOwnerFrame(), {mode:'modeless'}, "", 400, 200);
        }

        

        this.BBP_SelectDailyPatientForm_oninit = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://localhost:8282/his/wc.html");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.BBP_SelectDailyPatientForm_oninit, this);
            this.titleDiv.titleStc.addEventHandler("onclick", this.titleDiv_titleStc_onclick, this);
            this.SearchPatient.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.SearchPatient.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.SearchPatient.PatientGrid.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.SearchPatient00.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.SearchPatient00.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.SearchPatient00.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.SearchPatient00.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.SearchPatient00.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.SearchPatient00.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Calendar00.addEventHandler("ondayclick", this.Calendar00_ondayclick, this);
            this.Calendar00.addEventHandler("onlbuttondown", this.Calendar00_onlbuttondown, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Button11.addEventHandler("onclick", this.Button11_onclick, this);

        };

        this.loadIncludeScript("BBP_SelectDailyPatientForm.xfdl");

       
    };
}
)();
