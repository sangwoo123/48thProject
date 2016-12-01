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
                this.set_name("SCP_AttentionalPatientForm");
                this.set_classname("MA_AdrForm");
                this.set_titletext("약물유해반응 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAttentionalPatientList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAttentionalPatientList.do</Col><Col id=\"callbackFunc\">attentionalPatientCallback</Col><Col id=\"outData\">dsAttentionalPatient=dsAttentionalPatient</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findAttentionalCodeList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAttentionalCodeList.do</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">attentionalCodeCallback</Col><Col id=\"outData\">dsAttentionalCode=dsAttentionalCode</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttentionalPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalField\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalDiv\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttentionalCode", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalCode\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalCodeName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalField\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_checkall", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\"/><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\"/><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column1\">3</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\"/><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column1\">4</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\"/><Col id=\"Column4\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0.16%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-5", null, "60", "71.84%", null, this);
            obj.set_taborder("1");
            obj.set_text("관심환자관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("SCP_regAttPatDiv", "absolute", "2%", "66", "381", "398", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("pNameStc", "absolute", "2.37%", "46", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("20");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.64%", "124", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("21");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "28.76%", "46", "94", "30", null, null, this.SCP_regAttPatDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.64%", "163", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("28");
            obj.set_text("관심분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc01", "absolute", "2.64%", "202", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("29");
            obj.set_text("등록일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc02", "absolute", "2.64%", "241", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("30");
            obj.set_text("종료일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc03", "absolute", "2.64%", "280", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("31");
            obj.set_text("관심내역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Calendar("startDateCal", "absolute", "28.5%", "202", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Calendar("endDateCal", "absolute", "28.5%", "241", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Combo("attDivCombo", "absolute", "28.5%", "163", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_datacolumn("attentionalField");
            obj.style.set_font("9 돋움");
            obj.set_innerdataset("@dsAttentionalCode");
            obj.set_codecolumn("attentionalCodeName");
            obj = new Edit("patNoEd", "absolute", "28.76%", "85", "94", "30", null, null, this.SCP_regAttPatDiv);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaEdt");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("pNameStc00", "absolute", "2.37%", "85", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("37");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Combo("attFieldCombo", "absolute", "28.5%", "123", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            var attFieldCombo_innerdataset = new Dataset("attFieldCombo_innerdataset", this.SCP_regAttPatDiv.attFieldCombo);
            attFieldCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">내</Col><Col id=\"datacolumn\">내과</Col></Row><Row><Col id=\"codecolumn\">외</Col><Col id=\"datacolumn\">외과</Col></Row></Rows>");
            obj.set_innerdataset(attFieldCombo_innerdataset);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");

            obj = new Div("attPatDiv", "absolute", "33.92%", "67", "805", "670", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.87%", "47", null, "30", "87.8%", null, this.attPatDiv);
            obj.set_taborder("2");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("prscNoEdit", "absolute", "12.95%", "47", null, "30", "73.97%", null, this.attPatDiv);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("attPtNoEd", "absolute", "33%", "47", null, "30", "53.18%", null, this.attPatDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.87%", "89", null, "563", "2.24%", null, this.attPatDiv);
            obj.set_taborder("13");
            obj.set_binddataset("dsAttentionalPatient");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"89\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"이름\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"관심영역\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"관심분류\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"시작일자\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:patNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:patName\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:attentionalDiv\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:attentionalDiv\"/><Cell col=\"4\" text=\"bind:startDate\"/><Cell col=\"5\" text=\"bind:endDate\"/></Band></Format></Formats>");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.87%", "6", null, "30", "2.24%", null, this.attPatDiv);
            obj.set_taborder("15");
            obj.set_text("   관심환자조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.attPatDiv);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.attPatDiv.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "10.8%", "350", null, "104", "68.4%", null, this);
            obj.set_taborder("16");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("attCodeDiv", "absolute", "1.92%", "472", "381", "264", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.9%", "41", null, "30", "74.67%", null, this.attCodeDiv);
            obj.set_taborder("37");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attCodeDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.9%", "76", null, "30", "74.67%", null, this.attCodeDiv);
            obj.set_taborder("41");
            obj.set_text("분류명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attCodeDiv.addChild(obj.name, obj);
            obj = new Combo("attFieldEd", "absolute", "28.76%", "41", null, "30", "22.43%", null, this.attCodeDiv);
            this.attCodeDiv.addChild(obj.name, obj);
            var attFieldEd_innerdataset = new Dataset("attFieldEd_innerdataset", this.attCodeDiv.attFieldEd);
            attFieldEd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(attFieldEd_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Edit("attDivEd", "absolute", "28.76%", "76", "166", "30", null, null, this.attCodeDiv);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.attCodeDiv.addChild(obj.name, obj);

            obj = new Static("regAttStc", "absolute", "2.8%", "74", null, "30", "68.08%", null, this);
            obj.set_taborder("19");
            obj.set_text("   관심환자등록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.72%", "480", null, "30", "68.24%", null, this);
            obj.set_taborder("20");
            obj.set_text("   관심분류등록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchAttBtn", "absolute", "827", "77", "58", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("addCodeBtn", "absolute", "308", "552", "45", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "299", "482", "45", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "344", "482", "45", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("regAttBtn", "absolute", "299", "76", "45", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("clearAttBtn", "absolute", "344", "76", "45", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "885", "76", "58", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "232", "113", "30", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "641", "115", "30", "30", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "2.88%", "589", null, "131", "68.4%", null, this);
            obj.set_taborder("37");
            obj.set_binddataset("dsAttentionalCode");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:attentionalCodeName\"/><Cell col=\"1\" text=\"bind:attentionalCodeName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 381, 398, this.SCP_regAttPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.SCP_regAttPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 670, this.attPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.attPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 381, 264, this.attCodeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.attCodeDiv.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","patDiv.prscNoEdit","value","dsAdr","prescNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","patDiv.diseaseNmEdit","value","dsAdr","diseaseNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","patDiv.patGenderCombo","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","adrDiv.writeDateCal","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","adrDiv.writeDateCal00","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","adrDiv.patGenderCombo","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","adrDiv.patGenderCombo00","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","patDiv.patGenderCombo00","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","SCP_regAttPatDiv.attFieldCombo","innerdataset","dsAttentionalPatient","ATTENDTIONAL_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","SCP_regAttPatDiv.attDivCombo","innerdataset","dsAttentionalPatient","ATTENDTIONAL_DIV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","SCP_regAttPatDiv.endDateCal","innerdataset","dsAttentionalPatient","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","SCP_regAttPatDiv.startDateCal","innerdataset","dsAttentionalPatient","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_AttentionalPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_AttentionalPatientForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_AttentionalPatientForm.xfdl", function() {

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        

        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	switch(obj){ 
        		case this.regAttBtn:  		// 관심환자 등록
        			this.clickRegAttBtn();
        			break;
        		case this.clearAttBtn: 	    // 관심환자 등록 시 데이터 초기화
        			this.clickClearAttBtn();
        			break;
        		case this.searchAttBtn: 	// 관심환자 조회
        			this.clickSearchAttBtn();
        			break;
        		case this.addCodeBtn: 		// 코드 추가
        			this.clickAddCodeBtn();
        			break;
        	}
        }

        
        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/

        this.clickSearchAttBtn = function () {
        	var attPtNo=this.attPatDiv.attPtNoEd.value;
        	this.dsAttentionalPatient.clearData();
        	var argument = 'attPtNo='+attPtNo; ;
        	var serviceRow = this.dsService.findRow("serviceID", "findAttentionalPatientList");
        	this.dsService.setColumn(serviceRow,"argument",argument);
        	this.gfnService("findAttentionalPatientList","false");
        }

        
        /*
        this.clickSearchPatNoBtn = function(){	//환자등록번호조회
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){
        		this.SCP_regAttPatDiv.patNoEd.set_value(arrRtn[0]);
        	}
        }

        this.clickSearchAttCodeBtn =function () {
        	alert("빨리가라");
        	if(this.SCP_attCodeDiv.attFieldEd.value==null){
        		alert("관심영역을 선택하세요!");
        		return;
        	}
        	if(this.SCP_attCodeDiv.attDivEd.value=null){
        		alert("관심분류를 선택하세요!");
        		return;
        	}

        }

        */
        this.SCP_AttentionalPatientForm_onload = function(obj,e)
        {
        	this.dsAttentionalCode.clearData();
        	//this.dsAttentionalPatient.addRow();
        	this.gfnService("findAttentionalCodeList","false");		
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  행추가
        +-------------------------------------------------------------------------------------------------*/
        this.clickAddCodeBtn = function(obj,e)
        {
        	this.dsAttentionalCode.addRow();
        }

        
        /*-------------------------------------------------------------------------------------------------+
        >>  저장
        +-------------------------------------------------------------------------------------------------*/
        this.clickRegAttBtn = function()
        {
        	alert("dd");
        }
        this.clickClearAttBtn = function ()
        {
        	/*this.startDateCal.set_value(1);
        	 this.SCP_regAttPatDiv.clear();
        	 this.patNoEd.clear();
        	 this.attFileldCombo.clear();
        	 this.attDivCombo.clear();
        	 this.startDateCal.clear();
        	 this.endDateCal.clear(); */
        	 alert("dd");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_AttentionalPatientForm_onload, this);
            this.SCP_regAttPatDiv.pNameStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.pNameStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.attCodeDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attCodeDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.searchAttBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addCodeBtn.addEventHandler("onclick", this.clickBtn, this);
            this.regAttBtn.addEventHandler("onclick", this.clickBtn, this);
            this.clearAttBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("SCP_AttentionalPatientForm.xfdl");

       
    };
}
)();
