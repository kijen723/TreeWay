package com.b107.treeway.api.analysis.entity;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.response.RatingResponse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "analysis_resume")
@NoArgsConstructor
public class AnalysisResume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "analysis_resume_id", nullable = false)
    private Long id;

    @Column(name = "major_business")
    private String majorBusiness;

    @Column(name = "industry_detail_id", nullable = false)
    private String industryDetailName;

    @Column(name = "address")
    private String address;

    @Column(name = "monthly_sales")
    private Integer monthlySales;

    @Column(name = "monthly_earnings")
    private Integer monthlyEarnings;

    @Column(name = "host_name")
    private String hostName;

    @Column(name = "phone")
    private String phone;

    @Column(name = "tradename")
    private String tradeName;

    @Column(name = "floor_class")
    private String floorClass;

    @Column(name = "current_floor")
    private Integer currentFloor;

    @Column(name = "total_floors")
    private Integer totalFloors;

    @Column(name = "square_meter")
    private Integer squareMeter;

    @Column(name = "available_parking")
    private Integer availableParking;

    @Column(name = "total_parking")
    private Integer totalParking;

    @Column(name = "premium")
    private Integer premium;

    @Column(name = "deposit")
    private Integer deposit;

    @Column(name = "monthly_rent")
    private Integer monthlyRent;

    @Column(name = "administration_cost")
    private Integer administrationCost;

    @Column(name = "material_cost")
    private Integer materialCost;

    @Column(name = "personnel_expense")
    private Integer personnelExpense;

    @Column(name = "utility_bill")
    private Integer utilityBill;

    @Column(name = "other_expenses")
    private Integer otherExpenses;

    @Column(name = "additional_information", length = 3000)
    private String additionalInformation;

    @Column(name = "itemnum")
    private Integer itemNum;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "member_id")
    private Long memberId;

    public AnalysisResume(RatingResponse ratingResponse) {
        this.id = ratingResponse.getId();
        this.majorBusiness = ratingResponse.getMajorBusiness();
        this.industryDetailName = ratingResponse.getIndustryDetail();
        this.address = ratingResponse.getAddress();
        this.monthlySales = ratingResponse.getMonthlySales();
        this.monthlyEarnings = ratingResponse.getMonthlyEarnings();
        this.hostName = ratingResponse.getHostName();
        this.phone = ratingResponse.getPhone();
        this.tradeName = ratingResponse.getTradeName();
        this.floorClass = ratingResponse.getFloorClass();
        this.currentFloor = ratingResponse.getCurrentFloor();
        this.totalFloors = ratingResponse.getTotalFloors();
        this.squareMeter = ratingResponse.getSquareMeter();
        this.availableParking = ratingResponse.getAvailableParking();
        this.totalParking = ratingResponse.getTotalParking();
        this.premium = ratingResponse.getPremium();
        this.deposit = ratingResponse.getDeposit();
        this.monthlyRent = ratingResponse.getMonthlyRent();
        this.administrationCost = ratingResponse.getAdministrationCost();
        this.materialCost = ratingResponse.getMaterialCost();
        this.personnelExpense = ratingResponse.getPersonnelExpense();
        this.utilityBill = ratingResponse.getUtilityBill();
        this.otherExpenses = ratingResponse.getOtherExpenses();
        this.additionalInformation = ratingResponse.getAdditionalInformation();
        this.itemNum = ratingResponse.getItemNum();
        this.latitude = ratingResponse.getLatitude();
        this.longitude = ratingResponse.getLongitude();
    }
}
