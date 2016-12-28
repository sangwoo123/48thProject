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
                this.set_name("SCP_TransferedPatientForm");
                this.set_classname("SCP_TransferedPatientForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL\">his::msv/mcm/patientservice/findTransferPatientInfoList.do</Col><Col id=\"serviceID\">findTransferPatientInfoList</Col><Col id=\"outData\">dsTransferPatientInfo=dsTransferPatientInfo</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">registerTransferPatient</Col><Col id=\"URL\">his::msv/mcm/patientservice/registerTransferPatient.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsTransferPatient=dsTransferPatient</Col></Row><Row><Col id=\"serviceID\">modifyTransferPatient</Col><Col id=\"URL\">his::msv/mcm/patientservice/modifyTransferPatient.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsTransferPatient=dsTransferPatient</Col></Row><Row><Col id=\"serviceID\">removeTransferPatient</Col><Col id=\"URL\">his::msv/mcm/patientservice/removeTransferPatient.do</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">gfnCallbackFunc</Col><Col id=\"inData\">dsTransferPatient=dsTransferPatient</Col></Row><Row><Col id=\"serviceID\">findTransferPatientList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findTransferPatientList.do</Col><Col id=\"outData\">dsTransferPatient=dsTransferPatient</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTransferPatientInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTransferPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"transferNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"recodeDate\" type=\"STRING\" size=\"256\"/><Column id=\"transferDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"dischargeDate\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosNm\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosDept\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosDoct\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosTel\" type=\"STRING\" size=\"256\"/><Column id=\"transferReason\" type=\"STRING\" size=\"256\"/><Column id=\"providingMedInfo\" type=\"STRING\" size=\"256\"/><Column id=\"recodeYn\" type=\"STRING\" size=\"256\"/><Column id=\"adviceResult\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTransferReasonType", this);
            obj._setContents("<ColumnInfo><Column id=\"reason\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"reason\">보조치료</Col></Row><Row><Col id=\"reason\">타기관에서 진료</Col></Row><Row><Col id=\"reason\">요양목적</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsInfoType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", null, "68", "0.24%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "0", null, "53", "65.88%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("전원환자관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("patientDiv", "absolute", "1.44%", "108", "467", "52", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "2.15%", "8", null, "30", "83.66%", null, this.patientDiv);
            obj.set_taborder("0");
            obj.set_text("진료일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Calendar("diagnDateCal", "absolute", "16.56%", "8", null, "31", "62.37%", null, this.patientDiv);
            this.patientDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("subCodeStc02", "absolute", "38.28%", "8", null, "30", "47.53%", null, this.patientDiv);
            obj.set_taborder("2");
            obj.set_text("진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("diagnDoctEd", "absolute", "52.69%", "8", "84", "30", null, null, this.patientDiv);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "71.4%", "8", null, "30", "21.72%", null, this.patientDiv);
            obj.set_taborder("4");
            obj.set_text("과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("diagnDeptEd", "absolute", "78.71%", "8", "95", "30", null, null, this.patientDiv);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);

            obj = new Static("dd00", "absolute", "0.72%", "75", null, "29", "60.32%", null, this);
            obj.set_taborder("4");
            obj.set_text("환자검색");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("transferPatGrid", "absolute", "16", "212", "472", "508", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsTransferPatientInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"36\"/><Column size=\"43\"/><Column size=\"89\"/><Column size=\"141\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"환자번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"성명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"성별\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"나이\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진료일자\"/><Cell col=\"6\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진단명\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;font:10 돋움;\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center middle;font:10 돋움;\" text=\"bind:patNo\"/><Cell col=\"2\" style=\"align:center middle;font:10 돋움;\" text=\"bind:patNm\"/><Cell col=\"3\" style=\"align:center middle;font:10 돋움;\" text=\"bind:gender\"/><Cell col=\"4\" style=\"align:center middle;font:10 돋움;\" text=\"bind:age\"/><Cell col=\"5\" style=\"align:center middle;font:10 돋움;\" text=\"bind:trmtDate\"/><Cell col=\"6\" style=\"align:center middle;font:10 돋움;\" text=\"bind:dgnsNm\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"인원\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("transferDetailDiv", "absolute", "40.64%", "70", null, "658", "2.48%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Static("transferDateStc", "absolute", "2.81%", "46", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("receiptDateCal", "absolute", "20.82%", "46", null, "31", "51.9%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc00", "absolute", "2.81%", "86", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("2");
            obj.set_text("기록일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("recodeDateCal", "absolute", "20.82%", "86", null, "31", "51.9%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj.set_value("null");
            obj.set_type("normal");
            obj = new Static("transferDateStc01", "absolute", "2.81%", "163", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("4");
            obj.set_text("환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "20.82%", "163", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc02", "absolute", "2.81%", "203", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("rrnEd", "absolute", "20.82%", "203", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc03", "absolute", "52.32%", "163", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "70.32%", "163", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc04", "absolute", "52.32%", "203", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("10");
            obj.set_text("성별/나이");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("genderAgeEd", "absolute", "70.32%", "203", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc05", "absolute", "2.81%", "241", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("12");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            obj.set_text("주     소");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("zipcodeEd", "absolute", "20.82%", "241", "98", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "34.88%", "241", "446", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc06", "absolute", "2.81%", "279", "126", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("15");
            obj.set_text("입원/외래구분");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Radio("inoutRadio", "absolute", "21.8%", "283", null, "25", "54.43%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.transferDetailDiv.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("16");
            obj.set_columncount("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.style.set_textpadding("0 0 0 3");
            obj.style.set_color("#263238ff");
            obj.style.set_font("9 돋움");
            obj.style.set_itempadding("0 3 0 0");
            obj.set_index("0");
            obj = new Static("transferDateStc07", "absolute", "2.81%", "317", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("17");
            obj.set_text("외래일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("outReceiptDateCal", "absolute", "20.82%", "317", null, "31", "51.9%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc08", "absolute", "52.32%", "317", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("19");
            obj.set_text("입원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("inReceiptDateCal", "absolute", "70.32%", "317", null, "31", "2.39%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc09", "absolute", "2.81%", "355", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("21");
            obj.set_text("진료과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "20.82%", "355", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc10", "absolute", "52.32%", "355", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("23");
            obj.set_text("진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "70.32%", "355", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("dgnsNmEd", "absolute", "20.82%", "395", "544", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc14", "absolute", "2.81%", "435", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("31");
            obj.set_text("전원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("transferDateCal", "absolute", "20.82%", "435", null, "31", "51.9%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc15", "absolute", "52.6%", "435", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("33");
            obj.set_text("퇴원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Calendar("dischargeDateCal", "absolute", "70.6%", "435", null, "31", "2.11%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc16", "absolute", "2.81%", "475", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("35");
            obj.set_text("전원기관명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosNmEd", "absolute", "20.82%", "475", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc17", "absolute", "52.6%", "475", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("37");
            obj.set_text("전원진료과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosDeptEd", "absolute", "70.6%", "475", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc18", "absolute", "2.81%", "514", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("39");
            obj.set_text("전원기관진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosDoctEd", "absolute", "20.82%", "514", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc19", "absolute", "52.6%", "514", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("41");
            obj.set_text("전원기관연락처");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosTelEd", "absolute", "70.6%", "514", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc20", "absolute", "2.81%", "554", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("43");
            obj.set_text("전원사유");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Combo("transferReasonCombo", "absolute", "20.82%", "554", "194", "30", null, null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_value("null");
            obj.set_innerdataset("@dsTransferReasonType");
            obj.set_datacolumn("reason");
            obj.set_codecolumn("reason");
            obj = new Static("transferDateStc21", "absolute", "2.81%", "593", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("45");
            obj.set_text("의료정보제공");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Radio("providingMedInfoChk", "absolute", "21.8%", "596", null, "57", "50.77%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            var providingMedInfoChk_innerdataset = new Dataset("providingMedInfoChk_innerdataset", this.transferDetailDiv.providingMedInfoChk);
            providingMedInfoChk_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">진료소견서</Col><Col id=\"datacolumn\">진료소견서</Col></Row><Row><Col id=\"codecolumn\">검사소견</Col><Col id=\"datacolumn\">검사소견</Col></Row><Row><Col id=\"codecolumn\">영상자료포함</Col><Col id=\"datacolumn\">영상자료포함</Col></Row><Row><Col id=\"codecolumn\">무</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(providingMedInfoChk_innerdataset);
            obj.set_taborder("46");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_textpadding("0 0 0 3");
            obj.style.set_color("#263238ff");
            obj.style.set_font("9 돋움");
            obj.style.set_itempadding("0 3 10 0");
            obj.set_direction("vertical");
            obj.set_value("Y");
            obj.set_index("-1");
            obj = new Static("transferDateStc22", "absolute", "52.6%", "553", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("47");
            obj.set_text("비고");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new TextArea("noteArea", "absolute", "70.6%", "553", "194", "96", null, null, this.transferDetailDiv);
            obj.set_taborder("48");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc11", "absolute", "2.81%", "395", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("49");
            obj.set_text("진단명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc12", "absolute", "2.81%", "124", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("50");
            obj.set_text("상담결과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Radio("adviceResultRadio", "absolute", "21.94%", "127", null, "25", "12.8%", null, this.transferDetailDiv);
            this.transferDetailDiv.addChild(obj.name, obj);
            var adviceResultRadio_innerdataset = new Dataset("adviceResultRadio_innerdataset", this.transferDetailDiv.adviceResultRadio);
            adviceResultRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전원결정</Col><Col id=\"datacolumn\">전원결정</Col></Row><Row><Col id=\"codecolumn\">퇴원 후 전원</Col><Col id=\"datacolumn\">퇴원 후 전원</Col></Row><Row><Col id=\"codecolumn\">전원 미 결정</Col><Col id=\"datacolumn\">전원 미 결정</Col></Row><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(adviceResultRadio_innerdataset);
            obj.set_taborder("51");
            obj.set_columncount("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.style.set_textpadding("0 0 0 3");
            obj.style.set_color("#263238ff");
            obj.style.set_font("9 돋움");
            obj.style.set_itempadding("0 3 0 0");
            obj.set_index("0");
            obj = new Static("transferDateStc13", "absolute", "52.18%", "46", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("52");
            obj.set_text("전원환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("transferNoEd", "absolute", "70.18%", "46", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc23", "absolute", "52.32%", "279", "127", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("54");
            obj.set_text("환자 연락처");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Edit("patTelEd", "absolute", "70.32%", "279", "194", "30", null, null, this.transferDetailDiv);
            obj.set_taborder("55");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.transferDetailDiv.addChild(obj.name, obj);
            obj = new Button("makeTransferPatNoBtn", "absolute", "572", "82", "126", "12", null, null, this.transferDetailDiv);
            obj.set_taborder("56");
            obj.set_text("전원환자번호생성");
            obj.set_cssclass("btn_WF_Add");
            obj.style.set_color("crimson");
            obj.style.set_font("bold 9 돋움");
            this.transferDetailDiv.addChild(obj.name, obj);

            obj = new Button("registerBtn", "absolute", "810", "732", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "1133", "732", "90", "32", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("deleteBtn", "absolute", "1002", "732", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("updateBtn", "absolute", "906", "731", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("dd01", "absolute", "41.04%", "75", null, "29", "2.88%", null, this);
            obj.set_taborder("12");
            obj.set_text("전원환자상세정보");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "398", "168", "90", "32", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 467, 52, this.patientDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 5 5");

            	}
            );
            this.patientDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 658, this.transferDetailDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.transferDetailDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SCP_TransferedPatientForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","transferDetailDiv.patNoEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","transferDetailDiv.patNmEd","","dsTransferPatientInfo","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","transferDetailDiv.receiptDateCal","","dsTransferPatient","receiptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","transferDetailDiv.transferNoEd","","dsTransferPatient","transferNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","transferDetailDiv.recodeDateCal","","dsTransferPatient","recodeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","transferDetailDiv.adviceResultRadio","","dsTransferPatient","adviceResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","transferDetailDiv.rrnEd","","dsTransferPatientInfo","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","transferDetailDiv.patNoEd","value","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","transferDetailDiv.receiptDateCal","value","dsTransferPatient","receiptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","transferDetailDiv.transferNoEd","value","dsTransferPatient","transferNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","transferDetailDiv.recodeDateCal","value","dsTransferPatient","recodeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","transferDetailDiv.adviceResultRadio","value","dsTransferPatient","adviceResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","transferDetailDiv.patNmEd","value","dsTransferPatientInfo","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","transferDetailDiv.zipcodeEd","value","dsTransferPatientInfo","zip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","transferDetailDiv.inoutRadio","value","dsTransferPatientInfo","hosptlzYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","transferDetailDiv.patTelEd","value","dsTransferPatientInfo","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","transferDetailDiv.outReceiptDateCal","value","dsTransferPatientInfo","receiptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","transferDetailDiv.inReceiptDateCal","value","dsTransferPatientInfo","hosptlzDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","transferDetailDiv.trmtDeptEd","value","dsTransferPatient","trmtDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","transferDetailDiv.trmtDoctEd","value","dsTransferPatient","trmtDoct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","transferDetailDiv.dgnsNmEd","value","dsTransferPatient","dgnsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","transferDetailDiv.transferDateCal","value","dsTransferPatient","transferDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","transferDetailDiv.dischargeDateCal","value","dsTransferPatient","dischargeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","transferDetailDiv.transferHosNmEd","value","dsTransferPatient","transferHosNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","transferDetailDiv.transferHosDeptEd","value","dsTransferPatient","transferHosDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","transferDetailDiv.transferHosDoctEd","value","dsTransferPatient","transferHosDoct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","transferDetailDiv.transferHosTelEd","value","dsTransferPatient","transferHosTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","transferDetailDiv.transferReasonCombo","value","dsTransferPatient","transferReason");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","transferDetailDiv.noteArea","value","dsTransferPatient","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","transferDetailDiv.providingMedInfoChk","value","dsTransferPatient","providingMedInfo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_TransferedPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SCP_TransferedPatientForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방              				   				
        @Description	전원환자 관리 화면 			
        @Author	  		백송은			    			                        								                                            
        @Create         2016.12.                      		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        var searchDate;
        var todayDate;
        var transferNo;
        var patNo;

        this.SCP_TransferedPatientForm_onload = function(obj,e)
        {
        	todayDate = this.gfnFormatDate("Ymd");
        	
        	empNo = application.gdsEmp.getColumn(0, "empNo");
        	empNm = application.gdsEmp.getColumn(0, "empNm");
        	
        	this.patientDiv.diagnDoctEd.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.patientDiv.diagnDeptEd.set_value(application.gdsEmp.getColumn(0, "deptNm"));

        	this.transferDetailDiv.recodeDateCal.set_value(todayDate);
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	searchDate = this.patientDiv.diagnDateCal.text;
        	this.dsService.setColumn(0, "argument", "trmtDoct=" + empNo + " trmtDate=" + searchDate);
        	
        		this.gfnService("findTransferPatientInfoList",false);
        		
        }

        

        this.transferPatGrid_oncellclick = function(obj,e)
        {

         
        	this.dsTransferPatient.addRow();
        	
        	
        	//칼럼get / set 
        	 patNo = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "patNo");
        	var rrn1 = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "rrn1");
        	var rrn2 = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "rrn2");
        	var gender = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "gender");
        	var age = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "age");
        	var addr = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "addr");
        	var dtlAddr = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "dtlAddr");
        	var trmtDeptNm = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "trmtDeptNm");
        	var trmtDoct = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "trmtDoct");
        	var dgnsNm = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "dgnsNm");
        	
        	this.dsTransferPatient.setColumn(this.dsTransferPatient.rowposition, "patNo", patNo);
        	this.dsTransferPatient.setColumn(this.dsTransferPatient.rowposition, "trmtDept", trmtDeptNm);
        	this.dsTransferPatient.setColumn(this.dsTransferPatient.rowposition, "trmtDoct", trmtDoct);
        	this.dsTransferPatient.setColumn(this.dsTransferPatient.rowposition, "dgnsNm", dgnsNm);
        	
        	this.transferDetailDiv.rrnEd.set_value(rrn1+" - "+ rrn2);
        	this.transferDetailDiv.genderAgeEd.set_value(gender+" / "+ age);
        	if(dtlAddr == null ){
        		dtlAddr = " ";
        		this.transferDetailDiv.addrEd.set_value(addr+ " " + dtlAddr);
        	}else{
        		this.transferDetailDiv.addrEd.set_value(addr+ " " + dtlAddr);
        	}
        	

        
        }

        this.transferDetailDiv_makeTransferPatNoBtn_onclick = function(obj,e)
        {
        	transferNo = this.dsTransferPatient.getColumn(this.dsTransferPatient.rowposition, "transferNo");
        	prescSeqNo = (this.dsTransferPatient.getRowCount()).toString().padLeft(2,"0");
        	if(transferNo != null ){
        		alert("이미 생성된 전원환자 번호가 있습니다.");
        	}else{
        	
        		transferNo = todayDate + "-" + patNo + "-" +  prescSeqNo;

        		if(confirm("환자번호 : "+transferNo+" 로 생성하시겠습니까?")){
        			this.dsTransferPatient.setColumn(this.dsTransferPatient.rowposition, "transferNo", transferNo);
        			this.transferDetailDiv.transferNoEd.set_value(transferNo);
        		}
        	}
        }

        this.registerBtn_onclick = function(obj,e)
        {
        	if(confirm("입력한 전원환자정보를 등록하시겠습니까?")){
        			this.gfnService("registerTransferPatient",false);
        	}
        }

        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        this.updateBtn_onclick = function(obj,e)
        {
        	if(confirm("전원환자정보를 수정하시겠습니까?")){
        			this.gfnService("modifyTransferPatient",false);
        	}
        }

        this.deleteBtn_onclick = function(obj,e)
        {
        	if(confirm("전원환자정보를 삭제하시겠습니까?")){
        			this.gfnService("removeTransferPatient",false);
        	}
        }

        this.transferPatGrid_oncelldblclick = function(obj,e)
        {
        	patNo = this.dsTransferPatientInfo.getColumn(this.dsTransferPatientInfo.rowposition, "patNo");
        	this.dsService.setColumn(4,'argument','patNo='+patNo);
        	this.gfnService("findTransferPatientList",false);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_TransferedPatientForm_onload, this);
            this.patientDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferPatGrid.addEventHandler("oncellclick", this.transferPatGrid_oncellclick, this);
            this.transferPatGrid.addEventHandler("oncelldblclick", this.transferPatGrid_oncelldblclick, this);
            this.transferDetailDiv.transferDateStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.inoutRadio.addEventHandler("onitemclick", this.inoutRadio_onitemclick, this);
            this.transferDetailDiv.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.transferDetailDiv.transferDateStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.adviceResultRadio.addEventHandler("onitemclick", this.inoutRadio_onitemclick, this);
            this.transferDetailDiv.adviceResultRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.transferDetailDiv.transferDateStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.transferDateStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferDetailDiv.makeTransferPatNoBtn.addEventHandler("onclick", this.transferDetailDiv_makeTransferPatNoBtn_onclick, this);
            this.registerBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.deleteBtn.addEventHandler("onclick", this.deleteBtn_onclick, this);
            this.updateBtn.addEventHandler("onclick", this.updateBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_TransferedPatientForm.xfdl");

       
    };
}
)();
