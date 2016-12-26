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
                this.set_name("SSC_SynthesisCheckupReservationForm");
                this.set_classname("SSC_SynthesisCheckupReservationForm");
                this.set_titletext("종합검진 예약관리 화면");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findRsvtList</Col><Col id=\"URL\">his::sup/comprehensiveexam/findSynthesisCheckupReservationList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsRsvt=dsRsvt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findChoInspList</Col><Col id=\"URL\">his::sup/checkup/findChoInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp dsChoInsp=dsChoInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findPckInspList</Col><Col id=\"URL\">his::sup/checkup/findPckInspList.do</Col><Col id=\"outData\">dsInsp=dsInsp</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchRsvtProcess</Col><Col id=\"URL\">his::sup/checkup/batchRsvtProcess.do</Col><Col id=\"inData\">dsRsvt=dsRsvt:U dsChoInsp=dsChoInsp:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">supCallBackFunc</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::hdm/foreign/findPatList.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">cancelRsvt</Col><Col id=\"URL\">his::sup/checkup/cancelRsvt.do</Col><Col id=\"callbackFunc\">callBackFunc</Col><Col id=\"outData\"/></Row></Rows>");
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

            obj = new Dataset("dsInsp", this);
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


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "53", "0.32%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.46%", "3", null, "45", "71.8%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("종합검진 예약관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.6%", "74", null, "25", "90.4%", null, this);
            obj.set_taborder("1");
            obj.set_text("검진예정일자");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Calendar("inspPlnDateCal", "absolute", "10.8%", "74", null, "25", "75.76%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_expr("Date()");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Grid("rsvtGrid", "absolute", "1.6%", "118", null, "634", "67.2%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsRsvt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"78\"/><Column size=\"69\"/><Column size=\"44\"/><Column size=\"78\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" style=\"background:#b0bec5ff;background2:#b0bec5ff;color:red;color2:black;font:10 돋움;\" text=\"예약자 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"검진예정일\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"예약번호\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"검진자명\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"성별\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"검진시간\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;color:black;color2:black;font:10 돋움;\" text=\"예약취소\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:inspPlnDate\"/><Cell col=\"1\" text=\"bind:rsvtNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:gender\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:inspPlnTime\" mask=\"##:##\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:cancelYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "25.44%", "74", null, "25", "67.2%", null, this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.style.set_background("@gradation");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "34.56%", "74", null, "352", "1.28%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation");
            obj.style.set_border("0 solid #9f9f9fb3");
            obj.style.setStyleValue("background", "disabled", "#eceff1ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Edit("rsvtDateEd", "absolute", "13.93%", "15", null, "30", "68.88%", null, this.compBox);
            obj.set_taborder("289");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo1Ed", "absolute", "13.93%", "123", null, "30", "73.31%", null, this.compBox);
            obj.set_taborder("290");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "13.93%", "87", null, "30", "73.31%", null, this.compBox);
            obj.set_taborder("291");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "13.93%", "51", null, "30", "68.88%", null, this.compBox);
            obj.set_taborder("292");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ageEd", "absolute", "35.81%", "87", null, "30", "56.38%", null, this.compBox);
            obj.set_taborder("293");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckCdEd", "absolute", "56.9%", "123", null, "30", "31.12%", null, this.compBox);
            obj.set_taborder("294");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducCdEd", "absolute", "56.9%", "159", null, "30", "31.12%", null, this.compBox);
            obj.set_taborder("295");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("reducNmEd", "absolute", "69.53%", "159", null, "30", "6.77%", null, this.compBox);
            obj.set_taborder("296");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("pckNmEd", "absolute", "69.53%", "123", null, "30", "6.64%", null, this.compBox);
            obj.set_taborder("297");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtNoEd", "absolute", "56.9%", "15", null, "30", "23.96%", null, this.compBox);
            obj.set_taborder("298");
            obj.getSetter("compCheck").set("EsEd");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("smsEd", "absolute", "13.93%", "159", null, "30", "56.51%", null, this.compBox);
            obj.set_taborder("299");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("aplMan", "absolute", "13.93%", "195", null, "30", "76.3%", null, this.compBox);
            obj.set_taborder("300");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rlEd", "absolute", "35.16%", "195", null, "30", "56.38%", null, this.compBox);
            obj.set_taborder("301");
            obj.set_imemode("alpha");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rsvtRespEd", "absolute", "56.9%", "49", null, "30", "23.96%", null, this.compBox);
            obj.set_taborder("302");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("phoneEd", "absolute", "13.93%", "231", null, "30", "56.51%", null, this.compBox);
            obj.set_taborder("303");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("payManEd", "absolute", "84.51%", "195", null, "30", "2.34%", null, this.compBox);
            obj.set_taborder("304");
            this.compBox.addChild(obj.name, obj);
            obj = new TextArea("memoArea", "absolute", "13.93%", "269", null, "64", "56.25%", null, this.compBox);
            obj.set_taborder("305");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("regNo2Ed", "absolute", "30.86%", "123", null, "30", "56.38%", null, this.compBox);
            obj.set_taborder("306");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #d5d5d5ff");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "27.08%", "123", null, "28", "69.92%", null, this.compBox);
            obj.set_taborder("307");
            obj.set_text("-");
            obj.style.set_background("transparent");
            obj.style.set_border("0px solid transparent transparent");
            obj.style.set_align("center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Combo("genderCombo", "absolute", "27.73%", "87", null, "30", "65.1%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.getSetter("class").set("AreaCombo");
            obj.set_taborder("308");
            obj.set_innerdataset("dsGenderCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new MaskEdit("basicInspAmtEd", "absolute", "56.9%", "195", null, "30", "27.47%", null, this.compBox);
            obj.set_taborder("309");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("reducAmtEd", "absolute", "56.9%", "231", null, "30", "27.47%", null, this.compBox);
            obj.set_taborder("310");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "56.9%", "303", null, "30", "23.44%", null, this.compBox);
            obj.set_taborder("311");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "2.73%", "195", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("312");
            obj.set_text("신청인");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "2.73%", "231", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("313");
            obj.set_text("연락처");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "2.73%", "123", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("314");
            obj.set_text("주민번호");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "2.73%", "87", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("315");
            obj.set_text("검진자명*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "2.73%", "51", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("316");
            obj.set_text("등록번호*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "2.73%", "15", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("317");
            obj.set_text("예약일자*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "45.7%", "15", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("318");
            obj.set_text("예약번호*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "45.7%", "51", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("319");
            obj.set_text("예약담당");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "45.7%", "87", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("320");
            obj.set_text("검진일시*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "45.7%", "123", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("321");
            obj.set_text("패키지*");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "73.7%", "195", null, "30", "16.41%", null, this.compBox);
            obj.set_taborder("322");
            obj.set_text("입금자");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "45.7%", "159", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("323");
            obj.set_text("감면구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "45.7%", "195", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("324");
            obj.set_text("기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "45.7%", "231", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("325");
            obj.set_text("감면금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "45.7%", "303", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("326");
            obj.set_text("총기본금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "2.73%", "159", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("327");
            obj.set_text("SMS");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "2.73%", "267", null, "30", "87.37%", null, this.compBox);
            obj.set_taborder("328");
            obj.set_text("메모");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "24.35%", "195", null, "30", "65.76%", null, this.compBox);
            obj.set_taborder("329");
            obj.set_text("관계");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("pckPopBtn", "absolute", "93.75%", "123", null, "32", "2.08%", null, this.compBox);
            obj.set_taborder("330");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.style.setStyleValue("background", "disabled", "@gradation URL('img::miniSearchBtn.png') stretch");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("reducPopBtn", "absolute", "93.75%", "159", null, "32", "2.08%", null, this.compBox);
            obj.set_taborder("331");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.style.setStyleValue("background", "disabled", "@gradation URL('img::miniSearchBtn.png') stretch");
            this.compBox.addChild(obj.name, obj);
            obj = new Button("patPopupBtn", "absolute", "31.9%", "50", null, "32", "63.93%", null, this.compBox);
            obj.set_taborder("332");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.style.setStyleValue("background", "disabled", "@gradation URL('img::miniSearchBtn.png') stretch");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "73.7%", "231", null, "30", "16.41%", null, this.compBox);
            obj.set_taborder("333");
            obj.set_text("취소여부");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("cancelEd", "absolute", "84.51%", "231", null, "30", "2.34%", null, this.compBox);
            obj.set_taborder("334");
            this.compBox.addChild(obj.name, obj);
            obj = new CheckBox("cancelYnChk", "absolute", "90.1%", "229", null, "32", "7.03%", null, this.compBox);
            obj.set_taborder("335");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("rsvtAmtEd", "absolute", "56.9%", "267", null, "30", "23.44%", null, this.compBox);
            obj.set_taborder("336");
            obj.set_mask("###,###");
            obj.style.set_padding("0 5 0 0");
            obj.style.set_align("right");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "45.7%", "267", null, "30", "44.4%", null, this.compBox);
            obj.set_taborder("337");
            obj.set_text("예약금액");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 다음_Regular");
            obj.style.setStyleValue("background", "disabled", "#cfd8dcff");
            obj.style.setStyleValue("font", "disabled", "9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "32.03%", "15", null, "30", "56.25%", null, this.compBox);
            obj.set_taborder("338");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new MaskEdit("inspTimeMask", "absolute", "76.82%", "86", null, "32", "11.46%", null, this.compBox);
            obj.set_taborder("339");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.compBox.addChild(obj.name, obj);
            obj = new Calendar("inspDateCal", "absolute", "57.16%", "89", null, "27", "24.35%", null, this.compBox);
            this.compBox.addChild(obj.name, obj);
            obj.set_taborder("340");

            obj = new Button("Button01", "absolute", "93.52%", "614", "30", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("+");
            obj.style.set_font("16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "96.32%", "614", "30", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.style.set_font("16 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("inspGrid", "absolute", "34.56%", "441", null, "200", "45.28%", null, this);
            obj.set_taborder("9");
            obj.set_binddataset("dsInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#b0bec5ff;background2:#b0bec5ff;font:10 돋움;\" text=\"검사목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("choInspGrid", "absolute", "55.04%", "442", null, "166", "1.28%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsChoInsp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"158\"/><Column size=\"38\"/><Column size=\"65\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" style=\"background:#b0bec5ff;background2:#b0bec5ff;font:10 돋움;\" text=\"선택검사 목록\"/><Cell row=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"코드\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사명\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"수량\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"금액\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"검사예정일\"/></Band><Band id=\"body\"><Cell text=\"bind:inspCd\"/><Cell col=\"1\" text=\"bind:inspNm\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:qnt\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;\" text=\"bind:sumAmt\" expr=\"expr:qnt*amt\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:inspPlnDate\" mask=\"####-##-##\"/></Band><Band id=\"summary\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" text=\"합              계\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;padding:0 3 0 0;background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\" expr=\"expr:dataset.getSum('qnt*amt')\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;font:10 돋움;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "45.28%", "651", null, "42", "1.28%", null, this);
            obj.set_taborder("11");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            this.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0.75%", "6", null, "27", "84.98%", null, this.Div06);
            obj.set_taborder("0");
            obj.set_text("기본검사금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("basicInspSumAmtEd", "absolute", "15.62%", "6", "100", "27", null, null, this.Div06);
            obj.set_taborder("1");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "31.53%", "6", null, "27", "54.35%", null, this.Div06);
            obj.set_taborder("2");
            obj.set_text("선택검사금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("choInspAmtEd", "absolute", "46.55%", "6", "100", "27", null, null, this.Div06);
            obj.set_taborder("3");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "62.46%", "6", null, "27", "24.32%", null, this.Div06);
            obj.set_taborder("4");
            obj.set_text("총수납금액");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("10 돋움");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("inspSumAmtEd", "absolute", "76.58%", "6", "150", "27", null, null, this.Div06);
            obj.set_taborder("5");
            obj.set_mask("###,###");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "45.28%", "714", null, "24", "47.68%", null, this);
            obj.set_taborder("13");
            obj.set_text("예약");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "76.8%", "714", null, "24", "16.16%", null, this);
            obj.set_taborder("14");
            obj.set_text("수납");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "91.68%", "714", null, "24", "1.28%", null, this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "52.72%", "714", null, "24", "40.24%", null, this);
            obj.set_taborder("16");
            obj.set_text("예약취소");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "84.24%", "714", null, "24", "8.72%", null, this);
            obj.set_taborder("17");
            obj.set_text("수정");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
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
            obj = new Layout("default", "", 768, 339, this.compBox,
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
            		p.set_classname("SSC_SynthesisCheckupReservationForm");
            		p.set_titletext("종합검진 예약관리 화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item30","Div06.basicInspSumAmtEd","value","dsRsvt","basicInspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Div06.choInspAmtEd","value","dsRsvt","choInspAmt");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div06.inspSumAmtEd","value","dsRsvt","inspSumAmt");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SSC_SynthesisCheckupReservationForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupReservationForm.xfdl", "scripts::wonScripts.xjs");
        this.addIncludeScript("SSC_SynthesisCheckupReservationForm.xfdl", "scripts::supScripts.xjs");
        this.registerScript("SSC_SynthesisCheckupReservationForm.xfdl", function() {
        //공통 스크립트
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";
        //include "scripts::supScripts.xjs";

        // 변수
        var rsvtNo; //예약번호
        var pckCd; //패키지코드
        var editFlag = false;
        var	addFlag = false;
        var inspDate;

        /* 화면 로드 */
        this.SC_RsvtMgtForm_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var month = objDate.getMonth()+1;
        	if(month < 10){
        		month = "0"+month;
        	}
        	var today = objDate.getFullYear()+""+month+""+objDate.getDate();
        	
        	this.inspPlnDateCal.set_value(today);
        }

        
        /* 조회버튼 */
        this.searchBtn_onclick = function(obj,e)
        {
        	inspDate = this.inspPlnDateCal.value;
        	
        	if(!this.gfnIsNull(inspDate)){
        		var argument = 'inspPlnDate='+inspDate;
        		var row = this.dsService.findRow("serviceID","findRsvtList");
        		this.dsService.setColumn(row,"argument",argument);
        		this.gfnService("findRsvtList",false);
        		
        		this.choInspGrid.setCellProperty("Body", 2, "edittype", "none");
        		
        		editFlag = false;
        		addFlag = false;
        		
        		this.compBox.set_enable(false);
        		
        	}
        }

        this.dsRsvt_onrowposchanged = function(obj,e)
        {
        	if(obj != null){
        		rsvtNo = obj.getColumn(e.newrow, "rsvtNo");
        		pckCd = obj.getColumn(e.newrow, "pckCd");
        	}else{
        		alert("예약번호가 없습니다");
        	}
        	
        	/*검사목록조회*/
        	if(rsvtNo != null){

        		var argument = 'pckCd='+pckCd;
        		var row = this.dsService.findRow('serviceID' , "findPckInspList");
        		this.dsService.setColumn(row, "argument", argument);					
        		this.gfnService("findPckInspList",false);
        		
        		argument = 'rsvtNo='+rsvtNo;
        		row = this.dsService.findRow('serviceID' , "findChoInspList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findChoInspList",false);
        		
        		this.compBox.set_enable(false);
        		
        	}
        }

        /* 등록번호 팝업 */
        this.compBox_patPopupBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        }

        this.setPatInfo=function(arry)
        {
        	var patNo = arry[0];
        	var argument = 'patNo='+patNo;
        	var row = this.dsService.findRow('serviceID' , "findPat");
        	this.dsService.setColumn(row, "argument", argument);
        						
        	this.gfnService("findPat",false);
        	this.settingPatInfo();
        }

        this.settingPatInfo=function()
        {
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "patNo", this.dsPat.getColumn(0, "patNo"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "patNm", this.dsPat.getColumn(0, "patNm"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "gender", this.dsPat.getColumn(0, "gender"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "age", this.dsPat.getColumn(0, "age"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "rrn1", this.dsPat.getColumn(0, "rrn1"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "rrn2", this.dsPat.getColumn(0, "rrn2"));
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "sms", this.dsPat.getColumn(0, "tel"));
        }

        /* 선택검사 추가 */
        this.btnBox_addBtn_onclick = function(obj,e)
        {
        	
        	var param = {param:rsvtNo};
        	this.gfnPopup("SC_PckInspPopForm","sup",param,"");
        }

        /* 선택검사 삭제 */
        this.btnBox_delBtn_onclick = function(obj,e)
        {
        	this.dsChoInsp.deleteRow(this.dsChoInsp.rowposition);
        	this.pCode(1);
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
        	var basicInspSumAmt	= this.dsRsvt.getColumn(this.dsRsvt.rowposition,"basicInspSumAmt");
        	var choInspAmt = this.choInspGrid.getCellText(-2, 3);

        	choInspAmt2 = choInspAmt.replace(",","");    
        	
        	var inspSumAmt;
        	
        	if(!this.gfnIsNull(choInspAmt2))
        	{
        		inspSumAmt	= parseInt(basicInspSumAmt) + parseInt(choInspAmt2);

        	}

        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "inspSumAmt", inspSumAmt);
        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "choInspAmt", choInspAmt2);
        	
        }

        
        this.btnBox2_addRsvtBtn_onclick = function(obj,e)
        {
        	if(this.dsRsvt_canrowposchange(null,null))
        	{
        		this.dsRsvt.addRow();	
        		this.newRsvtNo();
        	}
        }

        this.dsRsvt_canrowposchange=function(obj,e)
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

        //  새예약시 데이터 초기화
        this.newRsvtNo=function()
        {
        	var row = this.dsRsvt.rowposition;
        	var sysDate = this.gfnDate('yyyy-MM-dd/HHMi',false);

        	var date = sysDate.split("/");
        	
        	this.dsRsvt.setColumn(row, "rsvtDate", date[0]);
        	this.dsRsvt.setColumn(row, "rsvtTime", date[1]);
        	this.dsRsvt.setColumn(row, "rsvtNo", application.rsvtNo);	

        	this.dsInsp.clearData();
        	this.dsChoInsp.clearData();

        	var disArr = ['patNmEd', 'rsvtDateEd','rsvtTimeMask','rsvtNoEd', 'rsvtRespEd',
        				 'regNo1Ed', 'regNo2Ed', 'smsEd', 'ageEd', 'basicInspAmtEd',
        				  'reducAmtEd', 'rsvtAmtEd', 'basicInspSumAmtEd','cancelEd'];
        				  
        	this.compBox.set_enable(true);
        	
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal"); 
        	
        	addFlag = true;
        }

        /* 예약 취소 */
        this.btnBox2_cancelBtn_onclick = function(obj,e)
        {
        	if(confirm("예약을 취소하겠습니까?")){
        		var argument = 'rsvtNo='+rsvtNo+' cancelYn=Y';
        		var row = this.dsService.findRow('serviceID' , "cancelRsvt");
        		this.dsService.setColumn(row, "argument", argument);
        							
        		this.gfnService("cancelRsvt",false);
        		this.searchBtn_onclick(null,null);
        	}
        }

        /* 수납 */
        this.btnBox2_receBtn_onclick = function(obj,e)
        {
        	this.dsRece.clearData();
        	this.dsRece.addRow();
        	this.dsRece.setColumn(0, "rsvtNo", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtNo"));
        	this.dsRece.setColumn(0, "rsvtDate", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtDate"));
        	this.dsRece.setColumn(0, "inspDate", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "inspPlnDate"));
        	this.dsRece.setColumn(0, "basicInspAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "basicInspAmt"));
        	this.dsRece.setColumn(0, "reducAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "reducAmt"));
        	this.dsRece.setColumn(0, "rsvtAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "rsvtAmt"));
        	this.dsRece.setColumn(0, "choInspAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "choInspAmt"));
        	this.dsRece.setColumn(0, "inspSumAmt", this.dsRsvt.getColumn(this.dsRsvt.rowposition, "inspSumAmt"));

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

        /* 수정 */
        this.btnBox2_modiBtn_onclick = function(obj,e)
        {
        	var disArr = ['patNmEd', 'rsvtDateEd','rsvtTimeMask','rsvtNoEd', 'rsvtRespEd',
        				 'regNo1Ed', 'regNo2Ed', 'smsEd', 'ageEd', 'basicInspAmtEd',
        				  'reducAmtEd', 'rsvtAmtEd', 'basicInspSumAmtEd','cancelEd'];
        				  
        	this.compBox.set_enable(true);
        	
        	this.choInspGrid.setCellProperty("Body", 2, "edittype", "normal");  //확인하기
        	editFlag = true;
        }

        /* 저장 */
        this.btnBox2_saveBtn_onclick = function(obj,e)
        {
        	if(this.supCheckMdData(this.compBox))
        	{
        		var row = this.dsRsvt.rowposition;
        		this.dsRsvt.setColumn(row, "inspPlnDate", this.compBox.inspDateCal.value);
        		var rsvtNo = this.compBox.rsvtNoEd.value;
        		var count = this.dsChoInsp.rowcount;
        		
        		for(i=0; i<count; i++){
        			this.dsChoInsp.setColumn(i,"rsvtNo",rsvtNo);	
        		}
        		
        		trace(this.dsRsvt.saveXML());
        		
        		this.gfnService("batchRsvtProcess",false);
        		this.searchBtn_onclick(null,null);
        	}
        }

        /*패키지팝업\*/
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

        /* 검사금액 계산 */

        this.autoCalInspAmt=function()
        {
        	var reducAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"reducAmt");
        	var basicInspAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"basicInspAmt");
        	var choInspAmt = this.dsRsvt.getColumn(this.dsRsvt.rowposition,"choInspAmt");

        	var inspSumAmt;
        	var basicInspSumAmt;
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt) - parseInt(reducAmt);
        	}
        	
        	if(!this.gfnIsNull(reducAmt)&&!this.gfnIsNull(basicInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		basicInspSumAmt = parseInt(basicInspAmt) - parseInt(reducAmt);
        		this.dsRsvt.setColumn(this.dsRsvt.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        		
        	}else if(!this.gfnIsNull(basicInspAmt)&&!this.gfnIsNull(choInspAmt)){
        		inspSumAmt = parseInt(basicInspAmt) + parseInt(choInspAmt);
        		basicInspSumAmt = parseInt(basicInspAmt);
        		this.dsRsvt.setColumn(this.dsRsvt.rowposition, "basicInspSumAmt", basicInspSumAmt);	
        	}

        	this.dsRsvt.setColumn(this.dsRsvt.rowposition, "inspSumAmt", inspSumAmt);		
        }

        /* 감면코드 선택 */
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

        
        /* 콜백함수 */
        this.callBackFunc = function(svcID,errorCode,errorMsg){
        	if (errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	} else {

         	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsRsvt.addEventHandler("onrowposchanged", this.dsRsvt_onrowposchanged, this);
            this.dsRsvt.addEventHandler("canrowposchange", this.dsRsvt_canrowposchange, this);
            this.compBox.pckPopBtn.addEventHandler("onclick", this.compBox_pckPopBtn_onclick, this);
            this.compBox.reducPopBtn.addEventHandler("onclick", this.compBox_reducPopBtn_onclick, this);
            this.compBox.patPopupBtn.addEventHandler("onclick", this.compBox_patPopupBtn_onclick, this);
            this.choInspGrid.addEventHandler("oncelldblclick", this.choInspGrid_oncelldblclick, this);
            this.choInspGrid.addEventHandler("onenterdown", this.choInspGrid_onenterdown, this);

        };

        this.loadIncludeScript("SSC_SynthesisCheckupReservationForm.xfdl");

       
    };
}
)();
