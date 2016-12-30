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
                this.set_name("SC_DoctorTreatmentScheduleForm");
                this.set_classname("SC_DoctorTreatmentScheduleForm");
                this.set_titletext("의사진료일정관리");
                this._setFormPosition(0,0,1200,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMedDept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedDr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTypeList", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"typeName\" type=\"STRING\" size=\"256\"/><Column id=\"amStTm\" type=\"STRING\" size=\"256\"/><Column id=\"amEdTm\" type=\"STRING\" size=\"256\"/><Column id=\"amTerm\" type=\"STRING\" size=\"256\"/><Column id=\"amTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmStTm\" type=\"STRING\" size=\"256\"/><Column id=\"pmEdTm\" type=\"STRING\" size=\"256\"/><Column id=\"pmTerm\" type=\"STRING\" size=\"256\"/><Column id=\"pmTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDrDow", this);
            obj._setContents("<ColumnInfo><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"dowName\" type=\"STRING\" size=\"256\"/><Column id=\"lastDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtlDow", this);
            obj._setContents("<ColumnInfo><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"amCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmCnt\" type=\"STRING\" size=\"256\"/><Column id=\"RsvYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtlOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"medDept\" type=\"STRING\" size=\"256\"/><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amPmFlag\" type=\"STRING\" size=\"256\"/><Column id=\"rsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"findKey\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtlAm", this);
            obj._setContents("<ColumnInfo><Column id=\"medDept\" type=\"STRING\" size=\"256\"/><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amPmFlag\" type=\"STRING\" size=\"256\"/><Column id=\"rsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"findKey\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDtlPm", this);
            obj._setContents("<ColumnInfo><Column id=\"medDept\" type=\"STRING\" size=\"256\"/><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amPmFlag\" type=\"STRING\" size=\"256\"/><Column id=\"rsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"findKey\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDow", this);
            obj._setContents("<ColumnInfo><Column id=\"dow\" type=\"STRING\" size=\"256\"/><Column id=\"dowName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dow\">1</Col><Col id=\"dowName\">일</Col></Row><Row><Col id=\"dow\">2</Col><Col id=\"dowName\">월</Col></Row><Row><Col id=\"dow\">3</Col><Col id=\"dowName\">화</Col></Row><Row><Col id=\"dow\">4</Col><Col id=\"dowName\">수</Col></Row><Row><Col id=\"dow\">5</Col><Col id=\"dowName\">목</Col></Row><Row><Col id=\"dow\">6</Col><Col id=\"dowName\">금</Col></Row><Row><Col id=\"dow\">7</Col><Col id=\"dowName\">토</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedDrList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callbackFunc</Col><Col id=\"outData\">dsMedDr=gdsEmp</Col></Row><Row><Col id=\"serviceID\">findScheduleTypeList</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/findScheduleTypeList.do</Col><Col id=\"outData\">dsTypeList=dsTypeList dsDtlDow=dsDtlDow</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">findLastDateList</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/findLastDateList.do</Col><Col id=\"outData\">dsDrDow=dsDrDow</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">findScheduleDetailList</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/findScheduleDetailList.do</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">callbackFunc</Col><Col id=\"outData\">dsDtlOrg=dsDtlOrg</Col></Row><Row><Col id=\"serviceID\">registerScheduleType</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/registerScheduleType.do</Col><Col id=\"inData\">dsTypeList=dsTypeInput:N dsDtlOrg=dsDtlOrg:N</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">modifyScheduleType</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/modifyScheduleType.do</Col><Col id=\"inData\">dsTypeList=dsTypeInput:N dsDtlOrg=dsDtlOrg:N</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">removeScheduleType</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/removeScheduleType.do</Col><Col id=\"inData\">dsTypeList=dsTypeInput:N</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">registerDoctorSchedule</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/registerDoctorSchedule.do</Col><Col id=\"inData\">dsDrSchRegiInfo=dsDrSchRegiInfo:u</Col></Row><Row><Col id=\"serviceID\">removeDoctorSchedule</Col><Col id=\"URL\">his::msv/mcm/doctorschedule/removeDoctorSchedule.do</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTypeInput", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"typeName\" type=\"STRING\" size=\"256\"/><Column id=\"amStTm\" type=\"STRING\" size=\"256\"/><Column id=\"amEdTm\" type=\"STRING\" size=\"256\"/><Column id=\"amTerm\" type=\"STRING\" size=\"256\"/><Column id=\"amTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmStTm\" type=\"STRING\" size=\"256\"/><Column id=\"pmEdTm\" type=\"STRING\" size=\"256\"/><Column id=\"pmTerm\" type=\"STRING\" size=\"256\"/><Column id=\"pmTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"rsvYn\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDrSchRegiInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"tpSeqNo\" type=\"STRING\" size=\"256\"/><Column id=\"fromDate\" type=\"STRING\" size=\"256\"/><Column id=\"toDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "1.56%", "16", null, "60", "62.5%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14.4%", "5", null, "46", "15.22%", null, this.Div06);
            obj.set_taborder("0");
            obj.set_text("의사진료일정");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 돋움");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("SearchDiv", "absolute", "16", "88", null, "43", "18", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#90a4aeff");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Combo("MedDrCombo", "absolute", "371", "10", "152", "21", null, null, this.SearchDiv);
            this.SearchDiv.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_innerdataset("dsMedDr");
            obj.set_codecolumn("empNo");
            obj.set_datacolumn("empNm");
            obj = new Static("Static01", "absolute", "19", "10", "85", "21", null, null, this.SearchDiv);
            obj.set_taborder("35");
            obj.set_text("진료과");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_font("9 돋움");
            this.SearchDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "286", "10", "85", "21", null, null, this.SearchDiv);
            obj.set_taborder("36");
            obj.set_text("진료의");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_font("9 돋움");
            this.SearchDiv.addChild(obj.name, obj);
            obj = new Button("searchSchTypeListBtn", "absolute", null, "8", "60", "25", "11", null, this.SearchDiv);
            obj.set_taborder("38");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#37474fff");
            this.SearchDiv.addChild(obj.name, obj);
            obj = new Combo("MedDeptCombo", "absolute", "91", "10", "152", "21", null, null, this.SearchDiv);
            this.SearchDiv.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_innerdataset("@dsMedDept");
            obj.set_codecolumn("deptNm");
            obj.set_datacolumn("deptNm");

            obj = new Div("SchTypeDiv", "absolute", "1.17%", "140", null, "560", "76.67%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Grid("SchTypeGrid", "absolute", "4.15%", "7", null, "465", "3.73%", null, this.SchTypeDiv);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTypeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"214\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"등록된 Type명\"/></Band><Band id=\"body\"><Cell text=\"bind:typeName\"/></Band></Format></Formats>");
            this.SchTypeDiv.addChild(obj.name, obj);
            obj = new TextArea("CommentArea", "absolute", "4.56%", "476", null, "72", "4.15%", null, this.SchTypeDiv);
            obj.set_taborder("1");
            this.SchTypeDiv.addChild(obj.name, obj);

            obj = new Div("SchTypeDtlDiv", "absolute", "23.83%", "140", null, "558", "20.33%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.05%", "10", null, "23", "73.57%", null, this.SchTypeDtlDiv);
            obj.set_taborder("0");
            obj.set_text("진료가능인원");
            obj.style.set_background("#90a4aeff");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Div("MedCntDiv", "absolute", "0.9%", "36", null, "71", "1.64%", null, this.SchTypeDtlDiv);
            obj.set_taborder("1");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("1 solid #90a4aeff");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Div("MedAmDiv", "absolute", "1.23%", "3", null, "29", "21.2%", null, this.SchTypeDtlDiv.MedCntDiv);
            obj.set_taborder("0");
            obj.style.set_background("aliceblue");
            this.SchTypeDtlDiv.MedCntDiv.addChild(obj.name, obj);
            obj = new CheckBox("AmCheck", "absolute", "6", "6", "71", "20", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("0");
            obj.set_text("오전");
            obj.set_truevalue("true");
            obj.set_falsevalue("false");
            obj.style.set_padding("0 0 0 0");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "64", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("1");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new MaskEdit("AmStTmMaskEd", "absolute", "122", "3", "51", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new MaskEdit("AmEdTmMaskEd", "absolute", "194", "3", "51", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "256", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("4");
            obj.set_text("간격");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Edit("AmTermEd", "absolute", "315", "3", "46", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "392", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("6");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Edit("AmTotCntEd", "absolute", "451", "3", "46", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "34.19%", "4", null, "18", "61.86%", null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "71.15%", "5", null, "18", "24.9%", null, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv);
            obj.set_taborder("9");
            obj.set_text("분");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addChild(obj.name, obj);
            obj = new Div("MedPmDiv", "absolute", "1.23%", "35", null, "29", "21.2%", null, this.SchTypeDtlDiv.MedCntDiv);
            obj.set_taborder("1");
            obj.style.set_background("aliceblue");
            this.SchTypeDtlDiv.MedCntDiv.addChild(obj.name, obj);
            obj = new CheckBox("PmCheck", "absolute", "6", "6", "71", "20", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("20");
            obj.set_text("오후");
            obj.set_truevalue("true");
            obj.set_falsevalue("false");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "64", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("21");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new MaskEdit("PmStTmMaskEd", "absolute", "122", "3", "51", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("22");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new MaskEdit("PmEdTmMaskEd", "absolute", "194", "3", "51", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("23");
            obj.set_type("string");
            obj.set_mask("##:##");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "256", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("24");
            obj.set_text("간격");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Edit("PmTermEd", "absolute", "315", "3", "46", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "392", "1", "55", "25", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("26");
            obj.set_text("총원");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Edit("PmTotCntEd", "absolute", "451", "3", "46", "21", null, null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "34.19%", "4", null, "18", "62.03%", null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "71.17%", "5", null, "18", "25.05%", null, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv);
            obj.set_taborder("29");
            obj.set_text("분");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addChild(obj.name, obj);
            obj = new CheckBox("RsvYnCheck", "absolute", "531", "6", "109", "58", null, null, this.SchTypeDtlDiv.MedCntDiv);
            obj.set_taborder("2");
            obj.set_text("타과예약가능");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_background("aliceblue");
            obj.style.set_padding("5 5 5 7");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.MedCntDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.05%", "122", null, "23", "73.57%", null, this.SchTypeDtlDiv);
            obj.set_taborder("3");
            obj.set_text("적용할 요일");
            obj.style.set_background("#90a4aeff");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Div("ApplyDowDiv", "absolute", "0.9%", "148", null, "71", "21.02%", null, this.SchTypeDtlDiv);
            obj.set_taborder("4");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("1 solid #90a4aeff");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Div("DowDiv", "absolute", "17.57%", "4", null, "60", "1.54%", null, this.SchTypeDtlDiv.ApplyDowDiv);
            obj.set_taborder("2");
            obj.style.set_background("aliceblue");
            this.SchTypeDtlDiv.ApplyDowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D1Check", "absolute", "1.67%", "7", null, "45", "86.4%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("0");
            obj.set_text("일");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("crimson");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("background", "pushed", "#cfd8dcff");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D2Check", "absolute", "15.75%", "7", null, "45", "72.32%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("1");
            obj.set_text("월");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D3Check", "absolute", "29.83%", "7", null, "45", "58.23%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("2");
            obj.set_text("화");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D4Check", "absolute", "43.91%", "7", null, "45", "44.15%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("3");
            obj.set_text("수");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D5Check", "absolute", "57.76%", "7", null, "45", "30.31%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("4");
            obj.set_text("목");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D6Check", "absolute", "72.08%", "7", null, "45", "15.99%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("5");
            obj.set_text("금");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("D7Check", "absolute", "85.68%", "7", null, "45", "2.39%", null, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv);
            obj.set_taborder("6");
            obj.set_text("토");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addChild(obj.name, obj);
            obj = new CheckBox("DAllCheck", "absolute", "2.32%", "7", null, "53", "83.98%", null, this.SchTypeDtlDiv.ApplyDowDiv);
            obj.set_taborder("3");
            obj.set_text("전체");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("blue");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_align("left middle");
            this.SchTypeDtlDiv.ApplyDowDiv.addChild(obj.name, obj);
            obj = new Button("createDtlBaseBtn", "absolute", null, "157", "108", "21", "16", null, this.SchTypeDtlDiv);
            obj.set_taborder("5");
            obj.set_text("상세기준생성");
            obj.set_cssclass("btn_WF_Download");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("clearBtn", "absolute", null, "188", "108", "21", "16", null, this.SchTypeDtlDiv);
            obj.set_taborder("6");
            obj.set_text("CLEAR");
            obj.set_cssclass("btn_WF_Upload");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "1.05%", "232", null, "23", "73.57%", null, this.SchTypeDtlDiv);
            obj.set_taborder("7");
            obj.set_text("진료일정 상세기준");
            obj.style.set_background("#90a4aeff");
            obj.style.set_align("center middle");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Grid("DtlDowGrid", "absolute", "1.5%", "262", null, "282", "69.07%", null, this.SchTypeDtlDiv);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDtlDow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"요일\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"A\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"P\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:dow\" combodataset=\"dsDow\" combocodecol=\"dow\" combodatacol=\"dowName\"/><Cell col=\"1\" text=\"bind:amCnt\"/><Cell col=\"2\" text=\"bind:pmCnt\"/></Band></Format></Formats>");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Grid("DtlAmGrid", "absolute", "31.98%", "262", null, "282", "35.29%", null, this.SchTypeDtlDiv);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDtlAm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"79\"/><Column size=\"49\"/><Column size=\"20\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"오전시간\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"총원\"/><Cell col=\"2\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#cfd8dcff;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:right;background:#cfd8dcff;font:9 돋움;\"/><Cell col=\"1\" style=\"align:left;background:#cfd8dcff;font:9 돋움;\" text=\"타과예약\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:examTm\" mask=\"##:##\"/><Cell col=\"1\" text=\"bind:totCnt\"/><Cell col=\"2\" colspan=\"2\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:rsvYn\"/></Band><Band id=\"summary\"><Cell style=\"background:#cfd8dcff;\" text=\"오전합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"background:#cfd8dcff;\" text=\"expr:dataset.getSum(&quot;parseInt(totCnt)&quot;)\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;\"/></Band></Format></Formats>");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Grid("DtlPmGrid", "absolute", "65.62%", "262", null, "282", "1.65%", null, this.SchTypeDtlDiv);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDtlPm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"79\"/><Column size=\"49\"/><Column size=\"20\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"오후시간\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"총원\"/><Cell col=\"2\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"background:#cfd8dcff;\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:right;background:#cfd8dcff;font:9 돋움;\"/><Cell col=\"1\" style=\"align:left;background:#cfd8dcff;font:9 돋움;\" text=\"타과예약\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:examTm\" mask=\"##:##\"/><Cell col=\"1\" text=\"bind:totCnt\"/><Cell col=\"2\" colspan=\"2\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:rsvYn\"/></Band><Band id=\"summary\"><Cell style=\"background:#cfd8dcff;font: ;\" text=\"오후합계\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font: ;\" text=\"expr:dataset.getSum(&quot;parseInt(totCnt)&quot;)\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;font: ;\"/></Band></Format></Formats>");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", null, "-744", "65", "12", "254", null, this.SchTypeDtlDiv);
            obj.set_taborder("11");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("Button14", "absolute", null, "-744", "65", "12", "189", null, this.SchTypeDtlDiv);
            obj.set_taborder("12");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("addDtlAmBtn", "absolute", null, "240", "50", "12", "290", null, this.SchTypeDtlDiv);
            obj.set_taborder("13");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("delDtlAmBtn", "absolute", null, "240", "44", "12", "243", null, this.SchTypeDtlDiv);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("addDtlPmBtn", "absolute", null, "240", "50", "12", "66", null, this.SchTypeDtlDiv);
            obj.set_taborder("15");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            this.SchTypeDtlDiv.addChild(obj.name, obj);
            obj = new Button("delDtlPmBtn", "absolute", null, "240", "44", "12", "19", null, this.SchTypeDtlDiv);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.SchTypeDtlDiv.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "928", "-287", "107", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "1038", "-283", "141", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_displaynulltext("Enabled");
            this.addChild(obj.name, obj);

            obj = new Div("LastSchDiv", "absolute", "80%", "140", null, "556", "1.33%", null, this);
            obj.set_taborder("6");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.23%", "254", null, "23", "2.23%", null, this.LastSchDiv);
            obj.set_taborder("0");
            obj.set_text("요일별 최종등록일자");
            obj.style.set_background("#90a4aeff");
            obj.style.set_align("center middle");
            this.LastSchDiv.addChild(obj.name, obj);
            obj = new Grid("LastDowGrid", "absolute", "2.23%", "284", null, "204", "2.68%", null, this.LastSchDiv);
            obj.set_taborder("1");
            obj.set_binddataset("dsDrDow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"133\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"요일\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"진료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align:center;\" text=\"bind:dow\" combodataset=\"dsDow\" combocodecol=\"dow\" combodatacol=\"dowName\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:lastDate\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.LastSchDiv.addChild(obj.name, obj);

            obj = new Div("ButtonDiv", "absolute", "1.17%", "705", null, "46", "1.33%", null, this);
            obj.set_taborder("7");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Button("registerTypeBtn", "absolute", "17.01%", "9", null, "27", "72.48%", null, this.ButtonDiv);
            obj.set_taborder("0");
            obj.set_text("새 Type으로 저장");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("removeTypeBtn", "absolute", "27.95%", "9", null, "27", "64.27%", null, this.ButtonDiv);
            obj.set_taborder("1");
            obj.set_text("Type 삭제");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("modifyTypeBtn", "absolute", "36.15%", "9", null, "27", "58.29%", null, this.ButtonDiv);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("regiDrSchBtn", "absolute", "59.83%", "9", null, "27", "33.42%", null, this.ButtonDiv);
            obj.set_taborder("3");
            obj.set_text("일정등록");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);
            obj = new Button("delDrSchBtn", "absolute", "67.18%", "9", null, "27", "26.07%", null, this.ButtonDiv);
            obj.set_taborder("4");
            obj.set_text("일정삭제");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Gulim");
            this.ButtonDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1152, 43, this.SearchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#90a4aeff");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.SearchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 560, this.SchTypeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.SchTypeDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.SchTypeDtlDiv.MedCntDiv.MedAmDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("aliceblue");

            	}
            );
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.SchTypeDtlDiv.MedCntDiv.MedPmDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("aliceblue");

            	}
            );
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 71, this.SchTypeDtlDiv.MedCntDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#b0bec5ff");
            		p.style.set_border("1 solid #90a4aeff");

            	}
            );
            this.SchTypeDtlDiv.MedCntDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.SchTypeDtlDiv.ApplyDowDiv.DowDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("aliceblue");

            	}
            );
            this.SchTypeDtlDiv.ApplyDowDiv.DowDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 71, this.SchTypeDtlDiv.ApplyDowDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#b0bec5ff");
            		p.style.set_border("1 solid #90a4aeff");

            	}
            );
            this.SchTypeDtlDiv.ApplyDowDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 558, this.SchTypeDtlDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.SchTypeDtlDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 224, 556, this.LastSchDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.LastSchDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 46, this.ButtonDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.ButtonDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_DoctorTreatmentScheduleForm");
            		p.set_titletext("의사진료일정관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","SchTypeDiv.CommentArea","value","dsTypeList","comments");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SC_DoctorTreatmentScheduleForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SC_DoctorTreatmentScheduleForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("SC_DoctorTreatmentScheduleForm.xfdl", function() {
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::commonBind.xjs";

        /*************************************************************************************/

        
        this.SC_DoctorTreatmentScheduleForm_onload = function(obj,e)
        {
        		var nRow=this.dsService.findRow("serviceID","findMedDrList");
        		this.dsService.setColumn(nRow,"argument","jobrk=의사");
        		this.gfnService("findMedDrList");
        }    

        	//적용할 요일Div
        	var applyDowDiv=this.SchTypeDtlDiv.ApplyDowDiv; 
        	//전체 checkBox Object;
        	var dAllCheck=applyDowDiv.DAllCheck;
        //전체checkBox 클릭시 
        this.SchTypeDtlDiv_ApplyDowDiv_DAllCheck_onclick = function(obj,e)
        {
        	var checkVal=dAllCheck.value;
        	for(var i=0;i<7;i++)
        	{
        		var chx=applyDowDiv.DowDiv.lookup("D"+(i+1)+"Check"); //checkBox Object   
        		chx.set_value(checkVal);
        	}
        }
        	
        	//오전진료정보 Div
        	var medAmDiv=this.SchTypeDtlDiv.MedCntDiv.MedAmDiv;
        	var amCheck=medAmDiv.AmCheck;             //오전CheckBox Object
        	var amStTmMaskEd=medAmDiv.AmStTmMaskEd;   //오전진료시작시각 MaskEdit Object
        	var amEdTmMaskEd=medAmDiv.AmEdTmMaskEd;   //오전진료종료시각 MaskEdit Object
        	var amTermEd=medAmDiv.AmTermEd;           //오전진료시각간격 Edit Obect
        	var amTotCntEd=medAmDiv.AmTotCntEd;       //오전진료총원 Edit Object
        	
        	//오후진료정보 Div
        	var medPmDiv=this.SchTypeDtlDiv.MedCntDiv.MedPmDiv;
        	var pmCheck=medPmDiv.PmCheck;             //오후CheckBox Object
        	var pmStTmMaskEd=medPmDiv.PmStTmMaskEd;   //오전진료시작시각 MaskEdit Object
        	var pmEdTmMaskEd=medPmDiv.PmEdTmMaskEd;   //오전진료종료시각 MaskEdit Object
        	var pmTermEd=medPmDiv.PmTermEd;           //오전진료시각간격 Edit Obect
        	var pmTotCntEd=medPmDiv.PmTotCntEd;       //오전진료총원 Edit Object
        	
        	//타과예약가능 CheckBox Object
        	var rsvYnCheck=this.SchTypeDtlDiv.MedCntDiv.RsvYnCheck;
        	
        	var d1Check=applyDowDiv.DowDiv.D1Check;//월요일 CheckBox Object
        	var d2Check=applyDowDiv.DowDiv.D2Check;//화요일 CheckBox Object
        	var d3Check=applyDowDiv.DowDiv.D3Check;//수요일 CheckBox Object
        	var d4Check=applyDowDiv.DowDiv.D4Check;//목요일 CheckBox Object
        	var d5Check=applyDowDiv.DowDiv.D5Check;//금요일 CheckBox Object
        	var d6Check=applyDowDiv.DowDiv.D6Check;//토요일 CheckBox Object
        	var d7Check=applyDowDiv.DowDiv.D7Check;//일요일 CheckBox Object
        	
        //상세기준생성버튼 클릭시
        this.SchTypeDtlDiv_createDtlBaseBtn_onclick = function(obj,e)
        {	
        	if (!amCheck.isChecked()&&!pmCheck.isChecked()) 
        	{
                alert("오전이나 오후를 선택하십시요."); 
                return;
        	}
        	
        	//오전 입력값 확인
        	if (amCheck.isChecked()) {
                if (this.fn_chktime(amStTmMaskEd, "A") == false) {
                    alert("오전진료시작시각을 형식에 맞게 입력해주세요");
                    return;
                }
        	
                if (this.fn_chktime(amEdTmMaskEd, "A") == false) {
        			alert("오전진료종료시각을 형식에 맞게 입력해주세요");
                    return;
                }
                
                if (parseInt(amTermEd.text) <= 0) {
                    alert("오전 진료시간 간격을 입력해주세요");
                    return;
                }
                
                if (parseInt(amTotCntEd.text) <= 0) {
                    alert("오전 진료시간별 총원을 입력해주세요");
                    return;
                }
        	}
            
            //오후 입력값 확인
        	if (pmCheck.isChecked()) {
                if (this.fn_chktime(pmStTmMaskEd, "P") == false) {
                    alert("오후진료시작시각을 형식에 맞게 입력해주세요");
                    return;
                }
        	
                if (this.fn_chktime(pmEdTmMaskEd, "P") == false) {
                    alert("오후진료종료시각을 형식에 맞게 입력해주세요");
                    return;
                }
                
                if (parseInt(pmTermEd.text) <= 0) {
                    alert("오후 진료시간 간격을 입력해주세요");
                    return;
                }
                
                if (parseInt(pmTotCntEd.text) <= 0) {
                    alert("오후 진료시간별 총원을 입력해주세요");
                    return;
                }
        	}
        	//요일 선택여부 확인
        	var isChecked=false;
        	for(var i=0;i<7;i++)
        	{
        		var chx=applyDowDiv.DowDiv.lookup("D"+(i+1)+"Check"); //checkBox Object   
        		if(chx.isChecked())
        		{
        			isChecked=true;
        		}
        	}
        	if(!isChecked){
        		alert("Please, check at least one Checkbox!");
        		return;
        	}
        	
        	var arrDow = Array(7);
        	arrDow[0] = d1Check.isChecked();
        	arrDow[1] = d2Check.isChecked();
        	arrDow[2] = d3Check.isChecked();
        	arrDow[3] = d4Check.isChecked();
        	arrDow[4] = d5Check.isChecked();
        	arrDow[5] = d6Check.isChecked();
        	arrDow[6] = d7Check.isChecked();

            //선택한 요일별로 일정상세 적용
            var sDow;
            for(var k=0; k<7; k++) {
                if (!arrDow[k]) {
        			continue; 
        		}
                
                //1:일,2:월,3:화,4:수,5:목,6:금,7:토
                sDow = (k+1).toString();
                
                //상세정보 생성
                this.fn_applyData(sDow); 
            }
            
            //데이터 로드후 grid refresh
            this.fn_refreshGrid();
        }
        //그리드화면 frefresh
        this.fn_refreshGrid = function()
        {
            //요일을 선택하면 해당요일의 상세일정 조회
            var sDow = this.dsDtlDow.getColumn(this.dsDtlDow.rowposition, "dow");
            this.dsDtlOrg.filter("dow=='"+sDow+"'&&amPmFlag=='A'");
            this.dsDtlAm.deleteAll();
            this.dsDtlAm.copyData(this.dsDtlOrg,true);
            this.dsDtlOrg.filter("dow=='"+sDow+"'&&amPmFlag=='P'");
            this.dsDtlPm.deleteAll();
            this.dsDtlPm.copyData(this.dsDtlOrg,true);
        	this.dsDtlOrg.filter("");
        	this.dsDtlAm.updateSortGroup("S:+examTm");
        	this.dsDtlPm.updateSortGroup("S:+examTm");
        }

        this.fn_applyData = function(sDow)
        {
        	var sExamTm = "";
            var idx;
            var iAMcnt=0, iPMcnt=0;
                
            //해당요일의 상세정보를 삭제  
             
            for(var i=this.dsDtlOrg.getRowCount(); i>=0; i--) {
                if (this.dsDtlOrg.getColumn(i,"dow") == sDow) {
        			this.dsDtlOrg.deleteRow(i);
                }       
            }
              
            //오전시간 상세 생성
            if (amCheck.isChecked()) {        
                //시작,종료시간을 분으로 환산
                var iStTm = parseInt(amStTmMaskEd.text.substr(0,2))*60 + parseInt(amStTmMaskEd.text.substr(3,2)) ;
                var iEdTm = parseInt(amEdTmMaskEd.text.substr(0,2))*60 + parseInt((amEdTmMaskEd.text).substr(3,2)) ;
                var iTerm = parseInt(amTermEd.text);
                //간격만틈 더하면서 시간 계산
                for(var t=iStTm; t<=iEdTm; t=t+iTerm) {
                    iAMcnt++;
                    sExamTm = Math.floor(t/60).toString().padLeft(2,"0") + (t%60).toString().padLeft(2,"0") ;
                    idx = this.dsDtlOrg.addRow();
                    this.dsDtlOrg.setColumn(idx,"dow",sDow);
                    this.dsDtlOrg.setColumn(idx,"examTm",sExamTm);
                    this.dsDtlOrg.setColumn(idx,"totCnt",amTotCntEd.text);
                    this.dsDtlOrg.setColumn(idx,"amPmFlag","A");
                    this.dsDtlOrg.setColumn(idx,"rsvYn",rsvYnCheck.isChecked());
                }
            }
            
            //오후시간 상세 생성
            if (pmCheck.isChecked()) {        
                //시작,종료시간을 분으로 환산
                var iStTm = parseInt(pmStTmMaskEd.text.substr(0,2))*60 + parseInt((pmStTmMaskEd.text).substr(3,2)) ;
                var iEdTm = parseInt(pmEdTmMaskEd.text.substr(0,2))*60 + parseInt((pmEdTmMaskEd.text).substr(3,2)) ;
                var iTerm = parseInt(pmTermEd.text);
                //간격만틈 더하면서 시간 계산
                
                
                for(var t=iStTm; t<=iEdTm; t=t+iTerm) {
                    iPMcnt++;
                    sExamTm = Math.floor(t/60).toString().padLeft(2,"0") + (t%60).toString().padLeft(2,"0") ;
                    idx = this.dsDtlOrg.addRow();
        			this.dsDtlOrg.setColumn(idx,"dow"   ,sDow);
                    this.dsDtlOrg.setColumn(idx,"examTm",sExamTm);       
                    this.dsDtlOrg.setColumn(idx,"totCnt",pmTotCntEd.text);
                    this.dsDtlOrg.setColumn(idx,"amPmFlag","P");
                    this.dsDtlOrg.setColumn(idx,"rsvYn",rsvYnCheck.isChecked());
                }
            }
            
            //생성된 요일 표시.
            idx = this.dsDtlDow.findRow("dow",sDow);
            if (idx>-1) 
                this.dsDtlDow.deleteRow(idx);
                
            idx = this.dsDtlDow.addRow();
            this.dsDtlDow.setColumn(idx,"dow"  ,sDow);
            this.dsDtlDow.setColumn(idx,"amCnt",iAMcnt);
            this.dsDtlDow.setColumn(idx,"pmCnt",iPMcnt);
            this.dsDtlDow.set_keystring("S:dow");

        }

        //MaskEdit 입력값이 시간이 맞는지 체크. hh24:mi
        this.fn_chktime = function(medMaskEditObj,sAMPM)
        {  
            var sTime = medMaskEditObj.text;
            
            if (sTime.indexOf("_") >= 0) {        
                return false;
        	}
        	
        	var hh = parseInt(sTime.substr(0,2));
        	var mi = parseInt(sTime.substr(3,2));
        	
        	if (hh<0 || hh>23) {
                return false;
        	}
        	if (mi<0 || mi>59) {
                return false;
        	}
        	
        	//오후는 24시간제로 변경
        	if (sAMPM == "P") {
                if (hh < 12)
                    medMaskEditObj.set_value( (hh+12).toString() + (mi.toString()).padLeft(2,"0") );
        	}
        	
        	return true;
        }

        
        this.SchTypeDtlDiv_clearBtn_onclick = function(obj,e)
        {
        	//요일 선택여부 확인
        	var isChecked=false;
        	for(var i=0;i<7;i++)
        	{
        		var chx=applyDowDiv.DowDiv.lookup("D"+(i+1)+"Check"); //checkBox Object   
        		if(chx.isChecked())
        		{
        			isChecked=true;
        		}
        	}
        	if(!isChecked){
        		alert("Please, check at least one Checkbox!");
        		return;
        	}
        	
        	var arrDow = Array(7);
        	arrDow[0] = d1Check.isChecked();
        	arrDow[1] = d2Check.isChecked();
        	arrDow[2] = d3Check.isChecked();
        	arrDow[3] = d4Check.isChecked();
        	arrDow[4] = d5Check.isChecked();
        	arrDow[5] = d6Check.isChecked();
        	arrDow[6] = d7Check.isChecked();

            //선택한 요일별로 일정상세 적용
            var sDow;
            for(var k=0; k<7; k++) {
                if (!arrDow[k]) {
        			continue; 
        		}
                
                //1:일,2:월,3:화,4:수,5:목,6:금,7:토
                sDow = (k+1).toString();
                
              
                //요일표시 삭제
        		idx = this.dsDtlDow.findRow("dow",sDow);
        		if (idx>-1) 
                this.dsDtlDow.deleteRow(idx);
                //상세정보 삭제
                for(var i=this.dsDtlOrg.getRowCount(); i>=0; i--) {
        			if (this.dsDtlOrg.getColumn(i,"dow") == sDow) {
        				this.dsDtlOrg.deleteRow(i);
        			}       
        		}
            }
        }

        var gv_IsDtlAmGridCheckAll = 0;
        this.SchTypeDtlDiv_DtlAmGrid_onheadclick = function(obj,e)
        {	if(e.col==2){
        	gv_IsDtlAmGridCheckAll = (gv_IsDtlAmGridCheckAll ? 0 : 1);
        	for (var i=0; i<this.dsDtlAm.getRowCount(); i++) {
        		this.dsDtlAm.setColumn(i, "rsvYn", gv_IsDtlAmGridCheckAll);
        	}
        	//dsDtlOrg에도 반영하기
        	var sDow=this.dsDtlAm.getColumn(this.dsDtlAm.rowposition,"dow");
        	this.dsDtlOrg.filter("dow=='"+sDow+"'&&amPmFlag=='A'");
        	for (var i=0; i<this.dsDtlOrg.getRowCount(); i++) {
        		this.dsDtlOrg.setColumn(i, "rsvYn", gv_IsDtlAmGridCheckAll);
        	}
        	this.dsDtlOrg.filter("");
        	obj.setSubCellProperty("Head",e.col,0,"expr",gv_IsDtlAmGridCheckAll);
        	}
        }

        var gv_IsDtlPmGridCheckAll = 0;
        this.SchTypeDtlDiv_DtlPmGrid_onheadclick = function(obj,e)
        {	if(e.col==2){
        	gv_IsDtlPmGridCheckAll = (gv_IsDtlPmGridCheckAll ? 0 : 1);
        	for (var i=0; i<this.dsDtlAm.getRowCount(); i++) {
        		this.dsDtlPm.setColumn(i, "rsvYn", gv_IsDtlPmGridCheckAll);
        	}
        	//dsDtlOrg에도 반영하기
        	var sDow=this.dsDtlPm.getColumn(this.dsDtlPm.rowposition,"dow");
        	this.dsDtlOrg.filter("dow=='"+sDow+"'&&amPmFlag=='P'");
        	for (var i=0; i<this.dsDtlOrg.getRowCount(); i++) {
        		this.dsDtlOrg.setColumn(i, "rsvYn", gv_IsDtlPmGridCheckAll);
        	}
        	this.dsDtlOrg.filter("");
        	obj.setSubCellProperty("Head",e.col,0,"expr",gv_IsDtlPmGridCheckAll);
        	}
        }

        this.callbackFunc = function(svcID,ErrorCode,ErrorMsg){
           if (ErrorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n" + ErrorMsg);
           } else {
              // 트랜잭션 완료
               trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(svcID=="findMedDrList"){
        		this.dsMedDr.set_keystring("deptNm"); 
        		var rowCnt=this.dsMedDr.getRowCount();
        		var deptNm="";
        		for(var i=0;i<rowCnt;i++){
        			if(deptNm!=this.dsMedDr.getColumn(i,"deptNm")){
        				deptNm=this.dsMedDr.getColumn(i,"deptNm");
        				var nRow=this.dsMedDept.addRow();
        				this.dsMedDept.setColumn(nRow,"deptNm",deptNm);
        			}
        		}
        		this.dsMedDr.set_keystring("");  
              }else if(svcID=="findScheduleTypeList"){
        		this.fn_SelectSchdrLastDateDow();
              }else if(svcID=="findScheduleDetailList"){
        		this.dsDtlDow.set_rowposition(0);
        	  }else if(svcID=="registerScheduleType"){
        		this.fn_Search(null);
        	  }else if(svcID=="modifyScheduleType"){
        		this.fn_Search(null);
        	  }else if(svcID=="removeScheduleType"){
        		this.fn_Search(null);
        	  }else if(svcID=="registerDoctorSchedule"){
        		this.fn_SelectSchdrLastDateDow();
        	  }else if(svcID=="removeDoctorSchedule"){
        		this.fn_SelectSchdrLastDateDow();
        	  }

           }
           
        }

        this.SearchDiv_MedDeptCombo_oncloseup = function(obj,e)
        {
        	this.dsMedDr.filter("deptNm=='"+obj.value+"'");
        }
        //조회버튼클릭시 
        this.SearchDiv_searchSchTypeListBtn_onclick = function(obj,e)
        {
        	this.fn_Search(obj);
        	
        }
        this.fn_Search=function(obj)  //조회
        {
            this.dsTypeList.clearData();
            //CSH.20100118 - 요일별최종등록일자 정보 추가
            this.dsDrDow.clearData(); 
            this.dsDtlDow.clearData();
            
            //CSH.20100222
            if (obj != null) {
        		F_TPSEQNO = "";
        	}
            
            var empNo=this.SearchDiv.MedDrCombo.value;
        	var argument="empNo="+empNo;
        	var nRow=this.dsService.findRow("serviceID","findScheduleTypeList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("findScheduleTypeList");
        }

        this.fn_SelectSchdrLastDateDow=function() 
        {
            this.dsDrDow.clearData(); 
           
            var empNo=this.SearchDiv.MedDrCombo.value;
        	var argument="empNo="+empNo;
        	var nRow=this.dsService.findRow("serviceID","findLastDateList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("findLastDateList");
        }

        
        //오전 checkBox 체크시 오전진료정보입력창 활성화
        this.SchTypeDtlDiv_MedCntDiv_MedAmDiv_AmCheck_onclick = function(obj,e)
        {
        	var val=obj.isChecked();
        	amStTmMaskEd.set_enable(val);
        	amEdTmMaskEd.set_enable(val);
        	amTermEd.set_enable(val);
        	amTotCntEd.set_enable(val);
        }
        //오후  checkBox 체크시 오후 진료정보입력창 활성화
        this.SchTypeDtlDiv_MedCntDiv_MedPmDiv_PmCheck_onclick = function(obj,e)
        {
        	var val=obj.isChecked();
        	pmStTmMaskEd.set_enable(val);
        	pmEdTmMaskEd.set_enable(val);
        	pmTermEd.set_enable(val);
        	pmTotCntEd.set_enable(val);
        }

        this.dsTypeList_onrowposchanged = function(obj,e)
        {
        	this.fn_DisplayTypeList();
        	
        }

        this.fn_DisplayTypeList= function()
        {
            this.ButtonDiv.modifyTypeBtn.set_enable(false);
            this.ButtonDiv.removeTypeBtn.set_enable(false);
            
            var nRow=this.dsTypeList.getRowCount();
            if (nRow < 0)  return;
           
            
            //조회된 Type이 있으면 저장,삭제 버튼 활성화.
            this.ButtonDiv.modifyTypeBtn.set_enable(true);
            this.ButtonDiv.removeTypeBtn.set_enable(true);
         	var idx=this.dsTypeList.rowposition;
        	amStTmMaskEd.set_value(this.dsTypeList.getColumn(idx,"amStTm"));
        	amEdTmMaskEd.set_value(this.dsTypeList.getColumn(idx,"amEdTm"))
         	amTermEd.set_value(this.dsTypeList.getColumn(idx,"amTerm"));
         	amTotCntEd.set_value(this.dsTypeList.getColumn(idx,"amTotCnt"));
         	pmStTmMaskEd.set_value(this.dsTypeList.getColumn(idx,"pmStTm"));
        	pmEdTmMaskEd.set_value(this.dsTypeList.getColumn(idx,"pmEdTm"))
        	pmTermEd.set_value(this.dsTypeList.getColumn(idx,"pmTerm"));
        	pmTotCntEd.set_value(this.dsTypeList.getColumn(idx,"pmTotCnt"));
           //if (this.dsTypeList.getColumn(idx, "rsvYn") == "Y") {
           //alert("aa");
               rsvYnCheck.set_value(this.dsTypeList.getColumn(idx, "rsvYn"));
          //} else {
          //      rsvYnCheck.set_value("false");
          //  }
                
        	var tpSeqNo=this.dsTypeList.getColumn(idx,"tpSeqNo");
        	var empNo=this.SearchDiv.MedDrCombo.value;
        	this.dsDtlDow.filter("tpSeqNo=='"+tpSeqNo+"'");
        	this.dsDtlDow.set_keystring("S:dow");
        	var argument="tpSeqNo="+tpSeqNo+" empNo="+empNo;
        	var nRow=this.dsService.findRow("serviceID","findScheduleDetailList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("findScheduleDetailList");
        	
        }
        //새 Type으로 저장 버튼 클릭시
        this.ButtonDiv_registerTypeBtn_onclick = function(obj,e)
        {
        	 if (this.SearchDiv.MedDrCombo.value == null) {
                alert("의사를 먼저 선택하십시오");    
                return;
            }
            
            if (this.dsDtlOrg.getRowCount() < 1) {
                alert("상세기준 생성후 저장하십시오");          //MSG_MZ_0001 = "$1하십시요."; 
                return;
            }
            var objNew = new ChildFrame();
        	objNew.init("btn1", "absolute", 10, 10, 100, 100 , null, null, "mcm::newTypeInsertedPopupForm.xfdl");
        	objNew.showModal("insertTypeName",  this, {}, this, this.registerScheduleType);//다이얼로그가 close되고 나서 호출될 함수 this.registerScheduleType
        }
        	

        this.registerScheduleType = function(strID,variant){//close() 호출시 전달받은 매개변수는 variant로 전달받는다
        	var varRet=variant.split("blank");
        	var typeName=varRet[0];
        	var comments=varRet[1];
        	if(varRet.length==2){
        		//dsTypeInput : mzschbmt 저장,삭제를 위한 dataset
                this.dsTypeInput.clearData();
                var idx  = this.dsTypeInput.addRow(); 
        		this.dsTypeInput.setColumn(idx,"tpSeqNo",this.getTySeqNo());
                this.dsTypeInput.setColumn(idx, "medDr",this.SearchDiv.MedDrCombo.value);
                this.dsTypeInput.setColumn(idx, "typeName", typeName);
                this.dsTypeInput.setColumn(idx, "comments", comments);
                if(amCheck.isChecked()){
                this.dsTypeInput.setColumn(idx, "amStTm",  amStTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "amEdTm",  amEdTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "amTerm",  amTermEd.value);
                this.dsTypeInput.setColumn(idx, "amTotCnt", amTotCntEd.value);
                }
                if(pmCheck.isChecked()){
                this.dsTypeInput.setColumn(idx, "pmStTm",  pmStTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "pmEdTm",  pmEdTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "pmTerm",  pmTermEd.value);
                this.dsTypeInput.setColumn(idx, "pmTotCnt", pmTotCntEd.value);
                }
                if(rsvYnCheck.isChecked()){ 
                    this.dsTypeInput.setColumn(idx, "rsvYn",  "Y");
                } else {
                    this.dsTypeInput.setColumn(idx, "rsvYn",  "N");
                }
        		this.gfnService("registerScheduleType");
        	}
        }
        this.getTySeqNo = function(){
        	//TySeqNo  현재날짜+empNo+dsTypeList.rowcount
        	var dateObj=new Date();
            var sYear=dateObj.getFullYear().toString();
            var sMonth=(dateObj.getMonth()+1).toString().padLeft(2,"0");
            var sDate=(dateObj.getDate()).toString().padLeft(2,"0");
            var today=sYear+sMonth+sDate;
            var tySeqNo=today+this.SearchDiv.MedDrCombo.value+this.dsTypeList.rowcount;
            return tySeqNo;
        }
        this.dsDtlDow_onrowposchanged = function(obj,e)
        {
        	this.fn_refreshGrid();
        }

        this.dsDtlDow_onload = function(obj,e)
        {
        	this.fn_refreshGrid();
        }

        this.ButtonDiv_modifyTypeBtn_onclick = function(obj,e)
        {
        		this.dsTypeInput.clearData();
                var idx  = this.dsTypeInput.addRow(); 
        		this.dsTypeInput.setColumn(idx,"tpSeqNo",this.dsTypeList.getColumn(this.dsTypeList.rowposition,"tpSeqNo"));
                this.dsTypeInput.setColumn(idx, "medDr",this.SearchDiv.MedDrCombo.value);
                this.dsTypeInput.setColumn(idx, "typeName", this.dsTypeList.getColumn(this.dsTypeList.rowposition,"typeName"));
                this.dsTypeInput.setColumn(idx, "comments", this.dsTypeList.getColumn(this.dsTypeList.rowposition,"comments"));
               
                this.dsTypeInput.setColumn(idx, "amStTm",  amStTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "amEdTm",  amEdTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "amTerm",  amTermEd.value);
                this.dsTypeInput.setColumn(idx, "amTotCnt", amTotCntEd.value);
                
                
                this.dsTypeInput.setColumn(idx, "pmStTm",  pmStTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "pmEdTm",  pmEdTmMaskEd.value);
                this.dsTypeInput.setColumn(idx, "pmTerm",  pmTermEd.value);
                this.dsTypeInput.setColumn(idx, "pmTotCnt", pmTotCntEd.value);
                
                if(rsvYnCheck.isChecked()){ 
                    this.dsTypeInput.setColumn(idx, "rsvYn",  "Y");
                } else {
                    this.dsTypeInput.setColumn(idx, "rsvYn",  "N");
                }
        		this.gfnService("modifyScheduleType");
        }

        this.ButtonDiv_removeTypeBtn_onclick = function(obj,e)
        {
        		this.dsTypeInput.clearData();
                var idx  = this.dsTypeInput.addRow(); 
        		this.dsTypeInput.setColumn(idx,"tpSeqNo",this.dsTypeList.getColumn(this.dsTypeList.rowposition,"tpSeqNo"));
                this.dsTypeInput.setColumn(idx, "medDr",this.dsTypeList.getColumn(this.dsTypeList.rowposition,"medDr"));
                this.dsTypeList.deleteRow(this.dsTypeList.rowposition);
                this.gfnService("removScheduleType");
                
        }

        this.ButtonDiv_regiDrSchBtn_onclick = function(obj,e)
        {
        		if (this.dsDtlOrg.getRowCount() == 0) {
                alert("등록할 진료일정 상세기준이 없습니다");  
                return;
        		}
        	
        		var rowType=1; //Dataset.ROWTYPE_NORMAL
        		for(var i=0;i<this.dsDtlOrg.getRowCount();i++){
        			rowType=this.dsDtlOrg.getRowType();
        			if(rowType!=1){
        				alert("진료일정 상세기준이 수정 후 저장되지 않았습니다.\n\n저장 후 진료일정을 생성하십시요");       
        				return;
        				break;
        			}
        		}
        		
        		 var objNew = new ChildFrame();
        		objNew.init("btn1", "absolute", 400, 400, 100, 100 , null, null, "mcm::RegiSceduleDateInsertedPopupForm.xfdl");
        		objNew.showModal("RegiSceduleDateInsertedPopupForm",  this, {}, this, this.registerDoctorSchedule);//다이얼로그가 close되고 나서 호출될 함수 this.registerScheduleType

        }
        this.registerDoctorSchedule=function(strID,variant)
        {	if(variant=="cancle")return;
        	var varRet=variant.split("blank");
        	//varRet []: fromdate, todate
        	var sFromDate=varRet[0];
        	var sToDate=varRet[1];
        	if(varRet.length==2){
        		this.dsDrSchRegiInfo.deleteAll();
        		var idx=this.dsDrSchRegiInfo.addRow();
        		this.dsDrSchRegiInfo.setColumn(idx,"medDr",this.dsTypeList.getColumn(this.dsTypeList.rowposition,"medDr"));
        		this.dsDrSchRegiInfo.setColumn(idx,"tpSeqNo",this.dsTypeList.getColumn(this.dsTypeList.rowposition,"tpSeqNo"));
        		this.dsDrSchRegiInfo.setColumn(idx,"fromDate",sFromDate);
        		this.dsDrSchRegiInfo.setColumn(idx,"toDate",sToDate);
        		this.gfnService("registerDoctorSchedule"); 
        	}

        }
        this.ButtonDiv_delDrSchBtn_onclick = function(obj,e)
        {	
        	if (this.SearchDiv.MedDrCombo.value == null) {
                alert("의사를 먼저 선택하십시오");    
                return;
            }
            
        	 var objNew = new ChildFrame();
        		objNew.init("btn1", "absolute", 400, 400, 100, 100 , null, null, "mcm::DelSceduleDateInsertedPopupForm.xfdl");
        		objNew.showModal("RegiSceduleDateInsertedPopupForm",  this, {}, this,this.removeDoctorSchedule);//다이얼로그가 close되고 나서 호출될 함수 this.removeDoctorSchedule
        }

        this.removeDoctorSchedule=function(strID,variant)
        {	
        	if(variant=="cancle")return;
        	var varRet=variant.split("blank");
        	//varRet []: 시작일자,종료일자,적용할요일,오전오후구분
        	var sFromDate=varRet[0];
        	var sToDate=varRet[1];
        	var sDow=varRet[2];
        	var sAmPmFlag=varRet[3];
        	if(varRet.length==4){
        		var argument=new Array();
        		argument.push("medDr="+this.SearchDiv.MedDrCombo.value);
        		argument.push("fromDate="+sFromDate);
        		argument.push("toDate="+sToDate);
        		argument.push("dow="+sDow);
        		argument.push("amPmFlag="+sAmPmFlag);
        		var nRow=this.dsService.findRow("serviceID","removeDoctorSchedule");
        		this.dsService.setColumn(nRow,"argument",argument.join(" "));
        		this.gfnService("removeDoctorSchedule"); 
        	}

        }

        this.fn_TimeAdd=function(sObjID,sAMPMFLAG)
        {	
        	var sParam;
        	var sRsvyn = false;
        	
        	if (sAMPMFLAG == "P") {	    
        	    var idx = this.dsDtlPm.findRow("rsvYn","true");
        	    if (idx>-1) {
        			sRsvyn = true;
        		}
        	    
        	    sParam = {P_MPARA1:this.dsDtlPm.getColumn(this.dsDtlPm.rowposition,"examTm"),
        	           P_MPARA2:this.dsDtlPm.getColumn(this.dsDtlPm.rowposition,"totCnt"),
        	           P_MPARA3:sAMPMFLAG, 
        	           P_MPARA4:sRsvyn};
        	}
        	else {
        	    var idx = this.dsDtlAm.findRow("rsvYn","true");
        	    if (idx>-1) {
        			sRsvyn = true;
        		}
        	    
        	     sParam = {P_MPARA1:this.dsDtlAm.getColumn(this.dsDtlAm.rowposition,"examTm"),
        	           P_MPARA2:this.dsDtlAm.getColumn(this.dsDtlAm.rowposition,"totCnt"),
        	           P_MPARA3:sAMPMFLAG, 
        	           P_MPARA4:sRsvyn};
        	}
        	        
        		 var objNew = new ChildFrame();
        		objNew.init("btn1", "absolute", 400, 400, 100, 100 , null, null, "mcm::AddDetailSchedulePopupForm.xfdl");
        		objNew.showModal("AddDetailSchedulePopupForm",  this, sParam, this,this.addTimeRow);//다이얼로그가 close되고 나서 호출될 함수 this.removeDoctorSchedule
            
            
        }
        this.addTimeRow=function(strID,variant)
        {
        	if(variant=="cancle")return;
        	var sRtn=variant.split("blank");
        	//sRtn []: examTm, totCnt, amPmFlag, rsvYn
        	if (sRtn.length >= 4) {
                //시간대 추가.
                var sFindstr = this.dsDtlDow.getColumn(this.dsDtlDow.rowposition,"dow")+sRtn[0];
                alert(sFindstr);
                var idx = this.dsDtlOrg.findRow("findKey",sFindstr);

                //이미 시간대가 있으면 skip;
                if (idx > -1) {
                    alert( "이미 존재하는 일정입니다."); 
                    return;
                }
                        
                idx = this.dsDtlOrg.addRow();
                this.dsDtlOrg.setColumn(idx,"dow",this.dsDtlDow.getColumn(this.dsDtlDow.rowposition,"dow"));
                this.dsDtlOrg.setColumn(idx,"amPmFlag",sRtn[2]);
                this.dsDtlOrg.setColumn(idx,"examTm",sRtn[0]);
                this.dsDtlOrg.setColumn(idx,"totCnt",sRtn[1]);
                this.dsDtlOrg.setColumn(idx,"rsvYn",sRtn[3]);
                this.dsDtlOrg.setColumn(idx,"findkey",sFindstr);
           
                this.dsDtlOrg.set_keystring("S:+dow+examTm");//시간대별로 sort
                this.fn_refreshGrid();
            }
        }
        this.SchTypeDtlDiv_addDtlAmBtn_onclick = function(obj,e)
        {
        	this.fn_TimeAdd(obj.id, "A");
        }

        this.SchTypeDtlDiv_addDtlPmBtn_onclick = function(obj,e)
        {
        	this.fn_TimeAdd(obj.id, "P");
        }

        this.SchTypeDtlDiv_delDtlAmBtn_onclick = function(obj,e)
        {
        	var sExamTm = this.dsDtlAm.getColumn(this.dsDtlAm.rowposition,"examTm");
        	var sDow=this.dsDtlDow.getColumn(this.dsDtlDow.rowposition,"dow");
        	var idx = this.dsDtlOrg.findRowExpr("examTm== '"+sExamTm+"'&&dow=='"+sDow+"'");

        	if (idx > -1) {
                this.dsDtlOrg.deleteRow(idx);
            }
            
            this.fn_refreshGrid();

        }

        this.SchTypeDtlDiv_delDtlPmBtn_onclick = function(obj,e)
        {
        	var sExamTm = this.dsDtlPm.getColumn(this.dsDtlPm.rowposition,"examTm");
        	var sDow=this.dsDtlDow.getColumn(this.dsDtlDow.rowposition,"dow");
        	var idx = this.dsDtlOrg.findRowExpr("examTm== '"+sExamTm+"'&&dow=='"+sDow+"'");

        	if (idx > -1) {
                this.dsDtlOrg.deleteRow(idx);
            }
            
            this.fn_refreshGrid();
        }

        this.SchTypeDtlDiv_DtlDowGrid_oncellclick = function(obj,e)
        {
        	this.fn_refreshGrid();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTypeList.addEventHandler("onrowposchanged", this.dsTypeList_onrowposchanged, this);
            this.dsDtlDow.addEventHandler("onrowposchanged", this.dsDtlDow_onrowposchanged, this);
            this.dsDtlDow.addEventHandler("onload", this.dsDtlDow_onload, this);
            this.addEventHandler("onload", this.SC_DoctorTreatmentScheduleForm_onload, this);
            this.SearchDiv.searchSchTypeListBtn.addEventHandler("onclick", this.SearchDiv_searchSchTypeListBtn_onclick, this);
            this.SearchDiv.MedDeptCombo.addEventHandler("oncloseup", this.SearchDiv_MedDeptCombo_oncloseup, this);
            this.SchTypeDtlDiv.MedCntDiv.MedAmDiv.AmCheck.addEventHandler("onclick", this.SchTypeDtlDiv_MedCntDiv_MedAmDiv_AmCheck_onclick, this);
            this.SchTypeDtlDiv.MedCntDiv.MedPmDiv.PmCheck.addEventHandler("onclick", this.SchTypeDtlDiv_MedCntDiv_MedPmDiv_PmCheck_onclick, this);
            this.SchTypeDtlDiv.ApplyDowDiv.DAllCheck.addEventHandler("onclick", this.SchTypeDtlDiv_ApplyDowDiv_DAllCheck_onclick, this);
            this.SchTypeDtlDiv.createDtlBaseBtn.addEventHandler("onclick", this.SchTypeDtlDiv_createDtlBaseBtn_onclick, this);
            this.SchTypeDtlDiv.clearBtn.addEventHandler("onclick", this.SchTypeDtlDiv_clearBtn_onclick, this);
            this.SchTypeDtlDiv.DtlDowGrid.addEventHandler("oncellclick", this.SchTypeDtlDiv_DtlDowGrid_oncellclick, this);
            this.SchTypeDtlDiv.DtlAmGrid.addEventHandler("onheadclick", this.SchTypeDtlDiv_DtlAmGrid_onheadclick, this);
            this.SchTypeDtlDiv.DtlPmGrid.addEventHandler("onheadclick", this.SchTypeDtlDiv_DtlPmGrid_onheadclick, this);
            this.SchTypeDtlDiv.addDtlAmBtn.addEventHandler("onclick", this.SchTypeDtlDiv_addDtlAmBtn_onclick, this);
            this.SchTypeDtlDiv.delDtlAmBtn.addEventHandler("onclick", this.SchTypeDtlDiv_delDtlAmBtn_onclick, this);
            this.SchTypeDtlDiv.addDtlPmBtn.addEventHandler("onclick", this.SchTypeDtlDiv_addDtlPmBtn_onclick, this);
            this.SchTypeDtlDiv.delDtlPmBtn.addEventHandler("onclick", this.SchTypeDtlDiv_delDtlPmBtn_onclick, this);
            this.ButtonDiv.registerTypeBtn.addEventHandler("onclick", this.ButtonDiv_registerTypeBtn_onclick, this);
            this.ButtonDiv.removeTypeBtn.addEventHandler("onclick", this.ButtonDiv_removeTypeBtn_onclick, this);
            this.ButtonDiv.modifyTypeBtn.addEventHandler("onclick", this.ButtonDiv_modifyTypeBtn_onclick, this);
            this.ButtonDiv.regiDrSchBtn.addEventHandler("onclick", this.ButtonDiv_regiDrSchBtn_onclick, this);
            this.ButtonDiv.delDrSchBtn.addEventHandler("onclick", this.ButtonDiv_delDrSchBtn_onclick, this);

        };

        this.loadIncludeScript("SC_DoctorTreatmentScheduleForm.xfdl");

       
    };
}
)();
