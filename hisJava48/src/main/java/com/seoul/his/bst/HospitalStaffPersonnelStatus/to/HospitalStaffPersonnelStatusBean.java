package com.seoul.his.bst.HospitalStaffPersonnelStatus.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.to
 * @Class    HospitalStaffPersonnelStatusBean.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description   원내직원 인훤현황 Bean
 *
 * @LastUpdated   2016. 12. 24.
 */
@Getter
@Setter
@ToString

@Dataset(name = "dsHsps")
public class HospitalStaffPersonnelStatusBean extends BaseBean{

	private String empNo,      //사원번호
						empNm,     //사원명
						jobcl,          //직종
						jobtt,          //직위
						jobrk,          //직급
						gender,       //성별
						addr,           //주소
						detailAddr,   //상세주소
						zipCd,         //우편번호
						natnt,         //국적
						deptCd,       //부서코드
						hireDate,     //입사일
						workPeriod,  //근속년수
						deptNm;     //부서명

}
