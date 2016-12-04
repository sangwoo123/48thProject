package com.seoul.his.hdm.admission.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.admission.dao.HospitalizationScheduleDAO;
import com.seoul.his.hdm.admission.to.HospitalizationScheduleBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated
 */

@Component
public class HospitalizationScheduleApplicationServiceImpl implements HospitalizationScheduleApplicationService{
	@Autowired
	HospitalizationScheduleDAO hospitalizationScheduleDAO;

	@Override
	public String callhosptlzRsvtSeq() {
		String hosptlzRsvtNo=hospitalizationScheduleDAO.selectHosptlzRsvtSeq();
		return hosptlzRsvtNo;
	}

	@Override
	public void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList){
		for(HospitalizationScheduleBean hospitalizationScheduleBean : hospitalizationScheduleList){
			switch(hospitalizationScheduleBean.getStatus()){
			case "inserted":
				hospitalizationScheduleDAO.insertHospitalizationSchedule(hospitalizationScheduleBean);
			}
		}
	}
}
