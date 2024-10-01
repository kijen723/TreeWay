package com.b107.treeway.api.temp.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "temp_data")
public class TempData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "major_business", length = 255)
    private String majorBusiness;

    @Column(name = "minor_business", length = 255)
    private String minorBusiness;

    @Column(name = "address", length = 255)
    private String address;

    @Column(name = "monthly_sales")
    private Long monthlySales;

    @Column(name = "monthly_earnings")
    private Long monthlyEarnings;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "phone", length = 255)
    private String phone;

    @Column(name = "tradename", length = 255)
    private String tradename;

    @Column(name = "floor_class", length = 50)
    private String floorClass;

    @Column(name = "current_floor")
    private Integer currentFloor;

    @Column(name = "total_floors")
    private Integer totalFloors;

    @Column(name = "square_meter")
    private Double squareMeter;

    @Column(name = "available_parking")
    private Integer availableParking;

    @Column(name = "total_parking")
    private Integer totalParking;

    @Column(name = "premium")
    private Long premium;

    @Column(name = "deposit")
    private Long deposit;

    @Column(name = "monthly_rent")
    private Long monthlyRent;

    @Column(name = "administration_cost")
    private Long administrationCost;

    @Column(name = "material_cost")
    private Long materialCost;

    @Column(name = "personnel_expense")
    private Long personnelExpense;

    @Column(name = "utility_bill")
    private Long utilityBill;

    @Column(name = "other_expenses")
    private Long otherExpenses;

    @Column(name = "additional_information", columnDefinition = "TEXT")
    private String additionalInformation;

    @Column(name = "itemnum")
    private Long itemnum;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;
}
