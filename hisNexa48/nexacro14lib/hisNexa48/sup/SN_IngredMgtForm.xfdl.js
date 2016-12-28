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
                this.set_name("SN_IngredMgtForm");
                this.set_classname("SN_IngredMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findCodeList.do</Col><Col id=\"outData\">dsCode=dsCode</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">findIngredList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findIngredList.do</Col><Col id=\"outData\">dsIngred=dsIngred</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchIngredProcess</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/batchIngredProcess.do</Col><Col id=\"inData\">dsIngred=dsIngred:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsIngred", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ingredGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"spec\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty2\" type=\"STRING\" size=\"256\"/><Column id=\"chngQty3\" type=\"STRING\" size=\"256\"/><Column id=\"ingredFlag\" type=\"STRING\" size=\"256\"/><Column id=\"minOrdQty\" type=\"STRING\" size=\"256\"/><Column id=\"saftyStkQty\" type=\"STRING\" size=\"256\"/><Column id=\"itemMclasCd\" type=\"STRING\" size=\"256\"/><Column id=\"autoOrderYn\" type=\"STRING\" size=\"256\"/><Column id=\"autoOutYn\" type=\"STRING\" size=\"256\"/><Column id=\"stockYn\" type=\"STRING\" size=\"256\"/><Column id=\"addYn\" type=\"STRING\" size=\"256\"/><Column id=\"meatYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rate\" type=\"STRING\" size=\"256\"/><Column id=\"roundFlag\" type=\"STRING\" size=\"256\"/><Column id=\"roundDec\" type=\"STRING\" size=\"256\"/><Column id=\"roundNum\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/><Column id=\"spliesDiv\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtPrice\" type=\"STRING\" size=\"256\"/><Column id=\"gdsCd\" type=\"STRING\" size=\"256\"/><Column id=\"subulUnit\" type=\"STRING\" size=\"256\"/><Column id=\"ordUnit\" type=\"STRING\" size=\"256\"/><Column id=\"hospcls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"smallCode1\" type=\"STRING\" size=\"256\"/><Column id=\"fullName1\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode2\" type=\"STRING\" size=\"256\"/><Column id=\"fullName2\" type=\"STRING\" size=\"256\"/><Column id=\"smallCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "1.37%", "440", null, "322", "1.17%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "33.4%", "75", null, "356", "1.17%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16.32%", "7", null, "27", "72.31%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("식재료코드");
            obj.style.set_font("bold 10 돋움");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "46.26%", "7", null, "27", "44.76%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("식재료명");
            obj.style.set_font("bold 10 돋움");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.46%", "75", null, "357", "67.38%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "2.25%", "115", null, "303", "67.97%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"143\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"중분류\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"세분류\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"분류명\"/></Band><Band id=\"body\"><Cell style=\"background:white;background2:white;\" text=\"bind:smallCode1\" suppress=\"1\"/><Cell col=\"1\" style=\"background:white;background2:white;\" text=\"bind:fullName1\" suppress=\"1\"/><Cell col=\"2\" style=\"background:white;background2:white;\" text=\"bind:smallCode2\"/><Cell col=\"3\" style=\"background:white;background2:white;\" text=\"bind:smallCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("IngredGrid", "absolute", "34.38%", "115", null, "303", "2.05%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsIngred");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"212\"/><Column size=\"124\"/><Column size=\"132\"/><Column size=\"111\"/><Column size=\"100\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"식품코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"식품명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"계약단가\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"품목코드\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"재고단위\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"구매단위\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:ingredNm\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:ctrtPrice\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:gdsCd\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:subulUnit\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:ordUnit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredCdEd", "absolute", "52.44%", "80", null, "30", "37.5%", null, this);
            obj.set_taborder("5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "34.67%", "80", null, "30", "56.84%", null, this);
            obj.set_taborder("6");
            obj.set_text("식품코드");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("font", "disabled", "9 돋움 bold");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredNmEd", "absolute", "70.12%", "80", null, "30", "14.94%", null, this);
            obj.set_taborder("7");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "90.72%", "78", null, "32", "2.05%", null, this);
            obj.set_taborder("8");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "90.43%", "728", null, "32", "2.34%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("modBtn", "absolute", "82.52%", "728", null, "32", "10.25%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.25%", "80", null, "30", "67.97%", null, this);
            obj.set_taborder("11");
            obj.set_text("  식품분류");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("font", "disabled", "9 돋움 bold");
            this.addChild(obj.name, obj);

            obj = new Div("compBox", "absolute", "2.34%", "448", null, "273", "2.05%", null, this);
            obj.set_taborder("12");
            obj.style.set_background("white");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "0%", "0", null, "30", "0%", null, this.compBox);
            obj.set_taborder("246");
            obj.set_text("  음식 상세정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("font", "disabled", "9 돋움 bold");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1.33%", "42", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("247");
            obj.set_text("식품분류");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredGrpCdEd", "absolute", "9.11%", "42", null, "30", "78.92%", null, this.compBox);
            obj.set_taborder("248");
            obj.set_enable("false");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("unitEd", "absolute", "30.19%", "42", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("249");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "22.31%", "42", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("250");
            obj.set_text("단위");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "1.33%", "79", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("251");
            obj.set_text("식품코드");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredCdEd", "absolute", "9.11%", "79", null, "30", "78.92%", null, this.compBox);
            obj.set_taborder("252");
            obj.set_enable("false");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("minOrdQtyEd", "absolute", "30.19%", "79", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("253");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "22.31%", "79", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("254");
            obj.set_text("최소발주량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "1.33%", "116", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("255");
            obj.set_text("식품명");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredNmEd", "absolute", "9.11%", "116", null, "30", "78.92%", null, this.compBox);
            obj.set_taborder("256");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("chngQty3Ed", "absolute", "30.19%", "116", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("257");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div07", "absolute", "22.31%", "116", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("258");
            obj.set_text("영양환산량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "1.33%", "153", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("259");
            obj.set_text("견적구분");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("chngQtyEd", "absolute", "30.19%", "153", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("260");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "22.31%", "153", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("261");
            obj.set_text("구매환산량");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div12", "absolute", "1.33%", "190", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("262");
            obj.set_text("규격");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("specEd", "absolute", "9.11%", "190", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("263");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div15", "absolute", "1.33%", "227", null, "30", "91.4%", null, this.compBox);
            obj.set_taborder("264");
            obj.set_text("반올림");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("rateEd", "absolute", "30.19%", "227", null, "30", "58.03%", null, this.compBox);
            obj.set_taborder("265");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div13", "absolute", "22.31%", "227", null, "30", "70.42%", null, this.compBox);
            obj.set_taborder("266");
            obj.set_text("단가");
            obj.style.set_background("tan");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "43.81%", "79", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("267");
            obj.set_text("에너지");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div06", "absolute", "43.81%", "116", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("268");
            obj.set_text("비타민E");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "43.81%", "153", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("269");
            obj.set_text("당질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div11", "absolute", "43.81%", "190", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("270");
            obj.set_text("비타민B1");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div14", "absolute", "43.81%", "227", null, "30", "48.82%", null, this.compBox);
            obj.set_taborder("271");
            obj.set_text("칼슘");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit7Ed", "absolute", "52.1%", "227", null, "30", "41.35%", null, this.compBox);
            obj.set_taborder("272");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit16Ed", "absolute", "52.1%", "190", null, "30", "41.35%", null, this.compBox);
            obj.set_taborder("273");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit4Ed", "absolute", "52.1%", "153", null, "30", "41.35%", null, this.compBox);
            obj.set_taborder("274");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit22Ed", "absolute", "52.1%", "116", null, "30", "41.35%", null, this.compBox);
            obj.set_taborder("275");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit1Ed", "absolute", "52.1%", "79", null, "30", "41.35%", null, this.compBox);
            obj.set_taborder("276");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div16", "absolute", "62.64%", "79", null, "30", "30.09%", null, this.compBox);
            obj.set_taborder("277");
            obj.set_text("단백질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div17", "absolute", "62.64%", "116", null, "30", "30.09%", null, this.compBox);
            obj.set_taborder("278");
            obj.set_text("철");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div18", "absolute", "62.64%", "153", null, "30", "30.09%", null, this.compBox);
            obj.set_taborder("279");
            obj.set_text("칼륨");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div19", "absolute", "62.64%", "190", null, "30", "30.09%", null, this.compBox);
            obj.set_taborder("280");
            obj.set_text("비타민B2");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div20", "absolute", "62.64%", "227", null, "30", "30.09%", null, this.compBox);
            obj.set_taborder("281");
            obj.set_text("콜레스테롤");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit23Ed", "absolute", "70.62%", "227", null, "30", "22.82%", null, this.compBox);
            obj.set_taborder("282");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit17Ed", "absolute", "70.62%", "190", null, "30", "22.82%", null, this.compBox);
            obj.set_taborder("283");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit11Ed", "absolute", "70.62%", "153", null, "30", "22.82%", null, this.compBox);
            obj.set_taborder("284");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit9Ed", "absolute", "70.62%", "116", null, "30", "22.82%", null, this.compBox);
            obj.set_taborder("285");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit2Ed", "absolute", "70.62%", "79", null, "30", "22.82%", null, this.compBox);
            obj.set_taborder("286");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div21", "absolute", "80.86%", "79", null, "30", "11.77%", null, this.compBox);
            obj.set_taborder("287");
            obj.set_text("인");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div22", "absolute", "80.86%", "116", null, "30", "11.77%", null, this.compBox);
            obj.set_taborder("288");
            obj.set_text("지질");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div23", "absolute", "80.86%", "153", null, "30", "11.77%", null, this.compBox);
            obj.set_taborder("289");
            obj.set_text("식이섬유");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div24", "absolute", "80.86%", "190", null, "30", "11.77%", null, this.compBox);
            obj.set_taborder("290");
            obj.set_text("비타민B6");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Div("Div25", "absolute", "80.86%", "227", null, "30", "11.77%", null, this.compBox);
            obj.set_taborder("291");
            obj.set_text("총지방산");
            obj.style.set_background("burlywood");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("background", "disabled", "#546e7aff");
            obj.style.setStyleValue("bordertype", "disabled", "normal 5 5");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit25Ed", "absolute", "88.74%", "227", null, "30", "4.61%", null, this.compBox);
            obj.set_taborder("292");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit18Ed", "absolute", "88.74%", "190", null, "30", "4.61%", null, this.compBox);
            obj.set_taborder("293");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit5Ed", "absolute", "88.74%", "153", null, "30", "4.61%", null, this.compBox);
            obj.set_taborder("294");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit3Ed", "absolute", "88.74%", "116", null, "30", "4.61%", null, this.compBox);
            obj.set_taborder("295");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("nutrit8Ed", "absolute", "88.74%", "79", null, "30", "4.61%", null, this.compBox);
            obj.set_taborder("296");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "43.19%", "42", null, "30", "1.64%", null, this.compBox);
            obj.set_taborder("297");
            obj.set_text("음식 영양소 정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.style.setStyleValue("font", "disabled", "9 돋움 bold");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "59.06%", "79", null, "30", "38.69%", null, this.compBox);
            obj.set_taborder("298");
            obj.set_text("Kcal");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "59.06%", "116", null, "30", "38.69%", null, this.compBox);
            obj.set_taborder("299");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "59.06%", "153", null, "30", "38.69%", null, this.compBox);
            obj.set_taborder("300");
            obj.set_text("g");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "59.06%", "190", null, "30", "38.69%", null, this.compBox);
            obj.set_taborder("301");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "59.06%", "227", null, "30", "38.69%", null, this.compBox);
            obj.set_taborder("302");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "77.58%", "79", null, "30", "20.16%", null, this.compBox);
            obj.set_taborder("303");
            obj.set_text("g");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "77.58%", "116", null, "30", "20.16%", null, this.compBox);
            obj.set_taborder("304");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "77.58%", "153", null, "30", "20.16%", null, this.compBox);
            obj.set_taborder("305");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "77.58%", "190", null, "30", "20.16%", null, this.compBox);
            obj.set_taborder("306");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "77.58%", "227", null, "30", "20.16%", null, this.compBox);
            obj.set_taborder("307");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "95.7%", "80", null, "30", "2.05%", null, this.compBox);
            obj.set_taborder("308");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "95.7%", "117", null, "30", "2.05%", null, this.compBox);
            obj.set_taborder("309");
            obj.set_text("g");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "95.7%", "154", null, "30", "2.05%", null, this.compBox);
            obj.set_taborder("310");
            obj.set_text("g");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "95.7%", "191", null, "30", "2.05%", null, this.compBox);
            obj.set_taborder("311");
            obj.set_text("mg");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "95.7%", "228", null, "30", "2.05%", null, this.compBox);
            obj.set_taborder("312");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("roundFlagEd", "absolute", "9.11%", "227", null, "30", "78.92%", null, this.compBox);
            obj.set_taborder("313");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);
            obj = new Edit("ingredFlagEd", "absolute", "9.11%", "153", null, "30", "78.92%", null, this.compBox);
            obj.set_taborder("314");
            obj.style.set_font("9 돋움");
            this.compBox.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0.1%", "0", null, "60", "0%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.16%", "0", null, "60", "80.75%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("식재료 관리");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "66.8%", "728", null, "32", "26.07%", null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "74.71%", "728", null, "32", "18.07%", null, this);
            obj.set_taborder("15");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 322, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 356, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1192, 273, this.compBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("white");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");
            		p.set_enable("false");

            	}
            );
            this.compBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_IngredMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","codeGrid","binddataset","dsIngred","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","compBox.ingredGrpCdEd","value","dsIngred","ingredGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","compBox.ingredCdEd","value","dsIngred","ingredCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","compBox.ingredNmEd","value","dsIngred","ingredNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","compBox.ingredFlagEd","value","dsIngred","spec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","compBox.specEd","value","dsIngred","spec");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","compBox.roundFlagEd","value","dsIngred","roundFlag");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","compBox.unitEd","value","dsIngred","unit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","compBox.minOrdQtyEd","value","dsIngred","minOrdQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","compBox.chngQty3Ed","value","dsIngred","chngQty3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","compBox.chngQtyEd","value","dsIngred","chngQty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","compBox.rateEd","value","dsIngred","rate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","compBox.nutrit1Ed","value","dsIngred","nutrit1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","compBox.nutrit22Ed","value","dsIngred","nutrit22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","compBox.nutrit4Ed","value","dsIngred","nutrit4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","compBox.nutrit16Ed","value","dsIngred","nutrit16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","compBox.nutrit7Ed","value","dsIngred","nutrit7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","compBox.nutrit2Ed","value","dsIngred","nutrit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","compBox.nutrit9Ed","value","dsIngred","nutrit9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","compBox.nutrit11Ed","value","dsIngred","nutrit11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","compBox.nutrit17Ed","value","dsIngred","nutrit17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","compBox.nutrit23Ed","value","dsIngred","nutrit23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","compBox.nutrit8Ed","value","dsIngred","nutrit8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","compBox.nutrit3Ed","value","dsIngred","nutrit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","compBox.nutrit5Ed","value","dsIngred","nutrit5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","compBox.nutrit18Ed","value","dsIngred","nutrit18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","compBox.nutrit25Ed","value","dsIngred","nutrit25");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_IngredMgtForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SN_IngredMgtForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        var ingredGrpCd;

        //화면로드
        this.SN_IngredMgtForm_onload = function(obj,e)
        {
        	var argument = "formDiv="+"ingred";
        	var row = this.dsService.findRow("serviceID","findCodeList");
        	this.dsService.setColumn(row,"argument",argument);
        	this.gfnService("findCodeList",false);
        }

        
        //코드선택시 식재료 조회
        this.dsCode_onrowposchanged = function(obj,e)
        {
        	ingredGrpCd = obj.getColumn(e.newrow,"smallCode");
            var argument = "ingredGrpCd="+ingredGrpCd;
        	var row = this.dsService.findRow("serviceID", "findIngredList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findIngredList", false);
        }

        

        //조회버튼클릭 시 식재료 조회
        this.searchBtn_onclick = function(obj,e)
        {
        	this.compBox.set_enable(false);

        	var ingredCd = this.ingredCdEd.value;
        	var ingredNm = this.ingredNmEd.value;

        	var argument = "ingredCd="+ingredCd+" ingredNm="+ingredNm;
        	var row = this.dsService.findRow("serviceID", "findIngredList");
        	this.dsService.setColumn(row, "argument", argument);
        	
        	this.gfnService("findIngredList", false);
        	
        	alert("조회 되었습니다.");
        }

        //식재료 수정
        this.modBtn_onclick = function(obj,e)
        {
        		this.compBox.set_enable(true);
        }

        //식재료배치
        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchIngredProcess");
            alert("저장되었습니다.");
            this.compBox.set_enable(false);
        }

        //식재료추가
        this.addBtn_onclick = function(obj,e)
        {
        	this.dsIngred.addRow();
        	var preingredCd=this.dsIngred.getColumn(this.dsIngred.rowposition-1,"ingredCd");

        	var addingredNm=nexacro.toNumber(preingredCd.substring(3,7))+1;
        	var addingredNm=addingredNm.toString().padLeft(4, "0");
        	this.dsIngred.setColumn(this.dsIngred.rowposition,"ingredGrpCd",ingredGrpCd);
        	this.dsIngred.setColumn(this.dsIngred.rowposition,"gdsCd",ingredGrpCd+addingredNm);
        	this.dsIngred.setColumn(this.dsIngred.rowposition,"ingredCd",ingredGrpCd+addingredNm);
        	this.compBox.set_enable(true);
        }

        //식재료삭제
        this.delBtn_onclick = function(obj,e)
        {

        	this.dsIngred.deleteRow(this.dsIngred.rowposition);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsIngred.addEventHandler("canrowposchange", this.dsIngred_canrowposchange, this);
            this.dsCode.addEventHandler("onrowposchanged", this.dsCode_onrowposchanged, this);
            this.addEventHandler("onload", this.SN_IngredMgtForm_onload, this);
            this.codeGrid.addEventHandler("oncellclick", this.codeGrid_oncellclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.modBtn.addEventHandler("onclick", this.modBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.compBox.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div03.Static00.addEventHandler("onclick", this.Div03_Static00_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);

        };

        this.loadIncludeScript("SN_IngredMgtForm.xfdl");

       
    };
}
)();
