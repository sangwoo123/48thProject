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
                this.set_name("SSC_PackgePopupForm");
                this.set_classname("SSC_PackgePopupForm");
                this.set_titletext("패키지 선택 팝업창");
                this._setFormPosition(0,0,628,528);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGenderCd", this);
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

            obj = new Dataset("dsPck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"genderCd\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPckList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findPckList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPck=dsPck</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.33%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "9.74%", "3", null, "45", "63.04%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 패키지 선택");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "4.61%", "66", null, "25", "72.7%", null, this);
            obj.set_taborder("1");
            obj.set_text("패키지코드/명");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("pckCdEd", "absolute", "28.34%", "66", null, "25", "26.43%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("pckGrid", "absolute", "4.61%", "109", null, "403", "1.32%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPck");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"205\"/><Column size=\"62\"/><Column size=\"80\"/><Column size=\"57\"/><Column size=\"50\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"패키지코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"패키지명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진구분\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:pckCd\"/><Cell col=\"1\" text=\"bind:pckNm\"/><Cell col=\"2\" text=\"bind:genderCd\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:amt\"/><Cell col=\"4\" text=\"bind:inspDivCd\"/><Cell col=\"5\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("pckSearchBtn", "absolute", "88.06%", "66", null, "25", "1.27%", null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.style.set_background("@gradation");
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
            obj = new Layout("default", "", 628, 528, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_PackgePopupForm");
            		p.set_titletext("패키지 선택 팝업창");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_PackgePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSC_PackgePopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"; 

        // 코드 바인드
        this.SSC_PackgePopupForm_onload = function(obj,e)
        {
        	this.gfnBind();
        	this.pckSearchBtn_onclick(null,null);
        }

        // 조회
        this.pckSearchBtn_onclick = function(obj,e)
        {
        	var pckCd = this.pckCdEd.value;
        	var useYn = 'Y';
        	var argument = 'pckCd='+pckCd+' useYn='+useYn;
        	this.dsService.setColumn(0, "argument", argument);
        	
        	this.gfnService("findPckList");	
        }

        /* 그리드 클릭 */ 
        this.pckGrid_oncelldblclick = function(obj,e)
        {

        	var pckCd = this.dsPck.getColumn(e.row, "pckCd");
        	var pckNm = this.dsPck.getColumn(e.row, "pckNm");
        	var amt =  this.dsPck.getColumn(e.row, "amt");

        	var pckArr = [pckCd, pckNm, amt];
        	
        	this.opener.pckCode(pckArr);

        	this.close();
        	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SSC_PackgePopupForm_onload, this);
            this.pckGrid.addEventHandler("oncelldblclick", this.pckGrid_oncelldblclick, this);
            this.pckSearchBtn.addEventHandler("onclick", this.pckSearchBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_PackgePopupForm.xfdl");

       
    };
}
)();
