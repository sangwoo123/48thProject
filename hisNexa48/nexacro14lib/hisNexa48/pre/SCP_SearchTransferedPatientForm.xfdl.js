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
                this.set_name("SCP_SearchTransferedPatientForm");
                this.set_classname("SCP_TransferedPatientForm");
                this.set_titletext("전원환자조회");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL\">his::msv/mcm/patientservice/findTransferPatientList.do</Col><Col id=\"serviceID\">findTransferPatientList</Col><Col id=\"outData\">dsTransferPatient=dsTransferPatient</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTransferPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"transferNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"recodeDate\" type=\"STRING\" size=\"256\"/><Column id=\"transferDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"dischargeDate\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosNm\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosDept\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosDoct\" type=\"STRING\" size=\"256\"/><Column id=\"transferHosTel\" type=\"STRING\" size=\"256\"/><Column id=\"transferReason\" type=\"STRING\" size=\"256\"/><Column id=\"providingMedInfo\" type=\"STRING\" size=\"256\"/><Column id=\"recodeYn\" type=\"STRING\" size=\"256\"/><Column id=\"adviceResult\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAdviceResultType", this);
            obj._setContents("<ColumnInfo><Column id=\"result\" type=\"STRING\" size=\"256\"/><Column id=\"resultNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"resultNm\">전체</Col></Row><Row><Col id=\"resultNm\">전원결정</Col><Col id=\"result\">전원결정</Col></Row><Row><Col id=\"resultNm\">퇴원후전원</Col><Col id=\"result\">퇴원후전원</Col></Row><Row><Col id=\"resultNm\">전원미결정</Col><Col id=\"result\">전원미결정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", null, "68", "1.31%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.79%", "0", null, "53", "65.88%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("전원환자조회");
            obj.style.set_color("#263238ff");
            obj.style.set_font("bold 20 돋움");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("transferPatientDiv", "absolute", "44.6%", "168", null, "584", "0.87%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new TextArea("noteArea", "absolute", "20.47%", "503", null, "69", "2.5%", null, this.transferPatientDiv);
            obj.set_taborder("0");
            obj.style.set_font("10 돋움");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferNoEd", "absolute", "20.47%", "23", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("1");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDeptEd", "absolute", "20.47%", "71", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("2");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "71.13%", "23", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("3");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "71.13%", "71", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("4");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("dgnsNmEd", "absolute", "20.47%", "119", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("5");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("adviceResultEd", "absolute", "20.47%", "169", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("6");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("dischargeDateEd", "absolute", "20.47%", "216", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("7");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("receiptDateEd", "absolute", "20.47%", "264", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("8");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferDateEd", "absolute", "20.47%", "312", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("9");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosNmEd", "absolute", "20.47%", "360", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("10");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosDoctEd", "absolute", "20.47%", "408", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("11");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferReasonEd", "absolute", "20.47%", "455", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("12");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("recodeDateEd", "absolute", "71.13%", "264", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("13");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosDeptEd", "absolute", "71.13%", "360", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("14");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("transferHosTelEd", "absolute", "71.13%", "408", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("15");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);
            obj = new Edit("providingMedInfoEd", "absolute", "71.13%", "456", "179", "35", null, null, this.transferPatientDiv);
            obj.set_taborder("16");
            obj.getSetter("class").set("AreaEdt");
            this.transferPatientDiv.addChild(obj.name, obj);

            obj = new Div("searchTransferPatDiv", "absolute", "2.18%", "67", null, "85", "0.87%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Static("transferDateStc01", "absolute", "31.09%", "40", "85", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("13");
            obj.set_text("환자번호");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "38.28%", "40", "109", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Button("findPatNoBtn", "absolute", "574", "40", "30", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNameEd", "absolute", "50%", "40", "106", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc00", "absolute", "1.25%", "40", "85", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("17");
            obj.set_text("기간");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "17.41%", "43", null, "27", "79.79%", null, this.searchTransferPatDiv);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 16 돋움");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Static("transferDateStc02", "absolute", "60.89%", "40", "86", "30", null, null, this.searchTransferPatDiv);
            obj.set_taborder("19");
            obj.set_text("상담결과");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Combo("adviceResultCombo", "absolute", "826", "40", "186", "30", null, null, this.searchTransferPatDiv);
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@dsAdviceResultType");
            obj.set_datacolumn("resultNm");
            obj.set_codecolumn("resultNm");
            obj = new Button("searchBtn", "absolute", "1102", "40", "90", "32", null, null, this.searchTransferPatDiv);
            obj.set_taborder("21");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Static("dd00", "absolute", "0.09%", "3", null, "25", "0%", null, this.searchTransferPatDiv);
            obj.set_taborder("22");
            obj.set_text("환자검색");
            obj.style.set_background("#607d8bff");
            obj.style.set_color("#eceff1ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 돋움");
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj = new Calendar("transStartDateCal", "absolute", "8.42%", "40", null, "31", "82.43%", null, this.searchTransferPatDiv);
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj = new Calendar("transEndDateCal", "absolute", "19.72%", "40", null, "31", "71.04%", null, this.searchTransferPatDiv);
            this.searchTransferPatDiv.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");

            obj = new Static("transferNo", "absolute", "579", "192", "116", "35", null, null, this);
            obj.set_taborder("17");
            obj.set_text("전원환자번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("patDiv", "absolute", "2.18%", "168", null, "583", "56.1%", null, this);
            obj.set_taborder("52");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);

            obj = new Grid("transferPatGrid", "absolute", "35", "199", "502", "537", null, null, this);
            obj.set_taborder("18");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTransferPatient");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"88\"/><Column size=\"85\"/><Column size=\"73\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"NO\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"접수일자\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"환자번호\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"전원번호\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진료과\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"진료의\"/><Cell col=\"6\" style=\"background:#cfd8dcff;font:bold 9 돋움;\" text=\"상담결과\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;font:10 돋움;\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:center middle;font:10 돋움;\" text=\"bind:receiptDate\"/><Cell col=\"2\" style=\"align:center middle;font:10 돋움;\" text=\"bind:patNo\"/><Cell col=\"3\" style=\"align:center middle;font:10 돋움;\" text=\"bind:transferNo\"/><Cell col=\"4\" style=\"align:center middle;font:10 돋움;\" text=\"bind:trmtDept\"/><Cell col=\"5\" style=\"align:center middle;font:10 돋움;\" text=\"bind:trmtDoct\"/><Cell col=\"6\" style=\"align:center middle;font:10 돋움;\" text=\"bind:adviceResult\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" style=\"background:#cfd8dcff;\" text=\"인원\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "579", "432", "116", "35", null, null, this);
            obj.set_taborder("19");
            obj.set_text("전원접수일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "579", "240", "116", "35", null, null, this);
            obj.set_taborder("21");
            obj.set_text("진료과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "579", "288", "116", "35", null, null, this);
            obj.set_taborder("23");
            obj.set_text("진단명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "579", "480", "116", "35", null, null, this);
            obj.set_taborder("25");
            obj.set_text("전원일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "579", "528", "116", "35", null, null, this);
            obj.set_taborder("27");
            obj.set_text("전원기관명");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "579", "576", "116", "35", null, null, this);
            obj.set_taborder("29");
            obj.set_text("전원기관 전문의");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "579", "624", "116", "35", null, null, this);
            obj.set_taborder("31");
            obj.set_text("전원사유");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "579", "338", "116", "35", null, null, this);
            obj.set_taborder("33");
            obj.set_text("상담결과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "923", "625", "116", "35", null, null, this);
            obj.set_taborder("35");
            obj.set_text("의료정보제공");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "923", "192", "116", "35", null, null, this);
            obj.set_taborder("39");
            obj.set_text("환자번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "923", "240", "116", "35", null, null, this);
            obj.set_taborder("41");
            obj.set_text("진료의");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "923", "433", "116", "35", null, null, this);
            obj.set_taborder("43");
            obj.set_text("전원기록일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "579", "385", "116", "35", null, null, this);
            obj.set_taborder("45");
            obj.set_text("퇴원일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "923", "529", "116", "35", null, null, this);
            obj.set_taborder("47");
            obj.set_text("전원진료과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "923", "577", "116", "35", null, null, this);
            obj.set_taborder("49");
            obj.set_text("전원기관 연락처");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "579", "672", "116", "69", null, null, this);
            obj.set_taborder("51");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#90a4aeff");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1241, 68, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 584, this.transferPatientDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 none #808080ff");

            	}
            );
            this.transferPatientDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 85, this.searchTransferPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.searchTransferPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SCP_TransferedPatientForm");
            		p.set_titletext("전원환자조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","searchTransferPatDiv.patNoEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","searchTransferPatDiv.patNameEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","searchTransferPatDiv.adviceResultCombo","value","dsTransferReasonType","reason");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","transferPatientDiv.transferNoEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","transferPatientDiv.trmtDeptEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","transferPatientDiv.patNoEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","transferPatientDiv.trmtDoctEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","transferPatientDiv.dgnsNmEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","transferPatientDiv.adviceResultEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","transferPatientDiv.dischargeDateEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","transferPatientDiv.receiptDateEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","transferPatientDiv.transferDateEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","transferPatientDiv.transferHosNmEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","transferPatientDiv.transferHosDoctEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","transferPatientDiv.transferReasonEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","transferPatientDiv.recodeDateEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","transferPatientDiv.transferHosDeptEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","transferPatientDiv.transferHosTelEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","transferPatientDiv.providingMedInfoEd","","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","transferPatientDiv.transferNoEd","value","dsTransferPatient","transferNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","transferPatientDiv.patNoEd","value","dsTransferPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","transferPatientDiv.trmtDeptEd","value","dsTransferPatient","trmtDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","transferPatientDiv.trmtDoctEd","value","dsTransferPatient","trmtDoct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","transferPatientDiv.dgnsNmEd","value","dsTransferPatient","dgnsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","transferPatientDiv.adviceResultEd","value","dsTransferPatient","adviceResult");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","transferPatientDiv.dischargeDateEd","value","dsTransferPatient","dischargeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","transferPatientDiv.receiptDateEd","value","dsTransferPatient","receiptDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","transferPatientDiv.recodeDateEd","value","dsTransferPatient","recodeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","transferPatientDiv.transferDateEd","value","dsTransferPatient","transferDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","transferPatientDiv.transferHosNmEd","value","dsTransferPatient","transferHosNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","transferPatientDiv.transferHosDeptEd","value","dsTransferPatient","transferHosDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","transferPatientDiv.transferHosDoctEd","value","dsTransferPatient","transferHosDoct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","transferPatientDiv.transferHosTelEd","value","dsTransferPatient","transferHosTel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","transferPatientDiv.transferReasonEd","value","dsTransferPatient","transferReason");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","transferPatientDiv.providingMedInfoEd","value","dsTransferPatient","providingMedInfo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","transferPatientDiv.noteArea","value","dsTransferPatient","note");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_SearchTransferedPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_SearchTransferedPatientForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_SearchTransferedPatientForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방              				   				
        @Description	전원환자 관리 화면 			
        @Author	  		백송은			    			                        								                                            
        @Create         2016.12.                      		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        
        this.searchTransferPatDiv_findPatNoBtn_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	
        	this.setPatInfo = 	function(pat)
        	{	
        		this.searchTransferPatDiv.patNoEd.set_value(pat[0]);
        		this.searchTransferPatDiv.patNameEd.set_value(pat[1]);
        	}

        }

        this.searchTransferPatDiv_searchBtn_onclick = function(obj,e)
        {
        		
        	
        		var patNo = this.searchTransferPatDiv.patNoEd.text;
        		var advice = this.searchTransferPatDiv.adviceResultCombo.text;
        		var transferStartDate = this.searchTransferPatDiv.transStartDateCal.text;
        		var transferEndDate = this.searchTransferPatDiv.transEndDateCal.text;
        	
        		this.dsService.setColumn(0,"argument","patNo=" + patNo + " adviceResult=" + advice  + " transStartDate=" + transferStartDate + " transEndDate="+transferEndDate);
        		this.gfnService("findTransferPatientList",false);
        }

        this.transferPatGrid_oncellclick = function(obj,e)
        {
        	var transferNo = this.dsTransferPatient.getColumn(this.dsTransferPatient.rowposition, "transferNo");
        	
        	
        	this.dsTransferPatient.filter("transferNo=='" + transferNo + "'");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_TransferedPatientForm_onload, this);
            this.searchTransferPatDiv.transferDateStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchTransferPatDiv.findPatNoBtn.addEventHandler("onclick", this.searchTransferPatDiv_findPatNoBtn_onclick, this);
            this.searchTransferPatDiv.transferDateStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchTransferPatDiv.transferDateStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchTransferPatDiv.adviceResultCombo.addEventHandler("onitemchanged", this.searchTransferPatDiv_Combo00_onitemchanged, this);
            this.searchTransferPatDiv.searchBtn.addEventHandler("onclick", this.searchTransferPatDiv_searchBtn_onclick, this);
            this.transferPatGrid.addEventHandler("oncellclick", this.transferPatGrid_oncellclick, this);

        };

        this.loadIncludeScript("SCP_SearchTransferedPatientForm.xfdl");

       
    };
}
)();
