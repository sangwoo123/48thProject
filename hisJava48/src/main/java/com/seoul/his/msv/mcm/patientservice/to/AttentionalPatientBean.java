package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsAttentionalPatient")
public class AttentionalPatientBean extends BaseBean {

	private String attendtionalRegNo, patNo, patName, attendtionalFiled, attendtionalDiv, startDate, endDate;

}
