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
                this.set_name("SSC_OcsPopupForm");
                this.set_classname("SSC_OcsPopupForm");
                this.set_titletext("처방코드 팝업");
                this._setFormPosition(0,0,376,445);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodePopup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findOcsCodeList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findOcsCodeList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCodePopup=dsCodePopup</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "2", null, "53", "1.33%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16.43%", "3", null, "45", "37.6%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("처방코드 조회");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ocsEd", "absolute", "38.56%", "65", null, "25", "13.83%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "7.18%", "65", null, "25", "66.76%", null, this);
            obj.set_taborder("2");
            obj.set_text("처방코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "7.45%", "104", null, "331", "3.99%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCodePopup");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"222\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" style=\"font:8 arial;\" text=\"bind:codeName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "86.97%", "64", null, "27", "3.99%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
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
            obj = new Layout("default", "", 376, 445, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_OcsPopupForm");
            		p.set_titletext("처방코드 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_OcsPopupForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SSC_OcsPopupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 처방코드 팝업                                                    	*
        *                                                                               *
        * @Path		                       	                        					*
        * @Description 									   								*
        * @Author	    박상우					                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::commonTransaction.xjs"; 

        // 공통 변수
        var rsltDeptCd

        
        // 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	var ocs = this.ocsEd.value;
        	var argument = 'rsltDeptCd='+rsltDeptCd+' ocs='+ocs;
        	
        	
        	var row = this.dsService.findRow("serviceID", "findOcsCodeList");
        	this.dsService.setColumn(row,"argument",argument);

        	this.gfnService("findOcsCodeList", false);	
        }

        //  
        this.codeGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	
        	arrRtn[0] = this.dsCodePopup.getColumn(e.row,"code");
        	arrRtn[1] = this.dsCodePopup.getColumn(e.row,"codeName");

        	this.opener.setCode(this.parent.code,arrRtn);

        	this.close();	
        }

        // 화면 로드시
        this.SSC_OcsPopupForm_onload = function(obj,e)
        {
        	rsltDeptCd= this.parent.rsltDeptCd;
        	
        	var row = this.dsService.findRow("serviceID", "findOcsCodeList");
        	this.dsService.setColumn(row,"argument","rsltDeptCd="+rsltDeptCd);

        	this.gfnService("findOcsCodeList", false);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SSC_OcsPopupForm_onload, this);
            this.codeGrid.addEventHandler("oncelldblclick", this.codeGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_OcsPopupForm.xfdl");

       
    };
}
)();
