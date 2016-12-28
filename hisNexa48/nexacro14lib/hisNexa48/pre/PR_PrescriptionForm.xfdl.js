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
                this.set_name("PR_PrescriptionForm");
                this.set_classname("PR_PrescriptionForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_color("#78909cff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDisease", this);
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDiseaseList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findDiseaseList.do</Col><Col id=\"outData\">dsDisease=dsDisease</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::hdm/foreign/findDiagnosisReceiptList.do</Col><Col id=\"outData\">dsOutpaReceipt=dsOutpaReceipt</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findFeeListEMR</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findFeeListEMR.do</Col><Col id=\"outData\">dsFeeCd=dsFeeCd</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchDisePrescProcess</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/batchDisePrescProcess.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsPatientDs=dsPatientDs:u dsPatientPrsc=dsPatientPrsc:u dsPrescValue=dsPrescValue:u dsPrescDtl=dsPrescDtl:u dsOutpaReceipt=dsOutpaReceipt:u</Col></Row><Row><Col id=\"serviceID\">findPatientDsPrscList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findDsPrescList.do</Col><Col id=\"outData\">dsPatientDs=dsPatientDs dsPatientPrsc=dsPatientPrsc</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPatientPrscDtlList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findPrescDtlList.do</Col><Col id=\"outData\">dsPrescDtl=dsPrescDtl</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPatientPrscList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findPrescList.do</Col><Col id=\"outData\">dsPatientPrsc=dsPatientPrsc dsPrescValue=dsPrescValue</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientDs", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYnType", this);
            obj._setContents("<ColumnInfo><Column id=\"ynType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ynType\">Y</Col></Row><Row><Col id=\"ynType\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFeeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrp\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientPrsc", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseCd\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"hosptizReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrp\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"256\"/><Column id=\"prescGubun\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"doctNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInsurance", this);
            obj._setContents("<ColumnInfo><Column id=\"insuranceType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"insuranceType\">급여</Col></Row><Row><Col id=\"insuranceType\">비급여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPurpose", this);
            obj._setContents("<ColumnInfo><Column id=\"purposeType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"purposeType\">일반</Col></Row><Row><Col id=\"purposeType\">예정수술용</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"hosLocName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hosLocName\">항암요법센터</Col></Row><Row><Col id=\"hosLocName\">검사(치료)실</Col></Row><Row><Col id=\"hosLocName\">진료과</Col></Row><Row><Col id=\"hosLocName\">인공신장실</Col></Row><Row><Col id=\"hosLocName\">마취과</Col></Row><Row><Col id=\"hosLocName\">수술실</Col></Row><Row><Col id=\"hosLocName\">병동</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"unitType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"unitType\">T</Col></Row><Row><Col id=\"unitType\">MG</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTakeAway", this);
            obj._setContents("<ColumnInfo><Column id=\"takeAwayName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"takeAwayName\">Rt Shoulder girdle</Col></Row><Row><Col id=\"takeAwayName\">Neck</Col></Row><Row><Col id=\"takeAwayName\">Low back</Col></Row><Row><Col id=\"takeAwayName\">Rt Hip Joint</Col></Row><Row><Col id=\"takeAwayName\">Rt Knee Joint</Col></Row><Row><Col id=\"takeAwayName\">Rt Ankle Joint</Col></Row><Row><Col id=\"takeAwayName\">언어</Col></Row><Row><Col id=\"takeAwayName\">작업</Col></Row><Row><Col id=\"takeAwayName\">Shoulder joint</Col></Row><Row><Col id=\"takeAwayName\">운동치료</Col></Row><Row><Col id=\"takeAwayName\">elbow joint</Col></Row><Row><Col id=\"takeAwayName\">wrist joint</Col></Row><Row><Col id=\"takeAwayName\">hip joint</Col></Row><Row><Col id=\"takeAwayName\">knee joint</Col></Row><Row><Col id=\"takeAwayName\">ankle joint</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPresc", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescDoc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrescDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/><Column id=\"inEmgYn\" type=\"STRING\" size=\"256\"/><Column id=\"inPrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"exAntiYn\" type=\"STRING\" size=\"256\"/><Column id=\"holdingYn\" type=\"STRING\" size=\"256\"/><Column id=\"exMtrlYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtrlNm\" type=\"STRING\" size=\"256\"/><Column id=\"mtrlBodyPart\" type=\"STRING\" size=\"256\"/><Column id=\"exExamWishDate\" type=\"STRING\" size=\"256\"/><Column id=\"inTimes\" type=\"STRING\" size=\"256\"/><Column id=\"inInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"exSelectCareYn\" type=\"STRING\" size=\"256\"/><Column id=\"clncStudyYn\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"inRemark\" type=\"STRING\" size=\"256\"/><Column id=\"irradiYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtAmount\" type=\"STRING\" size=\"256\"/><Column id=\"tfPurpose\" type=\"STRING\" size=\"256\"/><Column id=\"tfTrfuLoc\" type=\"STRING\" size=\"256\"/><Column id=\"ast\" type=\"STRING\" size=\"256\"/><Column id=\"tfBloodDonor\" type=\"STRING\" size=\"256\"/><Column id=\"volume\" type=\"STRING\" size=\"256\"/><Column id=\"inUnit\" type=\"STRING\" size=\"256\"/><Column id=\"rbTakeWay\" type=\"STRING\" size=\"256\"/><Column id=\"rbDays\" type=\"STRING\" size=\"256\"/><Column id=\"prescDtlNm\" type=\"STRING\" size=\"256\"/><Column id=\"prescType\" type=\"STRING\" size=\"256\"/><Column id=\"exNightYn\" type=\"STRING\" size=\"256\"/><Column id=\"inCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"inNumber\" type=\"STRING\" size=\"256\"/><Column id=\"inMethod\" type=\"STRING\" size=\"256\"/><Column id=\"exEmgYn\" type=\"STRING\" size=\"256\"/><Column id=\"exPrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"exTimes\" type=\"STRING\" size=\"256\"/><Column id=\"exInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"exRemark\" type=\"STRING\" size=\"256\"/><Column id=\"hdEmgYn\" type=\"STRING\" size=\"256\"/><Column id=\"hdReoperYn\" type=\"STRING\" size=\"256\"/><Column id=\"hdNightYn\" type=\"STRING\" size=\"256\"/><Column id=\"hdTimes\" type=\"STRING\" size=\"256\"/><Column id=\"hdStarttime\" type=\"STRING\" size=\"256\"/><Column id=\"hdInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"hdRemark\" type=\"STRING\" size=\"256\"/><Column id=\"mtEmgYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtReoperYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtNightYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtStarttime\" type=\"STRING\" size=\"256\"/><Column id=\"mtInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"mtMaterLoc\" type=\"STRING\" size=\"256\"/><Column id=\"mtRemark\" type=\"STRING\" size=\"256\"/><Column id=\"rbSelectCareIn\" type=\"STRING\" size=\"256\"/><Column id=\"rbInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"rbRemark\" type=\"STRING\" size=\"256\"/><Column id=\"tfEmgYn\" type=\"STRING\" size=\"256\"/><Column id=\"tfAmount\" type=\"STRING\" size=\"256\"/><Column id=\"tfTimes\" type=\"STRING\" size=\"256\"/><Column id=\"tfStarttime\" type=\"STRING\" size=\"256\"/><Column id=\"tfInsurance\" type=\"STRING\" size=\"256\"/><Column id=\"tfRemark\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsOutpaReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"trmtYb\" type=\"STRING\" size=\"256\"/><Column id=\"prescYb\" type=\"STRING\" size=\"256\"/><Column id=\"regDept\" type=\"STRING\" size=\"256\"/><Column id=\"cngDept\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPrescValue", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("patientDiv", "absolute", "2.4%", "189", "427", "84", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 5 5");
            obj.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <PopupDiv id=\"PopupDiv00\" text=\"PopupDiv00\" left=\"2.03%\" top=\"7\" right=\"1.77%\" height=\"130\" style=\"background:white;\"/>\r\n</UxFormClipBoard>\r\n");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "68%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("49");
            obj.set_text("입원여부");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Combo("hosCombo", "absolute", "82.82%", "45", "70", "29", null, null, this.patientDiv);
            this.patientDiv.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj.set_innerdataset("@dsYnType");
            obj = new Edit("searchDeptEd04", "absolute", "48.94%", "44", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "34.35%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("52");
            obj.set_text("유형");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "68%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("53");
            obj.set_text("진료여부");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "34.35%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("54");
            obj.set_text("등록번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "48.94%", "8", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("55");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.94%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("56");
            obj.set_text("환자명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "15.29%", "8", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("57");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "0.94%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("58");
            obj.set_text("초/재진");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.29%", "44", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Combo("trmtCombo", "absolute", "82.82%", "8", "70", "29", null, null, this.patientDiv);
            this.patientDiv.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("@dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");

            obj = new Div("diagnDiv", "absolute", "2.4%", "109", "426", "46", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "75.47%", "6", null, "30", "17.69%", null, this.diagnDiv);
            obj.set_taborder("19");
            obj.set_text("과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.diagnDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "42.45%", "6", null, "30", "43.4%", null, this.diagnDiv);
            obj.set_taborder("20");
            obj.set_text("진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.diagnDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "1.18%", "6", null, "30", "85.85%", null, this.diagnDiv);
            obj.set_taborder("21");
            obj.set_text("진료일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.diagnDiv.addChild(obj.name, obj);
            obj = new Calendar("diagnDateCal", "absolute", "14.62%", "5", null, "31", "58.02%", null, this.diagnDiv);
            this.diagnDiv.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyyMMdd");
            obj.set_value("null");
            obj.set_editformat("yyyyMMdd");
            obj = new Edit("diagnDeptEd", "absolute", "82.78%", "6", "67", "30", null, null, this.diagnDiv);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.diagnDiv.addChild(obj.name, obj);
            obj = new Edit("diagnDoctEd", "absolute", "57.08%", "6", "74", "30", null, null, this.diagnDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.diagnDiv.addChild(obj.name, obj);

            obj = new Static("titleStc01", "absolute", "30", "161", "116", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_text("환자 정보");
            obj.style.set_color("#263238ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 11 돋움");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Radio("inoutRadio", "absolute", "3.52%", "290", null, "25", "82.72%", null, this);
            this.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_color("#263238ff");
            obj.set_index("0");

            obj = new Grid("patGrid", "absolute", "30", "316", "427", "406", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsOutpaReceipt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"환자명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"환자유형\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"초/재진여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:patType\"/><Cell col=\"4\" text=\"bind:ntTtYb\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"background:#cfd8dcff;\" text=\"인원\"/><Cell col=\"3\" colspan=\"2\" style=\"background:#cfd8dcff;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("disePrescriptTab", "absolute", "37.04%", "74", null, "648", "0.32%", null, this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#90a4aeff");
            obj.style.set_buttongradation("liner 0,0 white 100,100 black [60% #f2f2efff]");
            obj.style.set_background("transparent");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 11 돋움");
            obj.style.setStyleValue("buttonbackground", "disabled", "#90a4aeff");
            obj.style.setStyleValue("focusborder", "selected", "1 solid #263238ff");
            obj.style.setStyleValue("buttonborder", "selected", "1 solid #263238ff");
            obj.style.setStyleValue("buttonbordertype", "selected", "normal 0 0  lefttop righttop");
            obj.style.setStyleValue("border", "selected", "1 solid #9f8f71ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff");
            obj.style.setStyleValue("color", "selected", "#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Tabpage("diseaseTabpage", this.disePrescriptTab);
            obj.set_text("진단");
            obj.set_scrollbars("autoboth");
            obj.style.set_background("#eceff1ff");
            obj.set_dragscrolltype("both");
            this.disePrescriptTab.addChild(obj.name, obj);
            obj = new Static("dd", "absolute", "1.02%", "294", null, "29", "0.51%", null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("0");
            obj.set_text("진단등록");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Static("dd00", "absolute", "1.05%", "14", null, "29", "1.05%", null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("1");
            obj.set_text("진단검색");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Grid("diseaseGrid", "absolute", "8", "327", "765", "254", null, null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("3");
            obj.set_binddataset("dsPatientDs");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"246\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"상병코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"상병명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"수술여부\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"처방일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" style=\"align:center middle;\" text=\"bind:code\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:codeNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:surYn\" combodataset=\"dsYnType\" combocodecol=\"ynType\" combodatacol=\"ynType\"/><Cell col=\"3\" text=\"bind:dept\"/><Cell col=\"4\" text=\"bind:patNo\"/><Cell col=\"5\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Grid("diseaseGridl", "absolute", "8", "46", "765", "242", null, null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("4");
            obj.set_binddataset("dsDisease");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:codeNm\" treelevel=\"bind:lv\" treecheck=\"bind:code\" combodataset=\"dsDisease\" combocodecol=\"bind:code\" combodatacol=\"bind:code\"/></Band></Format></Formats>");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Button("diseDeleteBtn", "absolute", "702", "591", "65", "12", null, null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "613", "590", "84", "12", null, null, this.disePrescriptTab.diseaseTabpage);
            obj.set_taborder("7");
            obj.set_text("진단추가");
            obj.set_cssclass("btn_WF_Add");
            this.disePrescriptTab.diseaseTabpage.addChild(obj.name, obj);
            obj = new Tabpage("prescriptionTabpage", this.disePrescriptTab);
            obj.set_text("처방");
            obj.style.set_background("#eceff1ff");
            this.disePrescriptTab.addChild(obj.name, obj);
            obj = new Static("dd", "absolute", "1.58%", "11", null, "29", "1.05%", null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("9");
            obj.set_text("진단정보");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Static("dd00", "absolute", "1.58%", "146", null, "29", "0.92%", null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("11");
            obj.set_text("처방등록");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Grid("diseaseGrid", "absolute", "12", "44", "760", "83", null, null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("10");
            obj.set_binddataset("dsPatientPrsc");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"246\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"상병코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"상병명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"수술여부\"/><Cell col=\"3\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"5\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"처방일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" text=\"bind:diseaseCd\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:diseaseNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:surYn\" combodataset=\"dsYnType\" combocodecol=\"ynType\" combodatacol=\"ynType\"/><Cell col=\"3\" text=\"bind:dept\"/><Cell col=\"4\" text=\"bind:patNo\"/><Cell col=\"5\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Grid("presGrid", "absolute", "12", "214", "339", "387", null, null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("7");
            obj.set_binddataset("dsFeeCd");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"항목\"/></Band><Band id=\"body\"><Cell text=\"bind:feeNm\"/></Band></Format></Formats>");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Grid("patientPrescGrid", "absolute", "356", "214", "420", "181", null, null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("8");
            obj.set_binddataset("dsPrescValue");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"374\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"처방명\"/></Band><Band id=\"body\"><Cell text=\"bind:codeNo\"/><Cell col=\"1\" text=\"bind:codeValue\"/></Band></Format></Formats>");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Static("dd01", "absolute", "45.47%", "403", null, "29", "1.02%", null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("12");
            obj.set_text("처방상세 ");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Tab("pd", "absolute", "45.59%", "435", "419", "168", null, null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#b0bec5ff");
            obj.style.set_buttonpadding("5 1 5 1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            obj.set_tabjustify("true");
            obj.set_tabposition("top");
            obj.set_dragscrolltype("none");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("투약");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("6");
            obj.set_text("용량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "134", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("8");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "266", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("10");
            obj.set_text("횟수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("timesEd", "absolute", "328", "6", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("11");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("12");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("numberEd", "absolute", "64", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("13");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "134", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("14");
            obj.set_text("복용법");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("methodEd", "absolute", "196", "36", "201", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("15");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("16");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2", "96", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("18");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("remarkEd", "absolute", "64", "96", "332", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("19");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "134", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("20");
            obj.set_text("응급 ");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "267", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("21");
            obj.set_text("PRN");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new CheckBox("emgCheck", "absolute", "53.64%", "67", null, "27", "38.83%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("22");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new CheckBox("prnCheck", "absolute", "88.19%", "67", null, "27", "4.27%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("23");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Combo("unitCombo", "absolute", "47.57%", "6", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsUnit");
            obj.set_datacolumn("unitType");
            obj.set_codecolumn("unitType");
            obj = new Combo("insuranceCombo", "absolute", "15.53%", "66", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Edit("capaEd", "absolute", "64", "6", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00);
            obj.set_taborder("26");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("검사");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("0");
            obj.set_text("응급 ");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("emgCheck", "absolute", "22.36%", "7", null, "27", "70.1%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("1");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "133", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("2");
            obj.set_text("PRN");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("prnCheck", "absolute", "54.52%", "7", null, "27", "37.94%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("3");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "267", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("4");
            obj.set_text("야간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("nightCheck", "absolute", "88.19%", "7", null, "27", "4.27%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("5");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "267", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("7");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("timesEd", "absolute", "196", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("8");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "134", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("9");
            obj.set_text("횟수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("11");
            obj.set_text("검사일");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2", "96", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("12");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("13");
            obj.set_text("선택진료");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("selectCareCheck", "absolute", "22.36%", "67", null, "27", "70.1%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("14");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "132", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("15");
            obj.set_text("검체보관");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("remarkEd", "absolute", "65", "96", "333", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("17");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("mtrlCheck", "absolute", "54.61%", "68", null, "27", "37.86%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("18");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "267", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("19");
            obj.set_text("항생제");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new CheckBox("antiCheck", "absolute", "88.11%", "67", null, "27", "4.37%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            obj.set_taborder("20");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "15.53%", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj = new Combo("insuranceCombo", "absolute", "79.85%", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Tabpage("tabpage4", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("처치");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("0");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("1");
            obj.set_text("횟수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("2");
            obj.set_text("응급 ");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new CheckBox("emgCheck", "absolute", "22.36%", "7", null, "27", "70.1%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("3");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "133", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("4");
            obj.set_text("재수술");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new CheckBox("reoperCheck", "absolute", "54.52%", "7", null, "27", "37.94%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("5");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "267", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("6");
            obj.set_text("야간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new CheckBox("nightCheck", "absolute", "88.19%", "7", null, "27", "4.27%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("7");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "267", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("9");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("startTimeEd", "absolute", "196", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("10");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "134", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("11");
            obj.set_text("시작시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("timesEd", "absolute", "64", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("12");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new TextArea("remarkArea", "absolute", "15.53%", "68", null, "56", "1.21%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            obj.set_taborder("13");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Combo("insuranceCombo", "absolute", "79.85%", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Tabpage("tabpage5", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("재료");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("0");
            obj.set_text("응급 ");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new CheckBox("emgCheck", "absolute", "22.33%", "7", null, "27", "70.15%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("1");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "133", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("2");
            obj.set_text("재수술");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new CheckBox("reoperCheck", "absolute", "54.61%", "7", null, "27", "37.86%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("3");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "267", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("4");
            obj.set_text("야간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new CheckBox("nigthCheck", "absolute", "88.11%", "7", null, "27", "4.37%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("5");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "267", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("7");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("startTimeEd", "absolute", "196", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("8");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "134", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("9");
            obj.set_text("시작시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("amountEd", "absolute", "64", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("10");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("11");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("12");
            obj.set_text("시행장소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2", "96", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("14");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("remarkEd", "absolute", "64", "96", "334", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            obj.set_taborder("15");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Combo("insuranceCombo", "absolute", "79.85%", "37", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Combo("materLocCombo", "absolute", "15.53%", "67", "199", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsHosLocation");
            obj.set_datacolumn("hosLocName");
            obj.set_codecolumn("hosLocName");
            obj = new Tabpage("tabpage6", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("재활");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2", "66", "79", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("0");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "79", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("1");
            obj.set_text("재활일수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "264", "6", "76", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("6");
            obj.set_text("선택진료");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new CheckBox("selectCareCheck", "absolute", "89.7%", "7", null, "27", "2.76%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("7");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "165", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("9");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("daysEd", "absolute", "82", "36", "82", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("12");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new TextArea("remarkArea", "absolute", "19.9%", "66", null, "56", "0.97%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("13");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "6", "79", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            obj.set_taborder("14");
            obj.set_text("재활부위");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Combo("insuranceCombo", "absolute", "55.1%", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Combo("takeAwayCombo", "absolute", "19.9%", "6", "180", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("@dsTakeAway");
            obj.set_datacolumn("takeAwayName");
            obj.set_codecolumn("takeAwayName");
            obj = new Tabpage("tabpage3", this.disePrescriptTab.prescriptionTabpage.pd);
            obj.set_text("수혈");
            obj.style.set_background("#eceff1ff");
            this.disePrescriptTab.prescriptionTabpage.pd.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.76%", "4", null, "134", "1.01%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_background("#ffffffff");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("0");
            obj.set_text("응급 ");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new CheckBox("emgCheck", "absolute", "22.36%", "7", null, "27", "70.1%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("1");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "267", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("4");
            obj.set_text("헌혈자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new CheckBox("bloodDonorCheck", "absolute", "88.19%", "7", null, "27", "4.27%", null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("5");
            obj.style.set_buttonalign("left middle");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "267", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("7");
            obj.set_text("보험");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "134", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("9");
            obj.set_text("시작시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2", "36", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("10");
            obj.set_text("횟수");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("timesEd", "absolute", "64", "36", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("11");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "134", "6", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("14");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("amountEd", "absolute", "196", "6", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("15");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("16");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "196", "66", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("18");
            obj.set_text("시행장소");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "2", "96", "61", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("20");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("remarkEd", "absolute", "64", "96", "345", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("21");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Combo("insuranceCombo", "absolute", "79.85%", "36", "80", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@dsInsurance");
            obj.set_datacolumn("insuranceType");
            obj.set_codecolumn("insuranceType");
            obj = new Combo("purposeCombo", "absolute", "15.53%", "66", "131", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@dsPurpose");
            obj.set_datacolumn("purposeType");
            obj.set_codecolumn("purposeType");
            obj = new Combo("trfuLocCombo", "absolute", "62.62%", "67", "151", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsHosLocation");
            obj.set_datacolumn("hosLocName");
            obj.set_codecolumn("hosLocName");
            obj = new Edit("startTimeEd", "absolute", "196", "37", "69", "29", null, null, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00);
            obj.set_taborder("25");
            obj.style.set_align("left middle");
            obj.style.set_font("10 돋움");
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Div("prescDiv", "absolute", "1.4%", "179", null, "30", "54.79%", null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("15");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);
            obj = new Button("medicationBtn", "absolute", "13", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("0");
            obj.set_text("투약");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("checkupBtn", "absolute", "66", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("1");
            obj.set_text("검사");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("transfusionBtn", "absolute", "119", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("2");
            obj.set_text("수혈");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("handleBtn", "absolute", "172", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("3");
            obj.set_text("처치");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("materialBtn", "absolute", "225", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("4");
            obj.set_text("재료");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("rehabilitationBtn", "absolute", "279", "3", "50", "23", null, null, this.disePrescriptTab.prescriptionTabpage.prescDiv);
            obj.set_taborder("5");
            obj.set_text("재활");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaBtn");
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addChild(obj.name, obj);
            obj = new Button("prescDelBtn", "absolute", "702", "186", "65", "12", null, null, this.disePrescriptTab.prescriptionTabpage);
            obj.set_taborder("17");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.disePrescriptTab.prescriptionTabpage.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0%", "0", null, "68", "0.08%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.8%", "0", null, "53", "65.89%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("진단처방관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("titleStc00", "absolute", "30", "78", "116", "26", null, null, this);
            obj.set_taborder("10");
            obj.set_text("진료 정보");
            obj.style.set_color("#263238ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 11 돋움");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "366", "728", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("registerBtn", "absolute", "1041", "728", "90", "32", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "1142", "728", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("otherDiv", "absolute", "37.2%", "728", null, "34", "17.12%", null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("returningOutPatBtn", "absolute", "31.35%", "3", null, "28", "48.34%", null, this.otherDiv);
            obj.set_taborder("0");
            obj.set_text("외래재진예약");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_gradation("linear 0,0 whitesmoke 100,100 black");
            this.otherDiv.addChild(obj.name, obj);
            obj = new Button("ConsultationTrtmtBtn", "absolute", "53.94%", "3", null, "28", "25.74%", null, this.otherDiv);
            obj.set_taborder("1");
            obj.set_text("협의진료의뢰");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_gradation("linear 0,0 whitesmoke 100,100 black");
            this.otherDiv.addChild(obj.name, obj);
            obj = new Button("dischargeHosBtn", "absolute", "76.71%", "3", null, "28", "2.98%", null, this.otherDiv);
            obj.set_taborder("2");
            obj.set_text("퇴원지시");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_font("bold 10 돋움");
            obj.style.set_gradation("linear 0,0 whitesmoke 100,100 black");
            this.otherDiv.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.88%", "3", null, "27", "70.75%", null, this.otherDiv);
            obj.set_taborder("3");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_font("bold 10 돋움");
            obj.set_text("외래/협진/퇴원 신청");
            this.otherDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 427, 84, this.patientDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 5 5");
            		p.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <PopupDiv id=\"PopupDiv00\" text=\"PopupDiv00\" left=\"2.03%\" top=\"7\" right=\"1.77%\" height=\"130\" style=\"background:white;\"/>\r\n</UxFormClipBoard>\r\n");

            	}
            );
            this.patientDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 426, 46, this.diagnDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 5 5");

            	}
            );
            this.diagnDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.diseaseTabpage,
            	//-- Layout function
            	function(p) {
            		p.set_text("진단");
            		p.set_scrollbars("autoboth");
            		p.style.set_background("#eceff1ff");
            		p.set_dragscrolltype("both");

            	}
            );
            this.disePrescriptTab.diseaseTabpage.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("투약");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("검사");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("처치");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("재료");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage6,
            	//-- Layout function
            	function(p) {
            		p.set_text("재활");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 134, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.disePrescriptTab.prescriptionTabpage.pd.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("수혈");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.disePrescriptTab.prescriptionTabpage.prescDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.prescDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 761, 584, this.disePrescriptTab.prescriptionTabpage,
            	//-- Layout function
            	function(p) {
            		p.set_text("처방");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.disePrescriptTab.prescriptionTabpage.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 34, this.otherDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.otherDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PR_PrescriptionForm");
            		p.set_titletext("New Form");
            		p.style.set_color("#78909cff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.unitCombo","value","dsPrescDtl","inUnit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.timesEd","value","dsPrescDtl","inTimes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.numberEd","value","dsPrescDtl","inNumber");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.methodEd","value","dsPrescDtl","inMethod");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.insuranceCombo","value","dsPrescDtl","inInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.emgCheck","value","dsPrescDtl","inEmgYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.prnCheck","value","dsPrescDtl","inPrnYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.remarkEd","value","dsPrescDtl","inRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.emgCheck","value","dsPrescDtl","exEmgYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.prnCheck","value","dsPrescDtl","exPrnYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.nightCheck","value","dsPrescDtl","exNightYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.Calendar00","value","dsPrescDtl","exExamWishDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.timesEd","value","dsPrescDtl","exTimes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.insuranceCombo","value","dsPrescDtl","exInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.selectCareCheck","value","dsPrescDtl","exSelectCareYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.mtrlCheck","value","dsPrescDtl","exMtrlYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.antiCheck","value","dsPrescDtl","exAntiYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","disePrescriptTab.prescriptionTabpage.pd.tabpage2.Div00.remarkEd","value","dsPrescDtl","exRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.emgCheck","value","dsPrescDtl","hdEmgYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.reoperCheck","value","dsPrescDtl","hdReoperYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.nightCheck","value","dsPrescDtl","hdNightYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.timesEd","value","dsPrescDtl","hdTimes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.startTimeEd","value","dsPrescDtl","hdStarttime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.insuranceCombo","value","dsPrescDtl","hdInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","disePrescriptTab.prescriptionTabpage.pd.tabpage4.Div00.remarkArea","value","dsPrescDtl","hdRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.emgCheck","value","dsPrescDtl","mtEmgYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.reoperCheck","value","dsPrescDtl","mtReoperYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.nigthCheck","value","dsPrescDtl","mtNightYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.amountEd","value","dsPrescDtl","mtAmount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.startTimeEd","value","dsPrescDtl","mtStarttime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.insuranceCombo","value","dsPrescDtl","mtInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.materLocCombo","value","dsPrescDtl","mtMaterLoc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","disePrescriptTab.prescriptionTabpage.pd.tabpage5.Div00.remarkEd","value","dsPrescDtl","mtRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.takeAwayCombo","value","dsPrescDtl","rbTakeWay");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.selectCareCheck","value","dsPrescDtl","rbSelectCareIn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.daysEd","value","dsPrescDtl","rbDays");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.insuranceCombo","value","dsPrescDtl","rbInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","disePrescriptTab.prescriptionTabpage.pd.tabpage6.Div00.remarkArea","value","dsPrescDtl","rbRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.emgCheck","value","dsPrescDtl","tfEmgYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.amountEd","value","dsPrescDtl","tfAmount");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.bloodDonorCheck","value","dsPrescDtl","tfBloodDonor");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.timesEd","value","dsPrescDtl","tfTimes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.startTimeEd","value","dsPrescDtl","tfStarttime");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.insuranceCombo","value","dsPrescDtl","tfInsurance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.purposeCombo","value","dsPrescDtl","tfPurpose");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.trfuLocCombo","value","dsPrescDtl","tfTrfuLoc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","disePrescriptTab.prescriptionTabpage.pd.tabpage3.Div00.remarkEd","value","dsPrescDtl","tfRemark");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","patientDiv.searchDeptEd00","value","dsOutpaReceipt","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","patientDiv.searchDeptEd02","value","dsOutpaReceipt","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","patientDiv.trmtCombo","value","dsOutpaReceipt","trmtYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","patientDiv.searchDeptEd01","value","dsOutpaReceipt","ntTtYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","patientDiv.searchDeptEd04","value","dsOutpaReceipt","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","patientDiv.hosCombo","value","dsOutpaReceipt","hosptlzYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.capaEd","","dsPrescDtl","inCapacity");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.capaEd","value","dsPrescDtl","inCapacity");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PR_PrescriptionForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("PR_PrescriptionForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방              				   				
        @Description	진단처방 관리 화면 			
        @Author	  		백송은			    			                        								                                            
        @Create         2016.12.02                          		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        var empNo; 
        var empNm;

        var diseaseCode;		
        var diseaseCodeNm;
        var PatNo;
        var dept;
        var presciptNo;
        var smCd;
        var prescDt;

        
        //화면로딩시
        this.PR_PrescriptionForm_onload = function(obj,e)
        {
        	empNo = application.gdsEmp.getColumn(0, "empNo");
        	empNm = application.gdsEmp.getColumn(0, "empNm");
        	
        	this.diagnDiv.diagnDoctEd.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.diagnDiv.diagnDeptEd.set_value(application.gdsEmp.getColumn(0, "deptNm"));
        	
        	//진단명 조회
        	this.gfnService("findDiseaseList");
        }

        
        //====================화면하단====================

        //닫기버튼 클릭시
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        

        //등록버튼 클릭시 
        this.registerBtn_onclick = function(obj,e)
        {
        	var hosYn = this.patientDiv.hosCombo.value;
        	var diseaseNm = this.dsPatientDs.getColumn(0, "codeNm");
        	var trmtDept = this.diagnDiv.diagnDeptEd.value;
        	
        	for(var i = 0 ; i < this.dsPatientDs.getRowCount(); i++){
        		this.dsPatientDs.setColumn(i, "gubun", hosYn);
        	}
        	
        	if(this.dsPatientDs.getRowCount != 0){
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "trmtYb", "Y");
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "prescYb", "Y");
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "dgnsNm", diseaseNm);
        	}
        	
        	if(confirm("진단처방을 등록하시겠습니까?")){
        		
        		this.gfnService("batchDisePrescProcess",false);
        	}
        }

        

        //====================환자조회====================

        //조회버튼 클릭시
        this.searchBtn_onclick = function(obj,e)
        {
        	searchDate = this.diagnDiv.diagnDateCal.text
        	
        	this.dsService.setColumn(1, "argument", "trmtDoct=" + empNo + " trmtDate=" + searchDate);
        	
        		this.gfnService("findReceiptList",false);
        		
        }

        
        //환자구분 라디오 버튼 클릭시 
        this.inoutRadio_onitemchanged = function(obj,e)
        {
        	var radio = this.inoutRadio.value;
        	
        	if(radio == ""){
        		this.dsOutpaReceipt.filter("");
        	} else {
        		this.dsOutpaReceipt.filter("prescYb=='" + radio + "'");
        	}
        }

        //환자의 진단명 조회 시 
        this.patGrid_oncellclick = function(obj,e)
        {
        		
        		patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        		var prescNo = this.dsPatientPrsc.getColumn(this.dsPatientPrsc.rowposition, "prescNo");
        	
        		this.dsService.setColumn(4,'argument','patNo='+patNo +' prescNo='+prescNo);
        		this.gfnService("findPatientDsPrscList",false);
        		
        		

        		
        		
        }

        //====================진단탭====================

        //진단명 더블클릭시
        this.disePrescriptTab_diseaseTabpage_diseaseGridl_oncelldblclick = function(obj,e)
        {

        
        	this.dsPatientDs.addRow();
        	this.dsPatientPrsc.addRow();
        	
        	prescDt = this.gfnFormatDate("Ymd");
        	
        	var arrRtn = new Array();
        	arrRtn[0] = this.dsDisease.getColumn(this.dsDisease.rowposition, "code");									//상병코드
        	arrRtn[1] = this.dsDisease.getColumn(this.dsDisease.rowposition, "codeNm");									//상병명
        	
        	patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");							//환자번호
        	dept = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "trmtDept");							//진료과
        	var outpaReceiptNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "outpaReceiptNo");		//외래접수번호
        	var surYn = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "surYn");								//수술여부

        	
        	//처방전 시퀀스 생성(처방일환자번호 - 5자리순번)
        	if(this.gfnIsNull(prescDt)){
        		prescSeqNo = (this.dsPatientDs.getRowCount()).toString().padLeft(5,"0");
        		prescNo = prescDt + patNo+ "-" + prescSeqNo;
        		alert(prescNo);
        	}else{
        		prescSeqNo = (this.dsPatientDs.getRowCount()).toString().padLeft(5,"0");
        		prescNo = prescDt + patNo + "-" +prescSeqNo;
        		alert(prescNo);
        	}
        	
        	
        	
        	//진단등록 dataset
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition,"code", arrRtn[0]);
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "codeNm", arrRtn[1]);
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescDate", prescDt);				//처방일
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "patNo", patNo);
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "dept", dept);
        	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescNo", prescNo);
        	
        	//환자처방 dataset
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseCd", arrRtn[0]);	
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseNm", arrRtn[1]);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescDate", prescDt);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "patNo", patNo);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "dept", dept);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescNo", prescNo);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "outpaReceiptNo", outpaReceiptNo);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "surYn", surYn);	
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "doctNm", empNm);
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescGubtn", smCd);
        	
        	
        }

        
        //진단조회할 때 셀클릭 
        this.medTab_prscTp_diseaseGrid_oncellclick = function(obj,e)
        {
        	patNo = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "patNo");
        	var diseaseCode = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "code");   
        	var prescDate   = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescDate");  
         
        	this.dsPatientPrsc.filter("patNo=='"+patNo+"' && prescDate=='"+prescDate+"' && diseaseCd =='"+diseaseCode+"'");
        }

        
        //진단명삭제시
        this.disePrescriptTab_diseaseTabpage_diseDeleteBtn_onclick = function(obj,e)
        {
        	this.dsPatientDs.deleteRow(this.dsPatientDs.rowposition);
        }

        

        

        //====================처방탭====================

        //처방버튼 클릭
        this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick = function(obj,e)
        {
        	// [투약] [검사] [수혈] [처치] [재료] [재활]
        	switch (obj.text){
        		case "투약" : 
        		smCd = 1;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "투약항목");
        		this.dsService.setColumn(2, "argument", "smCd=1");
        		this.gfnService("findFeeListEMR", false);
        		break;
        		
        		case "검사" : 
        		smCd = 2;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "검사항목");
        		this.dsService.setColumn(2, "argument", "smCd=2");
        		this.gfnService("findFeeListEMR", false);
        		break;
        		
        		case "수혈" : 
        		smCd = 3;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "수혈항목");
        		this.dsService.setColumn(2, "argument", "smCd=3");
        		this.gfnService("findFeeListEMR", false);
        		break;
        		
        		case "처치" :
        		smCd = 4;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "처치항목");
        		this.dsService.setColumn(2, "argument", "smCd=4");
        		this.gfnService("findFeeListEMR", false);
        		break;
        		
        		case "재료" :
        		smCd = 5;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "재료항목");
        		this.dsService.setColumn(2, "argument", "smCd=5");
        		this.gfnService("findFeeListEMR", false);
        		break;
        		
        		case "재활"  :
        		smCd = 6;
        		this.disePrescriptTab.prescriptionTabpage.presGrid.setCellProperty("head", "0", "text", "재활항목");
        		this.dsService.setColumn(2, "argument", "smCd=6");
        		this.gfnService("findFeeListEMR", false);
        		break;
        	}
        }

        

        //처방명 클릭시 
        this.disePrescriptTab_prescriptionTabpage_presGrid_oncelldblclick = function(obj,e)
        {
        	prescCd = this.dsFeeCd.getColumn(this.dsFeeCd.rowposition, "feeCd");				//처방코드
        	prescNm = this.dsFeeCd.getColumn(this.dsFeeCd.rowposition, "feeNm");				//처방명
        	prescNo = this.dsPatientPrsc.getColumn(this.dsPatientPrsc.rowposition, "prescNo");
        	
        	this.dsPrescValue.addRow();
        	
        	this.dsPrescValue.setColumn(this.dsPrescValue.rowposition, "codeNo", prescCd);
        	this.dsPrescValue.setColumn(this.dsPrescValue.rowposition, "codeValue", prescNm);
        	this.dsPrescValue.setColumn(this.dsPrescValue.rowposition, "prescNo", prescNo);		
        	this.dsPrescValue.setColumn(this.dsPrescValue.rowposition, "patNo", patNo);			
        	
        	//처방상세 dataset
        	this.dsPrescDtl.addRow();
        	this.dsPrescDtl.setColumn(this.dsPrescDtl.rowposition, "prescNo", prescNo);
        	this.dsPrescDtl.setColumn(this.dsPrescDtl.rowposition, "prescCd", prescCd);
        	

        }

        
        //처방상세 조회위해 처방셀 클릭 시 
        this.disePrescriptTab_prescriptionTabpage_patientPrescGrid_oncellclick = function(obj,e)
        {
        /*
        	alert(111);
        	 this.dsPrescDtl.addRow();
        	 patNo = this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "patNo");
        	 prescNo = this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "prescNo");
        	 var codeNo= this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "codeNo");
        	  
        	 alert(patNo);
        	 alert(prescNo);
        	 	this.dsService.setColumn(5, 'argument','prescCd='+codeNo+' prescNo='+prescNo);
        	this.gfnService("findPatientPrscDtlList", false);
        	
        	 dsPrescDtl.set_loadfiltermode("keep");
        	
        */

        

        }

        

        //진단정보 클릭하고 처방내역조회 시 
        this.disePrescriptTab_prescriptionTabpage_diseaseGrid_oncellclick = function(obj,e)
        {
        	
        	prescNo = this.dsPatientPrsc.getColumn(this.dsPatientPrsc.rowposition, "prescNo");
        	patNo = this.dsPatientPrsc.getColumn(this.dsPatientPrsc.rowposition, "patNo");

        	this.dsService.setColumn(6, 'argument','patNo='+patNo +' prescNo='+prescNo);
        	this.gfnService("findPatientPrscList",false);
        	
        	
        }

        //처방삭제시 
        this.disePrescriptTab_prescriptionTabpage_prescDelBtn_onclick = function(obj,e)
        {
        	this.dsPrescValue.deleteRow(this.dsPrescValue.rowposition);
        }

        

        

        this.disePrescriptTab_prescriptionTabpage_patientPrescGrid_oncelldblclick = function(obj,e)
        {
        	alert(111);
        	 this.dsPrescDtl.addRow();
        	 patNo = this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "patNo");
        	 prescNo = this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "prescNo");
        	 var codeNo= this.dsPrescValue.getColumn(this.dsPrescValue.rowposition, "codeNo");
        	  
        	 alert(patNo);
        	 alert(prescNo);
        	 	this.dsService.setColumn(5, 'argument','prescCd='+codeNo+' prescNo='+prescNo);
        	this.gfnService("findPatientPrscDtlList", false);
        	
        	 dsPrescDtl.set_loadfiltermode("keep");
        	

        
        }

        this.otherDiv_ConsultationTrtmtBtn_onclick = function(obj,e)
        {

        	patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        	
        	 var objNew = new ChildFrame();
           objNew.init("btn1", "absolute", 10, 10, 100, 100 , null, null, "pre::SCP_MedicalConsultationRequestPopupForm.xfdl");
           objNew.showModal("SCP_MedicalConsultationRequestPopupForm",  this, {patNo:patNo,mode:"register"}, this, null);
        }

        this.otherDiv_returningOutPatBtn_onclick = function(obj,e)
        {
        	patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        	patNm = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNm");
        	application.open("SCP_RetreatmentReservationForm","pre::SCP_RetreatmentReservationForm.xfdl",this.parent,{patNo:"000004",patNm:"유재석"},"showtitlebar=true showstatusbar=false", 0, 0, 800, 443, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.PR_PrescriptionForm_onload, this);
            this.patientDiv.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.searchDeptEd04.addEventHandler("oneditclick", this.patientDiv_searchDeptEd04_oneditclick, this);
            this.patientDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.diagnDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.diagnDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.diagnDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.titleStc01.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.patGrid.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.disePrescriptTab.diseaseTabpage.diseaseGrid.addEventHandler("oncellclick", this.medTab_prscTp_diseaseGrid_oncellclick, this);
            this.disePrescriptTab.diseaseTabpage.diseaseGridl.addEventHandler("oncelldblclick", this.disePrescriptTab_diseaseTabpage_diseaseGridl_oncelldblclick, this);
            this.disePrescriptTab.diseaseTabpage.diseDeleteBtn.addEventHandler("onclick", this.disePrescriptTab_diseaseTabpage_diseDeleteBtn_onclick, this);
            this.disePrescriptTab.diseaseTabpage.Button01.addEventHandler("onclick", this.disePrescriptTab_diseaseTabpage_addDiagBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.diseaseGrid.addEventHandler("oncellclick", this.disePrescriptTab_prescriptionTabpage_diseaseGrid_oncellclick, this);
            this.disePrescriptTab.prescriptionTabpage.presGrid.addEventHandler("oncelldblclick", this.disePrescriptTab_prescriptionTabpage_presGrid_oncelldblclick, this);
            this.disePrescriptTab.prescriptionTabpage.patientPrescGrid.addEventHandler("oncellclick", this.disePrescriptTab_prescriptionTabpage_patientPrescGrid_oncellclick, this);
            this.disePrescriptTab.prescriptionTabpage.patientPrescGrid.addEventHandler("oncelldblclick", this.disePrescriptTab_prescriptionTabpage_patientPrescGrid_oncelldblclick, this);
            this.disePrescriptTab.prescriptionTabpage.pd.tabpage1.Div00.capaEd.addEventHandler("oneditclick", this.disePrescriptTab_prescriptionTabpage_pd_tabpage1_Div00_capaEd_oneditclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.medicationBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.checkupBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.transfusionBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.handleBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.materialBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDiv.rehabilitationBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDiv_prescBtn_onclick, this);
            this.disePrescriptTab.prescriptionTabpage.prescDelBtn.addEventHandler("onclick", this.disePrescriptTab_prescriptionTabpage_prescDelBtn_onclick, this);
            this.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.registerBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.otherDiv.returningOutPatBtn.addEventHandler("onclick", this.otherDiv_returningOutPatBtn_onclick, this);
            this.otherDiv.ConsultationTrtmtBtn.addEventHandler("onclick", this.otherDiv_ConsultationTrtmtBtn_onclick, this);

        };

        this.loadIncludeScript("PR_PrescriptionForm.xfdl");

       
    };
}
)();
