package com.b107.treeway.api.sales.dto;

import com.b107.treeway.api.sales.entity.SalesItem;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesItemResponse {
    private Long id;
    private String majorBusiness;
    private Long industryDetailId;
    private String industryDetailName;
    private String address;
    private Integer monthlySales;
    private Integer monthlyEarnings;
    private String hostName;
    private String phone;
    private String tradeName;
    private String floorClass;
    private Integer currentFloor;
    private Integer totalFloors;
    private Integer squareMeter;
    private Integer availableParking;
    private Integer totalParking;
    private Integer premium;
    private Integer deposit;
    private Integer monthlyRent;
    private Integer administrationCost;
    private Integer materialCost;
    private Integer personnelExpense;
    private Integer utilityBill;
    private Integer otherExpenses;
    private String additionalInformation;
    private Integer itemNum;
    private Double latitude;
    private Double longitude;
    private Long scrapCount;

    public SalesItemResponse(Long id, String majorBusiness, Long industryDetailId, String industryDetailName,
                             String address, Integer monthlySales, Integer monthlyEarnings, String hostName,
                             String tradeName, String floorClass, Integer currentFloor, Integer totalFloors,
                             Integer squareMeter, Integer availableParking, Integer totalParking, Integer premium,
                             Integer deposit, Integer monthlyRent, Integer administrationCost, Integer materialCost,
                             Integer personnelExpense, Integer utilityBill, Integer otherExpenses,
                             String additionalInformation, Integer itemNum, Double latitude, Double longitude, Long scrapCount) {
        this.id = id;
        this.majorBusiness = majorBusiness;
        this.industryDetailId = industryDetailId;
        this.industryDetailName = industryDetailName;
        this.address = address;
        this.monthlySales = monthlySales;
        this.monthlyEarnings = monthlyEarnings;
        this.hostName = hostName;
        this.tradeName = tradeName;
        this.floorClass = floorClass;
        this.currentFloor = currentFloor;
        this.totalFloors = totalFloors;
        this.squareMeter = squareMeter;
        this.availableParking = availableParking;
        this.totalParking = totalParking;
        this.premium = premium;
        this.deposit = deposit;
        this.monthlyRent = monthlyRent;
        this.administrationCost = administrationCost;
        this.materialCost = materialCost;
        this.personnelExpense = personnelExpense;
        this.utilityBill = utilityBill;
        this.otherExpenses = otherExpenses;
        this.additionalInformation = additionalInformation;
        this.itemNum = itemNum;
        this.latitude = latitude;
        this.longitude = longitude;
        this.scrapCount = scrapCount;
    }

    public SalesItemResponse(SalesItem salesItem) {
        this.id = salesItem.getId();
        this.majorBusiness = salesItem.getMajorBusiness();
        this.industryDetailId = salesItem.getIndustryDetail().getId();
        this.industryDetailName = salesItem.getIndustryDetail().getIndustryDetailName();
        this.address = salesItem.getAddress();
        this.monthlySales = salesItem.getMonthlySales();
        this.monthlyEarnings = salesItem.getMonthlyEarnings();
        this.hostName = salesItem.getHostName();
        this.tradeName = salesItem.getTradeName();
        this.floorClass = salesItem.getFloorClass();
        this.currentFloor = salesItem.getCurrentFloor();
        this.totalFloors = salesItem.getTotalFloors();
        this.squareMeter = salesItem.getSquareMeter();
        this.availableParking = salesItem.getAvailableParking();
        this.totalParking = salesItem.getTotalParking();
        this.premium = salesItem.getPremium();
        this.deposit = salesItem.getDeposit();
        this.monthlyRent = salesItem.getMonthlyRent();
        this.administrationCost = salesItem.getAdministrationCost();
        this.materialCost = salesItem.getMaterialCost();
        this.personnelExpense = salesItem.getPersonnelExpense();
        this.utilityBill = salesItem.getUtilityBill();
        this.otherExpenses = salesItem.getOtherExpenses();
        this.additionalInformation = salesItem.getAdditionalInformation();
        this.itemNum = salesItem.getItemNum();
        this.latitude = salesItem.getLatitude();
        this.longitude = salesItem.getLongitude();
    }
}
