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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_binddataset("dsOutpaReceipt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"71\"/><Column size=\"83\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"41\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"접수일자\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"등록번호\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"환자명\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진료과\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진료의\"/><Cell col=\"6\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"상담결과\"/><Cell col=\"7\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"작성\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell style=\"font:10 돋움;\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"font:10 돋움;\"/><Cell col=\"2\" style=\"font:10 돋움;\"/><Cell col=\"3\" style=\"font:10 돋움;\"/><Cell col=\"4\" style=\"font:10 돋움;\" text=\"bind:patNo\"/><Cell col=\"5\" style=\"font:10 돋움;\" text=\"bind:patNm\"/><Cell col=\"6\" style=\"font:10 돋움;\" text=\"bind:patType\"/><Cell col=\"7\" style=\"font:10 돋움;\" text=\"bind:ntTtYb\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"인원\"/><Cell col=\"6\" colspan=\"2\" style=\"background:#cfd8dcff;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "40.64%", "70", null, "658", "2.48%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Static("transferDateStc", "absolute", "2.81%", "46", "127", "30", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("receiptDateCal", "absolute", "20.82%", "46", null, "31", "51.9%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc00", "absolute", "2.81%", "86", "127", "30", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("기록일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("recodeDateCal", "absolute", "20.82%", "86", null, "31", "51.9%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc01", "absolute", "2.81%", "163", "127", "30", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "20.82%", "163", "194", "30", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc02", "absolute", "2.81%", "203", "127", "30", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("주민번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("rrnEd", "absolute", "20.82%", "203", "194", "30", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc03", "absolute", "52.32%", "163", "127", "30", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "70.32%", "163", "194", "30", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc04", "absolute", "52.32%", "203", "127", "30", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("성별/나이");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("genderAgeEd", "absolute", "70.32%", "203", "194", "30", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc05", "absolute", "2.81%", "241", "127", "30", null, null, this.Div00);
            obj.set_taborder("12");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            obj.set_text("주     소");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("zipcodeEd", "absolute", "20.82%", "241", "98", "30", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "34.88%", "241", "446", "30", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc06", "absolute", "2.81%", "279", "126", "30", null, null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("입원/외래구분");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("inoutRadio", "absolute", "21.8%", "283", null, "25", "54.43%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.Div00.inoutRadio);
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
            obj = new Static("transferDateStc07", "absolute", "2.81%", "317", "127", "30", null, null, this.Div00);
            obj.set_taborder("17");
            obj.set_text("외래일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("outReceiptDateCal", "absolute", "20.82%", "317", null, "31", "51.9%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc08", "absolute", "52.32%", "317", "127", "30", null, null, this.Div00);
            obj.set_taborder("19");
            obj.set_text("입원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("inReceiptDateCal", "absolute", "70.32%", "317", null, "31", "2.39%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc09", "absolute", "2.81%", "355", "127", "30", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("진료과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "20.82%", "355", "194", "30", null, null, this.Div00);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc10", "absolute", "52.32%", "355", "127", "30", null, null, this.Div00);
            obj.set_taborder("23");
            obj.set_text("진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "70.32%", "355", "194", "30", null, null, this.Div00);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("dgnsNm", "absolute", "20.82%", "395", "544", "30", null, null, this.Div00);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc14", "absolute", "2.81%", "435", "127", "30", null, null, this.Div00);
            obj.set_taborder("31");
            obj.set_text("전원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("transferDateCal", "absolute", "20.82%", "435", null, "31", "51.9%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc15", "absolute", "52.6%", "435", "127", "30", null, null, this.Div00);
            obj.set_taborder("33");
            obj.set_text("퇴원일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("dischargeDateCal", "absolute", "70.6%", "435", null, "31", "2.11%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Static("transferDateStc16", "absolute", "2.81%", "475", "127", "30", null, null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("전원기관명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("transferHosNmEd", "absolute", "20.82%", "475", "194", "30", null, null, this.Div00);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc17", "absolute", "52.6%", "475", "127", "30", null, null, this.Div00);
            obj.set_taborder("37");
            obj.set_text("전원진료과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("transferHosDeptEd", "absolute", "70.6%", "475", "194", "30", null, null, this.Div00);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc18", "absolute", "2.81%", "514", "127", "30", null, null, this.Div00);
            obj.set_taborder("39");
            obj.set_text("전원기관진료의");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("transferHosDoctEd", "absolute", "20.82%", "514", "194", "30", null, null, this.Div00);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc19", "absolute", "52.6%", "514", "127", "30", null, null, this.Div00);
            obj.set_taborder("41");
            obj.set_text("전원기관연락처");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("transferHosTelEd", "absolute", "70.6%", "514", "194", "30", null, null, this.Div00);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc20", "absolute", "2.81%", "554", "127", "30", null, null, this.Div00);
            obj.set_taborder("43");
            obj.set_text("전원사유");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("transferReasonCombo", "absolute", "20.82%", "554", "194", "30", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_value("null");
            obj = new Static("transferDateStc21", "absolute", "2.81%", "593", "127", "30", null, null, this.Div00);
            obj.set_taborder("45");
            obj.set_text("의료정보제공");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("providingMedInfoChk", "absolute", "21.8%", "596", null, "57", "50.77%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var providingMedInfoChk_innerdataset = new Dataset("providingMedInfoChk_innerdataset", this.Div00.providingMedInfoChk);
            providingMedInfoChk_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">진료소견서</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">검사소견</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">영상자료포함</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(providingMedInfoChk_innerdataset);
            obj.set_taborder("46");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.style.set_textpadding("0 0 0 3");
            obj.style.set_color("#263238ff");
            obj.style.set_font("9 돋움");
            obj.style.set_itempadding("0 3 10 0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("transferDateStc22", "absolute", "52.6%", "553", "127", "30", null, null, this.Div00);
            obj.set_taborder("47");
            obj.set_text("비고");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("noteArea", "absolute", "70.6%", "553", "194", "96", null, null, this.Div00);
            obj.set_taborder("48");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc11", "absolute", "2.81%", "395", "127", "30", null, null, this.Div00);
            obj.set_taborder("49");
            obj.set_text("진단명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("transferDateStc12", "absolute", "2.81%", "124", "127", "30", null, null, this.Div00);
            obj.set_taborder("50");
            obj.set_text("상담결과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("adviceResult", "absolute", "21.94%", "127", null, "25", "12.8%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var adviceResult_innerdataset = new Dataset("adviceResult_innerdataset", this.Div00.adviceResult);
            adviceResult_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">전원결정</Col></Row><Row><Col id=\"codecolumn\">RY</Col><Col id=\"datacolumn\">퇴원 후 전원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">전원 미 결정</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(adviceResult_innerdataset);
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
            obj = new Static("transferDateStc13", "absolute", "52.18%", "46", "127", "30", null, null, this.Div00);
            obj.set_taborder("52");
            obj.set_text("전원환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("transferNoEd", "absolute", "70.18%", "46", "194", "30", null, null, this.Div00);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("registerBtn", "absolute", "730", "732", "90", "32", null, null, this);
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

            obj = new Button("deleteBtn", "absolute", "922", "732", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("updateBtn", "absolute", "826", "731", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "1018", "731", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
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
            obj = new Layout("default", "", 711, 658, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("SCP_TransferedPatientForm.xfdl", function() {

        this.SCP_TransferedPatientForm_onload = function(obj,e)
        {
        	empNo = application.gdsEmp.getColumn(0, "empNo");
        	empNm = application.gdsEmp.getColumn(0, "empNm");
        	
        	this.patientDiv.diagnDoctEd.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.patientDiv.diagnDeptEd.set_value(application.gdsEmp.getColumn(0, "deptNm"));
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	searchDate = this.diagnDiv.diagnDateCal.text
        	
        	this.dsService.setColumn(1, "argument", "trmtDoct=" + empNo + " trmtDate=" + searchDate);
        	
        		this.gfnService("findReceiptList",false);
        		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_TransferedPatientForm_onload, this);
            this.patientDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.transferPatGrid.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.Div00.transferDateStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.inoutRadio.addEventHandler("onitemclick", this.inoutRadio_onitemclick, this);
            this.Div00.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.Div00.transferDateStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.providingMedInfoChk.addEventHandler("onitemclick", this.inoutRadio_onitemclick, this);
            this.Div00.providingMedInfoChk.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.Div00.transferDateStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.transferDateStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div00.adviceResult.addEventHandler("onitemclick", this.inoutRadio_onitemclick, this);
            this.Div00.adviceResult.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.Div00.transferDateStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.registerBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.deleteBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.updateBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_TransferedPatientForm.xfdl");

       
    };
}
)();
