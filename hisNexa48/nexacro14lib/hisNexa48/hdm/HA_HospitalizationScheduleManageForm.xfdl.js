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
                this.set_name("HA_HospitalizationScheduleManageForm");
                this.set_classname("WH_HosptlzPrdstorMngntForm");
                this.set_titletext("HospitalizationScheduleManageForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHospitalScheduleList</Col><Col id=\"outData\">dsHospitalizationScheduleManage=dsHospitalizationScheduleManage</Col><Col id=\"callbackFunc\">findHospitalScheduleListCallbackFunc</Col><Col id=\"URL\">his::hdm/admission/hospitalizationScheduleList.do</Col></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"outData\">gdsEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">hosptlzPlnDate</Col><Col id=\"URL\">his::hdm/admission/batchHospitalizationScheduleProcess.do</Col><Col id=\"inData\">dsHospitalizationScheduleManage=dsHospitalizationScheduleManage:u</Col><Col id=\"callbackFunc\">batchHospitalizationScheduleProcessCallbackFunc</Col></Row><Row><Col id=\"serviceID\">WardRoom</Col><Col id=\"URL\">his::hdm/admission/batchHospitalizationScheduleProcess.do</Col><Col id=\"inData\">dsHospitalizationScheduleManage=dsHospitalizationScheduleManage:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">batchHospitalizationScheduleProcessCallbackFunc</Col></Row><Row><Col id=\"serviceID\">cancelHospitalizationSchedule</Col><Col id=\"URL\">his::hdm/admission/batchHospitalizationScheduleProcess.do</Col><Col id=\"inData\">dsHospitalizationScheduleManage=dsHospitalizationScheduleManage:u</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">batchHospitalizationScheduleProcessCallbackFunc</Col></Row><Row><Col id=\"serviceID\">changeHospitalizationScheduleYb</Col><Col id=\"URL\">his::hdm/admission/changeHospitalizationScheduleYb.do</Col><Col id=\"inData\">dsHospitalizationScheduleManage=dsHospitalizationScheduleManage:u</Col><Col id=\"callbackFunc\">batchHospitalizationScheduleProcessCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHospitalizationScheduleManage", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzPlnDate\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtNo\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"hopeRoom\" type=\"STRING\" size=\"256\"/><Column id=\"hopeWard\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsGP080</Col></Row><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsSC070</Col></Row><Row><Col id=\"code\">SC071</Col><Col id=\"dsName\">dsSC071</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP080", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC070", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC071", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gdsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "1250", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.56%", "-4", null, "60", "57.44%", null, this.Div06);
            obj.set_taborder("0");
            obj.set_text("입원예정자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "1.44%", "67", null, "27", "93.6%", null, this);
            obj.set_taborder("1");
            obj.set_text("적용기간");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("applyStartDateCal", "absolute", "7.44%", "68", null, "25", "81.52%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Calendar("applyEndDateCal", "absolute", "21.04%", "68", null, "25", "67.52%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("subCodeStc02", "absolute", "36.8%", "67", null, "27", "53.92%", null, this);
            obj.set_taborder("4");
            obj.set_text("환자등록번호");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "45.68%", "67", null, "27", "47.52%", null, this);
            obj.set_taborder("5");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "52.88%", "66", null, "28", "44.8%", null, this);
            obj.set_taborder("6");
            obj.style.set_image("URL('theme://img/btn_WF_Search.png')");
            obj.style.set_background("#455a64ff");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "76.64%", "66", null, "29", "18%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("SearchBtn");
            obj.getSetter("class").set("SearchBtn");
            obj.set_text("조회");
            obj.style.set_image("URL('theme://img/btn_WF_Search.png')");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzMngntSaveBtn", "absolute", "82.24%", "66", null, "30", "10.08%", null, this);
            obj.set_taborder("8");
            obj.set_text("입원등록");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Button("hosptlzMngntCancelBtn", "absolute", "90.16%", "66", null, "30", "2.16%", null, this);
            obj.set_taborder("9");
            obj.set_text("입원예약취소");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("hospitalizationScheduleGrid", "absolute", "1.68%", "112", null, "447", "2.16%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsHospitalizationScheduleManage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"94\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"51\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"88\"/><Column size=\"92\"/><Column size=\"273\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#90a4aeff;\" text=\"No\"/><Cell col=\"1\" style=\"background:#90a4aeff;\" text=\"환자번호\"/><Cell col=\"2\" style=\"background:#90a4aeff;\" text=\"성 명\"/><Cell col=\"3\" style=\"background:#90a4aeff;\" text=\"성별\"/><Cell col=\"4\" style=\"background:#90a4aeff;\" text=\"나이\"/><Cell col=\"5\" style=\"background:#90a4aeff;\" text=\"진료과\"/><Cell col=\"6\" style=\"background:#90a4aeff;\" text=\"희망병동\"/><Cell col=\"7\" style=\"background:#90a4aeff;\" text=\"희망병실\"/><Cell col=\"8\" style=\"background:#90a4aeff;\" text=\"진료일자\"/><Cell col=\"9\" style=\"background:#90a4aeff;\" text=\"입원예정일\"/><Cell col=\"10\" style=\"background:#90a4aeff;\" text=\"입원일\"/><Cell col=\"11\" style=\"background:#90a4aeff;\" text=\"담당의사\"/><Cell col=\"12\" style=\"background:#90a4aeff;\" text=\"특이사항\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:center;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:patNm\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:center;\" text=\"bind:gender\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:age\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:trmtDept\" combodataset=\"dsGP080\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"6\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:hopeWard\" combodataset=\"dsSC070\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:hopeRoom\" combodataset=\"dsSC071\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"8\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:trmtDate\" mask=\"####/ ##/ ##\"/><Cell col=\"9\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:hosptlzPlnDate\" mask=\"####/ ##/ ##\"/><Cell col=\"10\" displaytype=\"normal\" style=\"align:center;\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:trmtDoct\" combodataset=\"gdsEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell col=\"12\" style=\"align:center;\" text=\"bind:uniqueNtc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "1.6%", "569", null, "161", "50.8%", null, this);
            obj.set_text("예약일변경");
            obj.set_taborder("11");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Button("rsvtCngBtn", "absolute", "39.36%", "592", null, "30", "52%", null, this);
            obj.set_taborder("12");
            obj.set_text("예약일변경");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateModAfterCal", "absolute", "33.28%", "676", null, "25", "54.32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");

            obj = new Edit("oPatNoNmEdt", "absolute", "33.28%", "635", null, "27", "59.04%", null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("oPatNoCdEdt", "absolute", "11.52%", "635", null, "27", "80.8%", null, this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "3.84%", "635", null, "27", "89.12%", null, this);
            obj.set_taborder("16");
            obj.set_text("환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc05", "absolute", "3.84%", "675", null, "27", "89.12%", null, this);
            obj.set_taborder("17");
            obj.set_text("입원예정일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateModBeforeCal", "absolute", "11.52%", "676", null, "25", "76.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_enable("false");

            obj = new GroupBox("GroupBox01", "absolute", "50.4%", "569", null, "161", "2.16%", null, this);
            obj.set_text("병동/병실수정");
            obj.set_taborder("19");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("1 solid lightslategray");
            obj.style.set_font("bold 11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "52.32%", "603", null, "27", "40.64%", null, this);
            obj.set_taborder("20");
            obj.set_text("환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("tPatNoCdEdt", "absolute", "60.16%", "603", null, "27", "32.56%", null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("tPatNoNmEdt", "absolute", "77.68%", "603", null, "27", "15.04%", null, this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("hroomAllotBtn", "absolute", "89.04%", "592", null, "30", "3.36%", null, this);
            obj.set_taborder("23");
            obj.set_text("병실변경");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            obj.getSetter("class").set("ProcessBtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("hosptlzPlnDateCal", "absolute", "60.16%", "644", null, "25", "27.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_enable("false");

            obj = new Static("subCodeStc04", "absolute", "52.32%", "643", null, "27", "40.64%", null, this);
            obj.set_taborder("25");
            obj.set_text("입원예정일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc08", "absolute", "52.32%", "683", null, "27", "40.64%", null, this);
            obj.set_taborder("26");
            obj.set_text("병동/병실");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("wardCombo", "absolute", "60.16%", "684", null, "26", "32%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("dsSC070");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.getSetter("class").set("AreaCombo");

            obj = new Combo("hroomCombo", "absolute", "68.64%", "684", null, "26", "23.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("dsSC071");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.getSetter("class").set("");

            obj = new Button("hroomBtn", "absolute", "77.04%", "684", null, "26", "20.64%", null, this);
            obj.set_taborder("31");
            obj.style.set_image("URL('theme://img/btn_WF_Search.png')");
            obj.style.set_background("#455a64ff");
            obj.getSetter("class").set("AddBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18.56%", "68", null, "25", "79.04%", null, this);
            obj.set_taborder("32");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc06", "absolute", "25.6%", "635", null, "27", "67.36%", null, this);
            obj.set_taborder("33");
            obj.set_text("환자명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc07", "absolute", "25.6%", "675", null, "27", "67.36%", null, this);
            obj.set_taborder("34");
            obj.set_text("변경희망일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc09", "absolute", "69.6%", "603", null, "27", "23.36%", null, this);
            obj.set_taborder("35");
            obj.set_text("환자명");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_align("left middle");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_HosptlzPrdstorMngntForm");
            		p.set_titletext("HospitalizationScheduleManageForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","oPatNoNmEdt","value","dsHospitalizationScheduleManage","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","oPatNoCdEdt","value","dsHospitalizationScheduleManage","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","hosptlzPlnDateModBeforeCal","value","dsHospitalizationScheduleManage","hosptlzPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","tPatNoCdEdt","value","dsHospitalizationScheduleManage","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","tPatNoNmEdt","value","dsHospitalizationScheduleManage","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","hosptlzPlnDateCal","value","dsHospitalizationScheduleManage","hosptlzPlnDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","wardCombo","value","dsHospitalizationScheduleManage","hopeWard");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","hroomCombo","value","dsHospitalizationScheduleManage","hopeRoom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","hospitalizationScheduleGrid","binddataset","dsHospitalizationScheduleManage","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HA_HospitalizationScheduleManageForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HA_HospitalizationScheduleManageForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HA_HospitalizationScheduleManageForm.xfdl", function() {
        /********************************************************************************

            입원예정자관리
                                                                           			                        
          @Path			 	원무 - 입원예정자관리
          @Description      						
          @Author		    김민욱						 								                
         									 											                        
          Created on 2016. 06. 13.                             		 					        

        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";
        var patNo; //환자등록번호
        var hosptlzRsvtNo; //입원예약번호 

        this.HA_HospitalizationScheduleManageForm_onload = function(obj,e){
        	this.gfnBind();
        	this.gfnService("empInfo","false");
        /*	this.gdsEmp.filter(this.gfnLike("jobrk", "의사"));*/
        }

        this.patNoBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("WS_PatPopupForm","hdm","");
        }

        this.setPatInfo = function(arr){
        	patNo=arr[0];
        	this.patNoEd.set_value(arr[0]);
        }

        this.searchBtn_onclick = function(obj,e)
        {
        	this.dsHospitalizationScheduleManage.clear();
        	this.hosptlzPlnDateModAfterCal.set_value(null);
        	
        	//적용일 값구하기.
        	var patNo=this.patNoEd.value;  
        	var startDate=this.applyStartDateCal.value;
        	var endDate =this.applyEndDateCal.value;
        	
            //조회 검색조건
        	if(startDate > endDate){
        	    alert("날짜 확인 후 다시 선택하세요.");
        	}else{	
        		this.dsService.setColumn(0,"argument",'patNo='+patNo+' startDate='+startDate+' endDate='+endDate);
        		this.gfnService("findHospitalScheduleList","false");
        	}	
        }

        this.hosptlzMngntSaveBtn_onclick = function(obj,e)
        {
        	if(this.dsHospitalizationScheduleManage.rowcount==0){
        		alert("입원예정자 선택 후 등록하세요.");
        	}else if(this.confirm( "입원등록 하시겠습니까?", "서울병원 - 입원예약")){
        		patNo=this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"patNo");	 //환자번호	
        		var outpaReceiptNo= this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"outpaReceiptNo");  //외래접수번호
        					
        		this.dsHospitalizationScheduleManage.setColumn(this.dsHospitalizationScheduleManage.rowposition,"hosptlzRsvtYb","");	
        		
        		this.dsService.setColumn(5,"argument",'patNo='+patNo+' outpaReceiptNo='+outpaReceiptNo); 
        	    this.gfnService("changeHospitalizationScheduleYb","false"); //입원예약상태 변경 (Y->N) 
        		var param = {patNo:patNo}
        	    this.gfnPopup("HA_HospitalizationForm","hdm",param);
        	}	
        }

        this.hosptlzMngntCancelBtn_onclick = function(obj,e)
        {
        	patNo=this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"patNo");	 //환자번호
        	var outpaReceiptNo= this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"outpaReceiptNo");  //외래접수번호
        				
        	this.dsHospitalizationScheduleManage.setColumn(this.dsHospitalizationScheduleManage.rowposition,"hosptlzRsvtYb","");	
        		
        	this.dsService.setColumn(5,"argument",'patNo='+patNo+' outpaReceiptNo='+outpaReceiptNo); 
        	this.gfnService("changeHospitalizationScheduleYb","false"); //입원예약상태 변경 (Y->N) 
        }

        this.rsvtCngBtn_onclick = function(obj,e)
        {
        	var hosptlzPlnDate= this.hosptlzPlnDateModAfterCal.value;  //예약예정일 변경.
        	var pastHosptlzPlnDate=this.hosptlzPlnDateModBeforeCal.value;  //변경전 예약예정일	
        	patNo=this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"patNo");  //환자번호
        	hosptlzRsvtNo=this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"hosptlzRsvtNo");  //입원예약번호
        	
        	if(hosptlzPlnDate==null){
        		alert("입원예약 변경희망일을 입력해주세요.");
        		return;
        	}else if(pastHosptlzPlnDate.toString()==hosptlzPlnDate.toString()){
        		alert("동일한 날짜 선택할 수 없습니다.");
        		return;
        	}else{
        		this.dsHospitalizationScheduleManage.setColumn(this.dsHospitalizationScheduleManage.rowposition,"hosptlzPlnDate",hosptlzPlnDate);
        		this.dsService.setColumn(2,"argument",'patNo='+patNo+' hosptlzRsvtNo='+hosptlzRsvtNo);
        		this.gfnService("hosptlzPlnDate","false");
        	}
        }

        this.hroomAllotBtn_onclick = function(obj,e)
        {
        	 this.dsHospitalizationScheduleManage.setColumn(this.dsHospitalizationScheduleManage.rowposition,"hopeWard",this.wardCombo.value);
        	 this.dsHospitalizationScheduleManage.setColumn(this.dsHospitalizationScheduleManage.rowposition,"hopeRoom",this.hroomCombo.value);
        	 alert(this.wardCombo.value);
        	 alert(this.hroomCombo.value);
        	 this.dsService.setColumn(2,"argument",'patNo='+patNo+' hosptlzRsvtNo='+hosptlzRsvtNo);
        	 this.gfnService("WardRoom","false");
        }

        this.hroomBtn_onclick = function(obj,e)
        {
        	this.gfnPopup("HA_HospitalRoomAssignmentForm","hdm","");
        }

        this.setHroomInfo= function(arr){
        	this.wardCombo.set_value(arr[1]);
        	this.hroomCombo.set_value(arr[2]);
        }

        //Callback함수
        this.batchHospitalizationScheduleProcessCallbackFunc=function(svcID,errorCode,errorMsg){
        	
        	if(svcID=='hosptlzPlnDate'){
        		if(errorCode=="1"){
        			alert("입원예정일 변경 완료");
        		}else{
        			alert("입원예정일 변경 중 오류 발생");
        		}
        	}else if(svcID=='WardRoom'){
        		if(errorCode=="1"){
        			alert("입원 병동/병실 변경 완료");
        		}else{
        			alert("입원병동/병실 변경 중 오류 발생");
        		}

        	}else if(svcID=='changeHospitalizationScheduleYb'){
        		if(errorCode=="1"){
        			var hosptlzRsvtNo= this.dsHospitalizationScheduleManage.getColumn(this.dsHospitalizationScheduleManage.rowposition,"hosptlzRsvtNo");  //예약번호	
        	
        			this.dsHospitalizationScheduleManage.deleteRow(this.dsHospitalizationScheduleManage.rowposition);
        			this.dsService.setColumn(4,"argument",'hosptlzRsvtNo='+hosptlzRsvtNo); 
        			this.gfnService("cancelHospitalizationSchedule","false"); //입원예약삭제.	
        		}else{
        			alert("입원 등록 중 오류 발생");
        		}
        		
        	}else if(svcID=='cancelHospitalizationSchedule'){
        		if(errorCode!="1"){		
        			alert("입원예약 삭제 중 오류 발생");
        		}	
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.gdsEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.addEventHandler("onload", this.HA_HospitalizationScheduleManageForm_onload, this);
            this.Div06.Static00.addEventHandler("onclick", this.Div06_Static00_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.hosptlzMngntSaveBtn.addEventHandler("onclick", this.hosptlzMngntSaveBtn_onclick, this);
            this.hosptlzMngntCancelBtn.addEventHandler("onclick", this.hosptlzMngntCancelBtn_onclick, this);
            this.rsvtCngBtn.addEventHandler("onclick", this.rsvtCngBtn_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hroomAllotBtn.addEventHandler("onclick", this.hroomAllotBtn_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.hroomBtn.addEventHandler("onclick", this.hroomBtn_onclick, this);
            this.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("HA_HospitalizationScheduleManageForm.xfdl");

       
    };
}
)();
