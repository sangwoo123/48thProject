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
                this.set_name("SC_EmrForm");
                this.set_classname("SC_EmrForm");
                this.set_titletext("New Form");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findEmrList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findEmrList.do</Col><Col id=\"callbackFunc\">findEmrCallback</Col><Col id=\"outData\">dsEmrPresc=dsEmrPresc dsEmrHandle=dsEmrHandle dsEmrInjection=dsEmrInjection dsEmrTransfusion=dsEmrTransfusion dsEmrRehabilitation=dsEmrRehabilitation dsEmrMaterial=dsEmrMaterial dsEmrCheckup=dsEmrCheckup</Col><Col id=\"inData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrPresc", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeValue\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseCd\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrMaterial", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNm\" type=\"STRING\" size=\"256\"/><Column id=\"emgYn\" type=\"STRING\" size=\"256\"/><Column id=\"reoperYn\" type=\"STRING\" size=\"256\"/><Column id=\"nightYn\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"startTime\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"usingLocation\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrInjection", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNm\" type=\"STRING\" size=\"256\"/><Column id=\"inCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"inTime\" type=\"STRING\" size=\"256\"/><Column id=\"inDays\" type=\"STRING\" size=\"256\"/><Column id=\"inMethod\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"emgYn\" type=\"STRING\" size=\"256\"/><Column id=\"prnYn\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrHandle", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNm\" type=\"STRING\" size=\"256\"/><Column id=\"emgYn\" type=\"STRING\" size=\"256\"/><Column id=\"reoperYn\" type=\"STRING\" size=\"256\"/><Column id=\"hdTimes\" type=\"STRING\" size=\"256\"/><Column id=\"hdStartTime\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"hdNightYn\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrCheckup", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"emgYn\" type=\"STRING\" size=\"256\"/><Column id=\"prnYn\" type=\"STRING\" size=\"256\"/><Column id=\"nightYn\" type=\"STRING\" size=\"256\"/><Column id=\"wishDate\" type=\"STRING\" size=\"256\"/><Column id=\"chTimes\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"selectCareYn\" type=\"STRING\" size=\"256\"/><Column id=\"antiYn\" type=\"STRING\" size=\"256\"/><Column id=\"mtrlYn\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrTransfusion", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"emgYn\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"STRING\" size=\"256\"/><Column id=\"bloodDonor\" type=\"STRING\" size=\"256\"/><Column id=\"trTimes\" type=\"STRING\" size=\"256\"/><Column id=\"startTime\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"purpose\" type=\"STRING\" size=\"256\"/><Column id=\"trLocation\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmrRehabilitation", this);
            obj._setContents("<ColumnInfo><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"woundArea\" type=\"STRING\" size=\"256\"/><Column id=\"selectCareYn\" type=\"STRING\" size=\"256\"/><Column id=\"rehDays\" type=\"STRING\" size=\"256\"/><Column id=\"insurance\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"hisDate\" type=\"STRING\" size=\"256\"/><Column id=\"prescCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("emrTab", "absolute", "2.64%", "152", null, "604", "3.52%", null, this);
            obj.set_tooltiptype("hover");
            obj.set_taborder("33");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#b0bec5ff");
            obj.style.set_buttonborder("1 solid #455a64ff");
            obj.style.set_showextrabutton("false");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #607d8bff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.style.setStyleValue("buttonbackground", "selected", "#78909cff");
            obj.set_focusacceptable("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("prscTp", this.emrTab);
            obj.set_text("처방기록");
            this.emrTab.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.09%", "2", null, "556", "0.52%", null, this.emrTab.prscTp);
            obj.set_taborder("4");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.addChild(obj.name, obj);
            obj = new Static("regAttStc04", "absolute", "0.35%", "9", "1153", "33", null, null, this.emrTab.prscTp.Div00);
            obj.set_taborder("0");
            obj.set_text("   처방내역");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Grid("prescGrid", "absolute", "0.34%", "41", "1153", "515", null, null, this.emrTab.prscTp.Div00);
            obj.set_taborder("1");
            obj.set_binddataset("dsEmrPresc");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"99\"/><Column size=\"91\"/><Column size=\"250\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"처방일자\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"처방코드\"/><Cell col=\"3\" style=\"align:center;background:#cfd8dcff;\" text=\"처방명\"/><Cell col=\"4\" style=\"align:center;background:#cfd8dcff;\" text=\"진료의사명\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:prescDate\"/><Cell col=\"1\" style=\"align:center;font:bold 9 arial;\" text=\"bind:deptNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:diseaseCd\"/><Cell col=\"3\" style=\"align:center;font:bold 9 arial;\" text=\"bind:codeValue\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:empNm\"/></Band></Format></Formats>");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Tabpage("medTp", this.emrTab);
            obj.set_text("진단기록");
            this.emrTab.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.09%", "6", null, "558", "0%", null, this.emrTab.medTp);
            obj.set_taborder("60");
            obj.style.set_background("#eceff1ff");
            this.emrTab.medTp.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.51%", "37", "374", "142", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("9");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"70\"/><Column size=\"61\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"항목\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"측정치\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"단위\"/></Band><Band id=\"body\"><Cell style=\"align:center;font:bold 9 arial;\" text=\"혈압(수축기)\"/><Cell col=\"1\" style=\"align:center;\"/><Cell col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"1\" style=\"align:center;font:bold 9 arial;\" text=\"혈압(이완기)\"/><Cell row=\"1\" col=\"1\" style=\"align:center;\"/><Cell row=\"1\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"맥박\"/><Cell row=\"2\" col=\"1\" style=\"align:center;\"/><Cell row=\"2\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"3\" style=\"align:center;font:bold 9 arial;\" text=\"호흡수\"/><Cell row=\"3\" col=\"1\" style=\"align:center;\"/><Cell row=\"3\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"4\" style=\"align:center;font:bold 9 arial;\" text=\"체온\"/><Cell row=\"4\" col=\"1\" style=\"align:center;\"/><Cell row=\"4\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"℃\"/></Band></Format></Formats>");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc01", "absolute", "33.1%", "4", "380", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("10");
            obj.set_text("   S/O/P MEMO");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc02", "absolute", "66.12%", "4", "386", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("11");
            obj.set_text("   PACS");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "33.1%", "38", "380", "143", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("12");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0.51%", "224", "1154", "328", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("13");
            obj.set_binddataset("dsEmrPresc");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"250\"/><Column size=\"77\"/><Column size=\"52\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"상병코드\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"상병명\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"수술여부\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"진료일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;font:bold 9 arial;\" text=\"bind:diseaseCd\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:diseaseNm\"/><Cell col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"bind:surYn\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:deptNm\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc03", "absolute", "0.51%", "192", "1154", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("14");
            obj.set_text("   상병내역");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc00", "absolute", "0.51%", "4", "374", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("15");
            obj.set_text("   기초검사");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "66.12%", "38", "386", "143", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("16");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.68%", "8", null, "41", "85.92%", null, this);
            obj.set_taborder("41");
            obj.set_text("EMR");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("patInfoDiv", "absolute", "2.56%", "52", "1175", "92", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.patInfoDiv);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.43%", "41", "60", "30", null, null, this.patInfoDiv);
            obj.set_taborder("26");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "5.88%", "41", "78", "30", null, null, this.patInfoDiv);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "15.77%", "41", "60", "30", null, null, this.patInfoDiv);
            obj.set_taborder("31");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "21.23%", "41", "78", "30", null, null, this.patInfoDiv);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "28.82%", "41", null, "30", "63.77%", null, this.patInfoDiv);
            obj.set_taborder("42");
            obj.set_text("진료의");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctNmEd", "absolute", "36.57%", "41", "74", "30", null, null, this.patInfoDiv);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "52.34%", "41", null, "30", "45.1%", null, this.patInfoDiv);
            obj.set_taborder("45");
            obj.set_text("과");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctDeptEd", "absolute", "55.24%", "41", "67", "30", null, null, this.patInfoDiv);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("regAttStc00", "absolute", "0%", "-1", null, "34", "0%", null, this.patInfoDiv);
            obj.set_taborder("47");
            obj.set_text("   환자정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchAttPatBtn00", "absolute", "150", "41", "30", "30", null, null, this.patInfoDiv);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchEmrBtn", "absolute", "721", "45", "58", "23", null, null, this.patInfoDiv);
            obj.set_taborder("49");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchDoctorBtn", "absolute", "506", "41", "30", "30", null, null, this.patInfoDiv);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctNoEd", "absolute", "45.87%", "41", "69", "30", null, null, this.patInfoDiv);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 556, this.emrTab.prscTp.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("처방기록");

            	}
            );
            this.emrTab.prscTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 558, this.emrTab.medTp.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("60");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.medTp.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 430, 208, this.emrTab.medTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("진단기록");

            	}
            );
            this.emrTab.medTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1175, 92, this.patInfoDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.patInfoDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_EmrForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_EmrForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	EMR 관리 화면				
        @Author	  		왕민혁				    			                        								                                            
        @Create         2016. 12. 07.                             		                    				                                            
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";  
        //include "scripts::hrsScripts.xjs";
        //include "scripts::wonScripts.xjs";

        
        /*-------------------------------------------------------------------------------------------------+
        >>  										Button Click, Popup 
        +-------------------------------------------------------------------------------------------------*/
        // 환자조회
        this.attPatDiv_searchAttPatBtn00_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        	this.patInfoDiv.patNoEd.set_value(arrRtn[0]);    
        	this.patInfoDiv.patNmEd.set_value(arrRtn[1]);               
        	}
        }

        // 진료의 조회
        this.patInfoDiv_searchDoctorBtn_onclick = function(obj,e)
        {
        	return application.open(
        			"CM_DoctPopupForm",
        			"com::CM_DoctPopupForm.xfdl",
        			this.parent,
        			{},
        			"showtitlebar=true showstatusbar=false",
        			110, 110,
        			this
        	);
        }

        this.setDoct = function(arrRtn){ 
        	this.patInfoDiv.doctNoEd.set_value(arrRtn[0]);
        	this.patInfoDiv.doctNmEd.set_value(arrRtn[1]);    
        	this.patInfoDiv.doctDeptEd.set_value(arrRtn[2]);               
        }

        // EMR 조회
        this.patInfoDiv_searchEmrBtn_onclick = function(obj,e)
        {
        	var patNo=this.patInfoDiv.patNoEd.value;
        	if ( patNo == null )
        	 {
        		alert("환자번호를 입력해주세요.");
        		return;
        	 }
        	var doctNo=this.patInfoDiv.doctNoEd.value;
        	var doctDept=this.patInfoDiv.doctDeptEd.value;
        	var argument = 'patNo='+patNo+' doctNo='+doctNo+' doctDept='+doctDept; 
        	var serviceRow = this.dsService.findRow("serviceID", "findEmrList");
        	
        	this.dsService.setColumn(serviceRow,"argument",argument);
        	this.gfnService("findEmrList","false");
        }

        
        this.emrTab_prscTp_Div00_Grid03_oncellclick = function(obj,e)
        {
        	this.dsEmrCheckup.filter("");
        	this.dsEmrHandle.filter("");
        	this.dsEmrInjection.filter("");
        	this.dsEmrMaterial.filter("");
        	this.dsEmrRehabilitation.filter("");
        	this.dsEmrTransfusion.filter("");
        	var diseaseCd=this.dsEmrPresc.getColumn(this.dsEmrPresc.rowposition, "diseaseCd");
        	this.dsEmrCheckup.filter("prescCd=='"+diseaseCd+"'");
        	this.dsEmrHandle.filter("prescCd=='"+diseaseCd+"'");
        	this.dsEmrInjection.filter("prescCd=='"+diseaseCd+"'");
        	this.dsEmrMaterial.filter("prescCd=='"+diseaseCd+"'");
        	this.dsEmrRehabilitation.filter("prescCd=='"+diseaseCd+"'");
        	this.dsEmrTransfusion.filter("prescCd=='"+diseaseCd+"'");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.emrTab.prscTp.Div00.regAttStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.prescGrid.addEventHandler("oncellclick", this.emrTab_prscTp_Div00_Grid03_oncellclick, this);
            this.emrTab.medTp.Div00.regAttStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.patInfoDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.doctDeptEd.addEventHandler("oneditclick", this.trmtDeptEd_oneditclick, this);
            this.patInfoDiv.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.searchAttPatBtn00.addEventHandler("onclick", this.attPatDiv_searchAttPatBtn00_onclick, this);
            this.patInfoDiv.searchEmrBtn.addEventHandler("onclick", this.patInfoDiv_searchEmrBtn_onclick, this);
            this.patInfoDiv.searchDoctorBtn.addEventHandler("onclick", this.patInfoDiv_searchDoctorBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_EmrForm.xfdl");

       
    };
}
)();
