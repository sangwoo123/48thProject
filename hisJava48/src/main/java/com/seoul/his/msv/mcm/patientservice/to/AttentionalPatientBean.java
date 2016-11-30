package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author  :   Minhyeog
 * @date     :   2016. 11. 30.
 */

@Getter
@Setter
@ToString

@Dataset(name = "dsAttentionalPatient")
public class AttentionalPatientBean extends BaseBean {

	private String attendtionalRegNo, patNo, patName, attendtionalField, attendtionalDiv, startDate, endDate;

}
