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
    private Long id;

    @Column(name = "major_business")
    private String majorBusiness;

    @Column(name = "minor_business")
    private String minorBusiness;

    @Column(name = "address")
    private String address;

    @Column(name = "monthly_sales")
    private Long monthlySales;

    @Column(name = "monthly_earnings")
    private Long monthlyEarnings;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "tradename")
    private String tradename;

    @Column(name = "floor_class")
    private String floorClass;

    @Column(name = "current_floor")
    private Integer currentFloor;

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
