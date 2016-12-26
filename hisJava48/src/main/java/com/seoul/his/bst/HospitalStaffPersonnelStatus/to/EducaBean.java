package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;


import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    EducaBean.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *		학력정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsHmEducation")
public class EducaBean extends BaseBean{

	 String empNo			//사원번호
			,admDay			//입학일
			,graduDay		//졸업일
			,schoolName		//학교명
			,major			//전공
			,degree			//학위
			,finYn			//최종여부
			,educationSeq;  //학력시퀀스

}
