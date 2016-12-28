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
                this.set_name("SN_CarteMgtForm");
                this.set_classname("SN_CarteMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDietSeparateCodeList</Col><Col id=\"URL\">his::msv/sup/hosptalDiet/findDietSeparateCodeList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findCarteList</Col><Col id=\"URL\">his::msv/sup/hosptalDiet/findCarteList.do</Col><Col id=\"outData\">dsCarte=dsCarte</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"inData\">[Undefined]</Col></Row><Row><Col id=\"serviceID\">findDCarteList</Col><Col id=\"URL\">his::msv/sup/hosptalDiet/findDCarteList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsDCarte=dsDCarte</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchCarteProcess</Col><Col id=\"URL\">his::msv/sup/hosptalDiet/batchCarteProcess.do</Col><Col id=\"inData\">dsBreakfast=dsBreakfast:U dsLunch=dsLunch:U dsDinner=dsDinner:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBreakfast", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsLunch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDinner", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCarte", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"carteDate\" type=\"STRING\" size=\"256\"/><Column id=\"carteTime\" type=\"STRING\" size=\"256\"/><Column id=\"rNum\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDCarte", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"breakfast1\" type=\"STRING\" size=\"256\"/><Column id=\"lunch1\" type=\"STRING\" size=\"256\"/><Column id=\"dinner1\" type=\"STRING\" size=\"256\"/><Column id=\"breakfast2\" type=\"STRING\" size=\"256\"/><Column id=\"lunch2\" type=\"STRING\" size=\"256\"/><Column id=\"dinner2\" type=\"STRING\" size=\"256\"/><Column id=\"breakfast3\" type=\"STRING\" size=\"256\"/><Column id=\"lunch3\" type=\"STRING\" size=\"256\"/><Column id=\"dinner3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "2.15%", "407", null, "318", "2.34%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "1.95%", "61", null, "338", "2.54%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);
            obj = new Grid("breakfastGrid", "absolute", "1.33%", "82", null, "218", "68.14%", null, this.Div05);
            obj.set_taborder("0");
            obj.set_binddataset("dsBreakfast");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#37474fff;color:azure;font:9 돋움;\" text=\"조식\"/><Cell row=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식명\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.Div05.addChild(obj.name, obj);
            obj = new Grid("breakfastGrid00", "absolute", "69.16%", "82", null, "218", "1.02%", null, this.Div05);
            obj.set_taborder("1");
            obj.set_binddataset("dsDinner");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#37474fff;color:azure;font:9 돋움;\" text=\"석식\"/><Cell row=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식명\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "3.32%", "68", null, "30", "78.03%", null, this);
            obj.set_taborder("2");
            obj.set_text("  식단등록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "3.52%", "106", null, "30", "87.99%", null, this);
            obj.set_taborder("3");
            obj.set_text("급식일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Calendar("dateCal", "absolute", "12.6%", "106", null, "31", "73.14%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("Div02", "absolute", "38.28%", "106", null, "30", "53.32%", null, this);
            obj.set_taborder("5");
            obj.set_text("식단분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Combo("divCombo", "absolute", "47.17%", "106", null, "31", "38.57%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("smallCode");
            obj.set_datacolumn("fullName");

            obj = new Button("searchBtn", "absolute", "89.16%", "106", null, "32", "3.61%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Grid("breakfastGrid", "absolute", "35.16%", "144", null, "218", "34.38%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsLunch");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#37474fff;color:azure;font:9 돋움;\" text=\"중식\"/><Cell row=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"음식명\"/></Band><Band id=\"body\"><Cell text=\"bind:foodCd\"/><Cell col=\"1\" text=\"bind:foodNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.83%", "416", null, "30", "78.42%", null, this);
            obj.set_taborder("11");
            obj.set_text("  식단조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "90.53%", "728", null, "32", "2.34%", null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "2.83%", "453", null, "30", "88.67%", null, this);
            obj.set_taborder("13");
            obj.set_text("급식일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Calendar("startDateCal", "absolute", "12.4%", "453", null, "31", "75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_background("transparent");

            obj = new Div("Div04", "absolute", "51.95%", "453", null, "30", "39.65%", null, this);
            obj.set_taborder("15");
            obj.set_text("식단분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Combo("divCombo2", "absolute", "60.84%", "453", null, "31", "24.9%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCode2");
            obj.set_codecolumn("smallCode");
            obj.set_datacolumn("fullName");

            obj = new Button("searchBtn2", "absolute", "89.16%", "453", null, "32", "3.61%", null, this);
            obj.set_taborder("17");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Calendar("endDateCal", "absolute", "27.73%", "453", null, "31", "59.67%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-m-d");
            obj.set_enable("false");

            obj = new Static("Static01", "absolute", "25.88%", "447", null, "31", "71.78%", null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Grid("menuGrid", "absolute", "2.83%", "494", null, "221", "3.03%", null, this);
            obj.set_taborder("21");
            obj.set_binddataset("dsDCarte");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_suppresslevel("allskip");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" style=\"background:#37474fff;color:azure;\" mask=\"####-##-##\"/><Cell col=\"3\" colspan=\"3\" style=\"background:#37474fff;color:azure;\" mask=\"####-##-##\"/><Cell col=\"6\" colspan=\"3\" style=\"background:#37474fff;color:azure;\" mask=\"####-##-##\"/><Cell row=\"1\" style=\"background:#cfd8dcff;\" text=\"조식\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"중식\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"석식\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"조식\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;\" text=\"중식\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;\" text=\"석식\"/><Cell row=\"1\" col=\"6\" style=\"background:#cfd8dcff;\" text=\"조식\"/><Cell row=\"1\" col=\"7\" style=\"background:#cfd8dcff;\" text=\"중식\"/><Cell row=\"1\" col=\"8\" style=\"background:#cfd8dcff;\" text=\"석식\"/></Band><Band id=\"body\"><Cell text=\"bind:breakfast1\"/><Cell col=\"1\" text=\"bind:lunch1\"/><Cell col=\"2\" text=\"bind:dinner1\"/><Cell col=\"3\" text=\"bind:breakfast2\"/><Cell col=\"4\" text=\"bind:lunch2\"/><Cell col=\"5\" text=\"bind:dinner2\"/><Cell col=\"6\" text=\"bind:breakfast3\"/><Cell col=\"7\" text=\"bind:lunch3\"/><Cell col=\"8\" text=\"bind:dinner3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.1%", "0", null, "60", "-0.1%", null, this);
            obj.set_taborder("22");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.16%", "0", null, "60", "80.75%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("식단 관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "2.34%", "363", null, "45", "3.81%", null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Button("bfPlusBtn", "absolute", "25.7%", "6", null, "32", "71.59%", null, this.btnBox);
            obj.set_taborder("28");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("bfMinusBtn", "absolute", "29.03%", "6", null, "32", "68.37%", null, this.btnBox);
            obj.set_taborder("29");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("lunchPlusBtn", "absolute", "61.5%", "5", null, "32", "35.8%", null, this.btnBox);
            obj.set_taborder("30");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("lunchMinusBtn", "absolute", "64.52%", "5", null, "32", "32.78%", null, this.btnBox);
            obj.set_taborder("31");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("dinnerPlusBtn", "absolute", "93.55%", "5", null, "32", "3.85%", null, this.btnBox);
            obj.set_taborder("32");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("dinnerMinusBtn", "absolute", "96.36%", "5", null, "32", "0.94%", null, this.btnBox);
            obj.set_taborder("33");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 338, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1184, 45, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("23");
            		p.set_enable("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_CarteMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_CarteMgtForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SN_CarteMgtForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        
        var standardDate;
        var divCombo;
        var btnName;

        //화면이동시
        this.SN_CarteMgtForm_onload = function(obj,e)
        {
            var argument='largeCode=S   midCode=SF030';
            var row = this.dsService.findRow("serviceID","findDietSeparateCodeList");
            this.dsService.setColumn(row,"argument",argument);
            this.gfnService("findDietSeparateCodeList",false);

        }

        
        //날짜세팅
        this.dateCal_onchanged = function(obj,e)
        {
        		standardDate=this.dateCal.value;
        }

        //분류세팅

        this.divCombo_onitemchanged = function(obj,e)
        {
        	divCombo=this.divCombo.value;
        }

        //조회하기
        this.searchBtn_onclick = function(obj,e)
        {
        if(this.gfnIsNull(standardDate)){
        		alert("급식일자를 선택해주세요");
        	}else if(this.gfnIsNull(divCombo)){
        		alert("식단분류를 선택해주세요");
        	}else{
        	var argument = "standardDate="+standardDate+"  divCombo="+divCombo;
           var row = this.dsService.findRow("serviceID","findCarteList"); 
            this.dsService.setColumn(row,"argument",argument);
            this.gfnService("findCarteList",false);
        	}
        }

        
        //아침,점심,저녁 필터로 나누기
        this.bindData = function()
        {
        	this.dsBreakfast.copyData(this.dsCarte);
        	this.dsBreakfast.filter("carteTime == '1'");

        	this.dsLunch.copyData(this.dsCarte);
        	this.dsLunch.filter("carteTime == '2'");
        	
        	this.dsDinner.copyData(this.dsCarte);
        	this.dsDinner.filter("carteTime == '3'");
        	
        	this.btnBox.set_enable(true);
        	
        }

        //콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg)
        {
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID=="findDietSeparateCodeList"){
        			this.dsCode2.copyData(this.dsCode);	
        		}else if(svcID=="findCarteList"){
        			this.bindData();
        		}else if(svcID=="findDCarteList"){
        			var date1 = this.startDateCal.value;
        			var date3 = this.endDateCal.value;
        			
        			this.menuGrid.setCellProperty("head",0,"text",date1);
        			this.menuGrid.setCellProperty("head",1,"text",twoDate);
        			this.menuGrid.setCellProperty("head",2,"text",threeDate);
        		
        		}else if(svcID=="batchCarteProces"){
        			alert("저장되었습니다.");
        			this.reload();
        		}
        	}
        }

        

        //날짜설정
        this.getDate=function(date)
        {
        	var partMonth;
        	var partDay;
        	var dateArr = date.split("-"); 
        	alert(dateArr[0]);
            alert(dateArr[1]);
        	alert(dateArr[2]);
        	if(dateArr[1].length==1){
        		partMonth="0"+dateArr[1];
        	}else{
        		partMonth = dateArr[1];
        	}
        	
        	if(dateArr[2].length==1){
        		partDay = "0"+dateArr[2];
        	}else{
        		partDay = dateArr[2];
        	}
        	
        	return dateArr[0]+partMonth+partDay;
        }

        //식단저장
        	this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchCarteProcess");	
        }

        
        //아침추가
        this.btnBox_bfPlusBtn_onclick = function(obj,e)
        {
        		var param = {btnDiv:"Breakfast",carteTime:1,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        		this.gfnPopup("SN_FoodPopForm","sup",param,""); 
        }
        //아침제거
        this.btnBox_bfMinusBtn_onclick = function(obj,e)
        {
        		this.dsBreakfast.deleteRow(this.dsBreakfast.rowposition); 
        }

        
        //점심추가
        this.btnBox_lunchPlusBtn_onclick = function(obj,e)
        {
        	var param = {btnDiv:"Lunch",carteTime:2,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        	this.gfnPopup("SN_FoodPopForm","sup",param,""); 
        }

        //점심제거
        this.btnBox_lunchMinusBtn_onclick = function(obj,e)
        {
        		this.dsLunch.deleteRow(this.dsLunch.rowposition); 
        }

        //저녁추가
        this.btnBox_dinnerPlusBtn_onclick = function(obj,e)
        {
        	var param = {btnDiv:"Dinner",carteTime:3,carteDate:this.dateCal.value, menuGrpCd:this.divCombo.value};	
        	this.gfnPopup("SN_FoodPopForm","sup",param,""); 
        }
        //저녁제거
        this.btnBox_dinnerMinusBtn_onclick = function(obj,e)
        {
        	this.dsDinner.deleteRow(this.dsDinner.rowposition); 
        }

        
        //standardDate바뀔때 
        this.startDateCal_onchanged = function(obj,e)
        {
        var date = this.startDateCal.text;
        	var objDate1 = new Date(date);
        	var objDate2 = new Date(date);
        	
        	objDate1.addDate(2);
        	objDate2.addDate(1);
        	
        	var date1 = objDate1.toFormatString("yyyy-mm-dd");
        	var date2 = objDate2.toFormatString("yyyy-mm-dd");
        	
        	threeDate = this.getDate(date1);
        	twoDate = this.getDate(date2);
        	
        	this.endDateCal.set_value(threeDate);

        }

        
        //날짜형식
        Date.prototype.toFormatString = function(fmt) {
            if (!this.valueOf()){ 
        		return "";
        	}
         
            var dt = this;
            return fmt.replace(/(yyyy|yy|mm|dd)/gi,
                function($1){
                    switch ($1){
                        case 'yyyy': return dt.getFullYear();
                        case 'yy':   return dt.getFullYear().toString().substr(2);
                        case 'mm':   return dt.getMonth() + 1;
                        case 'dd':   return dt.getDate();
                    }
                } 
            );
        }

        
        //기간별 식단조회
        this.searchBtn2_onclick = function(obj,e)
        {
        	var startDate = this.startDateCal.value;
        	var endDate = this.endDateCal.value;
        	var menuGrpCd = this.divCombo2.value;
        	

        	
        	if(this.gfnIsNull(startDate)){
        		alert("급식 날짜를 선택해주세요");
        	}else if(this.gfnIsNull(endDate)){
        		alert("급식 날짜를 선택해주세요");
        	}else if(this.gfnIsNull(menuGrpCd)){
        		alert("식단분류를 선택해주세요");
        	}else{
        	endDate = endDate.toString().substr(0,8);
        		var argument = "startDate="+startDate+" endDate="+endDate+" middleDate="+twoDate+" menuGrpCd="+menuGrpCd;
        		var row = this.dsService.findRow("serviceID", "findDCarteList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findDCarteList", false);		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsLunch.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsDinner.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsCarte.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsCode2.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.dsDCarte.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_CarteMgtForm_onload, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.dateCal.addEventHandler("onchanged", this.dateCal_onchanged, this);
            this.divCombo.addEventHandler("onitemchanged", this.divCombo_onitemchanged, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.startDateCal.addEventHandler("onchanged", this.startDateCal_onchanged, this);
            this.startDateCal.addEventHandler("oneditclick", this.startDateCal_oneditclick, this);
            this.searchBtn2.addEventHandler("onclick", this.searchBtn2_onclick, this);
            this.btnBox.addEventHandler("onclick", this.btnBox_onclick, this);
            this.btnBox.bfPlusBtn.addEventHandler("onsetfocus", this.btnBox_bfPlusBtn_onsetfocus, this);
            this.btnBox.bfPlusBtn.addEventHandler("onclick", this.btnBox_bfPlusBtn_onclick, this);
            this.btnBox.bfMinusBtn.addEventHandler("onsetfocus", this.btnBox_bfMinusBtn_onsetfocus, this);
            this.btnBox.bfMinusBtn.addEventHandler("onclick", this.btnBox_bfMinusBtn_onclick, this);
            this.btnBox.lunchPlusBtn.addEventHandler("onsetfocus", this.btnBox_lunchPlusBtn_onsetfocus, this);
            this.btnBox.lunchPlusBtn.addEventHandler("onclick", this.btnBox_lunchPlusBtn_onclick, this);
            this.btnBox.lunchMinusBtn.addEventHandler("onsetfocus", this.btnBox_lunchMinusBtn_onsetfocus, this);
            this.btnBox.lunchMinusBtn.addEventHandler("onclick", this.btnBox_lunchMinusBtn_onclick, this);
            this.btnBox.dinnerPlusBtn.addEventHandler("onsetfocus", this.btnBox_dinnerPlusBtn_onsetfocus, this);
            this.btnBox.dinnerPlusBtn.addEventHandler("onclick", this.btnBox_dinnerPlusBtn_onclick, this);
            this.btnBox.dinnerMinusBtn.addEventHandler("onsetfocus", this.btnBox_dinnerMinusBtn_onsetfocus, this);
            this.btnBox.dinnerMinusBtn.addEventHandler("onclick", this.btnBox_dinnerMinusBtn_onclick, this);

        };

        this.loadIncludeScript("SN_CarteMgtForm.xfdl");

       
    };
}
)();
