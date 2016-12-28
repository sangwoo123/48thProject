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
                this.set_name("SSC_SynthesisCheckupResultForm");
                this.set_classname("SSC_SynthesisCheckupResultForm");
                this.set_titletext("종합검진 결과관리 화면");
                this._setFormPosition(0,0,1250,768);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findReceiptList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRsvt=dsReceipt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findRsltList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findRsltList.do</Col><Col id=\"outData\">dsRslt=dsRslt</Col><Col id=\"callbackFunc\"/><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">registerRslt</Col><Col id=\"URL\">his::sup/comprehensiveexam/registerRslt.do</Col><Col id=\"inData\">dsRslt=dsRslt:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRsvt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsChoInsp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPckInsp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRslt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspCd\" type=\"STRING\" size=\"256\"/><Column id=\"dtlInspNm\" type=\"STRING\" size=\"256\"/><Column id=\"inspRslt\" type=\"STRING\" size=\"256\"/><Column id=\"ocsDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsltDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"refLowFig\" type=\"STRING\" size=\"256\"/><Column id=\"refHighFig\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.32%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.49%", "3", null, "45", "71.83%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 결과관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("patPopupBtn", "absolute", "30.88%", "79", null, "27", "66.56%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "18%", "80", null, "24", "69.76%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "10.16%", "80", null, "24", "82.64%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "10.24%", "120", null, "24", "74.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("Div03", "absolute", "2.24%", "120", null, "25", "90.4%", null, this);
            obj.set_taborder("6");
            obj.set_text("검진예정일자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "2.16%", "80", null, "25", "90.48%", null, this);
            obj.set_taborder("7");
            obj.set_text("검진자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("receiptGrid", "absolute", "2.16%", "167", null, "540", "63.44%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"33\"/><Column size=\"34\"/><Column size=\"142\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진일자\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"등록번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"환자명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"나이\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"패키지\"/></Band><Band id=\"body\"><Cell text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:age\"/><Cell col=\"4\" text=\"bind:gender\"/><Cell col=\"5\" text=\"bind:pckNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "25.92%", "120", null, "25", "66.72%", null, this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.style.set_background("@gradation");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "38.72%", "76", null, "25", "1.44%", null, this);
            obj.set_taborder("11");
            obj.set_text("검사결과목록");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Tab("rsltTab", "absolute", "38.72%", "112", null, "626", "1.44%", null, this);
            obj.set_taborder("12");
            obj.set_tabindex("13");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("@gradation");
            obj.style.set_buttonborder("1 solid gray");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tpgHOM", this.rsltTab);
            obj.set_text("기본검사");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgHOM);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgHOM.addChild(obj.name, obj);
            obj = new Tabpage("tpgNMR", this.rsltTab);
            obj.set_text("핵체외");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgNMR);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgNMR.addChild(obj.name, obj);
            obj = new Tabpage("tpgMAT", this.rsltTab);
            obj.set_text("산모진찰");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgMAT);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgMAT.addChild(obj.name, obj);
            obj = new Tabpage("tpgCPL", this.rsltTab);
            obj.set_text("임상병리");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgCPL);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgCPL.addChild(obj.name, obj);
            obj = new Tabpage("tpgEND", this.rsltTab);
            obj.set_text("내시경");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgEND);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgEND.addChild(obj.name, obj);
            obj = new Tabpage("tpgXRT", this.rsltTab);
            obj.set_text("진단방사선");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgXRT);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgXRT.addChild(obj.name, obj);
            obj = new Tabpage("tpgAPC", this.rsltTab);
            obj.set_text("세포병리");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgAPC);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgAPC.addChild(obj.name, obj);
            obj = new Tabpage("tpgIMA", this.rsltTab);
            obj.set_text("폐기능");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgIMA);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgIMA.addChild(obj.name, obj);
            obj = new Tabpage("tpgEKK", this.rsltTab);
            obj.set_text("안과상담");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgEKK);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgEKK.addChild(obj.name, obj);
            obj = new Tabpage("tpgAPS", this.rsltTab);
            obj.set_text("조직병리");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgAPS);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgAPS.addChild(obj.name, obj);
            obj = new Tabpage("tpgHPO", this.rsltTab);
            obj.set_text("외과");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgHPO);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgHPO.addChild(obj.name, obj);
            obj = new Tabpage("tpgHP1", this.rsltTab);
            obj.set_text("채혈실");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgHP1);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgHP1.addChild(obj.name, obj);
            obj = new Tabpage("tpgHAT", this.rsltTab);
            obj.set_text("청력검사");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgHAT);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgHAT.addChild(obj.name, obj);
            obj = new Tabpage("tpgDRG", this.rsltTab);
            obj.set_text("약국");
            obj.style.set_background("#eceff1ff");
            this.rsltTab.addChild(obj.name, obj);
            obj = new Grid("rsltGrid", "absolute", "1.47%", "17", null, "578", "1.34%", null, this.rsltTab.tpgDRG);
            obj.set_taborder("0");
            obj.set_binddataset("dsRslt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"No.\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검    사    명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검   사   결   과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"하한\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"상한\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"단위\"/></Band><Band id=\"body\"><Cell celltype=\"head\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:dtlInspNm\"/><Cell col=\"2\" text=\"bind:inspRslt\"/><Cell col=\"3\" text=\"bind:refLowFig\"/><Cell col=\"4\" text=\"bind:refHighFig\"/><Cell col=\"5\" text=\"bind:unit\"/></Band></Format></Formats>");
            this.rsltTab.tpgDRG.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "29.2%", "716", null, "25", "63.44%", null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.style.set_background("#cfd8dcff");
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
            obj = new Layout("default", "", 0, 25, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("검진자");
            		p.style.set_background("#cfd8dcff");
            		p.style.set_color("black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 돋움");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgHOM,
            	//-- Layout function
            	function(p) {
            		p.set_text("기본검사");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgHOM.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgNMR,
            	//-- Layout function
            	function(p) {
            		p.set_text("핵체외");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgNMR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgMAT,
            	//-- Layout function
            	function(p) {
            		p.set_text("산모진찰");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgMAT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgCPL,
            	//-- Layout function
            	function(p) {
            		p.set_text("임상병리");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgCPL.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgEND,
            	//-- Layout function
            	function(p) {
            		p.set_text("내시경");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgEND.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgXRT,
            	//-- Layout function
            	function(p) {
            		p.set_text("진단방사선");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgXRT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgAPC,
            	//-- Layout function
            	function(p) {
            		p.set_text("세포병리");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgAPC.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgIMA,
            	//-- Layout function
            	function(p) {
            		p.set_text("폐기능");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgIMA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgEKK,
            	//-- Layout function
            	function(p) {
            		p.set_text("안과상담");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgEKK.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgAPS,
            	//-- Layout function
            	function(p) {
            		p.set_text("조직병리");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgAPS.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgHPO,
            	//-- Layout function
            	function(p) {
            		p.set_text("외과");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgHPO.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgHP1,
            	//-- Layout function
            	function(p) {
            		p.set_text("채혈실");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgHP1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgHAT,
            	//-- Layout function
            	function(p) {
            		p.set_text("청력검사");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgHAT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.rsltTab.tpgDRG,
            	//-- Layout function
            	function(p) {
            		p.set_text("약국");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.rsltTab.tpgDRG.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_SynthesisCheckupResultForm");
            		p.set_titletext("종합검진 결과관리 화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_SynthesisCheckupResultForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupResultForm.xfdl", "scripts::wonScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupResultForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SSC_SynthesisCheckupResultForm.xfdl", function() {

        // 공통 스크립트
        //include "scripts::supScripts.xjs";
        //include "scripts::wonScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 공통 변수
        var rsvtNo;
        var editFlag = false;
        var	addFlag = false;

        // 검진자 버튼 
        this.patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        this.setPatInfo=function(arry)
        {	
        	this.patNoEd.set_value(arry[0]);
        	this.patNmEd.set_value(arry[1]);
        }

        // 조회버튼
        this.searchBtn_onclick = function(obj,e)
        {
        	var inspDate = this.inspPlnDateCal.value;
        	if (!this.gfnIsNull(inspDate))
        	{
        		var patNo = this.patNoEd.value;
        		var argument = 'inspPlnDate='+inspDate+' patNo='+patNo;
        		var row = this.dsService.findRow('serviceID' , "findReceiptList");
        		this.dsService.setColumn(row, "argument", argument);
        		
        		this.gfnService("findReceiptList", false);
        		
        		editFlag = false;
        		addFlag = false;
        	}else{
        		alert("검진자와 검진일을 입력해 주세요.");
        	}
        }

        // 결과 조회
        this.receiptGrid_oncellclick = function(obj,e)
        {
        	var rsvtNo = this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtNo");
        	var argument = 'rsvtNo='+rsvtNo;
        	var row = this.dsService.findRow('serviceID' , "findRsltList");
        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findRsltList", false);
        	
        	this.rsltGrid.setCellProperty("Body", 2, "edittype", "none");
        	
        	this.setBaseInspRslt();
        }

        this.setBaseInspRslt=function()
        {
        	this.rsltTab_onchanged(null,null);
        }

        this.rsltTab_onchanged=function(obj,e)
        {
        	
        	if(this.gfnIsNull(obj))
        	{
        		rsltDeptCd = 'HOM';
        	}
        	else
        	{
        		var rsltDeptCd = obj.tabpages[e.postindex].name.substr(3);
        	}
        	this.dsRslt.filter("rsltDeptCd == '"+rsltDeptCd+"'");
        }

        // 등록, 수정
        this.rsltGrid_oncelldblclick = function(obj,e)
        {
        	this.rsltGrid.setCellProperty("Body", 2, "edittype", "normal");
        }

        this.rsltGrid_onenterdown = function(obj,e)
        {
        	//this.fn_setUserData(this.dsRslt);
        	var bool = this.rsltGrid.moveToNextCell();
        	if(!bool)
        	{
        		this.rsltGrid.setCellPos(0);
        	}
        }

        // 저장버튼
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("registerRslt",false);
        	
        	alert(this.MSG_SUP_SAVE);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.patPopupBtn.addEventHandler("onclick", this.patPopupBtn_onclick, this);
            this.receiptGrid.addEventHandler("oncellclick", this.receiptGrid_oncellclick, this);
            this.rsltTab.addEventHandler("onchanged", this.rsltTab_onchanged, this);
            this.rsltTab.tpgHOM.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgHOM.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgNMR.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgNMR.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgMAT.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgMAT.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgCPL.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgCPL.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgEND.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgEND.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgXRT.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgXRT.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgAPC.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgAPC.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgIMA.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgIMA.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgEKK.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgEKK.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgAPS.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgAPS.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgHPO.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgHPO.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgHP1.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgHP1.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgHAT.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgHAT.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);
            this.rsltTab.tpgDRG.rsltGrid.addEventHandler("oncelldblclick", this.rsltGrid_oncelldblclick, this);
            this.rsltTab.tpgDRG.rsltGrid.addEventHandler("onenterdown", this.rsltGrid_onenterdown, this);

        };

        this.loadIncludeScript("SSC_SynthesisCheckupResultForm.xfdl");

       
    };
}
)();
