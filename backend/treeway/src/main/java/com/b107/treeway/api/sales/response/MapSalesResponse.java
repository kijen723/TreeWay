package com.b107.treeway.api.sales.response;

import com.b107.treeway.api.sales.entity.SalesItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MapSalesResponse {
    private Long salesId;
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

    public MapSalesResponse(SalesItem salesItem) {
        this.salesId = salesItem.getId();
        this.majorBusiness = salesItem.getMajorBusiness();
        this.industryDetailId = salesItem.getIndustryDetail().getId();
        this.industryDetailName = salesItem.getIndustryDetail().getIndustryDetailName();
        this.address = salesItem.getAddress();
        this.monthlySales = salesItem.getMonthlySales();
        this.monthlyEarnings = salesItem.getMonthlyEarnings();
        this.phone = salesItem.getPhone();
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
