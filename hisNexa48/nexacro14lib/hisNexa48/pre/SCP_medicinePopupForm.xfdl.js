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
                this.set_name("MB_PrscDtlPopupForm");
                this.set_classname("MB_PrscDtlPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,529,250);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPrescMedi", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"100\"/><Column id=\"codeValue\" type=\"STRING\" size=\"100\"/><Column id=\"prescNo\" type=\"STRING\" size=\"100\"/><Column id=\"patNo\" type=\"STRING\" size=\"100\"/><Column id=\"inNumber\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"100\"/><Column id=\"URL\" type=\"STRING\" size=\"100\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedPrescList</Col><Col id=\"URL\">his::msv/pre/prescriptionmanagement/findMedPrescList.do</Col><Col id=\"outData\">dsPrescMedi=dsPrescMedi</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "7.24%", "9", null, "41", "69.23%", null, this);
            obj.set_taborder("6");
            obj.set_text("약물조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("diseaseGrid", "absolute", "10", "58", "487", "172", null, null, this);
            obj.set_taborder("7");
            obj.set_binddataset("dsPrescMedi");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"204\"/><Column size=\"83\"/><Column size=\"71\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"약물코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"약물명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"투약일자\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"복용일\"/><Cell col=\"4\" style=\"background:#cfd8dcff;background2:#cfd8dcff;\" text=\"환자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" style=\"align:center middle;\" text=\"bind:codeNo\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:codeValue\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:prescDate\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:inNumber\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:patNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 529, 250, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_PrscDtlPopupForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_medicinePopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("SCP_medicinePopupForm.xfdl", function() {
        /********************************************************************************                                                                            
        처방상세 조회화면                                           						                                                                         
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	약물 조회 다이얼로그						
        @Author	  		왕민혁				    			                        								                                            
        @Create         2016. 12. 21.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  

        // 조회
        this.MB_PrscDtlPopupForm_onload = function(obj,e)
        {
        	var patNo = this.parent.patNo;
        	var prescNo=this.parent.prescNo;
            var argument = 'patNo='+patNo+' prescNo='+prescNo;
        	var serviceRow = this.dsService.findRow("serviceID", "findMedPrescList");
        	this.dsService.setColumn(serviceRow,"argument",argument);
            this.gfnService("findMedPrescList",false);
            if (this.dsPrescMedi.getRowCount()==0){
        		alert("약물처방을 받지 않았습니다");
        		this.close();
        	}
        }

        this.diseaseGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;   // arrRtn에 차곡차곡담기위해 배열로 만든다
        	var i=0;
        	arrRtn[i++] = this.dsPrescMedi.getColumn(e.row,"codeNo");	// 사번
        	arrRtn[i++] = this.dsPrescMedi.getColumn(e.row,"codeValue");	// 사원명
        	arrRtn[i++] = this.dsPrescMedi.getColumn(e.row,"prescDate");
            arrRtn[i++] = this.dsPrescMedi.getColumn(e.row,"inNumber");
            this.opener.setMediInfo(arrRtn);
            this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_PrscDtlPopupForm_onload, this);
            this.diseaseGrid.addEventHandler("oncelldblclick", this.diseaseGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("SCP_medicinePopupForm.xfdl");

       
    };
}
)();
