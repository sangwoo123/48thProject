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
                this.set_name("SSP_SpecimenAcquisitionMngForm");
                this.set_classname("SSP_SpecimenAcquisitionMngForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1200,750);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSpecimenAcquisitionList</Col><Col id=\"inData\"/><Col id=\"URL\">his::sup/pathology/findSpecimenAcquisitionList.do</Col><Col id=\"callbackFunc\"/><Col id=\"outData\">dsSpecimenAcquisition=dsSpecimenAcquisition</Col></Row><Row><Col id=\"serviceID\">batchSpecimenAcquisitionProcess</Col><Col id=\"URL\">his::sup/pathology/batchSpecimenAcquisitionProcess.do</Col><Col id=\"inData\">dsSpecimenAcquisition=dsSpecimenAcquisition:u</Col><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSpecimenAcquisition", this);
            obj._setContents("<ColumnInfo><Column id=\"clinspeNo\" type=\"STRING\" size=\"256\"/><Column id=\"clinspeReceiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetDate\" type=\"STRING\" size=\"256\"/><Column id=\"bloodgetEmp\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"acquisitionYn\" type=\"STRING\" size=\"256\"/><Column id=\"acquisitionDate\" type=\"STRING\" size=\"256\"/><Column id=\"acquisitionCancelDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.5%", "8", "1183", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.82%", "-4", null, "60", "73.63%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("검체인수관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "1.5%", "75", null, "27", "89.25%", null, this);
            obj.set_taborder("1");
            obj.set_text("검체 접수일자");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("startCal", "absolute", "12.08%", "75", null, "27", "77.17%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Calendar("endCal", "absolute", "25.42%", "75", null, "27", "63.83%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("Static00", "absolute", "23.42%", "77", null, "24", "75.08%", null, this);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("11 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "1094", "72", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("specimenAcquisitionGrid", "absolute", "1.75%", "121", null, "403", "1.42%", null, this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSpecimenAcquisition");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검체접수일자\"/><Cell col=\"2\" text=\"채혈일자\"/><Cell col=\"3\" text=\"채혈자\"/><Cell col=\"4\" text=\"환자등록번호\"/><Cell col=\"5\" text=\"환자명\"/><Cell col=\"6\" text=\"인수확인\"/><Cell col=\"7\" text=\"검체인수일자\"/><Cell col=\"8\" text=\"검체취소일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:clinspeNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:clinspeReceiptDate\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:bloodgetDate\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:bloodgetEmp\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:patNm\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:acquisitionYn\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:acquisitionDate\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:acquisitionCancelDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("receiptConfirmBtn", "absolute", "64.92%", "536", null, "32", "26%", null, this);
            obj.set_taborder("7");
            obj.set_text("검체인수 확인");
            obj.style.set_font("11 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("receiptCancelBtn", "absolute", "75.58%", "536", null, "32", "15.33%", null, this);
            obj.set_taborder("8");
            obj.set_text("검체인수 취소");
            obj.style.set_font("11 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "1088", "536", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1183, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSP_SpecimenAcquisitionMngForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSP_SpecimenAcquisitionMngForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SSP_SpecimenAcquisitionMngForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SSP_SpecimenAcquisitionMngForm.xfdl", "scripts::Scripts.xjs");
        this.registerScript("SSP_SpecimenAcquisitionMngForm.xfdl", function() {
         /********************************************************************************
        *                                                                                *
        * 검체채취 팝업            												     *
        *                                                                                *
        * @Path		    병리 - 검체인수관리	         								 *
        * @Description  검체인수를 관리한다                                   		 *
        * 																				 *
        *																				 *
        * @Author		oss  						                             		 *
        * 									                                             *
        * Created on 2016. 12. 16.                             		                     *
        *									                                             *
        *********************************************************************************/

        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";
        //include "scripts::Scripts.xjs";

        /********************************************************************************
        * 현재날짜 (sYear+sMonth+sDate)
        ********************************************************************************/

        var today = new Date();
        var sYear = today.getFullYear().toString();
        var sMonth = (today.getMonth()+1).toString().padLeft(2,"0");
        var sDate = (today.getDate()).toString().padLeft(2,"0");

        /********************************************************************************
        * 검체인수확인을 위한 검체접수 리스트 조회
        ********************************************************************************/
        this.searchBtn_onclick = function(obj,e)
        {
        	var startDate = this.startCal.value; 
        	var endDate = this.endCal.value;
        	
        	var argument = "startDate='"+startDate+"' endDate='"+endDate+"'";
        	var row = this.dsService.findRow('serviceID' , "findSpecimenAcquisitionList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findSpecimenAcquisitionList", false);
        }

        /********************************************************************************
        * 검체인수확인 버튼 클릭
        ********************************************************************************/
        this.receiptConfirmBtn_onclick = function(obj,e)
        {
        	var selCount = this.specimenAcquisitionGrid.currentrow;
        	this.dsSpecimenAcquisition.setColumn(selCount, "acquisitionYn", "Y");
        	this.dsSpecimenAcquisition.setColumn(selCount, "acquisitionDate", sYear+sMonth+sDate);
        		
        }

        /********************************************************************************
        * 검체인수취소 버튼 클릭
        ********************************************************************************/
        this.receiptCancelBtn_onclick = function(obj,e)
        {
        	var selCount = this.specimenAcquisitionGrid.currentrow;
        	this.dsSpecimenAcquisition.setColumn(selCount, "acquisitionYn", "N");
        	this.dsSpecimenAcquisition.setColumn(selCount, "acquisitionCancelDate", sYear+sMonth+sDate);
        }

        /********************************************************************************
        * 저장 버튼 클릭
        ********************************************************************************/
        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchSpecimenAcquisitionProcess", false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.receiptConfirmBtn.addEventHandler("onclick", this.receiptConfirmBtn_onclick, this);
            this.receiptCancelBtn.addEventHandler("onclick", this.receiptCancelBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);

        };

        this.loadIncludeScript("SSP_SpecimenAcquisitionMngForm.xfdl");

       
    };
}
)();
