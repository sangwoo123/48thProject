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
                this.set_name("SCP_AdrForm");
                this.set_classname("MA_AdrForm");
                this.set_titletext("약물유해반응 관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAdr", this);
            obj._setContents("<ColumnInfo><Column id=\"adrNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"patAge\" type=\"STRING\" size=\"256\"/><Column id=\"patGender\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"writerNo\" type=\"STRING\" size=\"256\"/><Column id=\"writerNm\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"writerJob\" type=\"STRING\" size=\"256\"/><Column id=\"drugNo\" type=\"STRING\" size=\"256\"/><Column id=\"drugNm\" type=\"STRING\" size=\"256\"/><Column id=\"manifacture\" type=\"STRING\" size=\"256\"/><Column id=\"usage\" type=\"STRING\" size=\"256\"/><Column id=\"capct\" type=\"STRING\" size=\"256\"/><Column id=\"injcStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcPurp\" type=\"STRING\" size=\"256\"/><Column id=\"rvlStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlRecogDate\" type=\"STRING\" size=\"256\"/><Column id=\"afterInjcRvl\" type=\"STRING\" size=\"256\"/><Column id=\"symptom\" type=\"STRING\" size=\"256\"/><Column id=\"prog\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntVal\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"reinjcReact\" type=\"STRING\" size=\"256\"/><Column id=\"opinion\" type=\"STRING\" size=\"256\"/><Column id=\"reportYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAdrList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAdrList.do</Col><Col id=\"callbackFunc\">adrCallback</Col><Col id=\"outData\">dsAdr=dsAdr</Col></Row><Row><Col id=\"serviceID\">batchAdrProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchAdrProcess.do</Col><Col id=\"inData\">dsAdr=dsAdr:u</Col><Col id=\"callbackFunc\">adrCallback</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::hdm/patient/findPatientList.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"callbackFunc\">patCallback</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("adrDiv", "absolute", "1.92%", "90", "381", "104", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "2.9%", "17", null, "30", "74.41%", null, this.adrDiv);
            obj.set_taborder("20");
            obj.set_text("작성자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "3.17%", "57", null, "30", "74.41%", null, this.adrDiv);
            obj.set_taborder("21");
            obj.set_text("작성일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Calendar("writeDateCal", "absolute", "28.23%", "57", null, "31", "30.87%", null, this.adrDiv);
            this.adrDiv.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_font("9 돋움");
            obj = new Edit("searchEmpNmEd", "absolute", "67.02%", "18", "115", "30", null, null, this.adrDiv);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Edit("searchEmpNoEd", "absolute", "28.23%", "17", "100", "30", null, null, this.adrDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.adrDiv.addChild(obj.name, obj);

            obj = new Grid("adrGrid", "absolute", "1.92%", "232", null, "520", "67.6%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsAdr");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"58\"/><Column size=\"63\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"ADR번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"작성자번호\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"작성일자\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"약품명\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:adrNo\"/><Cell col=\"1\" edittype=\"text\" style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:writerNo\"/><Cell col=\"3\" edittype=\"text\" style=\"align:center;\" text=\"bind:writeDate\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:drugNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("writerDiv", "absolute", "33.92%", "173", "805", "45", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "7", null, "30", "88.04%", null, this.writerDiv);
            obj.set_taborder("0");
            obj.set_text("작성일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "27.02%", "7", null, "30", "61.64%", null, this.writerDiv);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "65.5%", "7", null, "30", "23.16%", null, this.writerDiv);
            obj.set_taborder("2");
            obj.set_text("자격");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Edit("writerNoEdit", "absolute", "38.98%", "7", null, "30", "49.81%", null, this.writerDiv);
            obj.set_taborder("4");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Edit("writerNmEdit", "absolute", "50.93%", "7", null, "30", "35.74%", null, this.writerDiv);
            obj.set_taborder("5");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Radio("writerJobRadio", "absolute", "78.33%", "10", null, "25", "0.75%", null, this.writerDiv);
            this.writerDiv.addChild(obj.name, obj);
            var writerJobRadio_innerdataset = new Dataset("writerJobRadio_innerdataset", this.writerDiv.writerJobRadio);
            writerJobRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">의사</Col><Col id=\"datacolumn\">의   사</Col></Row><Row><Col id=\"codecolumn\">간호사</Col><Col id=\"datacolumn\">간호사</Col></Row><Row><Col id=\"codecolumn\">약사</Col><Col id=\"datacolumn\">약   사</Col></Row></Rows>");
            obj.set_innerdataset(writerJobRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj.style.set_align("center middle");
            obj.set_value("doctor");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_index("-1");
            obj = new Calendar("writeDateCal", "absolute", "12.7%", "7", "110", "30", null, null, this.writerDiv);
            this.writerDiv.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_readonly("true");

            obj = new Div("adrDiv02", "absolute", "33.92%", "425", "805", "80", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.63%", "6", null, "30", "88.1%", null, this.adrDiv02);
            obj.set_taborder("0");
            obj.set_text("주증상");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "41", null, "30", "88.04%", null, this.adrDiv02);
            obj.set_taborder("1");
            obj.set_text("관련검사명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "56.04%", "41", null, "30", "32.88%", null, this.adrDiv02);
            obj.set_taborder("2");
            obj.set_text("관련검사 수치");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.58%", "6", null, "30", "0.75%", null, this.adrDiv02);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "12.58%", "41", null, "30", "45.33%", null, this.adrDiv02);
            obj.set_taborder("4");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "68.12%", "41", null, "30", "20.67%", null, this.adrDiv02);
            obj.set_taborder("5");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "80.07%", "41", null, "30", "7.97%", null, this.adrDiv02);
            this.adrDiv02.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.adrDiv02.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">×10^3/㎕</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">×10^6/㎕</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">fL</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">pg</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">%</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">g/㎗</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">㎎/㎗</Col></Row><Row><Col id=\"codecolumn\">H</Col><Col id=\"datacolumn\">IU/ℓ</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");

            obj = new Div("adrDiv03", "absolute", "33.92%", "628", "805", "124", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "7", null, "30", "88.04%", null, this.adrDiv03);
            obj.set_taborder("0");
            obj.set_text("종합소견");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv03.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0.62%", "42", null, "72", "0.62%", null, this.adrDiv03);
            obj.set_taborder("1");
            obj.style.set_font("9 돋움");
            this.adrDiv03.addChild(obj.name, obj);

            obj = new Div("drugDiv", "absolute", "33.92%", "223", "805", "114", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.63%", "5", null, "30", "88.1%", null, this.drugDiv);
            obj.set_taborder("0");
            obj.set_text("약물코드");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "31.26%", "5", null, "30", "57.53%", null, this.drugDiv);
            obj.set_taborder("1");
            obj.set_text("약물명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "46.45%", "41", null, "30", "42.34%", null, this.drugDiv);
            obj.set_taborder("3");
            obj.set_text("용법");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "73.85%", "41", null, "30", "14.69%", null, this.drugDiv);
            obj.set_taborder("4");
            obj.set_text("용량");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "0.62%", "41", null, "30", "88.04%", null, this.drugDiv);
            obj.set_taborder("5");
            obj.set_text("투약기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "0.62%", "77", null, "30", "88.17%", null, this.drugDiv);
            obj.set_taborder("6");
            obj.set_text("투약목적");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Calendar("medStartDate", "absolute", "12.7%", "41", "110", "30", null, null, this.drugDiv);
            this.drugDiv.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("true");
            obj = new Calendar("medEndDate", "absolute", "29.51%", "41", "110", "30", null, null, this.drugDiv);
            this.drugDiv.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj = new Edit("drugNoEdit", "absolute", "12.7%", "5", null, "30", "74.22%", null, this.drugDiv);
            obj.set_taborder("9");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("drugNmEdit", "absolute", "42.71%", "5", null, "30", "18.31%", null, this.drugDiv);
            obj.set_taborder("10");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "58.41%", "41", null, "30", "28.27%", null, this.drugDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85.93%", "41", null, "30", "0.75%", null, this.drugDiv);
            obj.set_taborder("13");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.7%", "77", null, "30", "0.75%", null, this.drugDiv);
            obj.set_taborder("14");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "27.4%", "41", null, "30", "70.61%", null, this.drugDiv);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);

            obj = new Div("revealDiv", "absolute", "33.92%", "342", "805", "78", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "30.14%", "5", null, "30", "58.53%", null, this.revealDiv);
            obj.set_taborder("0");
            obj.set_text("발현기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "41", null, "30", "84.93%", null, this.revealDiv);
            obj.set_taborder("1");
            obj.set_text("투약 후 발현시기");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.62%", "5", null, "30", "88.04%", null, this.revealDiv);
            obj.set_taborder("2");
            obj.set_text("발현인지일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "12.58%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar00", "absolute", "42.22%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "58.9%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("inoutRadio", "absolute", "23.16%", "44", null, "25", "51.31%", null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.revealDiv.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">HOUR</Col><Col id=\"datacolumn\">시간 후</Col></Row><Row><Col id=\"codecolumn\">DAY</Col><Col id=\"datacolumn\">일 후</Col></Row><Row><Col id=\"codecolumn\">MONTH</Col><Col id=\"datacolumn\">개월 후</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj.set_index("0");
            obj = new Edit("Edit03", "absolute", "15.94%", "41", null, "30", "78.46%", null, this.revealDiv);
            obj.set_taborder("7");
            obj.style.set_font("9 돋움");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "56.91%", "5", null, "30", "40.72%", null, this.revealDiv);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.style.set_font("9 돋움");
            this.revealDiv.addChild(obj.name, obj);

            obj = new Div("patDiv", "absolute", "33.92%", "90", "805", "78", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Edit("patNoEdit", "absolute", "12.7%", "6", null, "30", "74.22%", null, this.patDiv);
            obj.set_taborder("0");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "6", null, "30", "88.04%", null, this.patDiv);
            obj.set_taborder("1");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "39", null, "30", "88.04%", null, this.patDiv);
            obj.set_taborder("2");
            obj.set_text("처방번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("prscNoEdit", "absolute", "12.7%", "39", null, "30", "74.22%", null, this.patDiv);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEdit", "absolute", "26.15%", "6", null, "30", "57.66%", null, this.patDiv);
            obj.set_taborder("6");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "47.95%", "6", null, "30", "40.72%", null, this.patDiv);
            obj.set_taborder("7");
            obj.set_text("성별");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "73.85%", "6", null, "30", "14.82%", null, this.patDiv);
            obj.set_taborder("9");
            obj.set_text("연령");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("patAgeEdit", "absolute", "85.93%", "6", null, "30", "0.75%", null, this.patDiv);
            obj.set_taborder("10");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "32.75%", "39", null, "30", "55.92%", null, this.patDiv);
            obj.set_taborder("11");
            obj.set_text("진단명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("diseaseNmEdit", "absolute", "44.71%", "39", null, "30", "0.75%", null, this.patDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("patGenderEdit", "absolute", "59.78%", "6", null, "30", "27.15%", null, this.patDiv);
            obj.set_taborder("13");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.patDiv.addChild(obj.name, obj);

            obj = new Div("adrDiv00", "absolute", "33.92%", "509", "805", "114", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.62%", "6", null, "30", "88.04%", null, this.adrDiv00);
            obj.set_taborder("3");
            obj.set_text("경과내용");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "42", null, "30", "88.04%", null, this.adrDiv00);
            obj.set_taborder("4");
            obj.set_text("조치내용");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "78", null, "30", "88.17%", null, this.adrDiv00);
            obj.set_taborder("5");
            obj.set_text("재투여시 반응");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.58%", "6", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("6");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "12.7%", "44", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("7");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "12.58%", "78", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("8");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.84%", "7", null, "41", "85.76%", null, this);
            obj.set_taborder("16");
            obj.set_text("약물유해반응");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("searchAdrBtn", "absolute", "291", "152", "58", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("findWriterBtn", "absolute", "236", "108", "30", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("prscSearchBtn", "absolute", "635", "130", "30", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("patSearchBtn", "absolute", "769", "97", "30", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc00", "absolute", "1.92%", "198", null, "34", "67.6%", null, this);
            obj.set_taborder("25");
            obj.set_text("   ADR목록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "221", "203", "59", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "279", "203", "59", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "337", "203", "59", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc01", "absolute", "1.92%", "56", null, "34", "67.68%", null, this);
            obj.set_taborder("29");
            obj.set_text("   작성자정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc02", "absolute", "33.92%", "56", null, "34", "1.68%", null, this);
            obj.set_taborder("30");
            obj.set_text("   ADR상세정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("searchMediBtn", "absolute", "635", "229", "30", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 381, 104, this.adrDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 45, this.writerDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.writerDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 80, this.adrDiv02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 124, this.adrDiv03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 114, this.drugDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.drugDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 78, this.revealDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.revealDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 78, this.patDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.patDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 114, this.adrDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MA_AdrForm");
            		p.set_titletext("약물유해반응 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","writerDiv.writeDateCal","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","patDiv.prscNoEdit","value","dsAdr","prescNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","patDiv.diseaseNmEdit","value","dsAdr","diseaseNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","patDiv.patAgeEdit","value","dsAdr","patAge");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","patDiv.patNoEdit","value","dsAdr","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","patDiv.patNmEdit","value","dsAdr","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","writerDiv.writerNoEdit","value","dsAdr","writerNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","writerDiv.writerNmEdit","value","dsAdr","writerNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","writerDiv.writerJobRadio","value","dsAdr","writerJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","drugDiv.Edit04","value","dsAdr","capct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","drugDiv.Edit03","value","dsAdr","usage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","drugDiv.drugNmEdit","value","dsAdr","drugNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","drugDiv.medEndDate","value","dsAdr","injcEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","drugDiv.drugNoEdit","value","dsAdr","drugNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","drugDiv.Edit05","value","dsAdr","injcPurp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","revealDiv.Calendar01","value","dsAdr","rvlRecogDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","revealDiv.Calendar00","value","dsAdr","rvlStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","revealDiv.Calendar02","value","dsAdr","rvlEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","revealDiv.Edit03","value","dsAdr","afterInjcRvl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","adrDiv02.Edit05","value","dsAdr","symptom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","adrDiv02.Edit00","value","dsAdr","rltnExmntNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","adrDiv02.Edit01","value","dsAdr","rltnExmntVal");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","adrDiv00.Edit05","value","dsAdr","prog");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","adrDiv00.Edit00","value","dsAdr","action");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","adrDiv00.Edit01","value","dsAdr","reinjcReact");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","adrDiv03.TextArea00","value","dsAdr","opinion");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","patDiv.patGenderEdit","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","drugDiv.medStartDate","value","dsAdr","injcStartDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_AdrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_AdrForm.xfdl", "scripts::wonScripts.xjs");
        this.addIncludeScript("SCP_AdrForm.xfdl", "scripts::commonUtil.xjs");
        this.registerScript("SCP_AdrForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 처방공통 ADR 관리                               	   	        *
        *                                                                   *
        * @Path		    ADR 관리    	            						*
        * @Description  ADR 관리       										*
        * @Author		왕민혁  					                        *
        * 								                                    *
        * Created on 2016. 12.  20.                             		    *
        *								                                    *
        ********************************************************************/
        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";
        //include "scripts::commonUtil.xjs";

        var writer; 
        /*-------------------------------------------------------------------------------------------------+
        >>  										작성자 Search하기
        +-------------------------------------------------------------------------------------------------*/
        this.findWriterBtn_onclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        	this.setEmpInfo = function(arrRtn){//set_value 해야 들어감
        		if(arrRtn[3].indexOf("의사")!=-1 || arrRtn[3].indexOf("간호사")!=-1 || arrRtn[3].indexOf("약사")!=-1){
        		this.adrDiv.searchEmpNoEd.set_value(arrRtn[0]);
        		this.adrDiv.searchEmpNmEd.set_value(arrRtn[1]);
        			if (arrRtn[3].indexOf("의사")>=0)
        				 writer="의사";
        			if (arrRtn[3].indexOf("간호사")>=0)
        				 writer="간호사";
        			if (arrRtn[3].indexOf("약사")>=0)
        				 writer="약사";	 
        		}else{
        		alert("작성권한이 없습니다");
        		return;
        		}
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  								작성자, 작성일자에 해당하는 ADR 검색
        +-------------------------------------------------------------------------------------------------*/

        this.adrDiv_searchAdrBtn_onclick = function(obj,e)
        {
        	var doctNoEd=this.adrDiv.searchEmpNoEd.value;
        	var writeDateCal=this.adrDiv.writeDateCal.value;
        	var argument = 'doctNoEd='+doctNoEd+' writeDateCal='+writeDateCal;
        	var serviceRow = this.dsService.findRow("serviceID", "findAdrList");
        	this.dsService.setColumn(serviceRow,"argument",argument);
        	this.gfnService("findAdrList");
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  								ADR 행추가, 삭제 및 저장
        +-------------------------------------------------------------------------------------------------*/

        this.addBtn_onclick = function(obj,e)
        {

        	if (this.adrDiv.searchEmpNoEd.value == null){
        		alert("작성자를 선택해 주십시오");
        		return;
        	}
        	var index=this.dsAdr.addRow();
        	this.writerDiv.writeDateCal.set_value(this.localDate());
        	this.writerDiv.writerNoEdit.set_value(this.adrDiv.searchEmpNoEd.value);
        	this.writerDiv.writerNmEdit.set_value(this.adrDiv.searchEmpNmEd.value);
        	this.prscSearchBtn.set_enable("true");
        	this.patSearchBtn.set_enable("true");
        	this.searchMediBtn.set_enable("true");
        	this.writerDiv.writerJobRadio.set_value(writer);
        }

        this.localDate = function() { // 행추가 시 작성일자 자동 Setting
           var date = new Date();   
            var sRtn = date.getFullYear()                        
                    + (date.getMonth()+1).toString().padLeft(2, "0")  
                       + date.getDate().toString().padLeft(2, "0");
           return sRtn;
        }

        this.delBtn_onclick = function(obj,e)
        {
        	this.dsAdr.deleteRow(this.dsAdr.rowposition);
        }

        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchAdrProcess");
        	this.reload();
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  Grid cell_onclick - > 셀 선택 시 수정불가능 항목 비활성화 // 새로 추가되는 행은 활성화
        +-------------------------------------------------------------------------------------------------*/

        this.adrGrid_oncellclick = function(obj,e)
        {
        	if(this.dsAdr.getColumn(this.dsAdr.rowposition,"adrNo")==null){
        	this.prscSearchBtn.set_enable("true");
        	this.patSearchBtn.set_enable("true");
        	this.searchMediBtn.set_enable("true");
        	}else{
        	this.prscSearchBtn.set_enable("false");
        	this.patSearchBtn.set_enable("false");
        	this.searchMediBtn.set_enable("false");
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  처방검색 팝업 창
        +-------------------------------------------------------------------------------------------------*/

        this.patDiv_prscSearchBtn_onclick = function(obj,e)
        {
        	var patNo=this.patDiv.patNoEdit.value;
        	if (patNo==null){
        		alert("환자를 선택해주세요");
        		return;
        	}
        	return application.open(
                 "SCP_PresPopupForm",
                 "pre::SCP_PresPopupForm.xfdl",
                 this.parent,
                 {patNo:patNo},
                 "showtitlebar=true showstatusbar=false",
                 110, 110,
                 this
           );
        }

        this.setPrscInfo = function(arrRtn) 
        {
        	this.patDiv.prscNoEdit.set_value(arrRtn[0]);			// 처방번호 세팅
        	this.patDiv.diseaseNmEdit.set_value(arrRtn[1]);			// 진단명 세팅
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  환자검색 팝업 창(Setting 시 환자번호, 환자명, 성별, 연령 자동 Setting)
        +-------------------------------------------------------------------------------------------------*/

        this.patSearchBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        	this.patDiv.patNmEdit.set_value(arrRtn[1]);   
            this.patDiv.patNoEdit.set_value(arrRtn[0]);
            if (arrRtn[3].substring(0,1)=='1' || arrRtn[3].substring(0,1)=='2' ){
        	var currYear=nexacro.toNumber(this.localDate().substring(0,4));
            var birthYear=nexacro.toNumber(19+arrRtn[2].substring(0,2));
            var age=currYear-birthYear+1;
            this.patDiv.patAgeEdit.set_value(age);
            } else if (arrRtn[3].substring(0,1)=='3' || arrRtn[3].substring(0,1)=='4'){
            var currYear=nexacro.toNumber(this.localDate().substring(0,4));
            var birthYear=nexacro.toNumber(20+arrRtn[2].substring(0,2));
            var age=currYear-birthYear+1;
            this.patDiv.patAgeEdit.set_value(age);
            }
            switch (arrRtn[3].substring(0,1)){
        		case '1':
        			this.patDiv.patGenderEdit.set_value("남자");
        			break;
        		case '2':
        			this.patDiv.patGenderEdit.set_value("여자");
        			break;
        		}
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  약물코드 약물명 팝업 창
        +-------------------------------------------------------------------------------------------------*/

        this.searchMediBtn_onclick = function(obj,e)
        {
        	var patNo=this.patDiv.patNoEdit.value;
        	var prescNo=this.patDiv.prscNoEdit.value;
        	if (patNo==null){
        		alert("환자를 선택해주세요");
        		return;
        	}
        	if (prescNo==null){
        		alert("처방을 선택해주세요");
        		return;
        	}
        	return application.open(
                 "SCP_PresPopupForm",
                 "pre::SCP_MedicinePopupForm.xfdl",
                 this.parent,
                 {patNo:patNo, prescNo:prescNo},
                 "showtitlebar=true showstatusbar=false",
                 110, 110,
                 this
           );
        }

        this.setMediInfo = function(arrRtn) 
        {
        	this.drugDiv.drugNoEdit.set_value(arrRtn[0]);			// 약물번호 세팅
        	this.drugDiv.drugNmEdit.set_value(arrRtn[1]);			// 약물명 세팅
        	this.drugDiv.medStartDate.set_value(arrRtn[2]);	
        	var startDate=arrRtn[2];
        	var duration=arrRtn[3];
        	var year=startDate.substring(0,4);
        	var month=startDate.substring(4,6);
        	var date=startDate.substring(6,8);
        	var objDate = new Date();
        	objDate.setFullYear(parseInt(year),parseInt(month-1),parseInt(date));
        	objDate.addDate(parseInt(duration));
        	endDate=(objDate.getFullYear()).toString()
        			+(objDate.getMonth()+1).toString().padLeft(2, "0")
        			+(objDate.getDate()).toString();
        	alert(endDate);
        	this.drugDiv.medEndDate.set_value(endDate);	
        // 처방시작일 arrRtn[2] 
        // 복용일 arrRtn[3]
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.adrDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrGrid.addEventHandler("oncellclick", this.adrGrid_oncellclick, this);
            this.writerDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.writerJobRadio.addEventHandler("onitemclick", this.adrDiv01_inoutRadio_onitemclick, this);
            this.adrDiv02.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv02.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv02.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv03.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.inoutRadio.addEventHandler("onitemclick", this.adrDiv05_inoutRadio_onitemclick, this);
            this.patDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchAdrBtn.addEventHandler("onclick", this.adrDiv_searchAdrBtn_onclick, this);
            this.findWriterBtn.addEventHandler("onclick", this.findWriterBtn_onclick, this);
            this.prscSearchBtn.addEventHandler("onclick", this.patDiv_prscSearchBtn_onclick, this);
            this.patSearchBtn.addEventHandler("onclick", this.patSearchBtn_onclick, this);
            this.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);
            this.regAttStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchMediBtn.addEventHandler("onclick", this.searchMediBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_AdrForm.xfdl");

       
    };
}
)();
