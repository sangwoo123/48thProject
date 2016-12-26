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
                this.set_name("SSR_ExaminationRegisterForm");
                this.set_classname("SSP_ExaminationRegisterForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,500,618);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNewonGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col><Col id=\"code\">A</Col></Row><Row><Col id=\"value\">외래</Col><Col id=\"code\">F</Col></Row><Row><Col id=\"value\">입원</Col><Col id=\"code\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExamType", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">내시경</Col><Col id=\"code\">endoscope</Col></Row><Row><Col id=\"value\">영상의학</Col><Col id=\"code\">radiology</Col></Row><Row><Col id=\"value\">진단검사의학</Col><Col id=\"code\">diagnosis</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBookingExam", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"newonGubun\" type=\"STRING\" size=\"256\"/><Column id=\"examType\" type=\"STRING\" size=\"256\"/><Column id=\"reservationDate\" type=\"STRING\" size=\"256\"/><Column id=\"reservationTime\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchBookingExamProcess</Col><Col id=\"URL\">his::sup/bookingexam/batchBookingExamProcess.do</Col><Col id=\"inData\">dsBookingExam=dsBookingExam:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.4%", "8", "494", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "11.34%", "-4", null, "60", "50.2%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("검사예약등록");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "22", "81", "105", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_text("환자등록번호");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "140", "81", "107", "32", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "56%", "81", null, "32", "27%", null, this);
            obj.set_taborder("3");
            obj.set_text("환자이름");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "75.6%", "81", "107", "32", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "22", "129", "105", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_text("내원구분");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("newonGubunRadio", "absolute", "28.8%", "129", "196", "32", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_innerdataset("@dsNewonGubun");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("Static03", "absolute", "22", "177", "105", "32", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검사종류");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("examTypeRadio", "absolute", "28.8%", "177", null, "32", "8.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_columncount("3");
            obj.set_innerdataset("@dsExamType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("Static04", "absolute", "22", "225", "105", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("예약일자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("reservationDateCal", "absolute", "140", "225", "156", "32", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.style.set_align("center middle");

            obj = new Static("Static05", "absolute", "22", "273", "105", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_text("예약시간");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("reservationTimeMaskEd", "absolute", "140", "273", "107", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_mask("## : ##");
            obj.set_type("string");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "22", "321", "105", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_text("메모");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("memoArea", "absolute", "4%", "368", null, "185", "3.8%", null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "81.6%", "569", null, "32", "4%", null, this);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("registBtn", "absolute", "65.6%", "569", null, "32", "20%", null, this);
            obj.set_taborder("16");
            obj.set_text("등록");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 494, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 618, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSP_ExaminationRegisterForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSR_ExaminationRegisterForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SSR_ExaminationRegisterForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSR_ExaminationRegisterForm.xfdl", function() {
        /************************************************************************************
        *                                                                               	*
        * 환자번호 선택 팝업																*
        *                                                                              		*
        * @Path		    검사예약 - 검사예약관리 팝업										*
        *																					*
        * @Description 	검사예약 관리에 필요한 환자정보를 선택하기 위한 팝업 	        *
        *               																	*
        * @Author	    oss     						                                	*
        * 									                                            	*
        * Created on 2016. 12. 16.                            		                    	*
        *									                                           	 	*
        ************************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";

        /**************************************************************************************************
        * 환자등록번호, 환자명 검색                                                                    *
        ***************************************************************************************************/
        this.patNoEd_oneditclick = function(obj,e)
        {
        	this.gfnPopup("WS_PatPopupForm","hdm","","");
        	this.setPatInfo = function(arrRtn){ 
        		this.patNoEd.set_value(arrRtn[0]);  
        		this.patNmEd.set_value(arrRtn[1]);  									
        	}
        }

        /**************************************************************************************************
        * 검사예약 등록                                                                                 *
        ***************************************************************************************************/
        this.registBtn_onclick = function(obj,e)
        {
        	this.dsBookingExam.addRow();
        	
        	var patNo = this.patNoEd.value;
        	var patNm = this.patNmEd.value;
        	var newonGubun = this.newonGubunRadio.value;
        	var examType = this.examTypeRadio.value;
        	var reservationDate = this.reservationDateCal.value;
        	var reservationTime = this.reservationTimeMaskEd.value;
        	var memo = this.memoArea.value;
        	
        	this.dsBookingExam.setColumn(0, "patNo", patNo);
        	this.dsBookingExam.setColumn(0, "patNm", patNm);
        	this.dsBookingExam.setColumn(0, "newonGubun", newonGubun);
        	this.dsBookingExam.setColumn(0, "examType", examType);
        	this.dsBookingExam.setColumn(0, "reservationDate", reservationDate);
        	this.dsBookingExam.setColumn(0, "reservationTime", reservationTime);
        	this.dsBookingExam.setColumn(0, "memo", memo);
        	
        	this.gfnService("batchBookingExamProcess", "false");

        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.patNoEd.addEventHandler("oneditclick", this.patNoEd_oneditclick, this);
            this.registBtn.addEventHandler("onclick", this.registBtn_onclick, this);

        };

        this.loadIncludeScript("SSR_ExaminationRegisterForm.xfdl");

       
    };
}
)();
