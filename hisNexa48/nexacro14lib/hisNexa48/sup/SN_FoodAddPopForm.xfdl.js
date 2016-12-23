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
                this.set_name("SN_FoodAddPopForm");
                this.set_classname("SN_FoodAddPopForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findIngredList</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/findIngredList.do</Col><Col id=\"inData\">[Undefined]</Col><Col id=\"outData\">dsFood=dsFood:u dsIngred=dsIngred</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row><Row><Col id=\"serviceID\">batchFoodListProcess</Col><Col id=\"URL\">his::msv/sup/hosptaldiet/batchFoodListProcess.do</Col><Col id=\"outData\"/><Col id=\"inData\">dsFood=dsFood:U dsFoodDtl=dsFoodDtl:U</Col><Col id=\"callbackFunc\">callBackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFood", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"foodGrpCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"foodType\" type=\"STRING\" size=\"256\"/><Column id=\"foodNm\" type=\"STRING\" size=\"256\"/><Column id=\"notes\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit1\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit2\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit3\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit4\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit5\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit7\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit8\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit9\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit11\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit16\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit17\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit18\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit22\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit23\" type=\"STRING\" size=\"256\"/><Column id=\"nutrit25\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFoodDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"foodCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredCd\" type=\"STRING\" size=\"256\"/><Column id=\"ingredNm\" type=\"STRING\" size=\"256\"/><Column id=\"qty\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"mainmenuYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("compBox", "absolute", "3.71%", "64", null, "92", "2.34%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodGrpCdEd", "absolute", "18.95%", "76", null, "30", "68.95%", null, this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "5.86%", "76", null, "30", "82.13%", null, this);
            obj.set_taborder("2");
            obj.set_text("음식 분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodMemoEd", "absolute", "18.95%", "115", null, "30", "19.14%", null, this);
            obj.set_taborder("4");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "33.79%", "76", null, "30", "54.3%", null, this);
            obj.set_taborder("5");
            obj.set_text("음식코드");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodCdEd", "absolute", "46.78%", "76", null, "30", "38.87%", null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("foodNmEd", "absolute", "76.86%", "76", null, "30", "6.05%", null, this);
            obj.set_taborder("7");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "63.77%", "76", null, "30", "24.22%", null, this);
            obj.set_taborder("8");
            obj.set_text("음식명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "5.86%", "115", null, "30", "82.13%", null, this);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "82.81%", "115", null, "32", "6.05%", null, this);
            obj.set_taborder("61");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0.1%", "0", null, "60", "-62.11%", null, this);
            obj.set_taborder("67");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "7.32%", "-4", null, "60", "77.64%", null, this);
            obj.set_taborder("68");
            obj.set_text("음식 등록");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("compBox00", "absolute", "3.61%", "160", null, "173", "2.34%", null, this);
            obj.set_taborder("69");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            obj.set_tooltiptype("default");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "4.49%", "168", null, "30", "77.73%", null, this);
            obj.set_taborder("70");
            obj.set_text("  음식 별 식품 정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("ingredDtlGrid", "absolute", "4.49%", "203", null, "124", "3.71%", null, this);
            obj.set_taborder("71");
            obj.set_binddataset("dsFoodDtl");
            obj.set_autofittype("col");
            obj.style.set_background("transparent");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"251\"/><Column size=\"96\"/><Column size=\"99\"/><Column size=\"104\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"식품코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"식품명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"수량\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"단위\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:qty\"/><Cell col=\"3\" text=\"bind:unit\"/><Cell col=\"4\" text=\"bind:mainmenuYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("compBox01", "absolute", "3.71%", "340", null, "404", "2.44%", null, this);
            obj.set_taborder("72");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid gainsboro");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Grid("ingredGrid", "absolute", "4.49%", "427", null, "124", "2.93%", null, this);
            obj.set_taborder("73");
            obj.set_binddataset("dsIngred");
            obj.set_autofittype("col");
            obj.style.set_background("transparent");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"196\"/><Column size=\"75\"/><Column size=\"104\"/><Column size=\"78\"/><Column size=\"95\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"식품코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"식품명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"규격\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"계약단가\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"구매단위\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"구매환산량\"/></Band><Band id=\"body\"><Cell text=\"bind:ingredCd\"/><Cell col=\"1\" text=\"bind:ingredNm\"/><Cell col=\"2\" text=\"bind:spec\"/><Cell col=\"3\" text=\"bind:ctrtPrice\"/><Cell col=\"4\" text=\"bind:ordUnit\"/><Cell col=\"5\" text=\"bind:chngQty3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "4.69%", "559", null, "30", "84.08%", null, this);
            obj.set_taborder("74");
            obj.set_text("에너지");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "4.69%", "596", null, "30", "84.08%", null, this);
            obj.set_taborder("75");
            obj.set_text("비타민E");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "4.69%", "633", null, "30", "84.08%", null, this);
            obj.set_taborder("76");
            obj.set_text("당질");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div11", "absolute", "4.69%", "670", null, "30", "84.08%", null, this);
            obj.set_taborder("77");
            obj.set_text("비타민B1");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div14", "absolute", "4.69%", "707", null, "30", "84.08%", null, this);
            obj.set_taborder("78");
            obj.set_text("칼슘");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit7Ed", "absolute", "16.89%", "707", null, "30", "70.12%", null, this);
            obj.set_taborder("79");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit16Ed", "absolute", "16.89%", "670", null, "30", "70.12%", null, this);
            obj.set_taborder("80");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit4Ed", "absolute", "16.89%", "633", null, "30", "70.12%", null, this);
            obj.set_taborder("81");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit22Ed", "absolute", "16.89%", "596", null, "30", "70.12%", null, this);
            obj.set_taborder("82");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit1Ed", "absolute", "16.89%", "559", null, "30", "70.12%", null, this);
            obj.set_taborder("83");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30.86%", "559", null, "30", "64.06%", null, this);
            obj.set_taborder("84");
            obj.set_text("Kcal");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "30.86%", "596", null, "30", "66.89%", null, this);
            obj.set_taborder("85");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30.86%", "633", null, "30", "66.89%", null, this);
            obj.set_taborder("86");
            obj.set_text("g");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30.86%", "670", null, "30", "66.89%", null, this);
            obj.set_taborder("87");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "30.86%", "707", null, "30", "66.89%", null, this);
            obj.set_taborder("88");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div20", "absolute", "37.4%", "707", null, "30", "51.37%", null, this);
            obj.set_taborder("89");
            obj.set_text("콜레스테롤");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div19", "absolute", "37.4%", "670", null, "30", "51.37%", null, this);
            obj.set_taborder("90");
            obj.set_text("비타민B2");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div18", "absolute", "37.4%", "633", null, "30", "51.37%", null, this);
            obj.set_taborder("91");
            obj.set_text("칼륨");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div17", "absolute", "37.4%", "596", null, "30", "51.37%", null, this);
            obj.set_taborder("92");
            obj.set_text("철");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div16", "absolute", "37.4%", "559", null, "30", "51.37%", null, this);
            obj.set_taborder("93");
            obj.set_text("단백질");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit2Ed", "absolute", "49.61%", "559", null, "30", "37.79%", null, this);
            obj.set_taborder("94");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit9Ed", "absolute", "49.61%", "596", null, "30", "37.79%", null, this);
            obj.set_taborder("95");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit11Ed", "absolute", "49.61%", "633", null, "30", "37.79%", null, this);
            obj.set_taborder("96");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit17Ed", "absolute", "49.61%", "670", null, "30", "37.79%", null, this);
            obj.set_taborder("97");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit23Ed", "absolute", "49.61%", "707", null, "30", "37.79%", null, this);
            obj.set_taborder("98");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "63.38%", "707", null, "30", "34.38%", null, this);
            obj.set_taborder("99");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "63.38%", "670", null, "30", "34.38%", null, this);
            obj.set_taborder("100");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "63.38%", "633", null, "30", "34.38%", null, this);
            obj.set_taborder("101");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "63.38%", "596", null, "30", "34.38%", null, this);
            obj.set_taborder("102");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "63.38%", "559", null, "30", "34.38%", null, this);
            obj.set_taborder("103");
            obj.set_text("g");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div21", "absolute", "68.65%", "559", null, "30", "20.31%", null, this);
            obj.set_taborder("104");
            obj.set_text("인");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div22", "absolute", "68.65%", "596", null, "30", "20.31%", null, this);
            obj.set_taborder("105");
            obj.set_text("지질");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div23", "absolute", "68.65%", "633", null, "30", "20.31%", null, this);
            obj.set_taborder("106");
            obj.set_text("식이섬유");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div24", "absolute", "68.65%", "670", null, "30", "20.31%", null, this);
            obj.set_taborder("107");
            obj.set_text("비타민B6");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div25", "absolute", "68.65%", "707", null, "30", "20.31%", null, this);
            obj.set_taborder("108");
            obj.set_text("총지방산");
            obj.style.set_background("#546e7aff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit25Ed", "absolute", "80.57%", "707", null, "30", "6.45%", null, this);
            obj.set_taborder("109");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit18Ed", "absolute", "80.57%", "670", null, "30", "6.45%", null, this);
            obj.set_taborder("110");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit5Ed", "absolute", "80.57%", "633", null, "30", "6.45%", null, this);
            obj.set_taborder("111");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit3Ed", "absolute", "80.57%", "596", null, "30", "6.45%", null, this);
            obj.set_taborder("112");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("nutrit8Ed", "absolute", "80.57%", "559", null, "30", "6.45%", null, this);
            obj.set_taborder("113");
            obj.set_enable("false");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "94.43%", "560", null, "30", "3.22%", null, this);
            obj.set_taborder("114");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "94.43%", "597", null, "30", "3.22%", null, this);
            obj.set_taborder("115");
            obj.set_text("g");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "94.43%", "634", null, "30", "3.22%", null, this);
            obj.set_taborder("116");
            obj.set_text("g");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "94.43%", "671", null, "30", "3.22%", null, this);
            obj.set_taborder("117");
            obj.set_text("mg");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "93.46%", "708", null, "30", "4.3%", null, this);
            obj.set_taborder("118");
            obj.style.set_font("10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "4.39%", "390", null, "30", "83.69%", null, this);
            obj.set_taborder("119");
            obj.set_text("식품코드");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredCdEd", "absolute", "17.09%", "390", null, "30", "67.19%", null, this);
            obj.set_taborder("120");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Edit("ingredNmEd", "absolute", "33.5%", "390", null, "30", "50.78%", null, this);
            obj.set_taborder("121");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "50.39%", "392", null, "26", "45.31%", null, this);
            obj.set_taborder("122");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "4.49%", "352", null, "30", "77.73%", null, this);
            obj.set_taborder("123");
            obj.set_text("  식품정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("btnBox", "absolute", "83.11%", "386", null, "41", "4.3%", null, this);
            obj.set_taborder("124");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);
            obj = new Button("plusBtn", "absolute", "24.81%", "0", null, "32", "46.51%", null, this.btnBox);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::miniPlusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);
            obj = new Button("minusBtn", "absolute", "59.69%", "0", null, "32", "12.4%", null, this.btnBox);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::miniMinusBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            this.btnBox.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 948, 169, this.compBox00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid gainsboro");
            		p.style.set_font("9 돋움");
            		p.set_tooltiptype("default");
            		p.set_positionstep("0");

            	}
            );
            this.compBox00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 104, 50, this.btnBox,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("124");
            		p.set_enableevent("false");

            	}
            );
            this.btnBox.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SN_FoodAddPopForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","foodGrpCdEd","value","dsFood","foodGrpCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","foodMemoEd","value","dsFood","notes");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","foodCdEd","value","dsFood","foodCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","foodNmEd","value","dsFood","foodNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","nutrit7Ed","value","dsIngred","nutrit7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","nutrit16Ed","value","dsIngred","nutrit16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","nutrit4Ed","value","dsIngred","nutrit4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","nutrit22Ed","value","dsIngred","nutrit22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","nutrit1Ed","value","dsIngred","nutrit1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","nutrit2Ed","value","dsIngred","nutrit2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","nutrit9Ed","value","dsIngred","nutrit9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","nutrit11Ed","value","dsIngred","nutrit11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","nutrit17Ed","value","dsIngred","nutrit17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","nutrit23Ed","value","dsIngred","nutrit23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","nutrit25Ed","value","dsIngred","nutrit25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","nutrit18Ed","value","dsIngred","nutrit18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","nutrit5Ed","value","dsIngred","nutrit5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","nutrit3Ed","value","dsIngred","nutrit3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","nutrit8Ed","value","dsIngred","nutrit8");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SN_FoodAddPopForm.xfdl", "scripts::commonTransaction.xjs");
        this.registerScript("SN_FoodAddPopForm.xfdl", function() {
        //include "scripts::commonTransaction.xjs";

        var state;
        var foodGrpCd;
        var foodCd;

        
        this.SN_FoodAddPopForm_onload = function(obj,e)
        {

        	state = this.parent.state;
        	foodGrpCd = this.parent.foodGrpCd;
        	foodCd = this.parent.foodCd;
        	
        		if(state=="insert"){
        		this.dsFood.addRow();
        		this.dsFood.setColumn(0, "foodGrpCd",foodGrpCd);
        		this.dsFood.setColumn(0, "foodCd",foodCd);
        		this.dsFood.setColumn(0, "foodNm", this.foodNmEd.value);
        		this.dsFood.setColumn(0, "notes", this.foodMemoEd.value);
        		
        	}else if(state=="update"){
        		this.dsFood.addRow();
        		this.dsFood.setColumn(0, "foodGrpCd", foodGrpCd);
        		this.dsFood.setColumn(0, "foodCd", foodCd);
        		this.dsFood.setColumn(0, "foodNm", this.parent.foodNm);
        		this.dsFood.setColumn(0, "notes", this.parent.foodMemo);
        		
        		this.dsFoodDtl.copyData(this.parent.dataSet);
        		}
        }
        //식재료조회시
        this.searchBtn_onclick = function(obj,e)
        {
        	var ingredCd = this.ingredCdEd.value;
        	var ingredNm = this.ingredNmEd.value;

        	var argument = 'ingredCd='+ingredCd+' ingredNm='+ingredNm;
        	var row = this.dsService.findRow("serviceID", "findIngredList");
        	this.dsService.setColumn(row, "argument", argument);
        	this.gfnService("findIngredList", false);
        }

        //식재료추가버튼
        this.plusBtn_onclick = function(obj,e)
        {
        	var ingredCd=this.dsIngred.getColumn(this.ingredGrid.currentrow, "ingredCd");
        	var ingredNm=this.dsIngred.getColumn(this.ingredGrid.currentrow, "ingredNm");	
        	var unit=this.dsIngred.getColumn(this.ingredGrid.currentrow, "unit");
        	var mainmenuYn=this.dsIngred.getColumn(this.ingredGrid.currentrow, "mainmenuYn");

        	var count=this.dsFoodDtl.addRow();
        	
        	this.dsFoodDtl.setColumn(count, "foodCd", this.foodCdEd.value);
        	this.dsFoodDtl.setColumn(count, "ingredCd", ingredCd);
        	this.dsFoodDtl.setColumn(count, "ingredNm", ingredNm);
        	this.dsFoodDtl.setColumn(count, "unit", unit);
        	this.dsFoodDtl.setColumn(count, "mainmenuYn", mainmenuYn);

        }

        //식재료삭제버튼
        this.minusBtn_onclick = function(obj,e)
        {
        	this.dsFoodDtl.deleteRow(this.ingredDtlGrid.currentrow);
        }

        //확인버튼
        this.okBtn_onclick = function(obj,e)
        {

        	this.gfnService("batchFoodListProcess", false);
        	alert("저장되었습니다");
        	this.close();
        }

        this.callBackFunc=function(svcID,errorCode,errorMsg)
        {
        	if(errorCode<0)
        	{
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "/n" + errorMsg);
        	}else{
        		if(svcID == "batchFoodAddFormProcess")
        		{
        			this.opener.pCode(1);
        			this.close();
        		}
        		else{
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SN_FoodAddPopForm_onload, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.btnBox.plusBtn.addEventHandler("onclick", this.plusBtn_onclick, this);
            this.btnBox.minusBtn.addEventHandler("onclick", this.minusBtn_onclick, this);

        };

        this.loadIncludeScript("SN_FoodAddPopForm.xfdl");

       
    };
}
)();
