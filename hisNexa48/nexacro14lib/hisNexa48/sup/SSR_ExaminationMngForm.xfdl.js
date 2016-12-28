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
                this.set_name("SSR_ExaminationMngForm");
                this.set_classname("SSP_ExaminationMngForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1261,779);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNewonGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col><Col id=\"code\">A</Col></Row><Row><Col id=\"value\">외래</Col><Col id=\"code\">F</Col></Row><Row><Col id=\"value\">입원</Col><Col id=\"code\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsExamType", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">내시경</Col><Col id=\"code\">endoscope</Col></Row><Row><Col id=\"value\">영상의학</Col><Col id=\"code\">radiology</Col></Row><Row><Col id=\"value\">진단검사의학</Col><Col id=\"code\">diagnosis</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findBookingExamList</Col><Col id=\"URL\">his::sup/bookingexam/findBookingExamList.do</Col><Col id=\"outData\">dsBookingExam=dsBookingExam</Col></Row><Row><Col id=\"serviceID\">batchBookingExamProcess</Col><Col id=\"URL\">his::sup/bookingexam/batchBookingExamProcess.do</Col><Col id=\"inData\">dsBookingExam=dsBookingExam:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBookingExam", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"newonGubun\" type=\"STRING\" size=\"256\"/><Column id=\"examType\" type=\"STRING\" size=\"256\"/><Column id=\"reservationDate\" type=\"STRING\" size=\"256\"/><Column id=\"reservationTime\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.48%", "8", "1670", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.68%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("검사예약관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.98%", "81", null, "32", "89.85%", null, this);
            obj.set_taborder("1");
            obj.set_text("환자등록번호");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "136", "81", null, "32", "1024", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20.38%", "81", null, "32", "73.67%", null, this);
            obj.set_taborder("3");
            obj.set_text("환자이름");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "27.04%", "81", null, "32", "65.03%", null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "36.88%", "81", null, "32", "57.18%", null, this);
            obj.set_taborder("5");
            obj.set_text("내원구분");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "60.35%", "81", null, "32", "33.7%", null, this);
            obj.set_taborder("9");
            obj.set_text("검사종류");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("searchExamBtn", "absolute", "75.42%", "128", null, "32", "18.16%", null, this);
            obj.set_taborder("10");
            obj.set_text(" 예약조회 ");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("reservationDateCal", "absolute", "136", "130", null, "32", "973", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.style.set_align("center middle");

            obj = new Static("Static04", "absolute", "1.98%", "129", null, "32", "89.85%", null, this);
            obj.set_taborder("16");
            obj.set_text("예약일자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("registBtn", "absolute", "89.37%", "128", null, "32", "4.2%", null, this);
            obj.set_taborder("17");
            obj.set_text(" 예약등록 ");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("newonGubunRadio", "absolute", "44.09%", "81", null, "32", "40.36%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@dsNewonGubun");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_columncount("3");

            obj = new Radio("examTypeRadio", "absolute", "67.57%", "81", null, "32", "9.91%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@dsExamType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_columncount("3");

            obj = new Grid("examReservationGrid", "absolute", "24", "176", null, "568", "52", null, this);
            obj.set_taborder("21");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBookingExam");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자등록번호\"/><Cell col=\"1\" text=\"환자명\"/><Cell col=\"2\" text=\"내원구분\"/><Cell col=\"3\" text=\"검사종류\"/><Cell col=\"4\" text=\"예약일자\"/><Cell col=\"5\" text=\"예약시간\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:patNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:newonGubun\" combodataset=\"dsNewonGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:examType\" combodataset=\"dsExamType\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"4\" displaytype=\"date\" style=\"align:center;\" text=\"bind:reservationDate\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:reservationTime\" mask=\"## : ##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "2.62%", "593", null, "32", "89.21%", null, this);
            obj.set_taborder("23");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("11 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("modifyExamBtn", "absolute", "82.39%", "128", null, "32", "11.18%", null, this);
            obj.set_taborder("24");
            obj.set_text(" 예약수정");
            obj.style.set_font("10 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1670, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1261, 779, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSP_ExaminationMngForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSR_ExaminationMngForm.xfdl", "scripts::commonTransaction.xjs");
        this.addIncludeScript("SSR_ExaminationMngForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSR_ExaminationMngForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 검사예약관리     															*
        *                                                                               *
        * @Path		    검사예약 - 검사예약관리 										*
        *																				*
        * @Description 	감사를 하기 위해 검사예약을 관리한다                    	*
        *               																*
        * @Author	    oss    		     				                                *
        * 									                                            *
        * Created on 2016. 12. 16.                            		                    *
        *									                                            *
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonTransaction.xjs";
        //include "scripts::commonScripts.xjs";

        /***************************************************************************************************
        * 환자번호 검색을 위한 팝업창 오픈                                                                   
        ***************************************************************************************************/
        this.patNoEd_oneditclick = function(obj,e)
        {
        	this.gfnPopup("WS_PatPopupForm","hdm","","");
        	this.setPatInfo = function(arrRtn){ 
        		this.patNoEd.set_value(arrRtn[0]);  
        		this.patNmEd.set_value(arrRtn[1]);  									
        	}
        }

        /***************************************************************************************************
        * 검사예약조회                                                                   
        ***************************************************************************************************/
        this.searchExamBtn_onclick = function(obj,e)
        {
        	var patNo = this.patNoEd.value;
        	var patNm = this.patNmEd.value;
        	var newonGubun = this.newonGubunRadio.value;
        	var examType = this.examTypeRadio.value;
        	var reservationDate = this.reservationDateCal.value;
        	
        	if(patNo == null){
        		alert("환자등록번호를 선택해 주십시요");
        	}else{
        		var argument = "patNo='"+patNo+"' patNm='"+patNm+"' newonGubun='"+newonGubun+"' examType='"+examType
        						+"' reservationDate='"+reservationDate+"'";
        		var row = this.dsService.findRow('serviceID' , "findBookingExamList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findBookingExamList", false); 
        	}
        }

        /***************************************************************************************************
        * 검사예약등록 팝업창 오픈                                                                 
        ***************************************************************************************************/
        this.registBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("SSP_ExaminationRegisterForm","sup","","");
        }

        /***************************************************************************************************
        * 검사예약수정                                                                 
        ***************************************************************************************************/
        this.modifyExamBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchBookingExamProcess", false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.patNoEd.addEventHandler("oneditclick", this.patNoEd_oneditclick, this);
            this.searchExamBtn.addEventHandler("onclick", this.searchExamBtn_onclick, this);
            this.registBtn.addEventHandler("onclick", this.registBtn_onclick, this);
            this.modifyExamBtn.addEventHandler("onclick", this.modifyExamBtn_onclick, this);

        };

        this.loadIncludeScript("SSR_ExaminationMngForm.xfdl");

       
    };
}
)();
