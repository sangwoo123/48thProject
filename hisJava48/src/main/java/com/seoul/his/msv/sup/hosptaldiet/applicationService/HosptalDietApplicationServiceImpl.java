package com.seoul.his.msv.sup.hosptaldiet.applicationService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.hosptaldiet.dao.CarteDAO;
import com.seoul.his.msv.sup.hosptaldiet.dao.FoodDAO;
import com.seoul.his.msv.sup.hosptaldiet.dao.IngredDAO;
import com.seoul.his.msv.sup.hosptaldiet.to.BreakfastBean;
import com.seoul.his.msv.sup.hosptaldiet.to.CarteBean;
import com.seoul.his.msv.sup.hosptaldiet.to.DCarteBean;
import com.seoul.his.msv.sup.hosptaldiet.to.DinnerBean;
import com.seoul.his.msv.sup.hosptaldiet.to.FoodBean;
import com.seoul.his.msv.sup.hosptaldiet.to.FoodDtlBean;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietCodeBean;
import com.seoul.his.msv.sup.hosptaldiet.to.IngredBean;
import com.seoul.his.msv.sup.hosptaldiet.to.LunchBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 12. 10.
 * @Author   응디꿍디
 * @Description
 *
 * @LastUpdated
 */

@Component
public class HosptalDietApplicationServiceImpl implements HosptalDietApplicationService{
	@Autowired
	IngredDAO ingredDAO;
	@Autowired
	FoodDAO foodDAO;
	@Autowired
	CarteDAO carteDAO;
	@Override
	public List<HosptalDietCodeBean>findCodeList(Map<String, String> argsMap){
	    List<HosptalDietCodeBean> ingredCodeList = ingredDAO.selectCodeList(argsMap);
		return ingredCodeList;
	}

	@Override
	public List<IngredBean> findIngredList(Map<String, String> argsMap) {
		List<IngredBean> ingredList = ingredDAO.selectIngredList(argsMap);
		return ingredList;
	}

	@Override
	public void batchIngredProcess(List<IngredBean> ingredList) {
		List<IngredBean> insertedList = new ArrayList<IngredBean>();
		List<IngredBean> updatedList = new ArrayList<IngredBean>();
		List<IngredBean> deletedList = new ArrayList<IngredBean>();

		for(IngredBean ingredBean:ingredList){
			switch(ingredBean.getStatus())
			{
			case "inserted" :
				insertedList.add(ingredBean);
				break;

			case "updated" :
				updatedList.add(ingredBean);
				break;

			case "deleted" :
				deletedList.add(ingredBean);
				break;
			}
		}
		if(insertedList.size() >0){
		addIngredList(insertedList);
		}
		if(updatedList.size() >0){
		modifyIngredList(updatedList);
		}
		if(deletedList.size() >0){
		removeIngredList(deletedList);
		}

	}

	void addIngredList(List<IngredBean> insertedList){
		for(IngredBean ingredBean:insertedList){
			ingredDAO.insertIngred(ingredBean);
		}
	}

	void modifyIngredList(List<IngredBean> updatedList){
		for(IngredBean ingredBean:updatedList){
			ingredDAO.updateIngred(ingredBean);
		}
	}

	void removeIngredList(List<IngredBean> deletedList){
		for(IngredBean ingredBean:deletedList){
			ingredDAO.deleteIngred(ingredBean);
		}
	}


	@Override
	public List<HosptalDietCodeBean> findFoodCodeList(Map<String, String> argsMap){
		List<HosptalDietCodeBean> foodCodeList = foodDAO.selectFoodCodeList(argsMap);
		return foodCodeList;
	}

	@Override
	public List<FoodBean> findFoodList(Map<String, String> argsMap) {
		List<FoodBean> foodBean = foodDAO.selectFoodList(argsMap);
		return foodBean;
	}

	@Override
	public List<FoodDtlBean> findFoodDtlList(Map<String, String> argsMap) {
		List<FoodDtlBean> foodDtlList = foodDAO.selectFoodDtlList(argsMap);
		return foodDtlList;
	}

	@Override
	public void batchFoodProcess(List<FoodBean> foodList) {

		for(FoodBean foodBean:foodList){
			switch(foodBean.getStatus())
			{
			case "inserted" :
				foodDAO.insertFoodList(foodBean);
				break;

			case "updated" :
				foodDAO.updateFoodList(foodBean);
				break;

			case "deleted" :
				foodDAO.deleteFoodList(foodBean);
				break;
			}
		}

	}



	@Override
	public void batchFoodDtlProcess(List<FoodDtlBean> foodDtlList) {
		for(FoodDtlBean foodDtlBean:foodDtlList){
			System.out.println(foodDtlBean.getIngredCd());
			switch(foodDtlBean.getStatus())
			{
			case "inserted" :
				foodDAO.insertFoodDtlList(foodDtlBean);
				break;

			case "updated" :
				foodDAO.updateFoodDtlList(foodDtlBean);
				break;

			case "deleted" :
				foodDAO.deleteFoodDtlList(foodDtlBean);
				break;
			}
		}

	}



	@Override
	public List<HosptalDietCodeBean> findDietSeparateCodeList(Map<String, String> argsMap) {
		List<HosptalDietCodeBean> hosptalDietSeparateCodeList = carteDAO.selectDietSeparateCodeList(argsMap);
		return hosptalDietSeparateCodeList;
	}

	@Override
	public List<CarteBean> findCarteList(Map<String, String> argsMap) {
		List<CarteBean> carteBeanList = carteDAO.selectCarteList(argsMap);
		return carteBeanList;
	}

	@Override
	public List<DCarteBean> findDCarteList(Map<String, String> argsMap) {
		List<DCarteBean> dCarteBeanList = carteDAO.selectDCarteList(argsMap);
		return dCarteBeanList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void batchCarteProcess(Map<String, Object> map) {
		List<BreakfastBean> breakfastList = (List<BreakfastBean>) map.get("breakfast");
		List<LunchBean> lunchList = (List<LunchBean>) map.get("lunch");
		List<DinnerBean> dinnerList = (List<DinnerBean>) map.get("dinner");

		if (breakfastList != null) {
			for (BreakfastBean breakfastBean : breakfastList) {
				switch (breakfastBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(breakfastBean); break;
				case "deleted": carteDAO.deleteCarte(breakfastBean); break;
				}
			}
		}

		if (lunchList != null) {
			for (LunchBean lunchBean : lunchList) {
				switch (lunchBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(lunchBean); break;
				case "deleted": carteDAO.deleteCarte(lunchBean); break;
				}
			}
		}

		if (dinnerList != null) {
			for (DinnerBean dinnerBean : dinnerList) {
				switch (dinnerBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(dinnerBean); break;
				case "deleted": carteDAO.deleteCarte(dinnerBean); break;
				}
			}
		}

	}
}
