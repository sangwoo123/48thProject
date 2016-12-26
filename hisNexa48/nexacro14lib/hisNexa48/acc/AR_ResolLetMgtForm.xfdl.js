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
                this.set_name("AR_ResolLetMgtForm");
                this.set_classname("AR_ResolLetMgtForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "81.64%", null, this);
            obj.set_taborder("0");
            obj.set_text("결의서 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "1132", "728", "90", "32", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn15", "absolute", "939", "728", "90", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "1034", "728", "90", "32", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("resolMngmt", "absolute", "1.95%", "58", null, "702", "1.17%", null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("none");
            obj.style.set_background("#edececff");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "33.77%", "7", null, "27", "1.11%", null, this.resolMngmt);
            obj.set_taborder("277");
            obj.set_text("결의서 상세정보");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "0.2%", "39", null, "27", "92.74%", null, this.resolMngmt);
            obj.set_taborder("278");
            obj.set_text("결의구분");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "16.23%", "39", null, "27", "76.71%", null, this.resolMngmt);
            obj.set_taborder("279");
            obj.set_text("회계기수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.2%", "134", null, "30", "92.74%", null, this.resolMngmt);
            obj.set_taborder("280");
            obj.set_text("결의부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.2%", "104", null, "27", "92.74%", null, this.resolMngmt);
            obj.set_taborder("281");
            obj.set_text("결의번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "0.2%", "71", null, "27", "92.74%", null, this.resolMngmt);
            obj.set_taborder("282");
            obj.set_text("결의일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "33.77%", "36", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("283");
            obj.set_text("결의번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "33.77%", "63", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("284");
            obj.set_text("결의일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "33.77%", "91", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("285");
            obj.set_text("거래처");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "50.1%", "63", null, "25", "42.94%", null, this.resolMngmt);
            obj.set_taborder("286");
            obj.set_text("결의금액");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "50.1%", "36", null, "25", "42.94%", null, this.resolMngmt);
            obj.set_taborder("287");
            obj.set_text("결의구분");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc10", "absolute", "33.77%", "119", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("288");
            obj.set_text("진행상태");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc11", "absolute", "66.43%", "36", null, "25", "26.61%", null, this.resolMngmt);
            obj.set_taborder("289");
            obj.set_text("요구부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc12", "absolute", "50.1%", "91", null, "25", "42.94%", null, this.resolMngmt);
            obj.set_taborder("290");
            obj.set_text("사업자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc13", "absolute", "82.76%", "36", null, "25", "10.28%", null, this.resolMngmt);
            obj.set_taborder("291");
            obj.set_text("결의부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc14", "absolute", "82.76%", "90", null, "25", "10.28%", null, this.resolMngmt);
            obj.set_taborder("292");
            obj.set_text("결의부서전화");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc15", "absolute", "82.76%", "117", null, "25", "10.28%", null, this.resolMngmt);
            obj.set_taborder("293");
            obj.set_text("원인번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc16", "absolute", "82.76%", "63", null, "25", "10.28%", null, this.resolMngmt);
            obj.set_taborder("294");
            obj.set_text("결의자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc17", "absolute", "0.2%", "7", null, "27", "68.15%", null, this.resolMngmt);
            obj.set_taborder("295");
            obj.set_text("결의서 목록");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc18", "absolute", "66.43%", "63", null, "25", "26.61%", null, this.resolMngmt);
            obj.set_taborder("296");
            obj.set_text("계약번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc19", "absolute", "66.43%", "90", null, "25", "26.61%", null, this.resolMngmt);
            obj.set_taborder("297");
            obj.set_text("접수번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Combo("resolDivCombo", "absolute", "7.56%", "37", null, "30", "84.07%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("298");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("accPridCombo", "absolute", "23.69%", "36", null, "30", "67.94%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("299");
            obj.set_innerdataset("dsAccPrid");
            obj.set_codecolumn("accPrid");
            obj.set_datacolumn("accPrid");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("endResolNoEd", "absolute", "22.08%", "104", null, "30", "67.94%", null, this.resolMngmt);
            obj.set_taborder("300");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("startResolNoEd", "absolute", "7.66%", "104", null, "30", "82.36%", null, this.resolMngmt);
            obj.set_taborder("301");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolDeptCdEd", "absolute", "7.66%", "136", null, "30", "84.58%", null, this.resolMngmt);
            obj.set_taborder("302");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolNoEd", "absolute", "41.13%", "35", null, "25", "50.1%", null, this.resolMngmt);
            obj.set_taborder("303");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolDate", "absolute", "41.13%", "62", null, "25", "50.1%", null, this.resolMngmt);
            obj.set_taborder("304");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt09", "absolute", "57.46%", "90", null, "25", "33.77%", null, this.resolMngmt);
            obj.set_taborder("305");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt10", "absolute", "57.46%", "63", null, "25", "33.77%", null, this.resolMngmt);
            obj.set_taborder("306");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt12", "absolute", "73.69%", "90", null, "25", "17.54%", null, this.resolMngmt);
            obj.set_taborder("307");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt13", "absolute", "73.69%", "63", null, "25", "17.54%", null, this.resolMngmt);
            obj.set_taborder("308");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolerCdEd", "absolute", "90.22%", "63", null, "25", "1.11%", null, this.resolMngmt);
            obj.set_taborder("309");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt17", "absolute", "90.22%", "90", null, "25", "1.11%", null, this.resolMngmt);
            obj.set_taborder("310");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt18", "absolute", "90.22%", "117", null, "25", "1.11%", null, this.resolMngmt);
            obj.set_taborder("311");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc20", "absolute", "18.35%", "104", null, "27", "78.83%", null, this.resolMngmt);
            obj.set_taborder("312");
            obj.set_text("~");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc21", "absolute", "18.35%", "71", null, "27", "78.83%", null, this.resolMngmt);
            obj.set_taborder("313");
            obj.set_text("~");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Calendar("resolStartDateCal", "absolute", "7.66%", "71", null, "30", "82.46%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("314");
            obj = new Calendar("resolEndDateCal", "absolute", "22.08%", "71", null, "30", "68.15%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("315");
            obj = new Grid("resolListGrid", "absolute", "0.6%", "172", null, "494", "68.15%", null, this.resolMngmt);
            obj.set_taborder("316");
            obj.set_binddataset("dsResolLet");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"결의번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"결의구분\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"결의부서\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:resolNo\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:right;\" text=\"bind:resolDiv\" maskchar=\" \" combodataset=\"dsResolDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:resolDeptCd\" combodataset=\"dsDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:progStatDiv\" combodataset=\"dsProgDiv\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "33.77%", "201", null, "50", "1.11%", null, this.resolMngmt);
            obj.set_taborder("317");
            obj.set_binddataset("dsRunBudg");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"19\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"비목명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"배정예산금액\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"예산금액\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"결의가능금액\"/></Band><Band id=\"body\"><Cell text=\"bind:bimokCd\"/><Cell col=\"1\" text=\"bind:bimokNm\"/><Cell col=\"2\" text=\"bind:allotPlanAmount\"/><Cell col=\"3\" text=\"bind:budgAmount\"/><Cell col=\"4\" text=\"bind:budgBal\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("taxInvGrid", "absolute", "33.77%", "503", null, "162", "1.11%", null, this.resolMngmt);
            obj.set_taborder("318");
            obj.set_binddataset("dsTaxInv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"21\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"19\" band=\"head\"/><Row size=\"19\"/><Row size=\"18\"/><Row size=\"20\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"발행일\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"계산서구분\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"매입/매출\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"금액\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" text=\"공금가액\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"세액\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"거래처\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;\" text=\"대표자\"/><Cell row=\"1\" col=\"5\" style=\"background:#cfd8dcff;\" text=\"업태\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"종목\"/><Cell row=\"2\" col=\"1\" colspan=\"7\" style=\"background:#cfd8dcff;\" text=\"품목\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" celltype=\"head\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\" colspan=\"2\"/><Cell row=\"2\" col=\"1\" colspan=\"7\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;\"/><Cell col=\"1\" colspan=\"3\" style=\"background:#37474fff;\" text=\"합계\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"number\" style=\"background:#37474fff;\" expr=\"expr:getSum(&quot;sumPrice*1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"background:#37474fff;\" expr=\"expr:getSum(&quot;splyPrice*1&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"background:#37474fff;\" expr=\"expr:getSum(&quot;taxAmt*1&quot;)\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc22", "absolute", "33.77%", "147", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("319");
            obj.set_text("출력양식");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc23", "absolute", "50.1%", "119", null, "25", "42.94%", null, this.resolMngmt);
            obj.set_taborder("320");
            obj.set_text("계정과목");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc24", "absolute", "50.1%", "147", null, "25", "42.94%", null, this.resolMngmt);
            obj.set_taborder("321");
            obj.set_text("보조과목");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc25", "absolute", "33.77%", "175", null, "25", "59.38%", null, this.resolMngmt);
            obj.set_taborder("322");
            obj.set_text("적요");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Static("subCodeStc26", "absolute", "66.43%", "145", null, "25", "26.61%", null, this.resolMngmt);
            obj.set_taborder("323");
            obj.set_text("반려사유");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt05", "absolute", "73.69%", "145", null, "25", "1.11%", null, this.resolMngmt);
            obj.set_taborder("324");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("assiSubNmEd", "absolute", "57.46%", "146", null, "25", "33.77%", null, this.resolMngmt);
            obj.set_taborder("325");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("AuthEdt20", "absolute", "57.46%", "118", null, "25", "33.77%", null, this.resolMngmt);
            obj.set_taborder("326");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("resolNoEd09", "absolute", "41.13%", "145", null, "25", "50.1%", null, this.resolMngmt);
            obj.set_taborder("327");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Edit("acntNmEd", "absolute", "66.43%", "118", null, "25", "17.54%", null, this.resolMngmt);
            obj.set_taborder("328");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("JourGrid", "absolute", "33.77%", "253", null, "90", "1.11%", null, this.resolMngmt);
            obj.set_taborder("329");
            obj.set_binddataset("dsJour");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"92\"/><Column size=\"18\"/><Column size=\"100\"/><Column size=\"102\"/><Column size=\"19\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"16\" band=\"head\"/><Row size=\"18\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"차대구분\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"계정코드\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"계정코드명\"/><Cell col=\"5\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"보조과목코드\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"보조과목명\"/><Cell col=\"8\" style=\"background:#cfd8dcff;\" text=\"차변금액\"/><Cell col=\"9\" style=\"background:#cfd8dcff;\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell celltype=\"none\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;combo&quot;\" text=\"bind:creDebDiv\" combodataset=\"dsCreDebDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:acntCd\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;button&quot;\" style=\"color:black;color2:black;selectcolor:black;\" text=\"+\"/><Cell col=\"4\" text=\"bind:acntNm\"/><Cell col=\"5\" text=\"bind:assiSubCd\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" style=\"color:black;color2:black;selectcolor:black;\" text=\"+\"/><Cell col=\"7\" text=\"bind:assiSubNm\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:debAmt\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:creAmt\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;\"/><Cell col=\"1\" colspan=\"7\" style=\"background:#37474fff;\" text=\"합계\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;background:#37474fff;\" expr=\"expr:getSum(!isNaN(debAmt)== true? debAmt: &quot;0&quot;')\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;background:#37474fff;\" expr=\"expr:getSum('!isNaN(creAmt)== true? creAmt: &quot;0&quot;')\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new TextArea("abs", "absolute", "41.13%", "174", null, "25", "1.11%", null, this.resolMngmt);
            obj.set_taborder("330");
            obj.set_enable("false");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Combo("progStatDiv", "absolute", "41.13%", "117", null, "25", "50.1%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("331");
            obj.set_innerdataset("dsProgDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo01", "absolute", "57.46%", "37", null, "25", "33.77%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("332");
            obj.set_innerdataset("dsResolDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo02", "absolute", "41.13%", "89", null, "25", "50.1%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("333");
            obj.set_innerdataset("dsCust");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDivCombo03", "absolute", "73.69%", "36", null, "25", "17.54%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("334");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Combo("resolDeptCdCombo", "absolute", "90.22%", "36", null, "25", "1.11%", null, this.resolMngmt);
            this.resolMngmt.addChild(obj.name, obj);
            obj.set_taborder("335");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaCombo");
            obj = new Edit("resolDeptNameEd", "absolute", "18.35%", "136", null, "30", "73.29%", null, this.resolMngmt);
            obj.set_taborder("336");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Grid("payGrid", "absolute", "33.77%", "345", null, "157", "1.11%", null, this.resolMngmt);
            obj.set_taborder("337");
            obj.set_binddataset("dsPayRec");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"21\" band=\"head\"/><Row size=\"18\"/><Row size=\"19\"/><Row size=\"19\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" style=\"background:#cfd8dcff;\" text=\"순번\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"지불구분\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"연구과제\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"연구비목\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"카드번호\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" text=\"카드사용일\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"승인번호\"/><Cell col=\"8\" style=\"background:#cfd8dcff;\" text=\"거래처명\"/><Cell col=\"9\" colspan=\"2\" style=\"background:#cfd8dcff;\" text=\"사업자번호\"/><Cell col=\"11\" style=\"background:#cfd8dcff;\" text=\"주소\"/><Cell row=\"1\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"예금주\"/><Cell row=\"1\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"이체일\"/><Cell row=\"1\" col=\"3\" style=\"background:#cfd8dcff;\" text=\"이체은행\"/><Cell row=\"1\" col=\"4\" style=\"background:#cfd8dcff;\" text=\"계좌번호\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"집행목적\"/><Cell row=\"1\" col=\"11\" style=\"background:#cfd8dcff;\" text=\"금액\"/><Cell row=\"2\" col=\"1\" style=\"background:#cfd8dcff;\" text=\"사용자\"/><Cell row=\"2\" col=\"2\" style=\"background:#cfd8dcff;\" text=\"참석인원\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"참석자\"/><Cell row=\"2\" col=\"9\" style=\"background:#cfd8dcff;\" text=\"식비\"/><Cell row=\"2\" col=\"10\" style=\"background:#cfd8dcff;\" text=\"계산서\"/><Cell row=\"2\" col=\"11\" style=\"background:#cfd8dcff;\" text=\"사유/비고\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" celltype=\"none\" text=\"bind:seq\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:payDiv\" combodataset=\"dsJibulDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" colspan=\"2\" text=\"bind:stdTask\"/><Cell col=\"4\" text=\"bind:stdBimok\"/><Cell col=\"5\" edittype=\"expand\" text=\"bind:cardNo\"/><Cell col=\"6\" text=\"bind:cardUseDate\"/><Cell col=\"7\" text=\"bind:aprvNo\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:custCd\" combodataset=\"dsAccount\" combocodecol=\"custcd\" combodatacol=\"custnm\"/><Cell col=\"9\" colspan=\"2\" edittype=\"normal\" text=\"bind:operNo\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:addr\"/><Cell row=\"1\" col=\"1\" text=\"bind:depoOwner\"/><Cell row=\"1\" col=\"2\" edittype=\"date\" text=\"bind:transDate\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:transBank\" combodataset=\"dsBank\" combocodecol=\"code\" combodatacol=\"value\"/><Cell row=\"1\" col=\"4\" text=\"bind:accountNo\"/><Cell row=\"1\" col=\"5\" colspan=\"6\" edittype=\"normal\" text=\"bind:exePurp\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"normal\" text=\"bind:price\"/><Cell row=\"2\" col=\"1\" displaytype=\"combo\" edittype=\"expand\" text=\"bind:users\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell row=\"2\" col=\"2\" edittype=\"normal\" text=\"bind:cttInwon\"/><Cell row=\"2\" col=\"3\" colspan=\"6\" text=\"bind:att\"/><Cell row=\"2\" col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:foodCostYb\"/><Cell row=\"2\" col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:taxinvYb\"/><Cell row=\"2\" col=\"11\" edittype=\"normal\" text=\"bind:note\"/></Band><Band id=\"summary\"><Cell style=\"background:#37474fff;\"/><Cell col=\"1\" colspan=\"10\" style=\"background:#37474fff;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" style=\"background:#37474fff;\" expr=\"expr:getSum(&quot;price*1&quot;)\"/></Band></Format></Formats>");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Button("searchDeptBtn", "absolute", "156", "137", "28", "29", null, null, this.resolMngmt);
            obj.set_taborder("338");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.resolMngmt.addChild(obj.name, obj);
            obj = new Button("searchResolBtn", "absolute", "268", "134", "53", "32", null, null, this.resolMngmt);
            obj.set_taborder("339");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.resolMngmt.addChild(obj.name, obj);

            obj = new Button("modiBtn", "absolute", "1132", "731", "90", "32", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "944", "731", "90", "32", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Button("deleteBtn", "absolute", "1037", "731", "90", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "0", "1023", "60", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "-4", null, "60", "75.27%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("결의서 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 702, this.resolMngmt,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_scrollbars("none");
            		p.style.set_background("#edececff");

            	}
            );
            this.resolMngmt.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1023, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AR_ResolLetMgtForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DelBtn02.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn15.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.resolMngmt.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc10.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc11.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc12.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc13.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc15.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc16.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc17.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc18.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc19.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.resolDivCombo.addEventHandler("onitemchanged", this.resolMngmt_resolDivCombo_onitemchanged, this);
            this.resolMngmt.subCodeStc20.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc21.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.resolListGrid.addEventHandler("oncellclick", this.fn_cellClickResolLiGrid, this);
            this.resolMngmt.subCodeStc22.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc23.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc24.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc25.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.subCodeStc26.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.resolMngmt.searchDeptBtn.addEventHandler("onclick", this.resolMngmt_searchDeptBtn_onclick, this);
            this.resolMngmt.searchResolBtn.addEventHandler("onclick", this.resolMngmt_searchResolBtn_onclick, this);
            this.modiBtn.addEventHandler("onclick", this.modiBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.deleteBtn.addEventHandler("onclick", this.deleteBtn_onclick, this);

        };

        this.loadIncludeScript("AR_ResolLetMgtForm.xfdl");

       
    };
}
)();
