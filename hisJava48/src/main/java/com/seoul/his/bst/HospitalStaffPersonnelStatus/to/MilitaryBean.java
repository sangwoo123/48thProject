package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;



import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    MilitaryBean.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *		병력정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmMilitary")
public class MilitaryBean extends BaseBean {

	 String empNo         	//사원번호
			,physiqueGrade 	//체격등위
			,mgroup        	//군별
			,branch         //병과
			,hierarachy     //계급
			,msn           	//군번
			,joinArmyDay    //입대일
			,dischargeDay   //전역일
			,militarySeq;	//병역시퀀스

}
