package com.b107.treeway.api.sales.entity;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales_item")
public class SalesItem {

    @Id
    @Column(name = "sales_item_id")
    private Long id;

    @Column(name = "major_business")
    private String majorBusiness;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "industry_detail_id", nullable = false)
    private IndustryDetail industryDetail;

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
}
