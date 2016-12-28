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
                this.set_name("SSC_SynthesisCheckupReceiptForm");
                this.set_classname("SSC_SynthesisCheckupReceiptForm");
                this.set_titletext("종합검진접수관리화면");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRece", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"befReceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payAmt\" type=\"STRING\" size=\"256\"/><Column id=\"cardCashDiv\" type=\"STRING\" size=\"256\"/><Column id=\"aprvNo\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvDate\" type=\"STRING\" size=\"256\"/><Column id=\"cardCd\" type=\"STRING\" size=\"256\"/><Column id=\"cardNo\" type=\"STRING\" size=\"256\"/><Column id=\"valPrid\" type=\"STRING\" size=\"256\"/><Column id=\"instmPrid\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvData\" type=\"STRING\" size=\"256\"/><Column id=\"cashAprvDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/><Column id=\"qnt\" type=\"STRING\" size=\"256\"/><Column id=\"amt\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"inspCd\" type=\"STRING\" size=\"256\"/><Column id=\"inspNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRsvtReceiptList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findRsvtReceiptList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsReceipt=dsReceipt dsRsvt=dsRsvt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findRsvtInspList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findRsvtInspList.do</Col><Col id=\"outData\">dsScct=dsScct dsChoInsp=dsChoInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findPckInspList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findPckInspList.do</Col><Col id=\"outData\">dsScct=dsScct</Col></Row><Row><Col id=\"serviceID\">findReducList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findReducList.do</Col><Col id=\"outData\">dsReduc=dsReduc</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchReceiptProcess</Col><Col id=\"URL\">his::sup/comprehensiveexam/batchReceiptProcess.do</Col><Col id=\"inData\">dsRsvt=dsTempR dsChoInsp=dsChoInsp:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">cancelReceipt</Col><Col id=\"URL\">his::sup/comprehensiveexam/cancelReceipt.do</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\">dsReceipt=dsTempR:U</Col></Row><Row><Col id=\"serviceID\">registerReceipt</Col><Col id=\"URL\">his::sup/comprehensiveexam/registerReceipt.do</Col><Col id=\"inData\">dsReceipt=dsTempR:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">남</Col><Col id=\"value\">남</Col></Row><Row><Col id=\"code\">여</Col><Col id=\"value\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReceipt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"aplDate\" type=\"STRING\" size=\"256\"/><Column id=\"aplTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTempR", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"rsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtDate\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtTime\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"inspPlnTime\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"sms\" type=\"STRING\" size=\"256\"/><Column id=\"aplMan\" type=\"STRING\" size=\"256\"/><Column id=\"aplManTel\" type=\"STRING\" size=\"256\"/><Column id=\"rship\" type=\"STRING\" size=\"256\"/><Column id=\"pckCd\" type=\"STRING\" size=\"256\"/><Column id=\"pckNm\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"reducCd\" type=\"STRING\" size=\"256\"/><Column id=\"reducNm\" type=\"STRING\" size=\"256\"/><Column id=\"reducAmt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtAmt\" type=\"STRING\" size=\"256\"/><Column id=\"basicInspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"payMan\" type=\"STRING\" size=\"256\"/><Column id=\"rsvtResp\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"cancelYn\" type=\"STRING\" size=\"256\"/><Column id=\"choInspAmt\" type=\"STRING\" size=\"256\"/><Column id=\"inspSumAmt\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userIp\" type=\"STRING\" size=\"256\"/><Column id=\"aplDate\" type=\"STRING\" size=\"256\"/><Column id=\"aplTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.29%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.51%", "3", null, "45", "71.79%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 접수관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "25.44%", "74", null, "25", "67.2%", null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.style.set_background("@gradation");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "10.8%", "74", null, "24", "75.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_expr("Date()");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("Div01", "absolute", "1.6%", "74", null, "25", "90.4%", null, this);
            obj.set_taborder("3");
            obj.set_text("검진예정일자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("receiptGrid", "absolute", "1.6%", "447", null, "304", "67.2%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsReceipt");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"47\"/><Column size=\"66\"/><Column size=\"42\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" style=\"background:#90a4aeff;background2:#90a4aeff;color:white;font:10 돋움;\" text=\"접수자 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"등록번호\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진시간\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"취소\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:gender\"/><Cell col=\"4\" text=\"bind:inspPlnTime\" mask=\"##:##\"/><Cell col=\"5\" text=\"bind:cancelYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("rsvtGrid", "absolute", "1.68%", "117", null, "315", "67.12%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"39\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" style=\"background:#90a4aeff;background2:#90a4aeff;color:white;font:10 돋움;\" text=\"접수대상자 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"등록번호\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"성별\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검진시간\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:gender\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:inspPlnTime\" mask=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "33.92%", "74", null, "352", "1.44%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 solid #9f9f9fb3");
            obj.style.setStyleValue("background", "disabled", "#eceff1ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Edit("rsvtDateEd", "absolute", "14.19%", "15", null, "30", "68.62%", null, this.compBox);
            obj.set_taborder("224");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo1Ed", "absolute", "14.19%", "151", null, "30", "73.05%", null, this.compBox);
            obj.set_taborder("225");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "14.19%", "117", null, "30", "73.05%", null, this.compBox);
            obj.set_taborder("226");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "14.19%", "83", null, "30", "68.62%", null, this.compBox);
            obj.set_taborder("227");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ageEd", "absolute", "36.07%", "117", null, "30", "56.12%", null, this.compBox);
            obj.set_taborder("228");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "57.16%", "117", null, "30", "30.86%", null, this.compBox);
            obj.set_taborder("229");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducCdEd", "absolute", "57.16%", "151", null, "30", "30.86%", null, this.compBox);
            obj.set_taborder("230");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducNmEd", "absolute", "69.79%", "151", null, "30", "6.51%", null, this.compBox);
            obj.set_taborder("231");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "69.79%", "117", null, "30", "6.38%", null, this.compBox);
            obj.set_taborder("232");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtNoEd", "absolute", "57.16%", "15", null, "30", "23.7%", null, this.compBox);
            obj.set_taborder("233");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("inspDateCal", "absolute", "57.16%", "83", null, "30", "23.7%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("234");
            obj = new Edit("smsEd", "absolute", "14.19%", "185", null, "30", "56.25%", null, this.compBox);
            obj.set_taborder("235");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("aplMan", "absolute", "14.19%", "219", null, "30", "76.04%", null, this.compBox);
            obj.set_taborder("236");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rlEd", "absolute", "35.29%", "220", null, "30", "56.25%", null, this.compBox);
            obj.set_taborder("237");
            obj.set_imemode("alpha");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtRespEd", "absolute", "57.16%", "49", null, "30", "23.7%", null, this.compBox);
            obj.set_taborder("238");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("phoneEd", "absolute", "14.19%", "253", null, "30", "56.25%", null, this.compBox);
            obj.set_taborder("239");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("payManEd", "absolute", "84.77%", "185", null, "30", "2.08%", null, this.compBox);
            obj.set_taborder("240");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("memoArea", "absolute", "14.19%", "287", null, "50", "56.25%", null, this.compBox);
            obj.set_taborder("241");
            obj.getSetter("class").set("AreaArea");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo2Ed", "absolute", "31.12%", "151", null, "30", "56.12%", null, this.compBox);
            obj.set_taborder("242");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("inspTimeMask", "absolute", "77.34%", "83", null, "30", "10.68%", null, this.compBox);
            obj.set_taborder("243");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "27.34%", "151", null, "28", "69.66%", null, this.compBox);
            obj.set_taborder("244");
            obj.set_text("-");
            obj.style.set_background("transparent");
            obj.style.set_border("0px solid transparent transparent");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("genderCombo", "absolute", "27.99%", "117", null, "30", "64.84%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.getSetter("class").set("AreaCombo");
            obj.set_taborder("245");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Edit("aplDateEd", "absolute", "14.19%", "49", null, "30", "68.62%", null, this.compBox);
            obj.set_taborder("246");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("aplTimeMask", "absolute", "31.9%", "49", null, "30", "56.12%", null, this.compBox);
            obj.set_taborder("247");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.set_align("center");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspAmtEd", "absolute", "57.16%", "185", null, "30", "27.21%", null, this.compBox);
            obj.set_taborder("248");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("reducAmtEd", "absolute", "57.16%", "219", null, "30", "23.18%", null, this.compBox);
            obj.set_taborder("249");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtAmtEd", "absolute", "57.16%", "253", null, "30", "23.18%", null, this.compBox);
            obj.set_taborder("250");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "57.16%", "287", null, "30", "23.18%", null, this.compBox);
            obj.set_taborder("251");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            obj.getSetter("class").set("AreaMaskEdt");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "2.99%", "219", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("252");
            obj.set_text("신청인");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "2.99%", "253", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("253");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "2.99%", "151", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("254");
            obj.set_text("주민번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "2.99%", "117", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("255");
            obj.set_text("검진자명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "2.99%", "83", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("256");
            obj.set_text("등록번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "2.99%", "49", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("257");
            obj.set_text("접수일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "2.99%", "15", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("258");
            obj.set_text("예약일자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "45.96%", "15", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("259");
            obj.set_text("예약번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "45.96%", "49", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("260");
            obj.set_text("예약담당");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "45.96%", "83", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("261");
            obj.set_text("검진일시");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "45.96%", "117", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("262");
            obj.set_text("패키지");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "73.96%", "185", null, "30", "16.15%", null, this.compBox);
            obj.set_taborder("263");
            obj.set_text("입금자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "45.96%", "151", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("264");
            obj.set_text("감면구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "45.96%", "185", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("265");
            obj.set_text("기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "45.96%", "219", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("266");
            obj.set_text("감면금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "45.96%", "253", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("267");
            obj.set_text("예약금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "45.96%", "287", null, "30", "44.14%", null, this.compBox);
            obj.set_taborder("268");
            obj.set_text("총기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "2.99%", "185", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("269");
            obj.set_text("SMS");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "2.99%", "287", null, "30", "87.11%", null, this.compBox);
            obj.set_taborder("270");
            obj.set_text("메모");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "24.61%", "219", null, "30", "65.49%", null, this.compBox);
            obj.set_taborder("271");
            obj.set_text("관계");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("pckPopBtn", "absolute", "94.01%", "116", null, "32", "1.82%", null, this.compBox);
            obj.set_taborder("272");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("reducPopBtn", "absolute", "94.01%", "151", null, "32", "1.82%", null, this.compBox);
            obj.set_taborder("273");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.compBox.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "33.92%", "447", null, "200", "45.92%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsScct");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#b0bec5ff;background2:#b0bec5ff;font:10 돋움;\" text=\"검사목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("choInspGrid", "absolute", "54.4%", "448", null, "166", "1.92%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsChoInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"158\"/><Column size=\"38\"/><Column size=\"65\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" style=\"background:#b0bec5ff;background2:#b0bec5ff;font:10 돋움;\" text=\"선택검사 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"수량\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:qnt\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" text=\"bind:sumAmt\" expr=\"expr:qnt*amt\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:inspPlnDate\" mask=\"####-##-##\"/></Band><Band id=\"summary\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"합              계\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" expr=\"expr:dataset.getSum('qnt*amt')\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "92.88%", "620", "30", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("+");
            obj.style.set_font("16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "95.68%", "620", "30", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.style.set_font("16 arial");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "44.64%", "657", null, "42", "1.92%", null, this);
            obj.set_taborder("11");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0.75%", "6", null, "27", "84.98%", null, this.Div06);
            obj.set_taborder("6");
            obj.set_text("기본검사금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "15.62%", "6", "100", "27", null, null, this.Div06);
            obj.set_taborder("7");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "31.53%", "6", null, "27", "54.35%", null, this.Div06);
            obj.set_taborder("8");
            obj.set_text("선택검사금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("choInspAmtEd", "absolute", "46.55%", "6", "100", "27", null, null, this.Div06);
            obj.set_taborder("9");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "62.46%", "6", null, "27", "24.32%", null, this.Div06);
            obj.set_taborder("10");
            obj.set_text("총수납금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("inspSumAmtEd", "absolute", "76.58%", "6", "150", "27", null, null, this.Div06);
            obj.set_taborder("11");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "83.6%", "712", null, "24", "9.36%", null, this);
            obj.set_taborder("13");
            obj.set_text("수정");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "91.04%", "712", null, "24", "1.92%", null, this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBrn", "absolute", "76.24%", "712", null, "24", "16.72%", null, this);
            obj.set_taborder("15");
            obj.set_text("접수취소");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
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
            obj = new Layout("default", "", 795, 339, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("@gradation");
            		p.style.set_border("0 solid #9f9f9fb3");
            		p.style.setStyleValue("background", "disabled", "#eceff1ff");
            		p.set_enable("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSC_SynthesisCheckupReceiptForm");
            		p.set_titletext("종합검진접수관리화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","compBox.rsvtDateEd","value","dsTempR","rsvtDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.aplDateEd","value","dsTempR","aplDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.aplTimeMask","value","dsTempR","aplTime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.patNoEd","value","dsTempR","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.patNmEd","value","dsTempR","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.genderCombo","value","dsTempR","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.ageEd","value","dsTempR","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.regNo2Ed","value","dsTempR","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.regNo1Ed","value","dsTempR","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.smsEd","value","dsTempR","sms");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.rlEd","value","dsTempR","rship");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.rsvtNoEd","value","dsTempR","rsvtNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.rsvtRespEd","value","dsTempR","rsvtResp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.inspDateCal","value","dsTempR","inspPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.pckCdEd","value","dsTempR","pckCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.reducCdEd","value","dsTempR","reducCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.pckNmEd","value","dsTempR","pckNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.reducNmEd","value","dsTempR","reducNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.basicInspAmtEd","value","dsTempR","basicInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.aplMan","value","dsTempR","aplMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox.phoneEd","value","dsTempR","aplManTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox.memoArea","value","dsTempR","memo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox.reducAmtEd","value","dsTempR","reducAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox.rsvtAmtEd","value","dsTempR","rsvtAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox.basicInspSumAmtEd","value","dsTempR","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","compBox.payManEd","value","dsTempR","payMan");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","compBox.inspTimeMask","value","dsTempR","inspPlnTime");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_SynthesisCheckupReceiptForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupReceiptForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SSC_SynthesisCheckupReceiptForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 진료지원 종합검진 접수관리                                               	*
        *                                                                               *
        * @Path		                	                        						*
        * @Description 										   							*
        * @Author	    박상우					                                		*
        * 									                                            *
        * Created on 2016. 12. 01.                             		                    *
        *									                                            *
        ********************************************************************************/

        
        // 공통 스크립트
        //include "scripts::commonScripts.xjs"; 
        //include "scripts::supScripts.xjs";

        // 화면변수
        var editFlag = false;
        var	addFlag = false;

        
        // 접수 대상자 및 접수 조회
        this.searchBtn_onclick=function(obj,e)
        {
        	
        	var inspDate = this.inspPlnDateCal.value;

        	var argument = 'inspPlnDate='+inspDate+' receiptFlag=Y';
        	var row = this.dsService.findRow('serviceID' , "findRsvtReceiptList");
        	this.dsService.setColumn(row, "argument", argument);

        	this.gfnService("findRsvtReceiptList", false);

        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "none");

        	editFlag = false;
        	addFlag = false;

        }

        
        //  접수대상자 목록 선택 시 상세조회
        this.dsRsvt_onrowposchanged=function(obj,e)
        {
        	this.compBox.set_enable(false);
        	var rsvtNo = this.dsRsvt.getColumn(this.rsvtGrid.currentrow,"rsvtNo");

        	this.setTempR(this.dsRsvt);
         	this.findRsvtInspList(rsvtNo);
         	
        }

        
        //  접수자 목록 선택 시 상세조회
        this.dsReceipt_onrowposchanged = function(obj,e)
        {
        	this.compBox.set_enable(false);
        	var rsvtNo = this.dsReceipt.getColumn(this.receiptGrid.currentrow,"rsvtNo");

        	this.setTempR(this.dsReceipt);
        	
         	this.findRsvtInspList(rsvtNo);
        }

        this.setTempR=function(ds)
        {
        	this.dsTempR.clearData();
        	this.dsTempR.addRow();
        	this.dsTempR.copyRow(0, ds, ds.rowposition);
        }

        // 
        this.findRsvtInspList=function(rsvtNo)
        {
        	if(rsvtNo!=null)		
        	{
        		var argument = 'rsvtNo='+rsvtNo;
        		var row = this.dsService.findRow('serviceID' , "findRsvtInspList");
        		this.dsService.setColumn(row, "argument", argument);
        						
        		this.gfnService("findRsvtInspList");	
        	}
        }

        //   추가버튼
        this.addBtn_onclick = function(obj,e)
        {
        		var param = {};
        	this.gfnPopup("SSC_PackgeScctPopupForm","sup",param,"");
        }

        //  삭제 버튼
        this.delBtn_onclick = function(obj,e)
        {
        		this.dsChoInsp.deleteRow(this.dsChoInsp.rowposition);
        	this.autoCalChoInspAmt();	
        }

        
        this.pCode=function(retVal)
        {
        	addFlag = true;

        	if(retVal == 1)
        	{	
        		this.autoCalChoInspAmt();
        	}
        }

        
        // 추가 검사 선택 후 금액 계산
        this.autoCalChoInspAmt=function()
        {
        	var basicInspSumAmt	= this.dsTempR.getColumn(this.dsTempR.rowposition,"basicInspSumAmt");
        	var choInspAmt = this.choInspGrid.getCellText(-2, 3);

        	choInspAmt2 = choInspAmt.replace(",","");    
        	
        	var inspSumAmt;
        	
        	if(!this.gfnIsNull(choInspAmt2))
        	{
        		inspSumAmt	= parseInt(basicInspSumAmt) + parseInt(choInspAmt2);

        	}

        	this.dsTempR.setColumn(this.dsTempR.rowposition, "inspSumAmt", inspSumAmt);
        	this.dsTempR.setColumn(this.dsTempR.rowposition, "choInspAmt", choInspAmt2);
        	
        }

        // 수정
        this.choInspGrid_oncelldblclick = function(obj,e)
        {
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal");	
        }

        this.choInspGrid_onenterdown=function(obj,e)
        {
        	obj.setCellPos(1);
        	this.autoCalChoInspAmt();
        }

        

        
        // 버튼박스2 - 수정버튼
        this.btnBox2_modiBtn_onclick = function(obj,e)
        {	
        	this.compBox.set_enable(true);
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal"); 
        	editFlag = true;
        }

        
        // 버튼박스2 - 저장버튼
        this.btnBox2_saveBtn_onclick = function(obj,e)
        {
        	//this.fn_setUserData(this.dsRsvt);
        	
        	if(this.supCheckMdData(this.compBox))
        	{
        		this.gfnService("batchReceiptProcess");
        	}	
        }

        
        // 버튼박스2 - 수납버튼

        this.btnBox2_receBtn_onclick = function(obj,e)
        {
         	this.dsRece.clearData();
        	this.dsRece.addRow();
        	
        	this.dsRece.setColumn(0, "rsvtNo", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtNo"));
        	this.dsRece.setColumn(0, "rsvtDate", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtDate"));
        	this.dsRece.setColumn(0, "inspDate", this.dsTempR.getColumn(this.dsTempR.rowposition, "inspPlnDate"));
        	this.dsRece.setColumn(0, "basicInspAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "basicInspAmt"));
        	this.dsRece.setColumn(0, "reducAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "reducAmt"));
        	this.dsRece.setColumn(0, "rsvtAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "rsvtAmt"));
        	this.dsRece.setColumn(0, "choInspAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "choInspAmt"));
        	this.dsRece.setColumn(0, "inspSumAmt", this.dsTempR.getColumn(this.dsTempR.rowposition, "inspSumAmt"));

        	var param = {dsRece:this.dsRece};
        	this.gfnPopup("SC_RecePopForm","sup",param,"");
        }

        this.payCo=function(retVal)
        {
        	if(retVal == 1)
        	{	
        			alert("수납이 완료되었습니다.");
        	}
        }

        // 접수 버튼
        this.btnBox2_receiptBtn_onclick = function(obj,e)
        {
        	trace(this.dsTempR.saveXML());

        	if(confirm("접수를 하겠습니까?")){
        		var row = this.dsTempR.rowposition;

        		var sysDate = this.gfnDate('yyyy-MM-dd/HHMi');

        		var date = sysDate.split("/");

        		this.dsTempR.setColumn(row, "aplTime", date[1]);
        		this.dsTempR.setColumn(row, "aplDate", date[0]);

        		this.gfnService("registerReceipt",false);
        		//this.searchBtn_onclick(null,null);
        	}
        }

        
        // 접수취소 버튼
        this.btnBox2_receiptXBtn_onclick = function(obj,e)
        {
        	if(confirm("접수취소를 하겠습니까?")){
        		var row = this.dsTempR.rowposition;
        		this.dsTempR.setColumn(row, "cancelYn", 'Y');

        		//this.fn_setUserData(this.dsTempR, row);
        		
        		this.gfnService("cancelReceipt",false);
        		this.searchBtn_onclick(null,null);
        	}
        }

        //
        this.rsvtGrid_onsetfocus = function(obj,e)
        {
        	this.btnBox2.receiptXBtn.set_visible(false);
        	this.btnBox2.receiptBtn.set_visible(true);

        	
        	this.dsRsvt_onrowposchanged(null, null);
        }

        this.receiptGrid_onsetfocus = function(obj,e)
        {
        	this.btnBox2.receiptXBtn.set_visible(true);
        	this.btnBox2.receiptBtn.set_visible(false);
        	
        	
        	this.dsReceipt_onrowposchanged(null,null);	
        }

        
        // 패키지 버튼
        this.compBox_pckPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_PckPopForm","sup",param,"");
        	
        }

        this.pckCode=function(retVal)
        {
        	var pckCd 	= retVal[0];
        	var pckNm 	= retVal[1];
        	var amt 	= retVal[2];
        	
        	this.compBox.pckCdEd.set_value(pckCd);
        	this.compBox.pckNmEd.set_value(pckNm);
        	this.compBox.basicInspAmtEd.set_value(amt);
        	
        	var argument = 'pckCd='+pckCd;
        	var row = this.dsService.findRow('serviceID' , "findPckInspList");
        	this.dsService.setColumn(row, "argument", argument);
        		
        	this.gfnService("findPckInspList",false);	
        	
        	this.autoCalInspAmt();
        }

        // 감면코드 버튼
        this.compBox_reducPopBtn_onclick = function(obj,e)
        {
        	var param = {};
        	this.gfnPopup("SC_ReducPopForm","sup",param,"");
        }

        // 팝업 셋팅
        this.setCode=function(code,arrRtn)
        {
        	var reducCd = arrRtn[0];
        	var reducNm = arrRtn[1];
        	var reducAmt = arrRtn[2];
        		
        	this.compBox.reducCdEd.set_value(reducCd);
        	this.compBox.reducNmEd.set_value(reducNm);
        	this.compBox.reducAmtEd.set_value(reducAmt);

        	this.autoCalInspAmt();
        }

        
        // 검사금액 계산
        this.autoCalInspAmt=function()
        {
        	var reducAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"reducAmt");
        	var basicInspAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"basicInspAmt");
        	var choInspAmt = this.dsTempR.getColumn(this.dsTempR.rowposition,"choInspAmt");

        	var inspSumAmt;
        	var basicInspSumAmt;
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt) - parseInt(reducAmt);
        	}
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		basicInspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		
        		this.dsTempR.setColumn(this.dsTempR.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        		
        	}else if(!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt);
        		basicInspSumAmt = parseInt(basicInspAmt);
        		
        		this.dsTempR.setColumn(this.dsTempR.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        	}

        	this.dsTempR.setColumn(this.dsTempR.rowposition, "inspSumAmt", inspSumAmt);	
        }

        // 콜백함수
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {
        		if(svcID == 'registerReceipt'){
        			this.searchBtn_onclick(null,null);
        		}
         	}
        }

        
        this.dsRsvt_canrowposchange = function(obj,e)
        {
        	if(addFlag == true || editFlag == true)
        	{
        		var yn = application.confirm("수정하고 있는 작업을  취소 하겠습니까?");
        		if (yn==false)
        		{
        			return false;
        		}
        		else
        		{
        	
        			if(editFlag == true)
        			{
        				this.dsRsvt.reset();
        				editFlag = false;
        				return true;
        				
        			}else if(addFlag == true){
        				addFlag = false;
        				
        				this.dsRsvt.reset();
        				return true;
        			}
        		}
        	}
        	return true;	
        }

        this.dsReceipt_canrowposchange = function(obj,e)
        {
        	if(addFlag == true || editFlag == true)
        	{
        		var yn = application.confirm("수정하고 있는 작업을  취소 하겠습니까?");
        		if (yn==false)
        		{
        			return false;
        		}
        		else
        		{
        	
        			if(editFlag == true)
        			{
        				this.dsReceipt.reset();
        				editFlag = false;
        				return true;
        				
        			}else if(addFlag == true){
        				addFlag = false;
        				
        				this.dsReceipt.reset();
        				return true;
        			}
        		}
        	}
        	return true;	
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.dsReceipt.addEventHandler("onrowposchanged", this.dsReceipt_onrowposchanged, this);
            this.dsReceipt.addEventHandler("canrowposchange", this.dsReceipt_canrowposchange, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.receiptGrid.addEventHandler("onsetfocus", this.receiptGrid_onsetfocus, this);
            this.rsvtGrid.addEventHandler("onsetfocus", this.rsvtGrid_onsetfocus, this);
            this.compBox.pckPopBtn.addEventHandler("onclick", this.compBox_pckPopBtn_onclick, this);
            this.compBox.reducPopBtn.addEventHandler("onclick", this.compBox_reducPopBtn_onclick, this);
            this.choInspGrid.addEventHandler("oncelldblclick", this.choInspGrid_oncelldblclick, this);
            this.choInspGrid.addEventHandler("onenterdown", this.choInspGrid_onenterdown, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);

        };

        this.loadIncludeScript("SSC_SynthesisCheckupReceiptForm.xfdl");

       
    };
}
)();
